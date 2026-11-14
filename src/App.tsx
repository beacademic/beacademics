import { Fragment } from 'react';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'motion/react';
import Home from './pages/Home';
import Portal from './pages/Portal';
import SyncroEdu from './pages/SyncroEdu';
import Contacto from './pages/Contacto';
import SyncroTime from './pages/SyncroTime';
import Skolvik from './pages/Skolvik';
import Legal from './pages/Legal';
import PrivacidadSyncroEdu from './pages/PrivacidadSyncroEdu';
import CondicionesSyncroEdu from './pages/CondicionesSyncroEdu';
import CalculadoraHorasDocentes from './pages/CalculadoraHorasDocentes';
import SyncroEduModulo from './pages/SyncroEduModulo';
import { MODULOS } from './data/syncroeduModulos';
import NotFound from './pages/NotFound';
import ScrollManager from './components/ScrollManager';
import SkipLink from './components/SkipLink';

/** Rutas del sitio. El router lo pone main.tsx (BrowserRouter) o entry-server.tsx (StaticRouter). */
export default function App() {
    return (
        <HelmetProvider>
            <MotionConfig reducedMotion="user">
                <SkipLink />
                <ScrollManager />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/syncroedu" element={<SyncroEdu />} />
                    {MODULOS.map((modulo) => (
                        <Fragment key={modulo.slug}>
                            <Route path={`/syncroedu/${modulo.slug}`} element={<SyncroEduModulo modulo={modulo} />} />
                        </Fragment>
                    ))}
                    <Route path="/syncrotime" element={<SyncroTime />} />
                    <Route path="/skolvik" element={<Skolvik />} />
                    {/* Skolvik cambió de nombre a Skolvik. */}
                    <Route path="/nexus" element={<Navigate to="/skolvik/" replace />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/acceso" element={<Portal />} />
                    <Route path="/legal" element={<Legal />} />
                    <Route path="/privacidad-syncroedu" element={<PrivacidadSyncroEdu />} />
                    <Route path="/condiciones-syncroedu" element={<CondicionesSyncroEdu />} />
                    <Route path="/recursos/calculadora-horas-docentes" element={<CalculadoraHorasDocentes />} />
                    {/* URL antigua con tráfico en Google; el build también genera una página de redirección estática. */}
                    <Route path="/material-gratuito" element={<Navigate to="/recursos/calculadora-horas-docentes/" replace />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </MotionConfig>
        </HelmetProvider>
    );
}
