import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Legal() {
    return (
        <div className="bg-apple-light min-h-screen text-apple-gray font-sans selection:bg-corp-dark selection:text-white flex flex-col">
            <Helmet>
                <title>Información Legal | BE Academic</title>
                <meta name="description" content="Información legal de la SOCIEDAD DE FORMACIÓN BE ACADEMIC LIMITADA. Domicilio, RUT, representantes legales y más." />
            </Helmet>
            
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
                            <Link to="/contacto" className="text-gray-600 hover:text-corp-dark transition-colors">Contacto</Link>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Content Section */}
            <section className="pt-32 pb-24 px-6 max-w-3xl mx-auto flex-grow w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
                        Información Legal
                    </h1>
                    
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 space-y-8">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Razón Social</h2>
                            <p className="text-gray-600">SOCIEDAD DE FORMACIÓN BE ACADEMIC LIMITADA</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Rol Único Tributario (RUT)</h2>
                            <p className="text-gray-600">77.650.439-4</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Representantes Legales</h2>
                            <ul className="text-gray-600 list-disc list-inside">
                                <li>CARLOS ANDRÉS MUNDACA VALDEBENITO</li>
                                <li>ARACELLI GRACIELA GARCÍA CAMPOS</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Domicilio Legal</h2>
                            <p className="text-gray-600">EL PINAR LT. E- 1 C-A</p>
                            <p className="text-gray-600">COMUNA LOS ÁNGELES</p>
                            <p className="text-gray-600">Región del Biobío, Chile</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Contacto</h2>
                            <p className="text-gray-600">Correo electrónico: beacademic.ltda@gmail.com</p>
                            <p className="text-gray-600">WhatsApp: <a href="https://wa.me/56964375050" target="_blank" rel="noopener noreferrer" className="hover:text-corp-dark transition-colors">+56964375050</a></p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-500 py-10 text-center text-sm border-t border-gray-800 mt-auto">
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
