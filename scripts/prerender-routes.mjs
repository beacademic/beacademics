#!/usr/bin/env node
/**
 * Prerender de rutas para GitHub Pages (que no tiene reescrituras).
 *
 * Se ejecuta después de `vite build`: toma dist/index.html y genera dist/<ruta>/index.html
 * para cada ruta pública de src/seo/routes.json, con su propio <title>, meta description,
 * canonical, Open Graph y Twitter Card. También regenera el bloque SEO de dist/index.html
 * (inicio) y escribe dist/404.html (rutas desconocidas, con noindex).
 *
 * El contenido lo sigue dibujando React; esto solo entrega metadatos correctos a rastreadores
 * y vistas previas de enlaces que no ejecutan JavaScript. Sin dependencias externas.
 *
 * La fuente de los metadatos es src/seo/routes.json, la misma que usa el componente
 * src/components/Seo.tsx (así HTML estático y <Helmet> coinciden).
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const seo = JSON.parse(await readFile(path.join(root, 'src/seo/routes.json'), 'utf8'));
const { site, routes, notFound } = seo;

const MARKERS = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;

function fail(message) {
  console.error(`prerender-routes: ${message}`);
  process.exit(1);
}

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

/** Bloque de etiquetas SEO de una ruta (mismas etiquetas que renderiza src/components/Seo.tsx). */
function seoBlock(route, meta) {
  const url = `${site.url}${route}`;
  const ogTitle = meta.ogTitle ?? meta.title;
  const ogDescription = meta.ogDescription ?? meta.description;
  const tag = (name, attrs) =>
    `    <${name} data-static-seo ${Object.entries(attrs)
      .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
      .join(' ')} />`;
  return [
    '<!--seo:start-->',
    `    <title data-static-seo>${escapeHtml(meta.title)}</title>`,
    tag('meta', { name: 'description', content: meta.description }),
    tag('link', { rel: 'canonical', href: url }),
    tag('meta', { property: 'og:type', content: 'website' }),
    tag('meta', { property: 'og:site_name', content: site.name }),
    tag('meta', { property: 'og:locale', content: meta.locale }),
    tag('meta', { property: 'og:url', content: url }),
    tag('meta', { property: 'og:title', content: ogTitle }),
    tag('meta', { property: 'og:description', content: ogDescription }),
    tag('meta', { property: 'og:image', content: site.image }),
    tag('meta', { property: 'og:image:width', content: site.imageWidth }),
    tag('meta', { property: 'og:image:height', content: site.imageHeight }),
    tag('meta', { property: 'og:image:alt', content: site.imageAlt }),
    tag('meta', { name: 'twitter:card', content: 'summary_large_image' }),
    tag('meta', { name: 'twitter:title', content: ogTitle }),
    tag('meta', { name: 'twitter:description', content: ogDescription }),
    tag('meta', { name: 'twitter:image', content: site.image }),
    '    <!--seo:end-->',
  ].join('\n');
}

/** Bloque de la página 404: sin canonical y con noindex. */
function notFoundBlock() {
  const tag = (name, attrs) =>
    `    <${name} data-static-seo ${Object.entries(attrs)
      .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
      .join(' ')} />`;
  return [
    '<!--seo:start-->',
    `    <title data-static-seo>${escapeHtml(notFound.title)}</title>`,
    tag('meta', { name: 'description', content: notFound.description }),
    tag('meta', { name: 'robots', content: 'noindex, follow' }),
    '    <!--seo:end-->',
  ].join('\n');
}

function withLang(html, lang) {
  if (!/<html\b[^>]*\blang="[^"]*"/.test(html)) fail('dist/index.html no tiene <html lang="...">');
  return html.replace(/(<html\b[^>]*\blang=")[^"]*(")/, `$1${escapeHtml(lang)}$2`);
}

const template = await readFile(path.join(dist, 'index.html'), 'utf8');

if (!MARKERS.test(template)) {
  fail('dist/index.html no contiene los marcadores <!--seo:start--> / <!--seo:end-->');
}
// Con base "/" todos los assets deben ser absolutos; con "./" las rutas anidadas se romperían.
if (/(?:src|href)="\.\/?assets\//.test(template)) {
  fail('dist/index.html usa rutas relativas ("./assets/"): vite.config.ts debe tener base: "/"');
}
if (!/(?:src|href)="\/assets\//.test(template)) {
  fail('dist/index.html no referencia "/assets/...": revise el build de Vite');
}

const written = [];
for (const [route, meta] of Object.entries(routes)) {
  if (!route.startsWith('/') || !route.endsWith('/')) {
    fail(`la ruta "${route}" de routes.json debe empezar y terminar con "/"`);
  }
  const html = withLang(template.replace(MARKERS, () => seoBlock(route, meta)), meta.lang);
  const target = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html');
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, html, 'utf8');
  written.push(path.relative(dist, target));
}

const notFoundHtml = withLang(template.replace(MARKERS, () => notFoundBlock()), 'es');
await writeFile(path.join(dist, '404.html'), notFoundHtml, 'utf8');
written.push('404.html');

// Coherencia con el sitemap: debe listar exactamente las rutas de routes.json.
const sitemap = await readFile(path.join(root, 'public/sitemap.xml'), 'utf8');
const listed = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expected = Object.keys(routes).map((route) => `${site.url}${route}`);
const missing = expected.filter((url) => !listed.includes(url));
const unknown = listed.filter((url) => !expected.includes(url));
if (missing.length || unknown.length) {
  fail(
    `public/sitemap.xml no coincide con src/seo/routes.json` +
      (missing.length ? `\n  faltan: ${missing.join(', ')}` : '') +
      (unknown.length ? `\n  sobran: ${unknown.join(', ')}` : ''),
  );
}

console.log(`prerender-routes: ${written.length} archivos escritos en dist/`);
for (const file of written) console.log(`  ${file}`);
