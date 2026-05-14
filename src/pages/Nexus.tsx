import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Nexus() {
    return (
        <div className="bg-white min-h-screen text-apple-gray font-sans selection:bg-corp-blue selection:text-white flex flex-col">
            {/* Header / Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="text-gray-400 font-bold tracking-tight hover:text-gray-900 transition-colors">
                            &lsaquo; BE Academic
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
                        El futuro de la <br className="hidden md:block" /> Calidad Educativa.
                    </h1>
                    
                    <h2 className="text-2xl md:text-3xl font-semibold text-corp-blue mb-8">
                        Estamos trabajando en el desarrollo, pronto te tendremos novedades.
                    </h2>
                    
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                        Nuestra Plataforma Integral de Calidad está siendo diseñada para cubrir todas las dimensiones de los Estándares Indicativos de Desempeño: Liderazgo, Gestión Pedagógica, Convivencia y Recursos.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link 
                            to="/contacto" 
                            className="bg-corp-blue text-white px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition-transform w-full sm:w-auto text-center shadow-lg hover:shadow-xl"
                        >
                            Solicitar acceso anticipado
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
        </div>
    );
}
