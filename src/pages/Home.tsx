import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

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

    return (
        <div className="bg-apple-light min-h-screen text-apple-gray font-sans selection:bg-corp-dark selection:text-white">
            {/* Header / Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-apple-light/80 backdrop-blur-md border-b border-gray-200">
                <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="text-corp-dark font-bold text-lg tracking-tight">
                            BE Academic
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
                    Transformamos la <br className="hidden md:block" /> Gestión Escolar.
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="text-xl md:text-2xl text-gray-500 max-w-3xl mb-10 leading-relaxed font-medium"
                >
                    La tecnología y el conocimiento se unen para elevar el estándar de las instituciones educativas en Chile.
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <button onClick={() => document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' })} className="bg-corp-dark text-white px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition-transform">
                        Conoce el software
                    </button>
                    <Link to="/contacto" className="text-corp-dark font-medium px-8 py-3 flex items-center gap-2 hover:underline">
                        Contactar ventas &rsaquo;
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
                                <h3 className="text-3xl font-bold text-corp-green mb-2 tracking-tight">SyncroEdu</h3>
                                <h4 className="text-xl font-medium text-gray-900 mb-4">Gestión Docente y Legal</h4>
                                <p className="text-gray-500 text-lg leading-relaxed">
                                    El cerebro digital que asegura la cuadratura perfecta entre contratos, horas de aula y cumplimiento de la normativa del MINEDUC.
                                </p>
                            </div>
                            <div className="mt-auto pt-8">
                                <Link to="/syncroedu" className="inline-flex items-center gap-2 text-corp-dark font-semibold hover:bg-white px-6 py-3 rounded-full transition-all bg-white/50">
                                    Explorar SyncroEdu <span className="text-lg leading-none">&rsaquo;</span>
                                </Link>
                            </div>
                        </div>

                        {/* Nexus Card */}
                        <div className="bg-apple-light rounded-3xl p-10 md:p-10 flex flex-col h-full hover:shadow-2xl transition-shadow duration-500">
                            <div className="mb-8">
                                <h3 className="text-3xl font-bold text-corp-blue mb-2 tracking-tight">Nexus</h3>
                                <h4 className="text-xl font-medium text-gray-900 mb-4">Plataforma Integral de Calidad</h4>
                                <p className="text-gray-500 text-lg leading-relaxed">
                                    Cubre todas las dimensiones de los Estándares Indicativos de Desempeño: Liderazgo, Gestión Pedagógica, Convivencia y Recursos.
                                </p>
                            </div>
                            <div className="mt-auto pt-8">
                                <Link to="/nexus" className="inline-flex items-center gap-2 text-corp-dark font-semibold hover:bg-white px-6 py-3 rounded-full transition-all bg-white/50">
                                    Explorar Nexus <span className="text-lg leading-none">&rsaquo;</span>
                                </Link>
                            </div>
                        </div>

                        {/* SyncroTime Card */}
                        <div className="bg-apple-light rounded-3xl p-10 md:p-10 flex flex-col h-full hover:shadow-2xl transition-shadow duration-500 md:col-span-2 lg:col-span-1">
                            <div className="mb-8">
                                <h3 className="text-3xl font-bold text-corp-cyan mb-2 tracking-tight">SyncroTime</h3>
                                <h4 className="text-xl font-medium text-gray-900 mb-4">Generación de Horarios</h4>
                                <p className="text-gray-500 text-lg leading-relaxed">
                                    Potente motor generador de horarios que permite su creación y edición bajo múltiples restricciones. Genera y exporta reportes en formato PDF y Excel a la medida de tus necesidades.
                                </p>
                            </div>
                            <div className="mt-auto pt-8">
                                <Link to="/syncrotime" className="inline-flex items-center gap-2 text-corp-dark font-semibold hover:bg-white px-6 py-3 rounded-full transition-all bg-white/50">
                                    Explorar SyncroTime <span className="text-lg leading-none">&rsaquo;</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="servicios" className="py-24 px-6 bg-apple-light">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center text-gray-900 mb-16">Más allá del código.</h2>
                    
                    <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-12">
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-corp-dark text-white rounded-2xl flex items-center justify-center text-2xl mb-6">
                                🧠
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">Capacitación Docente</h4>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Entrenamos a tu equipo directivo y docente en el uso de herramientas tecnológicas y normativas educacionales, asegurando una transición fluida.
                            </p>
                        </div>
                        
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-corp-dark text-white rounded-2xl flex items-center justify-center text-2xl mb-6">
                                📊
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">Asesoría Estratégica</h4>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Acompañamos a sostenedores y equipos directivos en la optimización de procesos, levantamiento de PME y alineación con los Estándares.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact / Footer */}
            <section id="contacto" className="py-24 bg-gray-900 text-white text-center px-6">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight mb-6">¿Hablamos sobre el futuro?</h2>
                    <p className="text-xl text-gray-400 mb-10">Agenda una sesión con un experto y descubre cómo podemos potenciar tu institución.</p>
                    <Link to="/contacto" className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-block">
                        Contactar a un Asesor
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
