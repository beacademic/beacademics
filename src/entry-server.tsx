import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

/**
 * Render de una ruta a HTML en el build (lo usa scripts/prerender-routes.mjs).
 * Así el contenido, los encabezados y el JSON-LD quedan en el HTML que reciben
 * Bing, los buscadores de IA y las vistas previas de enlaces, que no ejecutan JavaScript.
 */
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
