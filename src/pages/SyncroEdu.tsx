import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export default function SyncroEdu() {
    return (
        <div className="bg-white min-h-screen text-apple-gray font-sans selection:bg-corp-green selection:text-white">
            <Helmet>
                <title>SyncroEdu | Gestión Docente y Cumplimiento Legal MINEDUC</title>
                <meta name="description" content="SyncroEdu automatiza la gestión docente, cuadratura de contratos y cumplimiento legal ante el MINEDUC. Blinda tu colegio contra multas y optimiza procesos operativos." />
                <meta name="keywords" content="gestión docente chile, cumplimiento legal mineduc, syncroedu, cuadratura de contratos, software educativo chile" />
                <link rel="canonical" href="https://beacademic.cl/syncroedu" />
            </Helmet>
            {/* Header / Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
                            <span className="text-lg leading-none pb-0.5">&lsaquo;</span>
                            <img src="/Logo-BE-Academic.png" alt="BE Academic" className="h-5 w-auto object-contain" />
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
                        Simplicidad que revoluciona <br className="hidden lg:block" /> tu gestión operativa.
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="text-2xl font-semibold text-corp-green mb-6"
                    >
                        Blinda tu institución. Simplifica lo legal.
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium"
                    >
                        El primer Cerebro Digital de Chile diseñado para garantizar la cuadratura perfecta de tus contratos educativos. Automatiza procesos, blinda tu colegio ante el MINEDUC y despídete para siempre del desgaste operativo.
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
                            Conversar con Asesor &rsaquo;
                        </a>
                    </motion.div>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex-1 w-full max-w-2xl"
                >
                    <div className="relative rounded-3xl bg-apple-light border border-gray-200 p-2 shadow-2xl overflow-hidden">
                        <div className="flex items-center px-4 pt-3 pb-3">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-inner">
                            <img src="/Dashboard-SyncroEdu.png" alt="Dashboard SyncroEdu Preview" className="w-full h-auto object-cover block" />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Problem Statement Section */}
            <section className="py-24 bg-apple-light px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
                        ¿Cansado de la burocracia manual y el miedo constante a las dolorosas multas normativas?
                    </h2>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed">
                        Horas interminables atrapado en Excel, el estrés permanente de fallar en el coeficiente 65/35 y el caos imprevisto de los reemplazos. Sabemos que dirigir un colegio en Chile es un desafío mayúsculo; por eso, diseñamos la solución definitiva para blindarte y liberar tu tiempo.
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
                            Monitorea al instante tu cumplimiento con auditorías legales globales y por docente. Nuestro sistema de semáforos te permite visualizar estadísticas de ausencias y clases perdidas en tiempo real, detectando riesgos normativos antes de que se conviertan en multas.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Calculadora de Jornada Docente</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            ¡Olvídate de las planillas de Excel! Nuestra calculadora inteligente sincroniza en tiempo real, indicándote con precisión quirúrgica los minutos exactos para cuadrar el horario. Automatiza la Bolsa No Lectiva legal y despídete de los errores costosos.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Gestión de Reemplazos y Ausentismo</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            ¿Ausencias imprevistas? SyncroEdu detecta de inmediato al candidato perfecto con horas disponibles para cubrir el bloque exacto. Realiza un seguimiento exhaustivo de estadísticas de ausencias y clases perdidas, asegurando la continuidad pedagógica con respaldos legales automáticos.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Gestión Integral del Personal</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Conecta tu flujo de trabajo en segundos con importaciones masivas desde SIGE. Administra sin esfuerzo a toda tu maquinaria educativa: desde docentes hasta psicólogos e inspectores. Control total con jornadas diferenciadas y soporte multiaño.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow md:col-span-2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Generación Automática de Horarios</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            ¿Semanas armando el rompecabezas escolar? Define tus restricciones de disponibilidad y recintos, y deja que nuestro motor inteligente genere el escenario perfecto. Una vez listos, inyéctalos al horario de cada docente con un solo clic. Transforma un proceso lento y estresante en resultados instantáneos y sin choques.
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
                                Tranquilidad absoluta. Elimina de raíz el riesgo de penalizaciones futuras asegurando el cumplimiento milimétrico del coeficiente legal establecido por MINEDUC.
                            </p>
                        </div>
                        <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-8">
                            <span className="text-5xl mb-6">⏰</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ahorro Masivo de Tiempo</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Dile adiós a la burocracia repetitiva, recuperando valiosas horas semanales. Potencia a tu equipo directivo para enfocarse en lo que realmente importa: la calidad pedagógica.
                            </p>
                        </div>
                        <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-8">
                            <span className="text-5xl mb-6">🎯</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Precisión Matemática</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Decisiones basadas en datos puros. Erradica el error humano en las complejas conversiones de horas y optimiza tus contrataciones con extrema precisión.
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
