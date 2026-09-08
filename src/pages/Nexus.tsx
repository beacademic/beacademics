import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
    Users, 
    BookOpen, 
    HeartHandshake, 
    BarChart3, 
    ArrowRight, 
    Zap,
    Sparkles
} from 'lucide-react';
import { BentoCard } from '../components/ui/BentoCard';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { StatusBadge } from '../components/ui/StatusBadge';
import { LogoContainer } from '../components/ui/LogoContainer';

export default function Nexus() {
    return (
        <div className="bg-[#F5F5F7] min-h-screen text-[#1D1D1F] font-sans selection:bg-[#007AFF] selection:text-white flex flex-col">
            <Helmet>
                <html lang="es" />
                <title>Nexus | Plataforma Integral de Calidad Educativa</title>
                <meta name="description" content="Nexus es la próxima plataforma integral de calidad para colegios en Chile. Basada en los Estándares Indicativos de Desempeño: Liderazgo, Gestión Pedagógica y más." />
                <meta name="keywords" content="calidad educativa, estándares indicativos de desempeño, nexus, gestión pedagógica chile, liderazgo escolar" />
                <link rel="canonical" href="https://beacademics.com/nexus" />
                
                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://beacademics.com/nexus" />
                <meta property="og:title" content="Nexus | Plataforma de Calidad Educativa" />
                <meta property="og:description" content="Basada en los Estándares Indicativos de Desempeño: Liderazgo, Gestión Pedagógica, Convivencia y Recursos." />
            </Helmet>

            {/* Header / Navigation Glassmorphism */}
            <header className="sticky top-0 left-0 right-0 z-50 bg-[#F5F5F7]/80 backdrop-blur-[20px] border-b border-black/5 transition-all duration-300">
                <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-6">
                        <Link to="/" className="flex items-center gap-2 group transition-opacity opacity-80 hover:opacity-100">
                            <LogoContainer className="w-9 h-9">
                                <img src="/Logo-BE-Academic.png" alt="BE Academic" className="h-4 w-auto object-contain" />
                            </LogoContainer>
                            <span className="text-xs font-semibold text-[#86868B] group-hover:text-[#1D1D1F] hidden sm:inline transition-colors">
                                BE Academic
                            </span>
                        </Link>

                        <div className="h-5 w-px bg-black/10 hidden sm:block" />

                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-2xl bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center text-[#007AFF]">
                                <Sparkles className="w-4 h-4" />
                            </div>
                            <span className="font-bold text-base tracking-tight text-[#1D1D1F]">Nexus</span>
                            <span className="px-2 py-0.5 bg-[#FF9500]/10 text-[#FF9500] text-[11px] font-bold rounded-full border border-[#FF9500]/20">
                                Próximamente
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <PrimaryButton 
                            variant="blue"
                            size="sm"
                            to="/contacto"
                        >
                            Lista de Espera VIP
                        </PrimaryButton>
                    </div>
                </nav>
            </header>

            {/* Central Content */}
            <main className="flex-1 max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-3xl mb-16"
                >
                    <StatusBadge label="PRÓXIMO LANZAMIENTO · CALIDAD EDUCATIVA" variant="warning" pulse={true} className="mb-6 mx-auto" />
                    
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1D1D1F] leading-[1.08] mb-6 font-display" style={{ textWrap: 'balance' }}>
                        Revolucione la Calidad Educativa de su Establecimiento.
                    </h1>
                    
                    <p className="text-lg md:text-xl text-[#007AFF] font-semibold mb-6 font-display">
                        El nuevo estándar en gestión de Estándares Indicativos de Desempeño.
                    </p>
                    
                    <p className="text-base md:text-lg text-[#86868B] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                        Nuestra nueva Plataforma Integral de Calidad centralizará el cumplimiento de los Estándares Indicativos de Desempeño del Sistema de Aseguramiento de la Calidad (SAC): Liderazgo, Gestión Pedagógica, Convivencia y Recursos, facilitando la toma de decisiones basada en analítica confiable.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <PrimaryButton 
                            variant="blue"
                            size="lg"
                            to="/contacto"
                            icon={<ArrowRight className="w-4 h-4" />}
                        >
                            Unirse a la Lista de Espera VIP
                        </PrimaryButton>
                        <PrimaryButton 
                            variant="secondary"
                            size="lg"
                            to="/"
                        >
                            Volver al Ecosistema
                        </PrimaryButton>
                    </div>
                </motion.div>

                {/* Bento Grid: 4 Dimensiones de Calidad */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
                    <BentoCard glowColor="#007AFF">
                        <div className="w-12 h-12 rounded-2xl bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center text-[#007AFF] mb-5">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-[#1D1D1F] mb-2 font-display">Liderazgo Escolar</h3>
                        <p className="text-xs text-[#86868B] leading-relaxed">
                            Monitoreo de metas institucionales, planificación estratégica PME y articulación del equipo directivo.
                        </p>
                    </BentoCard>

                    <BentoCard glowColor="#34C759">
                        <div className="w-12 h-12 rounded-2xl bg-[#34C759]/10 border border-[#34C759]/20 flex items-center justify-center text-[#34C759] mb-5">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-[#1D1D1F] mb-2 font-display">Gestión Pedagógica</h3>
                        <p className="text-xs text-[#86868B] leading-relaxed">
                            Acompañamiento en aula, cobertura curricular y seguimiento del progreso de los aprendizajes clave.
                        </p>
                    </BentoCard>

                    <BentoCard glowColor="#5856D6">
                        <div className="w-12 h-12 rounded-2xl bg-[#5856D6]/10 border border-[#5856D6]/20 flex items-center justify-center text-[#5856D6] mb-5">
                            <HeartHandshake className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-[#1D1D1F] mb-2 font-display">Convivencia Escolar</h3>
                        <p className="text-xs text-[#86868B] leading-relaxed">
                            Gestión preventiva del clima escolar, protocolos de actuación y bienestar de la comunidad educativa.
                        </p>
                    </BentoCard>

                    <BentoCard glowColor="#FF9500">
                        <div className="w-12 h-12 rounded-2xl bg-[#FF9500]/10 border border-[#FF9500]/20 flex items-center justify-center text-[#FF9500] mb-5">
                            <BarChart3 className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-[#1D1D1F] mb-2 font-display">Gestión de Recursos</h3>
                        <p className="text-xs text-[#86868B] leading-relaxed">
                            Optimización de infraestructura, equipamiento didáctico y soporte continuo a la docencia.
                        </p>
                    </BentoCard>
                </div>
            </main>

            {/* Footer Apple HIG */}
            <footer className="bg-[#1C1C1E] text-[#86868B] py-12 text-sm border-t border-white/10 mt-auto">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <div>
                        <p className="text-white font-semibold mb-1">BE Academic. Ecosistema Tecnológico para la Educación en Chile.</p>
                        <p>&copy; {new Date().getFullYear()} Be Academic. Todos los derechos reservados.</p>
                    </div>
                    <div className="flex gap-6">
                        <Link to="/legal" className="hover:text-white transition-colors">Información Legal</Link>
                        <Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link>
                        <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
