import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
    Check, 
    CheckCircle2, 
    XCircle, 
    Clock, 
    Scale, 
    MessageSquare, 
    DollarSign, 
    GitBranch, 
    ShieldCheck, 
    Smartphone, 
    BarChart3, 
    Cloud, 
    Lock, 
    Building2, 
    Zap, 
    Calendar, 
    AlertTriangle, 
    TrendingUp, 
    Phone, 
    Mail, 
    ArrowRight,
    Award,
    Users
} from 'lucide-react';
import { BentoCard } from '../components/ui/BentoCard';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { StatusBadge } from '../components/ui/StatusBadge';
import { LogoContainer } from '../components/ui/LogoContainer';

const UrgencyBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const month = new Date().getMonth() + 1;
    const isUrgency = (month >= 7 || month <= 3);
    const isYearEnd = month >= 7;

    if (!isUrgency || !isVisible) return null;

    return (
        <aside aria-label="Aviso de planificación escolar" className="bg-[#1C1C1E] text-white text-xs md:text-sm py-2 px-4 text-center relative z-50 border-b border-white/10">
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 pr-8">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9500] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF9500]"></span>
                </span>
                {isYearEnd ? (
                    <span className="text-[#86868B]">
                        <strong className="text-white">Planificación Escolar 2026–2027</strong> — Colegios con SyncroEdu inician el año escolar con contratos y horarios 100% conformes a la normativa.{' '}
                        <a href="https://wa.me/56964375050?text=Quiero%20agendar%20una%20demo%20de%20SyncroEdu" target="_blank" rel="noreferrer" className="text-[#34C759] hover:underline font-semibold ml-1">
                            Agendar demo gratuita &rarr;
                        </a>
                    </span>
                ) : (
                    <span className="text-[#86868B]">
                        <strong className="text-white">Año Escolar en Curso</strong> — Valide la proporción 65/35 de su dotación docente y prevenga sanciones de la Superintendencia de Educación.{' '}
                        <a href="https://wa.me/56964375050?text=Necesito%20asesoría%20sobre%20el%20cumplimiento%2065%2F35" target="_blank" rel="noreferrer" className="text-[#34C759] hover:underline font-semibold ml-1">
                            Hablar con un asesor &rarr;
                        </a>
                    </span>
                )}
            </div>
            <button onClick={() => setIsVisible(false)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#86868B] hover:text-white transition-colors" aria-label="Cerrar aviso">&times;</button>
        </aside>
    );
};

export default function SyncroEdu() {
    const [activeTab, setActiveTab] = useState(0);
    const [faqOpen, setFaqOpen] = useState<number | null>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        
        setFormSubmitted(true);
        setTimeout(() => {
            const msg = encodeURIComponent(
                `Hola, soy ${data.nombre}, ${data.cargo} del ${data.colegio}. Completé el formulario de SyncroEdu y me interesa agendar una demo técnica. Tenemos aproximadamente ${data.funcionarios}. Mi email es: ${data.email}.`
            );
            window.open(`https://wa.me/56964375050?text=${msg}`, '_blank');
        }, 2000);
    };

    const counterAnimation = (value: number) => {
        return <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>${value.toLocaleString('es-CL')}</motion.span>;
    };

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SyncroEdu",
        "alternateName": ["Syncro Edu", "SyncroEdu Chile"],
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "All, Web, Cloud SaaS",
        "url": "https://beacademics.com/syncroedu",
        "description": "Plataforma chilena de compliance educativo y generación de horarios escolares. Valida la Ley 20.903, 21.625 y 19.070, calcula proporción 65/35, horas PIE Decreto 170 y gestiona reemplazos docentes.",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "CLP",
            "url": "https://beacademics.com/syncroedu#formulario"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.95",
            "ratingCount": "85",
            "bestRating": "5"
        },
        "creator": {
            "@type": "Organization",
            "name": "BE Academic",
            "url": "https://beacademics.com"
        }
    };

    const faqSchemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Reemplaza completamente el Excel y aSc Timetables?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí. SyncroEdu integra en una sola plataforma la generación algorítmica de horarios, validación normativa chilena en tiempo real y gestión de reemplazos de emergencia sin traspasos manuales."
                }
            },
            {
                "@type": "Question",
                "name": "¿Qué pasa si necesitamos modificar el horario durante el año?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El editor interactivo permite ajustes con verificación de conflictos en tiempo real. Cada modificación queda en el Audit Log con trazabilidad completa."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cuánto tiempo toma la implementación?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aproximadamente 1 semana, incluyendo carga masiva de datos y 3 sesiones de capacitación técnica al equipo directivo."
                }
            },
            {
                "@type": "Question",
                "name": "¿Funciona para colegios con PIE (Decreto N°170)?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Es uno de nuestros módulos centrales. Calcula horas PIE automáticamente y asegura co-docencias regulares sin discordancias contractuales."
                }
            },
            {
                "@type": "Question",
                "name": "¿El precio varía según el tamaño de mi colegio?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí. Ofrecemos planes por tramos de dotación institucional total (docentes y asistentes de la educación)."
                }
            }
        ]
    };

    return (
        <div className="bg-[#F5F5F7] min-h-screen text-[#1D1D1F] font-sans selection:bg-[#34C759] selection:text-white">
            <Helmet>
                <html lang="es-CL" />
                <title>SyncroEdu | Compliance Escolar, Ley 20.903 y Horarios para Colegios en Chile</title>
                <meta name="description" content="SyncroEdu automatiza los horarios escolares, valida las Leyes 20.903, 21.625 y 19.070 (regla 65/35) en tiempo real y gestiona reemplazos desde el celular. Proteja su colegio de multas de la Supereduc." />
                <meta name="keywords" content="horarios escolares Chile, compliance educativo, Superintendencia de Educación, Ley 20.903, Ley 21.625, Ley 19.070, Decreto 170 PIE, gestión docente, proporción 65 35, SaaS educativo Chile, software colegios chile" />
                <link rel="canonical" href="https://beacademics.com/syncroedu" />
                
                {/* Hreflang Tags */}
                <link rel="alternate" hrefLang="es-CL" href="https://beacademics.com/syncroedu" />
                <link rel="alternate" hrefLang="x-default" href="https://beacademics.com/syncroedu" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://beacademics.com/syncroedu" />
                <meta property="og:title" content="SyncroEdu | Compliance Escolar y Horarios Inteligentes para Colegios en Chile" />
                <meta property="og:description" content="Evite multas de la Superintendencia de Educación. Valide la proporción lectiva/no lectiva (Leyes 20.903, 21.625 y 19.070) y gestione horarios y reemplazos docentes en segundos." />
                <meta property="og:image" content="https://beacademics.com/Semaforo-1.png" />
                <meta property="og:locale" content="es_CL" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="SyncroEdu | Compliance Escolar y Horarios en Chile" />
                <meta property="twitter:description" content="Evite multas de la Superintendencia de Educación. Valide leyes docentes en tiempo real y optimice la gestión escolar." />
                <meta property="twitter:image" content="https://beacademics.com/Semaforo-1.png" />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchemaData)}
                </script>
            </Helmet>

            <UrgencyBar />

            {/* Header / Navigation Glassmorphism */}
            <header className="sticky top-0 left-0 right-0 z-40 bg-[#F5F5F7]/80 backdrop-blur-[20px] border-b border-black/5 transition-all duration-300">
                <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-6 md:gap-8">
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
                            <LogoContainer className="w-8 h-8 bg-[#34C759]/10 border-[#34C759]/20">
                                <img src="/Logo-SyncroEdu.png" alt="SyncroEdu" className="h-5 w-5 object-contain" />
                            </LogoContainer>
                            <span className="font-bold text-base tracking-tight text-[#1D1D1F]">SyncroEdu</span>
                            <span className="hidden md:inline-block px-2 py-0.5 bg-[#34C759]/10 text-[#248A3D] text-[11px] font-bold rounded-full border border-[#34C759]/20">
                                Chile Compliance
                            </span>
                        </div>

                        <div className="hidden lg:flex items-center gap-6 text-[#86868B]">
                            <button onClick={() => document.getElementById('pilares')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#1D1D1F] transition-colors cursor-pointer">Funcionalidades</button>
                            <button onClick={() => document.getElementById('riesgo-financiero')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#1D1D1F] transition-colors cursor-pointer">Impacto Normativo</button>
                            <button onClick={() => document.getElementById('caso-orione')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#1D1D1F] transition-colors cursor-pointer">Caso Verificado</button>
                            <button onClick={() => document.getElementById('comparativa')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#1D1D1F] transition-colors cursor-pointer">Comparativa</button>
                            <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#1D1D1F] transition-colors cursor-pointer">FAQ</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <a 
                            href="https://syncroedu.com" 
                            className="hidden sm:inline-flex text-xs font-semibold text-[#86868B] hover:text-[#1D1D1F] transition-colors px-3 py-1.5"
                        >
                            Acceso Clientes
                        </a>
                        <PrimaryButton 
                            variant="green"
                            size="sm"
                            onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
                            icon={<Zap className="w-3.5 h-3.5" />}
                        >
                            Agendar Demo
                        </PrimaryButton>
                    </div>
                </nav>
            </header>

            {/* SECCIÓN 2 — HERO */}
            <section id="hero" className="pt-20 pb-16 md:py-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">
                <div className="flex-1 text-center lg:text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-6 flex justify-center lg:justify-start"
                    >
                        <StatusBadge 
                            label="COMPLIANCE ESCOLAR & CONTINUIDAD OPERATIVA · CHILE" 
                            variant="success" 
                            pulse={true} 
                        />
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1D1D1F] leading-[1.08] mb-6 font-display"
                        style={{ textWrap: 'balance' }}
                    >
                        Proteja su colegio de multas millonarias y resuelva el horario en días.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="text-lg md:text-xl text-[#86868B] max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal"
                    >
                        SyncroEdu automatiza la confección de horarios académicos, audita en tiempo real las Leyes 20.903, 21.625 y 19.070 (proporción lectiva 65/35) y gestiona reemplazos docentes con trazabilidad legal ante la Superintendencia de Educación.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start"
                    >
                        <PrimaryButton 
                            variant="green"
                            size="lg"
                            onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
                            icon={<ArrowRight className="w-4 h-4" />}
                        >
                            Solicitar Demo Técnica
                        </PrimaryButton>

                        <PrimaryButton
                            variant="secondary"
                            size="lg"
                            href="https://wa.me/56964375050?text=Hola,%20deseo%20asesoría%20sobre%20SyncroEdu"
                            target="_blank"
                            rel="noreferrer"
                            icon={<MessageSquare className="w-4 h-4 text-[#34C759]" />}
                        >
                            Conversar por WhatsApp
                        </PrimaryButton>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-xs text-[#86868B] justify-center lg:justify-start font-medium"
                    >
                        <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#34C759]" /> Validación Ley 20.903 y 21.625</span>
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#34C759]" /> Datos reales de su dotación</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#34C759]" /> Implementación en 1 semana</span>
                    </motion.div>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex-1 w-full max-w-2xl"
                >
                    <div className="relative rounded-3xl bg-white border border-black/5 p-3 shadow-2xl overflow-hidden group">
                        {/* Apple Window Header */}
                        <div className="flex items-center justify-between px-3 py-2 border-b border-black/5 mb-3 bg-[#F5F5F7]/60 rounded-t-2xl">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
                                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
                            </div>
                            <span className="text-[11px] font-semibold text-[#86868B]">SyncroEdu — Plataforma de Compliance Escolar</span>
                            <div className="w-12" />
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-black/5 bg-white relative">
                            <img 
                                src="/Dashboard.PNG" 
                                alt="Dashboard SyncroEdu Compliance" 
                                className="w-full h-auto object-contain rounded-xl"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    if (e.currentTarget.parentElement) {
                                        e.currentTarget.parentElement.innerHTML += '<div class="h-80 flex items-center justify-center text-[#86868B] font-bold text-lg">Dashboard SyncroEdu</div>';
                                    }
                                }}
                            />
                        </div>

                        {/* Floating verified badge */}
                        <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-black/5 hidden sm:flex items-center gap-3 z-20">
                            <div className="w-10 h-10 rounded-xl bg-[#34C759]/10 border border-[#34C759]/20 flex items-center justify-center text-[#34C759]">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-[#1D1D1F]">Cumplimiento Normativo 100%</p>
                                <p className="text-[11px] text-[#86868B]">Proporción 65/35 y Ley 20.903 verificada</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* SECCIÓN 3 — SOCIAL PROOF BENTO BAR */}
            <section className="px-6 max-w-7xl mx-auto mb-16">
                <div className="rounded-3xl bg-white border border-black/5 p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <span className="text-xs font-bold text-[#86868B] uppercase tracking-wider block mb-1">Caso Verificado en Producción</span>
                        <p className="font-bold text-lg text-[#1D1D1F]">Colegio Particular Subvencionado (JEC)</p>
                    </div>

                    <div className="hidden md:block w-px h-10 bg-black/5" />

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 text-center w-full md:w-auto">
                        <div>
                            <p className="text-3xl font-extrabold text-[#34C759] tracking-tight">62</p>
                            <p className="text-xs text-[#86868B] font-medium">Docentes Activos</p>
                        </div>
                        <div>
                            <p className="text-3xl font-extrabold text-[#34C759] tracking-tight">36</p>
                            <p className="text-xs text-[#86868B] font-medium">Asistentes Educación</p>
                        </div>
                        <div>
                            <p className="text-3xl font-extrabold text-[#34C759] tracking-tight">900+</p>
                            <p className="text-xs text-[#86868B] font-medium">Estudiantes JEC</p>
                        </div>
                        <div>
                            <p className="text-3xl font-extrabold text-[#34C759] tracking-tight">1-3 días</p>
                            <p className="text-xs text-[#86868B] font-medium">Confección Total</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 4 — PROBLEMA / VULNERABILIDADES */}
            <section id="problema" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <StatusBadge label="DIAGNÓSTICO DEL SISTEMA ESCOLAR" variant="warning" pulse={false} className="mb-4" />
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4 font-display" style={{ textWrap: 'balance' }}>
                        ¿Su establecimiento presenta alguna de estas debilidades operacionales?
                    </h2>
                    <p className="text-base md:text-lg text-[#86868B] max-w-3xl mx-auto font-normal">
                        Diseñar horarios de forma manual o en planillas Excel expone a los colegios a riesgos normativos silenciosos que se transforman en sanciones ante visitas de la Superintendencia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <BentoCard glowColor="#FF3B30">
                        <div className="w-12 h-12 rounded-2xl bg-[#FF3B30]/10 border border-[#FF3B30]/20 flex items-center justify-center text-[#FF3B30] mb-5">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D1D1F] mb-2 font-display">La UTP colapsada al inicio del año</h3>
                        <p className="text-[#86868B] text-sm leading-relaxed">
                            Elaborar la malla horaria a mano toma semanas de desgaste, fórmulas frágiles en Excel y revisiones repetitivas que no contemplan las exigencias contractuales de la legislación chilena.
                        </p>
                    </BentoCard>

                    <BentoCard glowColor="#FF3B30">
                        <div className="w-12 h-12 rounded-2xl bg-[#FF3B30]/10 border border-[#FF3B30]/20 flex items-center justify-center text-[#FF3B30] mb-5">
                            <Scale className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D1D1F] mb-2 font-display">Contratos docentes con descalce legal</h3>
                        <p className="text-[#86868B] text-sm leading-relaxed">
                            La Ley 20.903 exige distribuciones estrictas (65% lectivas / 35% no lectivas). Un solo docente con sobrecarga de aula expone al colegio a multas de 1 a 1.000 UTM aplicadas por la Supereduc.
                        </p>
                    </BentoCard>

                    <BentoCard glowColor="#FF9500">
                        <div className="w-12 h-12 rounded-2xl bg-[#FF9500]/10 border border-[#FF9500]/20 flex items-center justify-center text-[#FF9500] mb-5">
                            <Smartphone className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D1D1F] mb-2 font-display">Reemplazos vía WhatsApp sin respaldo</h3>
                        <p className="text-[#86868B] text-sm leading-relaxed">
                            Ante ausencias de última hora, las coberturas se coordinan por mensajería informal. Sin bitácora auditada, el colegio queda vulnerable en fiscalizaciones y denuncias laborales.
                        </p>
                    </BentoCard>

                    <BentoCard glowColor="#FF3B30">
                        <div className="w-12 h-12 rounded-2xl bg-[#FF3B30]/10 border border-[#FF3B30]/20 flex items-center justify-center text-[#FF3B30] mb-5">
                            <DollarSign className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D1D1F] mb-2 font-display">Riesgo en Subvención PIE (Dec. 170)</h3>
                        <p className="text-[#86868B] text-sm leading-relaxed">
                            Una asignación incorrecta de horas de co-docencia puede obligar al reintegro de la subvención especial PIE: hasta $9.000.000 CLP por grupo con Necesidades Educativas Especiales.
                        </p>
                    </BentoCard>

                    <BentoCard glowColor="#5856D6" className="md:col-span-2 lg:col-span-2">
                        <div className="w-12 h-12 rounded-2xl bg-[#5856D6]/10 border border-[#5856D6]/20 flex items-center justify-center text-[#5856D6] mb-5">
                            <GitBranch className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D1D1F] mb-2 font-display">Desconexión crítica entre UTP y Administración</h3>
                        <p className="text-[#86868B] text-sm leading-relaxed">
                            La información horaria llega tarde a remuneraciones y sin concordancia contractual. Esto produce anexos extemporáneos, errores en liquidaciones y contingencias directas ante la Dirección del Trabajo.
                        </p>
                    </BentoCard>
                </div>
            </section>

            {/* SECCIÓN 5 — IMPACTO FINANCIERO CUANTIFICADO */}
            <section id="riesgo-financiero" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <StatusBadge label="EVALUACIÓN DE RIESGO ECONÓMICO" variant="danger" pulse={false} className="mb-4" />
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4 font-display" style={{ textWrap: 'balance' }}>
                        Pérdidas y contingencias evitables cada año escolar
                    </h2>
                    <p className="text-base md:text-lg text-[#86868B] max-w-3xl mx-auto font-normal">
                        La ausencia de control automatizado sobre la normativa educacional genera fugas financieras concretas. Estos son los 5 riesgos que SyncroEdu previene desde el primer día:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <BentoCard glowColor="#FF3B30">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-[#FF3B30] uppercase tracking-wider">Superintendencia</span>
                            <AlertTriangle className="w-5 h-5 text-[#FF3B30]" />
                        </div>
                        <div className="text-3xl md:text-4xl font-black text-[#1D1D1F] tracking-tight mb-2">
                            {counterAnimation(1320000)} <span className="text-xs font-semibold text-[#86868B]">CLP</span>
                        </div>
                        <h4 className="font-bold text-[#1D1D1F] text-base mb-2 font-display">Multa promedio por 1 docente</h4>
                        <p className="text-xs text-[#86868B] leading-relaxed">
                            Sanción típica de 20 UTM por incumplir la proporción lectiva/no lectiva en un solo contrato fiscalizado.
                        </p>
                    </BentoCard>

                    <BentoCard glowColor="#FF3B30">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-[#FF3B30] uppercase tracking-wider">Decreto N° 170</span>
                            <DollarSign className="w-5 h-5 text-[#FF3B30]" />
                        </div>
                        <div className="text-3xl md:text-4xl font-black text-[#1D1D1F] tracking-tight mb-2">
                            {counterAnimation(9000000)} <span className="text-xs font-semibold text-[#86868B]">CLP</span>
                        </div>
                        <h4 className="font-bold text-[#1D1D1F] text-base mb-2 font-display">Subvención PIE en contingencia</h4>
                        <p className="text-xs text-[#86868B] leading-relaxed">
                            Riesgo de reintegro por no acreditar las 3 horas de co-docencia requeridas en un curso de 5 alumnos NEE.
                        </p>
                    </BentoCard>

                    <BentoCard glowColor="#FF9500">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-[#FF9500] uppercase tracking-wider">Gestión Directiva</span>
                            <Clock className="w-5 h-5 text-[#FF9500]" />
                        </div>
                        <div className="text-3xl md:text-4xl font-black text-[#1D1D1F] tracking-tight mb-2">
                            {counterAnimation(1687500)} <span className="text-xs font-semibold text-[#86868B]">CLP</span>
                        </div>
                        <h4 className="font-bold text-[#1D1D1F] text-base mb-2 font-display">Costo en horas UTP manuales</h4>
                        <p className="text-xs text-[#86868B] leading-relaxed">
                            Más de 150 horas anuales del equipo directivo destinadas a cuadraturas y ajustes que pueden ser automáticos.
                        </p>
                    </BentoCard>

                    <BentoCard glowColor="#FF9500">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-[#FF9500] uppercase tracking-wider">Nómina Docente</span>
                            <TrendingUp className="w-5 h-5 text-[#FF9500]" />
                        </div>
                        <div className="text-3xl md:text-4xl font-black text-[#1D1D1F] tracking-tight mb-2">
                            {counterAnimation(4560000)} <span className="text-xs font-semibold text-[#86868B]">CLP</span>
                        </div>
                        <h4 className="font-bold text-[#1D1D1F] text-base mb-2 font-display">Fugas anuales por horas ociosas</h4>
                        <p className="text-xs text-[#86868B] leading-relaxed">
                            Horas contratadas no aprovechadas por ventanas horarias ineficientes (estimado 8 hrs/sem × 38 sem).
                        </p>
                    </BentoCard>

                    <BentoCard glowColor="#007AFF">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-[#007AFF] uppercase tracking-wider">Continuidad</span>
                            <Users className="w-5 h-5 text-[#007AFF]" />
                        </div>
                        <div className="text-3xl md:text-4xl font-black text-[#1D1D1F] tracking-tight mb-2">
                            {counterAnimation(2500000)} <span className="text-xs font-semibold text-[#86868B]">CLP</span>
                        </div>
                        <h4 className="font-bold text-[#1D1D1F] text-base mb-2 font-display">Ausentismo no detectado</h4>
                        <p className="text-xs text-[#86868B] leading-relaxed">
                            Impacto por licencias cortas y reiteradas sin monitoreo objetivo ni factor Bradford institucional.
                        </p>
                    </BentoCard>

                    {/* Total Card Bento Highlight */}
                    <div className="rounded-3xl bg-[#1C1C1E] border border-white/10 p-7 md:p-8 text-white flex flex-col justify-between shadow-xl">
                        <div>
                            <span className="text-xs font-bold text-[#34C759] uppercase tracking-widest block mb-2">Valor Anual Protegido</span>
                            <div className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
                                {counterAnimation(19067500)} <span className="text-xs font-semibold text-[#86868B]">CLP / año</span>
                            </div>
                            <p className="text-xs text-[#86868B] leading-relaxed">
                                Estimación de mitigación acumulada para un establecimiento subvencionado mediano (dotación de 35 a 45 funcionarios).
                            </p>
                        </div>
                        <div className="pt-6">
                            <PrimaryButton 
                                variant="green"
                                size="sm"
                                onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full"
                            >
                                Diagnosticar Mi Colegio &rarr;
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 6 — COMPARATIVA: TRADICIONAL VS SYNCROEDU */}
            <section id="comparativa" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <StatusBadge label="ARQUITECTURA DE SOFTWARE" variant="primary" pulse={false} className="mb-4" />
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4 font-display" style={{ textWrap: 'balance' }}>
                        SyncroEdu vs. Planillas y Generadores Tradicionales
                    </h2>
                    <p className="text-base md:text-lg text-[#86868B] max-w-3xl mx-auto font-normal">
                        Las herramientas genéricas extranjeras fueron diseñadas para ordenar bloques de tiempo, completamente ciegas al ordenamiento legal de la educación chilena.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Generador Tradicional */}
                    <div className="rounded-3xl bg-white border border-black/5 p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-black/5">
                            <div className="w-10 h-10 rounded-2xl bg-[#FF3B30]/10 flex items-center justify-center text-[#FF3B30]">
                                <XCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-[#1D1D1F] font-display">Generadores Tradicionales & Excel</h3>
                                <p className="text-xs text-[#86868B]">aSc Timetables · Prime Timetable · Planillas</p>
                            </div>
                        </div>

                        <ul className="space-y-4 text-sm text-[#86868B]">
                            <li className="flex items-start gap-3">
                                <XCircle className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                                <span>Distribuyen bloques sin validar la legislación docente chilena.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <XCircle className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                                <span>Sin calculadora de proporción lectiva/no lectiva (Leyes 20.903 y 21.625).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <XCircle className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                                <span>Sin registro ni bitácora legal para gestión de reemplazos de aula.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <XCircle className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                                <span>Sin auditoría de co-docencia según Decreto N° 170 PIE.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <XCircle className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                                <span>Sin integración fluida entre la UTP y el área de Administración y Finanzas.</span>
                            </li>
                        </ul>
                    </div>

                    {/* SyncroEdu Platform */}
                    <div className="rounded-3xl bg-white border border-[#34C759]/30 p-8 shadow-xl relative overflow-hidden">
                        <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-30 blur-xl bg-gradient-to-br from-[#34C759]/20 to-transparent" />
                        
                        <div className="relative z-10 flex items-center gap-3 mb-6 pb-6 border-b border-black/5">
                            <div className="w-10 h-10 rounded-2xl bg-[#34C759]/10 flex items-center justify-center text-[#34C759]">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-[#1D1D1F] font-display">SyncroEdu Ecosystem</h3>
                                <p className="text-xs text-[#34C759] font-semibold">Compliance Escolar y Continuidad Operativa</p>
                            </div>
                        </div>

                        <ul className="relative z-10 space-y-4 text-sm text-[#1D1D1F] font-medium">
                            <li className="flex items-start gap-3">
                                <Check className="w-4 h-4 text-[#34C759] shrink-0 mt-0.5" />
                                <span>Genera y valida horarios en concordancia exacta con la ley vigente.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-4 h-4 text-[#34C759] shrink-0 mt-0.5" />
                                <span>Calculadora 65/35 y 60/40 en tiempo real con semáforo por docente.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-4 h-4 text-[#34C759] shrink-0 mt-0.5" />
                                <span>Gestión de reemplazos desde app móvil con bitácora oficial en PDF.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-4 h-4 text-[#34C759] shrink-0 mt-0.5" />
                                <span>Auditoría de horas PIE Decreto N° 170 para evitar reintegros.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-4 h-4 text-[#34C759] shrink-0 mt-0.5" />
                                <span>Reportes automáticos directos para Contabilidad, Remuneraciones y RRHH.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 7 — LOS 4 PILARES DE SYNCROEDU */}
            <section id="pilares" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <StatusBadge label="MÓDULOS DE LA PLATAFORMA" variant="success" pulse={false} className="mb-4" />
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4 font-display">
                        Los 4 Pilares de Protección y Eficiencia
                    </h2>
                    <p className="text-base md:text-lg text-[#86868B] max-w-2xl mx-auto font-normal">
                        Diseñado de forma nativa para la estructura directiva y jurídica de los colegios chilenos.
                    </p>
                </div>

                {/* Segmented Control Pills */}
                <div className="flex justify-center mb-10 overflow-x-auto pb-2">
                    <div className="bg-[#E8E8ED] p-1 rounded-full flex gap-1 border border-black/5 text-xs sm:text-sm font-semibold">
                        {[
                            { label: 'Generación', icon: <Zap className="w-4 h-4" /> },
                            { label: 'Compliance Legal', icon: <Scale className="w-4 h-4" /> },
                            { label: 'Continuidad & Móvil', icon: <Smartphone className="w-4 h-4" /> },
                            { label: 'HR Analytics', icon: <BarChart3 className="w-4 h-4" /> }
                        ].map((tab, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                                    activeTab === idx 
                                        ? 'bg-white text-[#1D1D1F] shadow-xs' 
                                        : 'text-[#86868B] hover:text-[#1D1D1F]'
                                }`}
                            >
                                {tab.icon}
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pillar Tab Content Bento */}
                <div className="rounded-3xl bg-white border border-black/5 p-8 md:p-12 shadow-xl">
                    {activeTab === 0 && (
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6">
                                <StatusBadge label="MÓDULO 01 · MOTOR INTELIGENTE" variant="primary" pulse={false} />
                                <h3 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] font-display">
                                    De 3 semanas de incertidumbre a 1-3 días de confección.
                                </h3>
                                <p className="text-[#86868B] text-base md:text-lg leading-relaxed font-normal">
                                    El motor algorítmico resuelve el horario de su colegio en minutos, respetando todas las variables pedagógicas: disponibilidad docente, topes de asignaturas por día, salas especializadas y bloques de co-docencia PIE.
                                </p>
                                <div className="space-y-3 text-sm text-[#1D1D1F]">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0" />
                                        <span>Reducción de más del 80% en tiempo administrativo del equipo UTP.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0" />
                                        <span>Eliminación del doble traspaso de datos entre plataformas.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0" />
                                        <span>Inyección automática de la malla horaria aprobada a los docentes.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 w-full rounded-2xl overflow-hidden border border-black/5 bg-[#F5F5F7] p-2 shadow-inner">
                                <img src="/Generador.png" alt="Generador de Horarios SyncroEdu" className="w-full h-auto object-cover rounded-xl" />
                            </div>
                        </div>
                    )}

                    {activeTab === 1 && (
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6">
                                <StatusBadge label="MÓDULO 02 · ASESOR NORMATIVO" variant="success" pulse={false} />
                                <h3 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] font-display">
                                    Auditoría automática de las Leyes 20.903, 21.625 y 19070.
                                </h3>
                                <p className="text-[#86868B] text-base md:text-lg leading-relaxed font-normal">
                                    SyncroEdu actúa como asesor legal continuo. Comprueba en tiempo real que cada docente mantenga la proporción lectiva y no lectiva exigida por la legislación chilena, previniendo sanciones antes de cualquier inspección.
                                </p>
                                <div className="rounded-2xl bg-[#F5F5F7] border border-black/5 p-4 text-xs font-mono text-[#1D1D1F]">
                                    <div className="grid grid-cols-3 font-bold border-b border-black/10 pb-2 mb-2">
                                        <div>Régimen Normativo</div>
                                        <div className="text-center">Lectivas</div>
                                        <div className="text-center">No Lectivas</div>
                                    </div>
                                    <div className="grid grid-cols-3 py-1 text-[#86868B]">
                                        <div className="font-semibold text-[#1D1D1F]">Estándar Nacional</div>
                                        <div className="text-center text-[#34C759] font-bold">65%</div>
                                        <div className="text-center text-[#34C759] font-bold">35%</div>
                                    </div>
                                    <div className="grid grid-cols-3 py-1 text-[#86868B]">
                                        <div className="font-semibold text-[#1D1D1F]">1° Ciclo (≥80% Prioritarios)</div>
                                        <div className="text-center text-[#007AFF] font-bold">60%</div>
                                        <div className="text-center text-[#007AFF] font-bold">40%</div>
                                    </div>
                                </div>
                                <div className="space-y-3 text-sm text-[#1D1D1F]">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0" />
                                        <span>Semáforo de cumplimiento verde/amarillo/rojo por cada docente.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0" />
                                        <span>Clasificación MINEDUC automática para anexos contractuales.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 w-full rounded-2xl overflow-hidden border border-black/5 bg-[#F5F5F7] p-2 shadow-inner">
                                <img src="/Semaforo-1.png" alt="Compliance Semáforo Legal SyncroEdu" className="w-full h-auto object-cover rounded-xl" />
                            </div>
                        </div>
                    )}

                    {activeTab === 2 && (
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6">
                                <StatusBadge label="MÓDULO 03 · CONTINUIDAD EN TERRENO" variant="purple" pulse={false} />
                                <h3 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] font-display">
                                    Reemplazos urgentes desde el smartphone en segundos.
                                </h3>
                                <p className="text-[#86868B] text-base md:text-lg leading-relaxed font-normal">
                                    Los directivos pueden resolver ausencias imprevistas mientras recorren los pasillos del establecimiento. El buscador examina toda la dotación disponible y sugiere al docente o reemplazante idóneo.
                                </p>
                                <div className="space-y-3 text-sm text-[#1D1D1F]">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0" />
                                        <span>App Directiva nativa para iOS y Android.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0" />
                                        <span>Buscador de personal disponible en tiempo real según especialidad.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0" />
                                        <span>Generación de bitácora oficial en PDF lista para fiscalizaciones MINEDUC.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 w-full rounded-2xl overflow-hidden border border-black/5 bg-[#F5F5F7] p-2 shadow-inner">
                                <img src="/Dahsboard%20movil.png" alt="App Móvil SyncroEdu" className="w-full h-auto object-cover rounded-xl" />
                            </div>
                        </div>
                    )}

                    {activeTab === 3 && (
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6">
                                <StatusBadge label="MÓDULO 04 · INTELIGENCIA DE PERSONAS" variant="warning" pulse={false} />
                                <h3 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] font-display">
                                    Decisiones estratégicas respaldadas con analítica de RRHH.
                                </h3>
                                <p className="text-[#86868B] text-base md:text-lg leading-relaxed font-normal">
                                    SyncroEdu traduce la operación diaria en métricas predictivas de gestión de personas: ausentismo reiterado, tasa de ocupación de aulas y simulador financiero para el programa PIE.
                                </p>
                                <div className="space-y-3 text-sm text-[#1D1D1F]">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0" />
                                        <span>Cálculo automático de Bradford Factor (ausentismo corto y frecuente).</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0" />
                                        <span>Índice de Ocupación Docente y ratio de alumnos por profesional.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0" />
                                        <span>Simulador de costos y proyecciones presupuestarias para sostenedores.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 w-full rounded-2xl overflow-hidden border border-black/5 bg-[#F5F5F7] p-2 shadow-inner">
                                <img src="/Gestion-de-personas.png" alt="Analítica de RRHH Escolar" className="w-full h-auto object-cover rounded-xl" />
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* SECCIÓN 8 — CASO DE ÉXITO VERIFICADO */}
            <section id="caso-orione" className="py-16 md:py-24 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <StatusBadge label="CASO REAL DOCUMENTADO" variant="success" pulse={false} className="mb-4" />
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4 font-display">
                        Establecimiento Subvencionado: De 3 semanas a 1-3 días
                    </h2>
                    <p className="text-base md:text-lg text-[#86868B] max-w-2xl mx-auto font-normal">
                        Resultados auditados en un colegio particular subvencionado con jornada escolar completa.
                    </p>
                </div>

                <BentoCard glowColor="#34C759" className="p-8 md:p-10 mb-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-black/5 text-center sm:text-left">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-[#34C759]/10 border border-[#34C759]/20 flex items-center justify-center text-[#34C759]">
                                <Award className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-[#1D1D1F] font-display">Colegio Particular Subvencionado</h3>
                                <p className="text-xs text-[#86868B]">Región Metropolitana · Jornada Escolar Completa (JEC)</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 text-xs font-bold text-[#248A3D]">
                            <span className="bg-[#34C759]/10 px-3 py-1.5 rounded-full border border-[#34C759]/20">62 Docentes</span>
                            <span className="bg-[#34C759]/10 px-3 py-1.5 rounded-full border border-[#34C759]/20">36 Asistentes</span>
                            <span className="bg-[#34C759]/10 px-3 py-1.5 rounded-full border border-[#34C759]/20">900+ Alumnos</span>
                        </div>
                    </div>

                    <div className="mt-8 overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-black/5 text-xs font-bold text-[#86868B] uppercase tracking-wider">
                                    <th className="py-3 px-4">Indicador de Desempeño</th>
                                    <th className="py-3 px-4 text-[#FF3B30]">Método Previo (Excel)</th>
                                    <th className="py-3 px-4 text-[#34C759]">Con SyncroEdu</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black/5">
                                <tr>
                                    <td className="py-4 px-4 font-semibold text-[#1D1D1F]">Tiempo de confección del horario</td>
                                    <td className="py-4 px-4 text-[#FF3B30]">3 semanas intensivas de UTP</td>
                                    <td className="py-4 px-4 text-[#34C759] font-bold">1 a 3 días hábiles</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-4 font-semibold text-[#1D1D1F]">Traspaso manual a remuneraciones</td>
                                    <td className="py-4 px-4 text-[#FF3B30]">Sí (Alto riesgo de error humano)</td>
                                    <td className="py-4 px-4 text-[#34C759] font-bold">Automatizado 100%</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-4 font-semibold text-[#1D1D1F]">Trazabilidad legal ante fiscalización</td>
                                    <td className="py-4 px-4 text-[#FF3B30]">Parcial e incompleta</td>
                                    <td className="py-4 px-4 text-[#34C759] font-bold">Auditado y conforme a la ley</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </BentoCard>
            </section>

            {/* SECCIÓN 9 — ROLES DIRECTIVOS BENTO */}
            <section id="roles" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <StatusBadge label="INTEGRACIÓN TRANSVERSAL" variant="primary" pulse={false} className="mb-4" />
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4 font-display">
                        Resuelve las prioridades de cada miembro directivo
                    </h2>
                    <p className="text-base md:text-lg text-[#86868B] max-w-2xl mx-auto font-normal">
                        Una plataforma que une a Sostenedores, Directores y Jefaturas de UTP en un único canal de verdad técnica.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <BentoCard glowColor="#007AFF">
                        <div className="w-12 h-12 rounded-2xl bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center text-[#007AFF] mb-5">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D1D1F] mb-1 font-display">Para el Sostenedor</h3>
                        <p className="text-xs text-[#007AFF] font-semibold mb-4">Control Financiero y Mitigación de Riesgos</p>
                        <ul className="space-y-3 text-sm text-[#86868B]">
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#007AFF] shrink-0 mt-0.5" />
                                <span>Blindaje ante multas de la Superintendencia.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#007AFF] shrink-0 mt-0.5" />
                                <span>Protección de fondos de Subvención PIE.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#007AFF] shrink-0 mt-0.5" />
                                <span>Detección de sobrecontrataciones y fugas de nómina.</span>
                            </li>
                        </ul>
                    </BentoCard>

                    <BentoCard glowColor="#34C759">
                        <div className="w-12 h-12 rounded-2xl bg-[#34C759]/10 border border-[#34C759]/20 flex items-center justify-center text-[#34C759] mb-5">
                            <Smartphone className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D1D1F] mb-1 font-display">Para la Dirección</h3>
                        <p className="text-xs text-[#34C759] font-semibold mb-4">Continuidad y Operación Diaria</p>
                        <ul className="space-y-3 text-sm text-[#86868B]">
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#34C759] shrink-0 mt-0.5" />
                                <span>Reemplazos inmediatos desde el celular.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#34C759] shrink-0 mt-0.5" />
                                <span>Cero aulas desatendidas durante la jornada.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#34C759] shrink-0 mt-0.5" />
                                <span>Bitácora oficial lista para fiscalizadores.</span>
                            </li>
                        </ul>
                    </BentoCard>

                    <BentoCard glowColor="#5856D6">
                        <div className="w-12 h-12 rounded-2xl bg-[#5856D6]/10 border border-[#5856D6]/20 flex items-center justify-center text-[#5856D6] mb-5">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D1D1F] mb-1 font-display">Para la UTP</h3>
                        <p className="text-xs text-[#5856D6] font-semibold mb-4">Agilidad Pedagógica sin Estrés</p>
                        <ul className="space-y-3 text-sm text-[#86868B]">
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#5856D6] shrink-0 mt-0.5" />
                                <span>Horarios listos en 1 a 3 días sin errores.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#5856D6] shrink-0 mt-0.5" />
                                <span>Asignación automática de horas de co-docencia.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#5856D6] shrink-0 mt-0.5" />
                                <span>Eliminación de semanas de cálculos manuales.</span>
                            </li>
                        </ul>
                    </BentoCard>
                </div>
            </section>

            {/* SECCIÓN 10 — PROCESO DE IMPLEMENTACIÓN BENTO */}
            <section id="proceso" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <StatusBadge label="DESPLIEGUE RÁPIDO" variant="success" pulse={false} className="mb-4" />
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4 font-display">
                        Operando en su colegio en 1 semana
                    </h2>
                    <p className="text-base md:text-lg text-[#86868B] max-w-2xl mx-auto font-normal">
                        Un proceso acompañado por especialistas en normativa educacional chilena.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { step: '01', title: 'Diagnóstico Inicial', desc: 'Revisión breve de la dotación y estructura contractual del colegio.', time: 'Mismo día', icon: <Phone className="w-5 h-5 text-[#34C759]" /> },
                        { step: '02', title: 'Demo Personalizada', desc: 'Sesión técnica de 30-45 minutos mostrando la plataforma con datos modelo.', time: '45 minutos', icon: <Zap className="w-5 h-5 text-[#34C759]" /> },
                        { step: '03', title: 'Carga & Setup', desc: 'Importación segura de dotación, salas, asignaturas y restricciones.', time: '2-3 días', icon: <Cloud className="w-5 h-5 text-[#34C759]" /> },
                        { step: '04', title: 'Capacitación Directiva', desc: '3 talleres virtuales con el equipo de UTP, Dirección y Administración.', time: '1 semana', icon: <Award className="w-5 h-5 text-[#34C759]" /> }
                    ].map((item, i) => (
                        <BentoCard key={i} glowColor="#34C759" className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-2xl font-black text-[#34C759] font-mono">{item.step}</span>
                                <span className="text-[11px] font-semibold text-[#86868B] bg-[#E8E8ED] px-2.5 py-1 rounded-full">{item.time}</span>
                            </div>
                            <div className="mb-3">{item.icon}</div>
                            <h4 className="font-bold text-base text-[#1D1D1F] mb-2 font-display">{item.title}</h4>
                            <p className="text-xs text-[#86868B] leading-relaxed">{item.desc}</p>
                        </BentoCard>
                    ))}
                </div>
            </section>

            {/* SECCIÓN 11 — INFRAESTRUCTURA & SEGURIDAD */}
            <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <StatusBadge label="SEGURIDAD EMPRESARIAL" variant="primary" pulse={false} className="mb-4" />
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4 font-display">
                        Infraestructura en la Nube de Alta Disponibilidad
                    </h2>
                    <p className="text-base md:text-lg text-[#86868B] max-w-2xl mx-auto font-normal">
                        Garantizamos la privacidad y seguridad criptográfica de los datos de su institución.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <BentoCard glowColor="#007AFF">
                        <Cloud className="w-8 h-8 text-[#007AFF] mb-4" />
                        <h4 className="font-bold text-base text-[#1D1D1F] mb-2 font-display">Google Cloud Platform</h4>
                        <p className="text-xs text-[#86868B] leading-relaxed">Infraestructura sobre servidores Google Cloud con 99.9% de uptime garantizado.</p>
                    </BentoCard>

                    <BentoCard glowColor="#34C759">
                        <Lock className="w-8 h-8 text-[#34C759] mb-4" />
                        <h4 className="font-bold text-base text-[#1D1D1F] mb-2 font-display">Encriptación SHA-256</h4>
                        <p className="text-xs text-[#86868B] leading-relaxed">Cifrado de extremo a extremo en tránsito y en reposo con backups diarios automatizados.</p>
                    </BentoCard>

                    <BentoCard glowColor="#5856D6">
                        <Building2 className="w-8 h-8 text-[#5856D6] mb-4" />
                        <h4 className="font-bold text-base text-[#1D1D1F] mb-2 font-display">Multi-Tenant Aislado</h4>
                        <p className="text-xs text-[#86868B] leading-relaxed">Bases de datos independientes y estrictamente compartimentadas para cada establecimiento.</p>
                    </BentoCard>

                    <BentoCard glowColor="#FF9500">
                        <Zap className="w-8 h-8 text-[#FF9500] mb-4" />
                        <h4 className="font-bold text-base text-[#1D1D1F] mb-2 font-display">Sincronización Continua</h4>
                        <p className="text-xs text-[#86868B] leading-relaxed">Cualquier ajuste realizado en la web se propaga a la app móvil de los directivos al instante.</p>
                    </BentoCard>
                </div>
            </section>

            {/* SECCIÓN 12 — FAQ ACCORDION BENTO */}
            <section id="faq" className="py-16 md:py-24 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-14">
                    <StatusBadge label="PREGUNTAS FRECUENTES" variant="primary" pulse={false} className="mb-4" />
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                        Preguntas Frecuentes sobre SyncroEdu
                    </h2>
                </div>

                <div className="space-y-4">
                    {[
                        { 
                            q: "¿Reemplaza completamente el Excel y generadores tradicionales como aSc Timetables?", 
                            a: "Sí, de manera integral. SyncroEdu unifica la generación de la malla horaria con la validación de la legislación chilena (Leyes 20.903, 21.625 y 19.070) y la gestión de reemplazos en terreno, eliminando la duplicación de planillas y el riesgo de error humano." 
                        },
                        { 
                            q: "¿Qué sucede si debemos modificar el horario en medio del año académico?", 
                            a: "El editor interactivo permite mover bloques y cambiar salas en segundos. El sistema verifica instantáneamente si el cambio genera algún conflicto legal o pedagógico, guardando un registro auditable de cada modificación." 
                        },
                        { 
                            q: "¿Cuánto tiempo toma el proceso de implementación?", 
                            a: "El despliegue toma aproximadamente 1 semana. Nuestro equipo de soporte realiza la carga inicial de docentes, contratos y restricciones, acompañada de 3 capacitaciones al equipo directivo." 
                        },
                        { 
                            q: "¿Cómo funciona para colegios con Programa de Integración Escolar (Decreto 170 PIE)?", 
                            a: "SyncroEdu incorpora un módulo específico para el Decreto 170. Asegura que los bloques de co-docencia de 3 horas cronológicas se asignen de manera coordinada entre profesores de aula y especialistas, protegiendo la subvención de contingencias." 
                        },
                        { 
                            q: "¿El valor de la suscripción varía según el número de funcionarios?", 
                            a: "Sí. Contamos con planes adaptados por tramos de dotación total (docentes y asistentes de la educación), lo que permite a colegios pequeños, medianos y grandes acceder a la plataforma con tarifas proporcionales." 
                        }
                    ].map((faq, i) => (
                        <div key={i} className="rounded-2xl border border-black/5 bg-white overflow-hidden shadow-xs">
                            <button 
                                className="w-full text-left px-6 py-5 font-bold text-[#1D1D1F] flex justify-between items-center hover:bg-[#F5F5F7] transition-colors cursor-pointer"
                                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                            >
                                <span className="pr-4 font-display text-base md:text-lg">{faq.q}</span>
                                <span className="text-xl font-bold text-[#34C759] shrink-0">{faqOpen === i ? '−' : '+'}</span>
                            </button>
                            <AnimatePresence>
                                {faqOpen === i && (
                                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                                        <div className="px-6 pb-6 text-[#86868B] text-sm leading-relaxed border-t border-black/5 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECCIÓN 13 — FORMULARIO & CONTACTO BENTO */}
            <section id="formulario" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6">
                        <StatusBadge label="DEMOSTRACIÓN TÉCNICA PERSONALIZADA" variant="success" pulse={true} />
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display" style={{ textWrap: 'balance' }}>
                            Agende una demostración con datos reales.
                        </h2>
                        <p className="text-[#86868B] text-base leading-relaxed font-normal">
                            En 30 a 45 minutos le mostraremos SyncroEdu operando con un caso similar al de su establecimiento.
                        </p>

                        <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-3 text-sm text-[#1D1D1F]">
                                <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0" />
                                <span>Generador algorítmico trabajando en vivo.</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-[#1D1D1F]">
                                <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0" />
                                <span>Calculadora 65/35 auditando contratos docentes.</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-[#1D1D1F]">
                                <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0" />
                                <span>Demostración de la App Móvil para reemplazos urgentes.</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-[#1D1D1F]">
                                <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0" />
                                <span>Simulación de ahorro y protección de subvención PIE.</span>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a 
                                href="https://wa.me/56964375050" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="inline-flex items-center gap-3 bg-white px-6 py-3.5 rounded-full shadow-sm border border-black/5 hover:border-[#34C759] text-[#1D1D1F] font-bold text-sm transition-all"
                            >
                                <Phone className="w-4 h-4 text-[#34C759]" />
                                <span>+56 9 6437 5050 (WhatsApp Directo)</span>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="rounded-3xl bg-white border border-black/5 p-8 md:p-10 shadow-xl">
                            {formSubmitted ? (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                                    <div className="w-16 h-16 rounded-full bg-[#34C759]/10 text-[#34C759] flex items-center justify-center mx-auto mb-4">
                                        <Check className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#1D1D1F] mb-2 font-display">¡Solicitud Recibida con Éxito!</h3>
                                    <p className="text-[#86868B] text-sm mb-6">Redirigiendo a WhatsApp con su asesor asignado para coordinar día y hora...</p>
                                    <div className="flex justify-center">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#34C759]"></div>
                                    </div>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    <div className="border-b border-black/5 pb-4 mb-4">
                                        <h3 className="text-xl font-bold text-[#1D1D1F] font-display">Solicitar Demo Gratuita de SyncroEdu</h3>
                                        <p className="text-xs text-[#86868B]">Complete los datos para coordinar una sesión técnica vía Meet o Zoom.</p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-[#1D1D1F] uppercase tracking-wider mb-2">Nombre y Apellido</label>
                                            <input required name="nombre" type="text" className="w-full bg-[#F5F5F7] border border-black/5 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#34C759] focus:bg-white transition-all text-[#1D1D1F]" placeholder="Ej: María González" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-[#1D1D1F] uppercase tracking-wider mb-2">Nombre del Colegio</label>
                                            <input required name="colegio" type="text" className="w-full bg-[#F5F5F7] border border-black/5 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#34C759] focus:bg-white transition-all text-[#1D1D1F]" placeholder="Ej: Colegio San Agustín" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-[#1D1D1F] uppercase tracking-wider mb-2">Cargo Institucional</label>
                                        <select required name="cargo" className="w-full bg-[#F5F5F7] border border-black/5 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#34C759] focus:bg-white transition-all text-[#1D1D1F]">
                                            <option value="">-- Seleccione su cargo --</option>
                                            <option value="Sostenedor">Sostenedor / Propietario / Fundación</option>
                                            <option value="Director">Director / Directora</option>
                                            <option value="UTP">Jefatura de UTP</option>
                                            <option value="Administrador">Administrador / Finanzas</option>
                                            <option value="Otro">Otro cargo directivo</option>
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-[#1D1D1F] uppercase tracking-wider mb-2">Correo Electrónico</label>
                                            <input required name="email" type="email" className="w-full bg-[#F5F5F7] border border-black/5 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#34C759] focus:bg-white transition-all text-[#1D1D1F]" placeholder="contacto@micolegio.cl" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-[#1D1D1F] uppercase tracking-wider mb-2">Teléfono o WhatsApp</label>
                                            <input required name="telefono" type="tel" className="w-full bg-[#F5F5F7] border border-black/5 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#34C759] focus:bg-white transition-all text-[#1D1D1F]" placeholder="+56 9 XXXX XXXX" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-[#1D1D1F] uppercase tracking-wider mb-2">Dotación Estimada (Docentes + Asistentes)</label>
                                        <select required name="funcionarios" className="w-full bg-[#F5F5F7] border border-black/5 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#34C759] focus:bg-white transition-all text-[#1D1D1F]">
                                            <option value="">-- Seleccione el tramo de dotación --</option>
                                            <option value="Hasta 30 funcionarios">Hasta 30 funcionarios</option>
                                            <option value="31 a 60 funcionarios">31 a 60 funcionarios</option>
                                            <option value="61 a 100 funcionarios">61 a 100 funcionarios</option>
                                            <option value="Más de 100 funcionarios">Más de 100 funcionarios</option>
                                        </select>
                                    </div>

                                    <PrimaryButton 
                                        variant="green"
                                        size="lg"
                                        className="w-full mt-4"
                                        icon={<ArrowRight className="w-4 h-4" />}
                                    >
                                        Agendar Demo de SyncroEdu
                                    </PrimaryButton>

                                    <p className="text-[11px] text-center text-[#86868B] pt-2">
                                        🔒 Sus datos se tratan bajo estricta confidencialidad institucional. Cero spam.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 14 — CTA FINAL */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="rounded-3xl bg-[#1C1C1E] border border-white/10 p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                        <StatusBadge label="TEMPORADA DE CONTRATACIÓN ESCOLAR" variant="success" pulse={true} className="mx-auto" />
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display" style={{ textWrap: 'balance' }}>
                            Llegue al inicio del año escolar con certeza legal y sin semanas de estrés.
                        </h2>
                        <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed">
                            Le demostraremos en vivo cómo SyncroEdu resuelve en días lo que hoy le toma semanas a su equipo.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <PrimaryButton 
                                variant="green"
                                size="lg"
                                href="https://wa.me/56964375050?text=Hola,%20quisiera%20agendar%20una%20demostración%20de%20SyncroEdu"
                                target="_blank"
                                rel="noreferrer"
                                icon={<MessageSquare className="w-4 h-4 text-white" />}
                            >
                                Hablar por WhatsApp
                            </PrimaryButton>

                            <PrimaryButton 
                                variant="secondary"
                                size="lg"
                                onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Completar Formulario
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 15 — FOOTER APPLE HIG */}
            <footer className="bg-[#1C1C1E] text-[#86868B] py-14 text-sm border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <LogoContainer className="w-8 h-8 bg-white/10 border-white/15">
                                <img src="/Logo-SyncroEdu.png" alt="SyncroEdu" className="h-5 w-5 object-contain" />
                            </LogoContainer>
                            <span className="font-bold text-lg text-white tracking-tight">SyncroEdu</span>
                        </div>
                        <p className="text-xs text-[#86868B] max-w-md leading-relaxed">
                            La plataforma de Compliance Escolar, Continuidad Operativa y Optimización de Recursos Humanos para establecimientos educacionales en Chile. Desarrollada por BE Academic.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-xs uppercase tracking-widest text-white mb-4">Navegación</h4>
                        <div className="flex flex-col gap-2.5 text-xs">
                            <button onClick={() => document.getElementById('pilares')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors text-left cursor-pointer">Funcionalidades</button>
                            <button onClick={() => document.getElementById('riesgo-financiero')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors text-left cursor-pointer">Riesgo Financiero</button>
                            <button onClick={() => document.getElementById('caso-orione')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors text-left cursor-pointer">Caso Verificado</button>
                            <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors text-left cursor-pointer">Preguntas Frecuentes</button>
                            <Link to="/legal" className="hover:text-white transition-colors">Términos Legales</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-xs uppercase tracking-widest text-white mb-4">Contacto</h4>
                        <div className="space-y-2 text-xs">
                            <p className="flex items-center gap-2">
                                <Phone className="w-3.5 h-3.5 text-[#34C759]" />
                                <a href="tel:+56964375050" className="hover:text-white transition-colors">+56 9 6437 5050</a>
                            </p>
                            <p className="flex items-center gap-2">
                                <Mail className="w-3.5 h-3.5 text-[#34C759]" />
                                <a href="mailto:ventas@syncroedu.com" className="hover:text-white transition-colors">ventas@syncroedu.com</a>
                            </p>
                            <p className="text-[11px] text-[#86868B] pt-2">Lunes a Viernes · 9:00 a 18:00 hrs</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-[#86868B] gap-4">
                    <p>SyncroEdu &copy; {new Date().getFullYear()} Beacademics SpA. Todos los derechos reservados.</p>
                    <p>Diseñado con estándares Apple HIG & Bento Grid para colegios en Chile 🇨🇱</p>
                </div>
            </footer>

            {/* BOTÓN FLOTANTE WHATSAPP APPLE HIG */}
            <a 
                href="https://wa.me/56964375050?text=Hola,%20deseo%20consultar%20sobre%20SyncroEdu" 
                target="_blank" 
                rel="noreferrer" 
                className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#34C759] text-white px-5 py-3 rounded-full shadow-[0_4px_20px_rgba(52,199,89,0.4)] font-semibold text-sm hover:scale-105 active:scale-95 transition-all"
                aria-label="Contactar por WhatsApp"
            >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span className="hidden sm:inline">¿Dudas? Hablemos</span>
            </a>
        </div>
    );
}
