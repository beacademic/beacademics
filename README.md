# beacademics.com

Sitio público de Sociedad de Formación BE Academic Limitada. Presenta **SyncroEdu** (validación de la normativa docente chilena y horarios para colegios), **SyncroTime** (motor de optimización de horarios escolares) y **Nexus** (próximamente).

**Stack:** React 19, Vite 6, Tailwind CSS 4, react-router-dom 7 (`BrowserRouter`) y react-helmet-async.

> **Atención:** cada push a la rama `main` publica automáticamente en https://beacademics.com. Revise los cambios (`npm run build`) antes de subirlos.

## Cómo ejecutarlo

Requiere Node 20 o superior (el despliegue usa Node 20).

```bash
npm install
npm run dev       # servidor local en http://localhost:3000
npm run build     # genera dist/ (vite build + prerender de rutas)
npm run preview   # sirve dist/ localmente
npm run lint      # comprobación de tipos (tsc --noEmit)
```

No se necesitan variables de entorno.

## Estructura

```
src/
  App.tsx                  rutas (BrowserRouter) y página 404
  pages/                   una página por ruta (Home, SyncroEdu, SyncroTime, Nexus, Contacto, Portal, Legal, ...)
  components/              Seo, HubSpotForm, ScrollManager y componentes ui/
  config/contact.ts        número de ventas, correos, horario y whatsappLink()
  seo/routes.json          título, descripción y metadatos de cada ruta
public/                    imágenes (WebP), og-image.jpg, sitemap.xml, robots.txt, CNAME
scripts/prerender-routes.mjs   genera dist/<ruta>/index.html para cada ruta
.github/workflows/deploy.yml   despliegue a GitHub Pages
```

## Rutas y prerender

El sitio usa URLs limpias con barra final (`/syncroedu/`, `/syncrotime/`, `/contacto/`, ...). GitHub Pages no permite reescrituras, por eso `npm run build` ejecuta `vite build` y después `scripts/prerender-routes.mjs`, que copia `dist/index.html` a `dist/<ruta>/index.html` con el título, la descripción, la URL canónica y las etiquetas Open Graph de cada ruta, y escribe `dist/404.html`. Los metadatos salen de `src/seo/routes.json`, la misma fuente que usa el componente `Seo`, de modo que el HTML estático y el que renderiza React coinciden. El contenido de la página lo sigue dibujando React.

Los enlaces antiguos con `#/ruta` (por ejemplo `https://beacademics.com/#/syncroedu`) se redirigen a `/ruta` con un script mínimo al inicio de `index.html`, antes de que cargue React. Los enlaces a secciones (`#caso-piloto`) no se tocan.

Para agregar una ruta nueva:

1. Agregue el `<Route>` en `src/App.tsx`.
2. Agregue su entrada (con barra final) en `src/seo/routes.json` y use `<Seo path="/ruta/" />` en la página.
3. Agregue su `<url>` en `public/sitemap.xml`. El prerender falla si el sitemap y `routes.json` no coinciden.

## Despliegue

Un push a `main` ejecuta `.github/workflows/deploy.yml`: `npm ci`, `npm run build` y publicación de `dist/` en GitHub Pages con el dominio de `public/CNAME`. `npm ci` exige que `package.json` y `package-lock.json` estén sincronizados: si cambia dependencias, suba ambos archivos.

## Dónde cambiar datos

- **WhatsApp de ventas, correo y horario:** `src/config/contact.ts` (una sola constante para todo el sitio; `whatsappLink()` arma el enlace con texto prellenado por producto).
- **Formularios de HubSpot:** portal `50405101`, región `na1`, en `src/components/HubSpotForm.tsx`. Demo de SyncroEdu: `21671d47-e4c2-4761-b72f-8d07650b335f`. Contacto: `9baeca2e-479f-47c0-b8c8-66993a9f1794`. Los campos y estilos de cada formulario se editan en HubSpot, no en este código.
- **Textos legales:** `src/pages/CondicionesSyncroEdu.tsx`, `src/pages/PrivacidadSyncroEdu.tsx` y `src/pages/Legal.tsx`.
- **Imágenes:** en `public/`, en WebP (máx. 1600 px de ancho); indique siempre `width`, `height` y un `alt` descriptivo.
