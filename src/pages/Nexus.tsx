import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export default function Nexus() {
    return (
        <div className="bg-white min-h-screen text-apple-gray font-sans selection:bg-corp-blue selection:text-white flex flex-col">
            <Helmet>
                <title>Nexus | Plataforma Integral de Calidad Educativa</title>
                <meta name="description" content="Nexus es la próxima plataforma integral de calidad para colegios en Chile. Basada en los Estándares Indicativos de Desempeño: Liderazgo, Gestión Pedagógica y más." />
                <meta name="keywords" content="calidad educativa, estándares indicativos de desempeño, nexus, gestión pedagógica chile, liderazgo escolar" />
                <link rel="canonical" href="https://beacademic.cl/nexus" />
            </Helmet>
            {/* Header / Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
                            <span className="text-lg leading-none pb-0.5">&lsaquo;</span>
                            <img src="/Logo-BE-Academic.png" alt="BE Academic" className="h-5 w-auto object-contain" />
                        </Link>
                        <span className="text-corp-blue font-bold text-lg tracking-tight">Nexus</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/contacto" className="bg-corp-blue text-white px-4 py-1.5 rounded-full hover:bg-blue-600 transition-colors shadow-sm">
                            Contactar
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Central Content */}
            <main className="flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-12 text-center bg-gradient-to-b from-white to-blue-50/50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <div className="w-20 h-20 bg-blue-100 text-corp-blue rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto shadow-sm">
                        <span className="animate-bounce">🚀</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                        Revoluciona tu <br className="hidden md:block" /> Calidad Educativa.
                    </h1>
                    
                    <h2 className="text-2xl md:text-3xl font-semibold text-corp-blue mb-8">
                        Estamos construyendo el estándar del futuro. Pronto revelaremos la plataforma.
                    </h2>
                    
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                        Nuestra nueva Plataforma Integral de Calidad centralizará por completo el cumplimiento de los Estándares Indicativos de Desempeño: Liderazgo, Gestión Pedagógica, Convivencia y Recursos, facilitando la toma de decisiones basada en datos reales.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link 
                            to="/contacto" 
                            className="bg-corp-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 hover:scale-105 transition-all w-full sm:w-auto text-center shadow-lg hover:shadow-xl"
                        >
                            Lista de Espera VIP
                        </Link>
                        <Link 
                            to="/" 
                            className="text-gray-900 font-medium px-8 py-3 flex items-center justify-center gap-2 border-2 border-gray-200 hover:bg-gray-50 rounded-full transition-colors w-full sm:w-auto text-center"
                        >
                            Volver al inicio
                        </Link>
                    </div>
                </motion.div>
            </main>
        {/* Footer */}
            <footer className="bg-gray-900 text-gray-500 py-10 text-center text-sm border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <p className="mb-2">BE Academic. Ecosistema Tecnológico para la Educación en Chile.</p>
                        <p>&copy; {new Date().getFullYear()} Be Academic. Todos los derechos reservados.</p>
                    </div>
                    <div className="flex gap-4">
                        <Link to="/legal" className="hover:text-white transition-colors">Información Legal</Link>
                        <Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
