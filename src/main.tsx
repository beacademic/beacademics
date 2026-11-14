import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// El HTML trae etiquetas SEO estáticas (title, description, canonical, Open Graph) para
// rastreadores sin JavaScript. Se retiran antes de montar React: sus <Helmet> ponen las mismas
// en el <head> y así no quedan duplicadas ni desactualizadas al navegar entre rutas.
document.head.querySelectorAll('[data-static-seo]').forEach((element) => element.remove());

// Las rutas públicas llegan prerenderizadas (scripts/prerender-routes.mjs): se hidratan.
// La página 404 llega vacía y se dibuja en el navegador.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
