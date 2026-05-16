import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "BE Academic",
        "url": "https://beacademic.cl",
        "logo": "https://beacademic.cl/Logo-BE-Academic.png",
        "description": "Ecosistema Tecnológico para la Educación en Chile. Soluciones innovadoras para la gestión escolar, cumplimiento legal y calidad educativa.",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "CL"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+56-9-6437-5050",
            "contactType": "customer service",
            "email": "beacademic.ltda@gmail.com"
        }
    };

    return (
        <div className="bg-apple-light min-h-screen text-apple-gray font-sans selection:bg-corp-dark selection:text-white">
            <Helmet>
                <title>BE Academic | Ecosistema Tecnológico para la Educación en Chile</title>
                <meta name="description" content="BE Academic ofrece soluciones tecnológicas integrales para colegios en Chile: SyncroEdu para gestión docente, SyncroTime para horarios inteligentes y Nexus para calidad educativa." />
                <meta name="keywords" content="gestión escolar chile, software para colegios, syncroedu, syncrotime, nexus, cumplimiento legal mineduc, calidad educativa, estándares indicativos de desempeño" />
                <link rel="canonical" href="https://beacademic.cl/" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://beacademic.cl/" />
                <meta property="og:title" content="BE Academic | Ecosistema Tecnológico para la Educación" />
                <meta property="og:description" content="Herramientas de nivel mundial que simplifican procesos, eliminan riesgos legales y elevan la excelencia de las instituciones educativas en Chile." />
                <meta property="og:image" content="https://beacademic.cl/Logo-BE-Academic.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://beacademic.cl/" />
                <meta property="twitter:title" content="BE Academic | Ecosistema Tecnológico para la Educación" />
                <meta property="twitter:description" content="Herramientas de nivel mundial que simplifican procesos, eliminan riesgos legales y elevan la excelencia de las instituciones educativas en Chile." />
                <meta property="twitter:image" content="https://beacademic.cl/Logo-BE-Academic.png" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
            {/* Header / Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-apple-light/80 backdrop-blur-md border-b border-gray-200">
                <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center">
                            <img src="/Logo-BE-Academic.png" alt="BE Academic" className="h-8 w-auto" />
                        </Link>
                        <div className="hidden md:flex gap-6">
                            <button onClick={() => document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-corp-dark transition-colors">Software</button>
                            <button onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-corp-dark transition-colors">Servicios</button>
                            <Link to="/contacto" className="text-gray-600 hover:text-corp-dark transition-colors">Contacto</Link>
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

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight mb-6"
                >
                    Potenciamos el futuro de <br className="hidden md:block" /> tu gestión escolar.
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="text-xl md:text-2xl text-gray-500 max-w-3xl mb-10 leading-relaxed font-medium"
                >
                    Herramientas de nivel mundial que simplifican procesos, eliminan riesgos legales y elevan la excelencia de las instituciones educativas en Chile.
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <button onClick={() => document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' })} className="bg-corp-dark text-white px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition-transform">
                        Descubre el Ecosistema
                    </button>
                    <Link to="/contacto" className="text-corp-dark font-medium px-8 py-3 flex items-center gap-2 hover:underline">
                        Hablar con un asesor &rsaquo;
                    </Link>
                </motion.div>
            </section>

            {/* Products (Bento Grid Style) */}
            <section id="soluciones" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Nuestro Ecosistema</h2>
                        <p className="text-xl text-gray-500 font-medium">Diseñado para la excelencia escolar.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                        {/* SyncroEdu Card */}
                        <div className="bg-apple-light rounded-3xl p-10 md:p-10 flex flex-col h-full hover:shadow-2xl transition-shadow duration-500">
                            <div className="mb-8">
                                <img src="/Logo-SyncroEdu.png" alt="Logo SyncroEdu" className="h-12 w-auto mb-6 object-contain" />
                                <h3 className="text-3xl font-bold text-corp-green mb-2 tracking-tight">SyncroEdu</h3>
                                <h4 className="text-xl font-medium text-gray-900 mb-4">Gestión Docente y Cumplimiento Legal</h4>
                                <p className="text-gray-500 text-lg leading-relaxed">
                                    El cerebro digital definitivo. Genera e inyecta horarios inteligentes, gestiona reemplazos y estadísticas de ausencias en tiempo real. Blinda tu colegio con auditoría legal global y genera informes PDF detallados de cargas horarias y cumplimiento para una gestión administrativa impecable ante el MINEDUC.
                                </p>
                            </div>
                            <div className="mt-auto pt-8">
                                <Link to="/syncroedu" className="inline-flex items-center gap-2 text-corp-dark font-semibold hover:bg-white px-6 py-3 rounded-full transition-all bg-white/50">
                                    Descubrir SyncroEdu <span className="text-lg leading-none">&rsaquo;</span>
                                </Link>
                            </div>
                        </div>

                        {/* Nexus Card */}
                        <div className="bg-apple-light rounded-3xl p-10 md:p-10 flex flex-col h-full hover:shadow-2xl transition-shadow duration-500">
                            <div className="mb-8">
                                <img src="/Logo-Nexus.png" alt="Logo Nexus" className="h-12 w-auto mb-6 object-contain" />
                                <h3 className="text-3xl font-bold text-corp-blue mb-2 tracking-tight">Nexus</h3>
                                <h4 className="text-xl font-medium text-gray-900 mb-4">Plataforma Integral de Calidad</h4>
                                <p className="text-gray-500 text-lg leading-relaxed">
                                    Eleva tus Estándares Indicativos de Desempeño. Centraliza la evaluación del liderazgo, la gestión pedagógica, la convivencia y los recursos, logrando mejoras continuas demostrables mes a mes.
                                </p>
                            </div>
                            <div className="mt-auto pt-8">
                                <Link to="/nexus" className="inline-flex items-center gap-2 text-corp-dark font-semibold hover:bg-white px-6 py-3 rounded-full transition-all bg-white/50">
                                    Descubrir Nexus <span className="text-lg leading-none">&rsaquo;</span>
                                </Link>
                            </div>
                        </div>

                        {/* SyncroTime Card */}
                        <div className="bg-apple-light rounded-3xl p-10 md:p-10 flex flex-col h-full hover:shadow-2xl transition-shadow duration-500 md:col-span-2 lg:col-span-1">
                            <div className="mb-8">
                                <img src="/Logo-SyncroTime.png" alt="Logo SyncroTime" className="h-12 w-auto mb-6 object-contain" />
                                <h3 className="text-3xl font-bold text-corp-cyan mb-2 tracking-tight">SyncroTime</h3>
                                <h4 className="text-xl font-medium text-gray-900 mb-4">Generador de Horarios Inteligente</h4>
                                <p className="text-gray-500 text-lg leading-relaxed">
                                    Armar horarios nunca fue tan fácil. Nuestro potente motor genera combinaciones óptimas adaptándose a múltiples restricciones en tiempo récord. Exporta resultados claros en PDF y Excel, listos para implementar.
                                </p>
                            </div>
                            <div className="mt-auto pt-8">
                                <Link to="/syncrotime" className="inline-flex items-center gap-2 text-corp-dark font-semibold hover:bg-white px-6 py-3 rounded-full transition-all bg-white/50">
                                    Descubrir SyncroTime <span className="text-lg leading-none">&rsaquo;</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="servicios" className="py-24 px-6 bg-apple-light">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center text-gray-900 mb-16">Vamos mucho más allá del software.</h2>
                    
                    <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-12">
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-lg">
                            <div className="w-12 h-12 bg-corp-dark text-white rounded-2xl flex items-center justify-center text-2xl mb-6">
                                🧠
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">Capacitación Docente y Directiva</h4>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                No te dejamos solo con la herramienta. Entrenamos a tu equipo presencialmente y de forma asíncrona para asegurar la máxima adopción tecnológica y una transición completamente libre de fricciones.
                            </p>
                        </div>
                        
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-lg">
                            <div className="w-12 h-12 bg-corp-dark text-white rounded-2xl flex items-center justify-center text-2xl mb-6">
                                📈
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">Consultoría Estratégica Escolar</h4>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Trabajamos hombro a hombro con sostenedores para optimizar procesos internos, maximizar el rendimiento del PME y garantizar que tu institución se alinee a la perfección con los estándares nacionales.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/contacto" className="bg-corp-dark text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-black transition-all inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300">
                            Hablemos sobre tu institución &rsaquo;
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact / Footer */}
            <section id="contacto" className="py-24 bg-gray-900 text-white text-center px-6">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight mb-6">¿Hablamos sobre el futuro de tu colegio?</h2>
                    <p className="text-xl text-gray-400 mb-10">Agenda una sesión estratégica hoy mismo con uno de nuestros expertos educacionales. Descubre en vivo cómo podemos blindar y potenciar tu institución.</p>
                    <Link to="/contacto" className="bg-corp-green text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-500 transition-colors inline-block shadow-xl hover:scale-105 transform duration-300">
                        Agenda una demostración gratuita
                    </Link>
                </div>
            </section>

            <footer className="bg-gray-900 text-gray-500 py-10 text-center text-sm border-t border-gray-800">
                <p className="mb-2">BE Academic. Ecosistema Tecnológico para la Educación en Chile.</p>
                <p>&copy; 2026 Be Academic. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
