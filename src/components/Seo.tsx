import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import seoData from '../seo/routes.json';

/**
 * Metadatos por ruta. La fuente es src/seo/routes.json, el mismo archivo que usa
 * scripts/prerender-routes.mjs para generar el HTML estático de cada ruta, de modo que
 * lo que ve un rastreador sin JavaScript y lo que pone React coincidan siempre.
 */
export interface RouteMeta {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
    keywords?: string;
    lang: string;
    locale: string;
}

const routes = seoData.routes as Record<string, RouteMeta>;
export const SITE = seoData.site;

export function getRouteMeta(path: string): RouteMeta {
    const meta = routes[path];
    if (!meta) {
        throw new Error(`Falta la ruta "${path}" en src/seo/routes.json`);
    }
    return meta;
}

/** URL canónica absoluta (con barra final, como responde GitHub Pages). */
export function canonicalUrl(path: string): string {
    return `${SITE.url}${path}`;
}

interface SeoProps {
    /** Ruta con barra final, tal como aparece en src/seo/routes.json (por ejemplo "/syncroedu/"). */
    path: string;
    title?: string;
    description?: string;
    ogTitle?: string;
    ogDescription?: string;
    keywords?: string;
    lang?: string;
    locale?: string;
    /** Sustituye a la URL canónica (por ejemplo, variantes de idioma con ?lang=). */
    canonical?: string;
    /** Sustituye a og:url; por defecto, la URL canónica. */
    ogUrl?: string;
    noindex?: boolean;
    /** Etiquetas adicionales (JSON-LD, hreflang). Deben ser elementos meta, link o script. */
    children?: ReactNode;
}

export default function Seo({
    path,
    title,
    description,
    ogTitle,
    ogDescription,
    keywords,
    lang,
    locale,
    canonical,
    ogUrl,
    noindex = false,
    children,
}: SeoProps) {
    const meta = getRouteMeta(path);
    const pageTitle = title ?? meta.title;
    const pageDescription = description ?? meta.description;
    const socialTitle = ogTitle ?? (title ? undefined : meta.ogTitle) ?? pageTitle;
    const socialDescription =
        ogDescription ?? (description ? undefined : meta.ogDescription) ?? pageDescription;
    const pageKeywords = keywords ?? meta.keywords;
    const canonicalHref = canonical ?? canonicalUrl(path);

    return (
        <Helmet>
            <html lang={lang ?? meta.lang} />
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            {pageKeywords && <meta name="keywords" content={pageKeywords} />}
            {noindex && <meta name="robots" content="noindex, follow" />}
            <link rel="canonical" href={canonicalHref} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={SITE.name} />
            <meta property="og:locale" content={locale ?? meta.locale} />
            <meta property="og:url" content={ogUrl ?? canonicalHref} />
            <meta property="og:title" content={socialTitle} />
            <meta property="og:description" content={socialDescription} />
            <meta property="og:image" content={SITE.image} />
            <meta property="og:image:width" content={String(SITE.imageWidth)} />
            <meta property="og:image:height" content={String(SITE.imageHeight)} />
            <meta property="og:image:alt" content={SITE.imageAlt} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={socialTitle} />
            <meta name="twitter:description" content={socialDescription} />
            <meta name="twitter:image" content={SITE.image} />

            {children}
        </Helmet>
    );
}
