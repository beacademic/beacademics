import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function SyncroTime() {
    return (
        <div className="bg-white min-h-screen text-apple-gray font-sans selection:bg-corp-cyan selection:text-white">
            {/* Header / Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="text-gray-400 font-bold tracking-tight hover:text-gray-900 transition-colors">
                            &lsaquo; BE Academic
                        </Link>
                        <span className="text-corp-cyan font-bold text-lg tracking-tight">SyncroTime</span>
                        <div className="hidden md:flex gap-6">
                            <button onClick={() => document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-gray-900 transition-colors">Funcionalidades</button>
                            <button onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-gray-900 transition-colors">Beneficios</button>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="https://syncrotime.com" className="text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">
                            Iniciar Sesión
                        </a>
                        <button 
                            onClick={() => document.getElementById('cotizar')?.scrollIntoView({ behavior: 'smooth' })} 
                            className="bg-corp-cyan text-white px-4 py-1.5 rounded-full hover:bg-cyan-600 transition-colors shadow-sm"
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
                        Generación de <br className="hidden lg:block" /> Horarios Exacta.
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="text-2xl font-semibold text-corp-cyan mb-6"
                    >
                        Optimiza el tiempo, elimina los cruces.
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium"
                    >
                        El motor generador de horarios más avanzado que se adapta a las restricciones de tu institución. Facilita la creación, edición y reportabilidad de la carga académica de forma inteligente y sin errores.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start"
                    >
                        <Link to="/contacto" className="bg-corp-cyan text-white px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition-transform w-full sm:w-auto text-center shadow-lg hover:shadow-xl">
                            Solicitar Demo Gratis
                        </Link>
                        <a href="https://wa.me/message/7NPPQUPQWQLCN1" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-medium px-8 py-3 flex items-center justify-center gap-2 border-2 border-corp-cyan hover:bg-cyan-50 rounded-full transition-colors w-full sm:w-auto text-center">
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
                            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                        </div>
                        <div className="p-8 text-center">
                             <div className="grid grid-cols-5 gap-2 mb-4 opacity-50">
                                {[...Array(20)].map((_, i) => (
                                    <div key={i} className="h-8 bg-corp-cyan/20 rounded-md"></div>
                                ))}
                             </div>
                             <span className="text-gray-500 font-medium text-lg">Vista Panorámica de Horario</span>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Problem Statement Section */}
            <section className="py-24 bg-cyan-50/50 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
                        ¿Semanas armando horarios que siempre terminan con topes?
                    </h2>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed">
                        Despedirse de los pizarrones magnéticos y de las hojas de cálculo interminables ya es una realidad. SyncroTime toma todas las variables docentes, reglas institucionales e infraestructura, y genera la estructura ideal en minutos, lista para afinar visualmente.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section id="funcionalidades" className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-100">
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        El poder de un Horario Inteligente
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:border-cyan-100 transition-all">
                        <div className="bg-cyan-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                            <span className="text-2xl">⚙️</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Motor de Generación Automática</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Olvídate del trabajo manual. Ingresa tus docentes, asignaturas y dejas que nuestro avanzado motor procese todas las combinaciones posibles para entregarte la mejor distribución horaria sin cruces.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:border-cyan-100 transition-all">
                        <div className="bg-cyan-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                            <span className="text-2xl">✋</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Edición Intuitiva Drag & Drop</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Modifica el horario generado fácilmente arrastrando y soltando bloques. El sistema te guiará con "Sugerencias de espacios disponibles", evitando que asignes en horarios no permitidos o ya ocupados.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:border-cyan-100 transition-all">
                        <div className="bg-cyan-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                            <span className="text-2xl">👁️</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Múltiples Vistas de Control</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Analiza la información desde cualquier ángulo. Alterna rápidamente entre Vista de Docente, Vista de Curso, Panorámica por Curso y Panorámica por Docentes para un control absoluto y sin puntos ciegos.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:border-cyan-100 transition-all">
                        <div className="bg-cyan-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                            <span className="text-2xl">📊</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Exportación y Reportabilidad</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Imprime o descarga múltiples reportes en formatos PDF y Excel según las necesidades de tu institución educativa, desde el horario individual que entregas al profesor, hasta sábanas complejas de gestión.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section id="beneficios" className="py-24 px-6 bg-apple-light border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                            Por qué elegir SyncroTime
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-gray-200 pt-16">
                        <div className="flex flex-col items-center group">
                            <span className="text-5xl mb-6 group-hover:scale-110 transition-transform">🎯</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Precisión Absoluta</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Cero cruces de horario, cero profesores a dos bandas y respeto total por las ventanas pedagógicas configuradas.
                            </p>
                        </div>
                        <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-8 group">
                            <span className="text-5xl mb-6 group-hover:scale-110 transition-transform">⚡</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Agilidad Visual</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Mueve piezas como en un tablero interactivo. La edición basada en colores e indicadores visuales hace el trabajo arduo algo simple.
                            </p>
                        </div>
                        <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-8 group">
                            <span className="text-5xl mb-6 group-hover:scale-110 transition-transform">🛡️</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Restricciones Flexibles</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Define las reglas del juego: bloqueos de disponibilidad docente, prioridades de aulas o salas de laboratorio. El motor lo comprende todo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="cotizar" className="py-32 bg-[#1e293b] text-white px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                        ¿Listo para generar tu próximo ciclo académico?
                    </h2>
                    <p className="text-xl text-gray-300 font-medium leading-relaxed mb-12">
                        Desbloquea el potencial organizativo de tu establecimiento.
                        <br />
                        Solicita ahora mismo una demostración de SyncroTime.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="/contacto" className="bg-corp-cyan text-white px-10 py-4 rounded-full text-xl font-medium hover:scale-105 transition-transform w-full sm:w-auto text-center shadow-md">
                            Completar Formulario de Contacto
                        </Link>
                        <a href="https://wa.me/message/7NPPQUPQWQLCN1" target="_blank" rel="noopener noreferrer" className="bg-transparent text-corp-cyan border-2 border-corp-cyan px-10 py-4 rounded-full text-xl font-medium hover:bg-cyan-900 transition-colors w-full sm:w-auto text-center">
                            Hablar directamente por WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
