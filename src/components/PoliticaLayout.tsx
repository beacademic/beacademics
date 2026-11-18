import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { LogoContainer } from './ui/LogoContainer';
import { openCookiePreferences } from '../lib/consent';

/** Estructura común de las páginas de políticas (privacidad y cookies). */
export default function PoliticaLayout({
    titulo,
    actualizacion,
    children,
}: {
    titulo: string;
    actualizacion: string;
    children: ReactNode;
}) {
    return (
        <div className="bg-[#F5F5F7] min-h-screen text-[#1D1D1F] font-sans selection:bg-[#007AFF] selection:text-white flex flex-col">
            <header className="sticky top-0 z-50 bg-[#F5F5F7]/80 backdrop-blur-[20px] border-b border-black/5">
                <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between text-sm font-medium">
                    <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" aria-label="BE Academic, ir al inicio">
                        <LogoContainer className="w-9 h-9">
                            <img src="/Logo-BE-Academic.png" width={400} height={344} alt="" className="h-4 w-auto object-contain" />
                        </LogoContainer>
                        <span className="text-xs font-semibold text-[#515154]">BE Academic</span>
                    </Link>
                    <Link to="/" className="text-[#515154] hover:text-[#1D1D1F] transition-colors">
                        Volver al inicio
                    </Link>
                </nav>
            </header>

            <main id="contenido" tabIndex={-1} className="outline-none flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 font-display">{titulo}</h1>
                <p className="text-sm text-[#515154] mb-8">Última actualización: {actualizacion}</p>
                <article className="rounded-3xl bg-white border border-black/5 p-6 sm:p-10 text-[#515154] leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#1D1D1F] [&_h2]:mt-8 [&_h2]:mb-3 [&_h2:first-child]:mt-0 [&_h3]:font-semibold [&_h3]:text-[#1D1D1F] [&_h3]:mt-5 [&_h3]:mb-2 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3 [&_ul]:space-y-1.5 [&_a]:text-[#0066CC] [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-[#1D1D1F]">
                    {children}
                </article>
            </main>

            <footer className="bg-[#1C1C1E] text-[#A1A1A6] py-12 text-sm border-t border-white/10">
                <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <div>
                        <p className="text-white font-semibold mb-1">BE Academic. Ecosistema Tecnológico para la Educación en Chile.</p>
                        <p>&copy; {new Date().getFullYear()} Sociedad de Formación BE Academic Limitada · RUT 77.650.439-4. Todos los derechos reservados.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <Link to="/privacidad/" className="hover:text-white transition-colors">Política de privacidad</Link>
                        <Link to="/cookies/" className="hover:text-white transition-colors">Política de cookies</Link>
                        <button type="button" onClick={openCookiePreferences} className="hover:text-white transition-colors cursor-pointer">
                            Preferencias de cookies
                        </button>
                        <Link to="/legal/" className="hover:text-white transition-colors">Información Legal</Link>
                        <Link to="/contacto/" className="hover:text-white transition-colors">Contacto</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
