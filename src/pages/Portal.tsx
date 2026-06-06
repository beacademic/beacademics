import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Portal() {
    return (
        <div className="bg-apple-light min-h-screen flex flex-col font-sans selection:bg-corp-dark selection:text-white">
            {/* Minimal Header */}
            <header className="absolute top-0 left-0 w-full p-6 flex justify-center z-10">
                <Link to="/" className="hover:opacity-70 transition-opacity">
                    <img src="/Logo-BE-Academic.png" alt="BE Academic" className="h-10 w-auto" />
                </Link>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center px-6 py-24">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-5xl w-full"
                >
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Portal de Clientes</h1>
                        <p className="text-xl text-gray-500 font-medium">Selecciona la plataforma a la que deseas ingresar.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <a 
                            href="https://syncrotime.com" 
                            className="group flex flex-col items-center justify-center h-full bg-white rounded-3xl p-10 border border-gray-100 hover:shadow-2xl hover:border-corp-cyan/30 transition-all duration-300 text-center"
                        >
                            <img src="/Logo-SyncroTime.png" alt="Logo SyncroTime" className="h-12 w-auto mb-4 object-contain group-hover:scale-105 transition-transform" />
                            <h3 className="text-3xl font-bold text-corp-cyan tracking-tight mb-8 group-hover:scale-105 transition-transform">SyncroTime</h3>
                            <span className="inline-flex items-center gap-2 text-corp-dark font-semibold group-hover:text-corp-cyan transition-colors mt-auto">
                                Ingresar <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">&rsaquo;</span>
                            </span>
                        </a>

                        <a 
                            href="https://syncroedu.com" 
                            className="group flex flex-col items-center justify-center h-full bg-white rounded-3xl p-10 border border-gray-100 hover:shadow-2xl hover:border-corp-green/30 transition-all duration-300 text-center"
                        >
                            <img src="/Logo-SyncroEdu.png" alt="Logo SyncroEdu" className="h-12 w-auto mb-4 object-contain group-hover:scale-105 transition-transform" />
                            <h3 className="text-3xl font-bold text-corp-green tracking-tight mb-8 group-hover:scale-105 transition-transform">SyncroEdu</h3>
                            <span className="inline-flex items-center gap-2 text-corp-dark font-semibold group-hover:text-corp-green transition-colors mt-auto">
                                Ingresar <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">&rsaquo;</span>
                            </span>
                        </a>

                        <a 
                            href="https://app.nexus.cl/login" 
                            className="group flex flex-col items-center justify-center h-full bg-white rounded-3xl p-10 border border-gray-100 hover:shadow-2xl hover:border-corp-blue/30 transition-all duration-300 text-center"
                        >
                            <img src="/Logo-Nexus.png" alt="Logo Nexus" className="h-12 w-auto mb-4 object-contain group-hover:scale-105 transition-transform" />
                            <h3 className="text-3xl font-bold text-corp-blue tracking-tight mb-8 group-hover:scale-105 transition-transform">Nexus</h3>
                            <span className="inline-flex items-center gap-2 text-corp-dark font-semibold group-hover:text-corp-blue transition-colors mt-auto">
                                Ingresar <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">&rsaquo;</span>
                            </span>
                        </a>
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/" className="text-gray-500 font-medium hover:text-corp-dark inline-flex items-center gap-2 transition-colors">
                            <span className="text-lg leading-none">&lsaquo;</span> Volver al sitio principal
                        </Link>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
