/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Portal from './pages/Portal';
import SyncroEdu from './pages/SyncroEdu';
import Contacto from './pages/Contacto';
import SyncroTime from './pages/SyncroTime';
import Nexus from './pages/Nexus';
import Legal from './pages/Legal';
import PrivacidadSyncroEdu from './pages/PrivacidadSyncroEdu';
import CondicionesSyncroEdu from './pages/CondicionesSyncroEdu';
import NotFound from './pages/NotFound';
import ScrollManager from './components/ScrollManager';

export default function App() {
    useEffect(() => {
        // El HTML de cada ruta trae sus etiquetas SEO estáticas (generadas en el build por
        // scripts/prerender-routes.mjs) para rastreadores sin JavaScript. Una vez montada la
        // página, sus <Helmet> ponen las mismas etiquetas: se retiran las estáticas para no
        // dejar duplicados al navegar entre rutas.
        document.head.querySelectorAll('[data-static-seo]').forEach((element) => element.remove());
    }, []);

    return (
        <HelmetProvider>
            <Router>
                <ScrollManager />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/syncroedu" element={<SyncroEdu />} />
                    <Route path="/syncrotime" element={<SyncroTime />} />
                    <Route path="/nexus" element={<Nexus />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/acceso" element={<Portal />} />
                    <Route path="/legal" element={<Legal />} />
                    <Route path="/privacidad-syncroedu" element={<PrivacidadSyncroEdu />} />
                    <Route path="/condiciones-syncroedu" element={<CondicionesSyncroEdu />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </HelmetProvider>
    );
}
