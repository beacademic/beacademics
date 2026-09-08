import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { BentoCard } from '../components/ui/BentoCard';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { StatusBadge } from '../components/ui/StatusBadge';
import { LogoContainer } from '../components/ui/LogoContainer';
import { 
    Clock, 
    ShieldCheck, 
    Sparkles, 
    Award, 
    GraduationCap, 
    TrendingUp, 
    ChevronRight, 
    ArrowRight,
    CheckCircle2,
    Calendar,
    Users,
    FileSpreadsheet,
    Zap
} from 'lucide-react';

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
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://beacademics.com/#organization",
                "name": "BE Academic",
                "url": "https://beacademics.com",
                "logo": "https://beacademics.com/Logo-BE-Academic.png",
                "description": "Ecosistema Tecnológico Global para la Educación. Creadores de SyncroEdu (compliance legal y gestión docente) y SyncroTime (generador inteligente de horarios escolares con IA).",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "CL"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+56-9-6437-5050",
                    "contactType": "customer service",
                    "email": "beacademic.ltda@gmail.com"
                },
                "sameAs": [
                    "https://syncrotime.com",
                    "https://syncroedu.com"
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://beacademics.com/#website",
                "url": "https://beacademics.com",
                "name": "BE Academic",
                "publisher": {
                    "@id": "https://beacademics.com/#organization"
                }
            }
        ]
    };

    return (
        <div className="bg-[#F5F5F7] min-h-screen text-[#1D1D1F] selection:bg-[#007AFF]/20 selection:text-[#1D1D1F]">
            <Helmet>
                <html lang="es" />
                <title>BE Academic | Ecosistema Tecnológico para la Educación - SyncroEdu & SyncroTime</title>
                <meta name="description" content="BE Academic ofrece soluciones tecnológicas integrales para colegios: SyncroEdu para gestión docente y compliance legal en Chile, y SyncroTime para generación automática de horarios escolares con IA a nivel global." />
                <meta name="keywords" content="gestión escolar, software para colegios, syncroedu, syncrotime, generador de horarios escolares, nexus, cumplimiento legal mineduc, calidad educativa, software educativo" />
                <link rel="canonical" href="https://beacademics.com/" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://beacademics.com/" />
                <meta property="og:title" content="BE Academic | Ecosistema Tecnológico para la Educación" />
                <meta property="og:description" content="Herramientas de nivel mundial que simplifican procesos, eliminan riesgos legales y automatizan la generación de horarios escolares." />
                <meta property="og:image" content="https://beacademics.com/Logo-BE-Academic.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://beacademics.com/" />
                <meta property="twitter:title" content="BE Academic | Ecosistema Tecnológico para la Educación" />
                <meta property="twitter:description" content="Herramientas de nivel mundial que simplifican procesos, eliminan riesgos legales y automatizan la generación de horarios escolares." />
                <meta property="twitter:image" content="https://beacademics.com/Logo-BE-Academic.png" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>

            {/* Header / Navigation (Apple HIG Glassmorphism) */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F7]/80 backdrop-blur-[20px] border-b border-black/5">
                <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-6">
                        <Link to="/" className="flex items-center gap-3 group">
                            <LogoContainer>
                                <img src="/Logo-BE-Academic.png" alt="BE Academic" className="h-6 w-auto object-contain" />
                            </LogoContainer>
                            <span className="font-bold text-base tracking-tight text-[#1D1D1F] group-hover:text-[#007AFF] transition-colors">
                                BE Academic
                            </span>
                        </Link>
                        <div className="hidden md:flex items-center gap-6 pl-4 border-l border-black/5 text-[#515154]">
                            <button onClick={() => document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#1D1D1F] transition-colors cursor-pointer">Soluciones</button>
                            <button onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#1D1D1F] transition-colors cursor-pointer">Servicios</button>
                            <Link to="/contacto" className="hover:text-[#1D1D1F] transition-colors">Contacto</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link 
                            to="/acceso" 
                            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full font-medium text-xs text-[#515154] hover:text-[#1D1D1F] hover:bg-black/5 transition-all"
                        >
                            Portal Clientes
                        </Link>
                        <PrimaryButton 
                            size="sm"
                            onClick={() => document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Explorar Plataformas
                        </PrimaryButton>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="pt-36 pb-20 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    className="mb-6"
                >
                    <StatusBadge 
                        label="ECOSISTEMA TECNOLÓGICO PARA LA EDUCACIÓN" 
                        variant="primary" 
                        pulse={true} 
                    />
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 28, delay: 0.05 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1D1F] leading-[1.08] mb-6"
                >
                    Potenciamos el futuro de la <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-[#007AFF] to-[#5856D6] bg-clip-text text-transparent">
                        gestión escolar inteligente.
                    </span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 28, delay: 0.1 }}
                    className="text-lg sm:text-xl md:text-2xl text-[#515154] max-w-3xl mb-10 leading-relaxed font-normal"
                >
                    Arquitectura de nivel mundial que simplifica procesos complejos, elimina riesgos legales y automatiza la confección de horarios para instituciones escolares.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 28, delay: 0.15 }}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                >
                    <PrimaryButton 
                        size="lg"
                        onClick={() => document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' })}
                        icon={<Sparkles className="w-4 h-4" />}
                        className="w-full sm:w-auto"
                    >
                        Descubrir el Ecosistema
                    </PrimaryButton>
                    <Link 
                        to="/contacto" 
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-[#1D1D1F] bg-white border border-black/5 hover:bg-[#E8E8ED] shadow-xs transition-all w-full sm:w-auto"
                    >
                        <span>Hablar con un asesor</span>
                        <ChevronRight className="w-4 h-4 text-[#8E8E93]" />
                    </Link>
                </motion.div>
            </section>

            {/* Products (Bento Grid Section) */}
            <section id="soluciones" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                        <div>
                            <div className="mb-2">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-[#007AFF]">
                                    Arquitectura Modular
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D1D1F]">
                                Plataformas Especializadas
                            </h2>
                        </div>
                        <p className="text-base text-[#515154] max-w-md mt-4 md:mt-0">
                            Soluciones nativas diseñadas bajo estrictos principios de orden, validación legal e inteligencia algorítmica.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                        {/* SyncroTime Bento Card (Core Operations / Data - Blue Glow) */}
                        <BentoCard glowColor="#007AFF" className="flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <LogoContainer>
                                        <img src="/Logo-SyncroTime.png" alt="SyncroTime" className="h-6 w-auto object-contain" />
                                    </LogoContainer>
                                    <StatusBadge label="OPERACIÓN Y HORARIOS" variant="primary" pulse={false} />
                                </div>

                                <h3 className="text-2xl font-bold text-[#1D1D1F] tracking-tight mb-1">
                                    SyncroTime
                                </h3>
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#007AFF] mb-4">
                                    Motor Inteligente de Horarios con IA
                                </p>
                                
                                <p className="text-[#515154] text-sm leading-relaxed mb-6">
                                    Genera combinaciones horarias óptimas en segundos resolviendo restricciones complejas de docentes, salas, asignaturas y bloques simultáneos. Exportación instantánea a PDF y Excel.
                                </p>

                                <div className="space-y-2.5 pt-4 border-t border-black/5 text-xs text-[#515154]">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#007AFF] shrink-0" />
                                        <span>Algoritmo de optimización combinatorial multi-criterio</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#007AFF] shrink-0" />
                                        <span>Editor interactivo drag & drop con detección de topes</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#007AFF] shrink-0" />
                                        <span>Soporte global multilingüe (ES, EN, PT)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 mt-6 border-t border-black/5">
                                <Link 
                                    to="/syncrotime" 
                                    className="w-full inline-flex items-center justify-between px-5 py-3 rounded-2xl bg-[#F5F5F7] hover:bg-[#E8E8ED] text-sm font-semibold text-[#1D1D1F] transition-all group"
                                >
                                    <span>Conocer SyncroTime</span>
                                    <ArrowRight className="w-4 h-4 text-[#007AFF] group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </BentoCard>

                        {/* SyncroEdu Bento Card (Resources & Legal Compliance - Green Glow) */}
                        <BentoCard glowColor="#34C759" className="flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <LogoContainer>
                                        <img src="/Logo-SyncroEdu.png" alt="SyncroEdu" className="h-6 w-auto object-contain" />
                                    </LogoContainer>
                                    <StatusBadge label="COMPLIANCE ESCOLAR CHILE" variant="success" pulse={true} />
                                </div>

                                <h3 className="text-2xl font-bold text-[#1D1D1F] tracking-tight mb-1">
                                    SyncroEdu
                                </h3>
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#34C759] mb-4">
                                    Compliance Legal & Gestión Docente
                                </p>
                                
                                <p className="text-[#515154] text-sm leading-relaxed mb-6">
                                    Proteja su establecimiento ante la Superintendencia de Educación. Valida las Leyes 20.903, 21.625 y 19.070 (regla 65/35), calcula horas PIE (Decreto 170) y gestiona reemplazos docentes en tiempo real.
                                </p>

                                <div className="space-y-2.5 pt-4 border-t border-black/5 text-xs text-[#515154]">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#34C759] shrink-0" />
                                        <span>Auditoría legal y semáforo 65/35 en tiempo real</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#34C759] shrink-0" />
                                        <span>Cálculo automático de horas PIE y co-docencias</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#34C759] shrink-0" />
                                        <span>Gestión de reemplazos móviles y trazabilidad total</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 mt-6 border-t border-black/5">
                                <Link 
                                    to="/syncroedu" 
                                    className="w-full inline-flex items-center justify-between px-5 py-3 rounded-2xl bg-[#F5F5F7] hover:bg-[#E8E8ED] text-sm font-semibold text-[#1D1D1F] transition-all group"
                                >
                                    <span>Conocer SyncroEdu</span>
                                    <ArrowRight className="w-4 h-4 text-[#34C759] group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </BentoCard>

                        {/* Nexus Bento Card (Quality Standards & Leadership - Purple Glow) */}
                        <BentoCard glowColor="#5856D6" className="flex flex-col justify-between md:col-span-2 lg:col-span-1">
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <LogoContainer>
                                        <img src="/Logo-Nexus.png" alt="Nexus" className="h-6 w-auto object-contain" />
                                    </LogoContainer>
                                    <StatusBadge label="CALIDAD INSTITUCIONAL" variant="purple" pulse={false} />
                                </div>

                                <h3 className="text-2xl font-bold text-[#1D1D1F] tracking-tight mb-1">
                                    Nexus
                                </h3>
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#5856D6] mb-4">
                                    Plataforma de Calidad Educativa
                                </p>
                                
                                <p className="text-[#515154] text-sm leading-relaxed mb-6">
                                    Eleve los Estándares Indicativos de Desempeño. Centralice y audite la gestión pedagógica, el liderazgo directivo, la convivencia escolar y los recursos con métricas comparativas periódicas.
                                </p>

                                <div className="space-y-2.5 pt-4 border-t border-black/5 text-xs text-[#515154]">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#5856D6] shrink-0" />
                                        <span>Alineación con Estándares Indicativos de Desempeño</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#5856D6] shrink-0" />
                                        <span>Cuadros de mando analíticos para directivos</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#5856D6] shrink-0" />
                                        <span>Seguimiento de planes de mejora continua (PME)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 mt-6 border-t border-black/5">
                                <Link 
                                    to="/nexus" 
                                    className="w-full inline-flex items-center justify-between px-5 py-3 rounded-2xl bg-[#F5F5F7] hover:bg-[#E8E8ED] text-sm font-semibold text-[#1D1D1F] transition-all group"
                                >
                                    <span>Conocer Nexus</span>
                                    <ArrowRight className="w-4 h-4 text-[#5856D6] group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </BentoCard>
                    </div>
                </div>
            </section>

            {/* Services Section (Apple HIG Bento Clean Layout) */}
            <section id="servicios" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="mb-2">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-[#007AFF]">
                                Acompañamiento Estratégico
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F] mb-4">
                            Vamos mucho más allá del software.
                        </h2>
                        <p className="text-[#515154] text-base leading-relaxed">
                            Acompañamos a sostenedores y equipos de gestión para asegurar una transición fluida y una cultura escolar de máxima excelencia.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <BentoCard glowColor="#FF9500" className="p-8">
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[#FF9500] flex items-center justify-center mb-6">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#1D1D1F] tracking-tight mb-3">
                                Capacitación Docente y Directiva
                            </h3>
                            <p className="text-sm text-[#515154] leading-relaxed">
                                Entrenamos a su equipo presencial y sincrónicamente para garantizar adopción tecnológica total, autonomía operativa y cero fricción en los procesos escolares.
                            </p>
                        </BentoCard>

                        <BentoCard glowColor="#007AFF" className="p-8">
                            <div className="w-12 h-12 rounded-2xl bg-[#007AFF]/10 border border-[#007AFF]/20 text-[#007AFF] flex items-center justify-center mb-6">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#1D1D1F] tracking-tight mb-3">
                                Consultoría Estratégica Escolar
                            </h3>
                            <p className="text-sm text-[#515154] leading-relaxed">
                                Asesoramos a sostenedores y directivos en la optimización de recursos, estructuración de dotaciones docentes y prevención rigurosa de sanciones de la Superintendencia.
                            </p>
                        </BentoCard>
                    </div>

                    <div className="mt-14 text-center">
                        <PrimaryButton
                            size="lg"
                            href="https://wa.me/56964375050?text=Hola,%20quisiera%20conversar%20sobre%20mi%20institución%20educativa"
                            target="_blank"
                            rel="noopener noreferrer"
                            icon={<ArrowRight className="w-4 h-4" />}
                        >
                            Hablemos sobre su institución
                        </PrimaryButton>
                    </div>
                </div>
            </section>

            {/* CTA Final Section */}
            <section id="contacto" className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-3xl bg-[#1C1C1E] text-white p-10 md:p-16 text-center relative overflow-hidden border border-white/10 shadow-2xl">
                        {/* Ambient top glow */}
                        <div 
                            className="pointer-events-none absolute -inset-px opacity-30 blur-2xl"
                            style={{ background: 'radial-gradient(circle at 50% 0%, #007AFF, transparent 70%)' }}
                        />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <div className="mb-4">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-[#52A6FF]">
                                    Asesoría Personalizada
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                                ¿Hablamos sobre el futuro de su colegio?
                            </h2>
                            <p className="text-base md:text-lg text-[#A1A1A6] mb-10 leading-relaxed font-normal">
                                Agende una demostración personalizada con nuestros especialistas educacionales. Descubra cómo blindar legalmente su institución y optimizar la gestión de horarios.
                            </p>
                            <PrimaryButton
                                size="lg"
                                href="https://wa.me/56964375050?text=Hola,%20quisiera%20agendar%20una%20demostración%20gratuita"
                                target="_blank"
                                rel="noopener noreferrer"
                                icon={<Sparkles className="w-4 h-4" />}
                            >
                                Agendar una demostración gratuita
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer (Apple HIG Style) */}
            <footer className="bg-[#F5F5F7] text-[#515154] py-12 text-xs border-t border-black/5">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <LogoContainer className="w-8 h-8 rounded-xl">
                            <img src="/Logo-BE-Academic.png" alt="BE Academic" className="h-4 w-auto object-contain" />
                        </LogoContainer>
                        <div>
                            <p className="font-semibold text-[#1D1D1F]">BE Academic</p>
                            <p className="text-[#8E8E93]">&copy; {new Date().getFullYear()} BE Academic. Todos los derechos reservados.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 font-medium">
                        <Link to="/syncroedu" className="hover:text-[#1D1D1F] transition-colors">SyncroEdu</Link>
                        <Link to="/syncrotime" className="hover:text-[#1D1D1F] transition-colors">SyncroTime</Link>
                        <Link to="/nexus" className="hover:text-[#1D1D1F] transition-colors">Nexus</Link>
                        <Link to="/legal" className="hover:text-[#1D1D1F] transition-colors">Información Legal</Link>
                        <Link to="/contacto" className="hover:text-[#1D1D1F] transition-colors">Contacto</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
