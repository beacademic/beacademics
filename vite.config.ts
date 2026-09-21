import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  // El sitio se sirve desde la raíz del dominio (public/CNAME) y tiene rutas anidadas
  // (/syncroedu/), por eso los assets deben ser absolutos ("/assets/...").
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    // DISABLE_HMR=true desactiva HMR y el seguimiento de archivos (entornos de edición automática).
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
