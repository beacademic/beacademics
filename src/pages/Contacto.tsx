import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Contacto() {
    const formCreated = useRef(false);

    useEffect(() => {
        if (formCreated.current) return;
        formCreated.current = true;

        if (!(window as any).hbspt_script_loaded) {
            const script = document.createElement('script');
            script.src = 'https://js.hsforms.net/forms/embed/50405101.js';
            script.defer = true;
            document.body.appendChild(script);
            (window as any).hbspt_script_loaded = true;
        }

        return () => {
            // cleanup is handled to some extent by React, but the script stays loaded
        };
    }, []);

    return (
        <div className="bg-apple-light min-h-screen text-apple-gray font-sans selection:bg-corp-dark selection:text-white">
            {/* Header / Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-apple-light/80 backdrop-blur-md border-b border-gray-200">
                <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center">
                            <img src="/Logo-BE-Academic.png" alt="BE Academic" className="h-8 w-auto" />
                        </Link>
                        <div className="hidden md:flex gap-6">
                            <Link to="/" state={{ scrollTo: 'soluciones' }} className="text-gray-600 hover:text-corp-dark transition-colors">Software</Link>
                            <Link to="/" state={{ scrollTo: 'servicios' }} className="text-gray-600 hover:text-corp-dark transition-colors">Servicios</Link>
                            <Link to="/contacto" className="text-corp-dark transition-colors border-b-2 border-corp-dark pb-0.5">Contacto</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link 
                            to="/acceso" 
                            className="bg-corp-dark text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            Portal Clientes
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Content Section */}
            <section className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                        Contacto
                    </h1>
                    <p className="text-xl text-gray-500 font-medium">
                        Déjanos un mensaje y te contactaremos a la brevedad.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Information */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="md:col-span-4 lg:col-span-4 bg-corp-dark text-white p-6 md:p-8 rounded-3xl shadow-lg border border-gray-800"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Nuestros datos</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                            Transforma la gestión de tu colegio. Escríbenos y un asesor te contactará pronto.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                                    <span className="text-xl md:text-2xl">✉️</span>
                                </div>
                                <div>
                                    <h3 className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Correo</h3>
                                    <p className="text-lg md:text-xl font-medium">
                                        <a href="mailto:beacademic.ltda@gmail.com" className="hover:text-corp-green transition-colors break-all">
                                            beacademic.ltda@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                                    <span className="text-xl md:text-2xl">📞</span>
                                </div>
                                <div>
                                    <h3 className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Teléfono</h3>
                                    <p className="text-lg md:text-xl font-medium">
                                        <a href="tel:+56964375050" className="hover:text-corp-green transition-colors">
                                            +56 9 6437 5050
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* HubSpot Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="md:col-span-8 lg:col-span-8 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 min-h-[400px]"
                    >
                        <div id="hubspotFormContainer" className="[&_.hs-form]:!font-sans min-h-[500px]">
                            <div className="hs-form-frame" data-region="na1" data-form-id="9baeca2e-479f-47c0-b8c8-66993a9f1794" data-portal-id="50405101"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <footer className="bg-gray-900 text-gray-500 py-10 text-center text-sm border-t border-gray-800 mt-auto">
                <p className="mb-2">BE Academic. Ecosistema Tecnológico para la Educación en Chile.</p>
                <p>&copy; {new Date().getFullYear()} Be Academic. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
