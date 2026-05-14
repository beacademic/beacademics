import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function SyncroEdu() {
    return (
        <div className="bg-white min-h-screen text-apple-gray font-sans selection:bg-corp-green selection:text-white">
            {/* Header / Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="text-gray-400 font-bold tracking-tight hover:text-gray-900 transition-colors">
                            &lsaquo; BE Academic
                        </Link>
                        <span className="text-corp-green font-bold text-lg tracking-tight">SyncroEdu</span>
                        <div className="hidden md:flex gap-6">
                            <button onClick={() => document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-gray-900 transition-colors">Funcionalidades</button>
                            <button onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-gray-900 transition-colors">Beneficios</button>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="https://syncroedu.com" className="text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">
                            Iniciar Sesión
                        </a>
                        <button 
                            onClick={() => document.getElementById('cotizar')?.scrollIntoView({ behavior: 'smooth' })} 
                            className="bg-corp-green text-white px-4 py-1.5 rounded-full hover:bg-green-500 transition-colors"
                        >
                            Solicitar Demo
                        </button>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 text-center lg:text-left">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight mb-6"
                    >
                        Simplicidad <br className="hidden lg:block" /> operativa.
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="text-2xl font-semibold text-corp-green mb-6"
                    >
                        Transforma la complejidad legal.
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium"
                    >
                        El Cerebro Digital que asegura la cuadratura perfecta entre contratos, horas de aula y cumplimiento legal (MINEDUC y Estatuto Docente) en tu institución educativa chilena.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start"
                    >
                        <Link to="/contacto" className="bg-corp-green text-white px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition-transform w-full sm:w-auto text-center">
                            Solicitar Demo Gratis
                        </Link>
                        <a href="https://wa.me/message/7NPPQUPQWQLCN1" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-medium px-8 py-3 flex items-center justify-center gap-2 border-2 border-corp-green hover:bg-green-50 rounded-full transition-colors w-full sm:w-auto text-center">
                            Consulta por WhatsApp &rsaquo;
                        </a>
                    </motion.div>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex-1 w-full max-w-2xl"
                >
                    <div className="relative rounded-[2rem] bg-apple-light border border-gray-200 p-2 shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                        <div className="absolute top-4 left-4 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <span className="text-gray-400 font-medium text-lg mt-4">Dashboard Preview</span>
                    </div>
                </motion.div>
            </section>

            {/* Problem Statement Section */}
            <section className="py-24 bg-apple-light px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
                        ¿Cansado de la burocracia manual y el miedo constante a las mutas?
                    </h2>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed">
                        Pasar días calculando horas en Excel, arriesgar multas de la Superintendencia por errores en el coeficiente 65/35 o 60/40, y la pesadilla de gestionar reemplazos en tiempo real. Sabemos que la gestión escolar en Chile es compleja, por eso creamos la solución.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section id="funcionalidades" className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-100">
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        ¿Qué puede hacer SyncroEdu por tu Institución?
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Panel de Control y Auditoría Legal</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Visualización instantánea mediante un semáforo de cumplimiento que te alerta si cumples con las horas de preparación de enseñanza y recreos proporcionales. Obtén una vista global de tus docentes, horas de contrato y ausencias.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Calculadora de Jornada Docente</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Sincronización en tiempo real. El sistema te dice exactamente cuántos minutos faltan o sobran para cuadrar el horario y calcula la Bolsa No Lectiva legal de forma automática, impidiendo errores de cálculo.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Gestión de Reemplazos en tiempo real</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            ¿Faltó un profesor? SyncroEdu encuentra al instante quién tiene horas no lectivas disponibles para cubrir el bloque exacto, asegurando la continuidad pedagógica y generando el respaldo legal de forma automática.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Gestión Integral del Personal</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Importación masiva desde SIGE en CSV en segundos. Gestiona no solo a docentes, sino también las jornadas diferenciadas de los Asistentes de la Educación (Psicólogos, Inspectores, Administrativos) con soporte multiaño.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section id="beneficios" className="py-24 px-6 bg-apple-light">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                            Beneficios Tangibles para tu Colegio
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-gray-200 pt-16">
                        <div className="flex flex-col items-center">
                            <span className="text-5xl mb-6">🛡️</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Blindaje ante Auditorías</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Elimina el riesgo de multas al asegurar que cada contrato cumple estrictamente con el coeficiente legal (65/35 o 60/40) y la normativa vigente.
                            </p>
                        </div>
                        <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-8">
                            <span className="text-5xl mb-6">⏰</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ahorro Masivo de Tiempo</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Convierte días de cálculos manuales en Excel en minutos. Automatiza la burocracia para que tu equipo directivo se enfoque en lo pedagógico.
                            </p>
                        </div>
                        <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-8">
                            <span className="text-5xl mb-6">🎯</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Precisión Matemática</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Elimina el error humano en cálculos de horas cronológicas vs pedagógicas. Optimiza las contrataciones con datos reales.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why SyncroEdu */}
            <section className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-100">
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        ¿Qué hace a SyncroEdu Único?
                    </h2>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                        <p className="text-xl font-medium text-gray-900 leading-relaxed">
                            🇨🇱 <span className="font-bold">ADN 100% Chileno:</span> <span className="text-gray-500 font-normal">A diferencia de software genéricos extranjeros, SyncroEdu habla el "idioma legal" de los colegios en Chile: Horas Aula, Horas Cronológicas, Ley de Carrera Docente y Bolsa No Lectiva.</span>
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                        <p className="text-xl font-medium text-gray-900 leading-relaxed">
                            ✨ <span className="font-bold">Interfaz "User-First":</span> <span className="text-gray-500 font-normal">Diseñada para ser intuitiva y visualmente atractiva, reduciendo drásticamente la curva de aprendizaje para directores, jefes de UTP y administrativos.</span>
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                        <p className="text-xl font-medium text-gray-900 leading-relaxed">
                            🔄 <span className="font-bold">Planificación Preventiva Multi-año:</span> <span className="text-gray-500 font-normal">Permite planificar el año escolar siguiente sin afectar los datos del año actual, facilitando transiciones administrativas sin estrés ni pérdida de información.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="cotizar" className="py-32 bg-[#1b263b] text-white px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                        ¿Listo para Cuadrar tu Colegio?
                    </h2>
                    <p className="text-xl text-gray-300 font-medium leading-relaxed mb-12">
                        Ofrecemos soluciones personalizadas según la dotación de tu institución educativa.
                        <br />
                        Déjanos tus datos y te mostraremos en vivo cómo adaptamos el sistema a tu colegio.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="/contacto" className="bg-corp-green text-white px-10 py-4 rounded-full text-xl font-medium hover:scale-105 transition-transform w-full sm:w-auto text-center">
                            Completar Formulario de Contacto
                        </Link>
                        <a href="https://wa.me/message/7NPPQUPQWQLCN1" target="_blank" rel="noopener noreferrer" className="bg-transparent text-corp-green border-2 border-corp-green px-10 py-4 rounded-full text-xl font-medium hover:bg-green-900 transition-colors w-full sm:w-auto text-center">
                            Hablar directamente por WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
