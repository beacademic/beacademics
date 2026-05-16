/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Portal from './pages/Portal';
import SyncroEdu from './pages/SyncroEdu';
import Contacto from './pages/Contacto';
import SyncroTime from './pages/SyncroTime';
import Nexus from './pages/Nexus';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acceso" element={<Portal />} />
          <Route path="/syncroedu" element={<SyncroEdu />} />
          <Route path="/nexus" element={<Nexus />} />
          <Route path="/syncrotime" element={<SyncroTime />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
