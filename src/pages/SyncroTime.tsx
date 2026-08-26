import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

type Lang = 'es' | 'en' | 'pt';

const content = {
    es: {
        metaTitle: 'SyncroTime | Generador de Horarios Escolares Inteligente y Automático',
        metaDescription: 'SyncroTime es el software global para creación y optimización automática de horarios escolares. Diseña horarios sin topes docentes ni de salas en minutos con inteligencia algorítmica.',
        metaKeywords: 'generador de horarios escolares, software horarios colegios, confeccion de horarios escolares, horarios sin topes, programa para hacer horarios de clases, algoritmo horarios escolares, timetable maker',
        navFunc: 'Funcionalidades',
        navBenefits: 'Beneficios',
        navFaq: 'Preguntas Frecuentes',
        login: 'Iniciar Sesión',
        pricing: 'Ver Precios',
        heroTitle1: 'Generación de',
        heroTitle2: 'Horarios Exacta.',
        heroSubtitle: 'Arma tu puzzle escolar en minutos, sin topes ni estrés.',
        heroDesc: 'El motor generador de horarios más inteligente del mercado global. Se adapta a todas las restricciones de tu institución para facilitar la creación, edición y reportabilidad de la carga académica de forma infalible y automatizada.',
        heroCta1: 'Cotizar Ahora',
        heroCta2: 'Conversar con experto ›',
        imgAlt: 'Vista Panorámica de Horario - SyncroTime Dashboard',
        problemHeading: '¿Semanas atrapado armando horarios que siempre terminan con topes?',
        problemDesc: 'Despedirse de los pizarrones magnéticos y de las caóticas hojas de cálculo ya es una realidad. SyncroTime toma todas tus variables docentes, reglas institucionales e infraestructura, y genera la estructura ideal en minutos. Recupera tu tiempo y tu cordura.',
        featuresTitle: 'El poder de un Horario Inteligente',
        feat1Title: 'Motor de Generación Ultra-Rápido',
        feat1Desc: 'Olvídate del agotador trabajo manual. Ingresa tus docentes y asignaturas; deja que nuestro avanzado algoritmo procese miles de combinaciones en segundos para entregarte la distribución perfecta, sin topes ni conflictos.',
        feat2Title: 'Edición Intuitiva Drag & Drop',
        feat2Desc: 'Afina detalles arrastrando y soltando como en un juego. Nuestro sistema actúa como un copiloto, mostrándote "espacios seguros" en verde y bloqueando movimientos prohibidos para que nunca te equivoques.',
        feat3Title: 'Control a Vista de Pájaro',
        feat3Desc: 'Analiza tu colegio desde cualquier ángulo en tiempo real. Alterna instantáneamente entre Vista Docente, Vista Curso y Panorámicas Globales para detectar necesidades y optimizar cada sala.',
        feat4Title: 'Reportabilidad a un Clic',
        feat4Desc: 'Basta de transcribir horarios. Descarga sábanas institucionales complejas en Excel o imprime horarios individuales hermosos en PDF listos para entregar a cada docente. Profesionaliza tu gestión.',
        feat5Title: 'Sistema de Alertas Anti-Topes en Vivo',
        feat5Desc: 'Mantén el control absoluto. Durante la edición manual, si intentas mover una clase a un bloque que genera un choque de horarios o incumple una restricción, el sistema te alerta instantáneamente dejándote decidir si deseas abortar el movimiento para proteger el horario, o confirmar el cambio y asumir la excepción.',
        benefitsTitle: 'Por qué elegir SyncroTime en tu Institución',
        ben1Title: 'Precisión Absoluta',
        ben1Desc: 'Cero cruces de horario, cero profesores a dos bandas y respeto total por las ventanas pedagógicas configuradas.',
        ben2Title: 'Agilidad Visual',
        ben2Desc: 'Mueve piezas como en un tablero interactivo. La edición basada en colores e indicadores visuales hace el trabajo arduo algo simple.',
        ben3Title: 'Restricciones Flexibles',
        ben3Desc: 'Define las reglas del juego: bloqueos de disponibilidad docente, prioridades de aulas o salas de laboratorio. El motor lo comprende todo.',
        faqTitle: 'Preguntas Frecuentes sobre el Generador de Horarios',
        faqs: [
            {
                q: '¿Cómo garantiza SyncroTime que no existan cruces de horarios o topes docentes?',
                a: 'SyncroTime utiliza un algoritmo avanzado de resolución de restricciones con validación en tiempo real. Verifica simultáneamente la disponibilidad del profesor, la sala asignada, las restricciones del curso y los límites pedagógicos antes de fijar cualquier bloque.'
            },
            {
                q: '¿Es compatible con instituciones de cualquier país y nivel educativo?',
                a: 'Sí. SyncroTime es una plataforma 100% web y flexible, configurada para colegios de educación básica, secundaria, bachilleratos, escuelas técnicas y universidades en más de 20 países.'
            },
            {
                q: '¿Se pueden exportar los horarios a Excel y PDF?',
                a: 'Sí. Con un solo clic puedes descargar la sábana global del colegio en formato Excel para edición o análisis, así como generar horarios individuales en PDF para cada profesor y curso.'
            },
            {
                q: '¿Qué pasa si necesito hacer cambios a mitad de semestre?',
                a: 'Puedes editar cualquier bloque en segundos mediante el sistema Drag & Drop. Las alertas en vivo te indicarán al instante si el cambio afecta a otros docentes o salas.'
            }
        ],
        ctaTitle: '¿Listo para generar tu próximo ciclo académico?',
        ctaDesc: 'Desbloquea el potencial organizativo de tu establecimiento. Solicita ahora mismo una demostración de SyncroTime.',
        ctaBtn1: 'Ver Planes y Precios',
        ctaBtn2: 'Hablar directamente por WhatsApp',
        footerTag: 'BE Academic. Ecosistema Tecnológico Global para la Educación.'
    },
    en: {
        metaTitle: 'SyncroTime | AI School Timetable & Schedule Generator Software',
        metaDescription: 'SyncroTime is the global intelligent school timetable software. Create conflict-free schedules in minutes, manage teacher constraints, room allocation, and curriculum effortlessly.',
        metaKeywords: 'school timetable software, automatic schedule generator, school schedule creator, school timetable maker, conflict-free timetable, AI timetable generator, university schedule builder, school scheduling software',
        navFunc: 'Features',
        navBenefits: 'Benefits',
        navFaq: 'FAQ',
        login: 'Sign In',
        pricing: 'View Pricing',
        heroTitle1: 'Flawless School',
        heroTitle2: 'Timetable Generation.',
        heroSubtitle: 'Build your school schedule in minutes, 100% conflict-free.',
        heroDesc: 'The world’s most intelligent timetable generation engine. SyncroTime effortlessly adapts to all institutional rules, teacher availability, and classroom constraints to deliver optimized schedules in seconds.',
        heroCta1: 'Get a Quote',
        heroCta2: 'Talk to a Scheduling Expert ›',
        imgAlt: 'Panoramic Timetable View - SyncroTime Dashboard',
        problemHeading: 'Spending weeks stuck building schedules that still end with clashes?',
        problemDesc: 'Say goodbye to magnetic boards and chaotic spreadsheets. SyncroTime ingests teacher constraints, subjects, and room capacities, computing the optimal conflict-free schedule in minutes. Reclaim your time.',
        featuresTitle: 'The Power of Intelligent Timetabling',
        feat1Title: 'Ultra-Fast AI Generation Engine',
        feat1Desc: 'No more manual trial-and-error. Enter your staff and subjects; our algorithmic engine computes thousands of combinations in seconds, delivering a balanced distribution without double-bookings.',
        feat2Title: 'Intuitive Drag & Drop Editor',
        feat2Desc: 'Fine-tune schedule slots effortlessly. SyncroTime highlights safe slots in green and prevents impossible moves, acting as your automated co-pilot.',
        feat3Title: 'Bird’s-Eye Panoramic Control',
        feat3Desc: 'Inspect your entire institution from any perspective. Seamlessly toggle between Teacher View, Class View, and Room View to optimize facility utilization.',
        feat4Title: 'One-Click Export & Reporting',
        feat4Desc: 'Never manually transcribe schedules again. Export comprehensive institutional matrices to Excel or generate printable, high-resolution PDFs for teachers and students.',
        feat5Title: 'Live Anti-Clash Alert System',
        feat5Desc: 'Stay in total control. If a manual shift triggers a teacher conflict or room overload, the system alerts you in real time with instant resolution options.',
        benefitsTitle: 'Why Schools Worldwide Choose SyncroTime',
        ben1Title: 'Absolute Accuracy',
        ben1Desc: 'Zero schedule overlaps, zero double-booked teachers, and full compliance with pedagogical requirements.',
        ben2Title: 'Visual Agility',
        ben2Desc: 'Manage time slots on an interactive visual board. Color-coded markers make complex scheduling intuitive.',
        ben3Title: 'Flexible Custom Rules',
        ben3Desc: 'Configure availability blocks, teacher preferences, specialized labs, and room priorities. The algorithm handles it all.',
        faqTitle: 'Frequently Asked Questions about SyncroTime',
        faqs: [
            {
                q: 'How does SyncroTime prevent timetable clashes and double-booked teachers?',
                a: 'SyncroTime utilizes a high-performance constraint solver with real-time verification. It simultaneously checks teacher availability, room capacity, course requirements, and pedagogical limits.'
            },
            {
                q: 'Is SyncroTime suitable for any educational system globally?',
                a: 'Yes. SyncroTime is a 100% cloud-based, customizable platform used by primary schools, high schools, academies, and universities worldwide.'
            },
            {
                q: 'Can schedules be exported to Excel and PDF formats?',
                a: 'Yes. In one click you can export the full master grid to Excel or generate clean, individual timetable PDFs for teachers and classrooms.'
            },
            {
                q: 'What happens if a teacher change is needed mid-year?',
                a: 'You can adjust any block in seconds using the Drag & Drop editor. Live visual warnings immediately alert you if any move affects other staff or rooms.'
            }
        ],
        ctaTitle: 'Ready to generate your next academic schedule?',
        ctaDesc: 'Unlock the organizational efficiency of your educational institution. Request a live SyncroTime demo today.',
        ctaBtn1: 'View Plans & Pricing',
        ctaBtn2: 'Chat directly on WhatsApp',
        footerTag: 'BE Academic. Global Educational Technology Ecosystem.'
    },
    pt: {
        metaTitle: 'SyncroTime | Gerador Inteligente de Grade Horária e Horários Escolares',
        metaDescription: 'SyncroTime é o software inteligente para geração automática de horários escolares e acadêmicos. Crie grades horárias sem conflitos de professores ou salas em minutos.',
        metaKeywords: 'gerador de grade horaria escolar, software de horarios escolares, criador de grade de aulas, montar horario escolar automatico, horario escolar sem conflito, grade horaria colegio, montar horario de professores',
        navFunc: 'Recursos',
        navBenefits: 'Benefícios',
        navFaq: 'Dúvidas Frequentes',
        login: 'Entrar',
        pricing: 'Ver Preços',
        heroTitle1: 'Geração de Grade',
        heroTitle2: 'Horária Exata.',
        heroSubtitle: 'Monte o horário escolar em minutos, sem conflitos nem estresse.',
        heroDesc: 'O motor gerador de horários mais inteligente do mercado global. Adapta-se a todas as restrições da sua instituição para criar, editar e emitir relatórios de carga horária de forma infalível e 100% automatizada.',
        heroCta1: 'Solicitar Cotação',
        heroCta2: 'Falar com Especialista ›',
        imgAlt: 'Visão Panorâmica da Grade Horária - SyncroTime Dashboard',
        problemHeading: 'Semanas travado montando horários que sempre terminam com choques de aulas?',
        problemDesc: 'Diga adeus às planilhas manuais e aos quadros magnéticos. O SyncroTime processa a disponibilidade dos professores, turmas e salas, gerando a grade perfeita em minutos. Recupere o seu tempo.',
        featuresTitle: 'O Poder de um Horário Escolar Inteligente',
        feat1Title: 'Motor de Geração Ultra-Rápido',
        feat1Desc: 'Esqueça o desgaste manual. Insira professores e disciplinas; nosso algoritmo processa milhares de combinações em segundos para entregar a grade ideal, sem sobreposição.',
        feat2Title: 'Edição Intuitiva Arrastar e Soltar',
        feat2Desc: 'Ajuste aulas com facilidade arrastando blocos. O sistema atua como copiloto, sinalizando espaços livres em verde e bloqueando movimentos inválidos.',
        feat3Title: 'Visão Panorâmica Completa',
        feat3Desc: 'Analise a instituição por qualquer ângulo em tempo real. Alterne instantaneamente entre Visão por Professor, Visão por Turma e Visão por Sala.',
        feat4Title: 'Relatórios e Impressão em 1 Clique',
        feat4Desc: 'Chega de retrabalho. Exporte a grade geral para Excel ou gere horários individuais em PDF de alta qualidade prontos para entregar aos professores.',
        feat5Title: 'Alertas Anti-Conflito em Tempo Real',
        feat5Desc: 'Controle absoluto. Durante edições manuais, qualquer choque de professor ou sala é imediatamente sinalizado com orientações de ajuste.',
        benefitsTitle: 'Por que escolher o SyncroTime em sua Escola',
        ben1Title: 'Precisão Absoluta',
        ben1Desc: 'Zero choques de horário, zero professores em duas salas ao mesmo tempo e respeito integral às janelas pedagógicas.',
        ben2Title: 'Agilidade Visual',
        ben2Desc: 'Mova blocos como em um tabuleiro intuitivo. A interface visual e colorida torna o processo simples e ágil.',
        ben3Title: 'Restrições Personalizadas',
        ben3Desc: 'Defina regras como folgas, dias bloqueados, laboratórios específicos e limites de aulas consecutivas.',
        faqTitle: 'Perguntas Frequentes sobre o Gerador de Horários',
        faqs: [
            {
                q: 'Como o SyncroTime garante que não haverá choques de professores ou salas?',
                a: 'O SyncroTime possui um algoritmo avançado de otimização combinatória que checa em tempo real a disponibilidade de cada professor, salas, disciplinas e diretrizes pedagógicas.'
            },
            {
                q: 'Funciona para qualquer tipo de colégio, escola técnica ou faculdade?',
                a: 'Sim. A plataforma é 100% online e adapta-se a qualquer grade curricular do Ensino Fundamental, Médio, Cursos Técnicos e Ensino Superior.'
            },
            {
                q: 'É possível exportar os horários para Excel e PDF?',
                a: 'Sim. Em apenas um clique você gera planilhas completas em Excel para a coordenação e horários individuais formatados em PDF para cada professor e turma.'
            },
            {
                q: 'E se houver mudanças de professores durante o ano letivo?',
                a: 'Você pode reajustar blocos em poucos segundos com o sistema de arrastar e soltar. Alertas visuais indicam se a troca gera qualquer conflito.'
            }
        ],
        ctaTitle: 'Pronto para gerar o próximo período letivo?',
        ctaDesc: 'Eleve a eficiência operacional da sua escola ou faculdade. Solicite uma demonstração do SyncroTime hoje mesmo.',
        ctaBtn1: 'Ver Planos e Preços',
        ctaBtn2: 'Conversar pelo WhatsApp',
        footerTag: 'BE Academic. Ecossistema Tecnológico Global para a Educação.'
    }
};

export default function SyncroTime() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentLang, setCurrentLang] = useState<Lang>('es');
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const queryLang = searchParams.get('lang')?.toLowerCase();
        if (queryLang === 'en' || queryLang === 'pt' || queryLang === 'es') {
            setCurrentLang(queryLang);
            return;
        }
        const userLang = (navigator.language || (navigator as any).userLanguage || 'es').toLowerCase();
        if (userLang.startsWith('pt')) {
            setCurrentLang('pt');
        } else if (userLang.startsWith('en')) {
            setCurrentLang('en');
        } else {
            setCurrentLang('es');
        }
    }, [searchParams]);

    const changeLanguage = (lang: Lang) => {
        setCurrentLang(lang);
        setSearchParams({ lang });
    };

    const t = content[currentLang];
    const pricingUrl = `https://syncrotime.com/${currentLang === 'pt' ? 'es' : currentLang}/pricing`;

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SyncroTime",
        "alternateName": ["Syncro Time", "SyncroTime Timetable Generator", "Gerador de Horários SyncroTime"],
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "All, Web, Cloud SaaS",
        "url": "https://beacademics.com/syncrotime",
        "description": t.metaDescription,
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "url": pricingUrl
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "145",
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
        "mainEntity": t.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <div className="bg-white min-h-screen text-apple-gray font-sans selection:bg-corp-cyan selection:text-white">
            <Helmet>
                <html lang={currentLang} />
                <title>{t.metaTitle}</title>
                <meta name="description" content={t.metaDescription} />
                <meta name="keywords" content={t.metaKeywords} />
                <link rel="canonical" href="https://beacademics.com/syncrotime" />

                {/* Hreflang Tags for Multi-language Global SEO */}
                <link rel="alternate" hrefLang="es" href="https://beacademics.com/syncrotime?lang=es" />
                <link rel="alternate" hrefLang="en" href="https://beacademics.com/syncrotime?lang=en" />
                <link rel="alternate" hrefLang="pt" href="https://beacademics.com/syncrotime?lang=pt" />
                <link rel="alternate" hrefLang="x-default" href="https://beacademics.com/syncrotime" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://beacademics.com/syncrotime?lang=${currentLang}`} />
                <meta property="og:title" content={t.metaTitle} />
                <meta property="og:description" content={t.metaDescription} />
                <meta property="og:image" content="https://beacademics.com/Dashboard%20Syncrotime.png" />
                <meta property="og:locale" content={currentLang === 'en' ? 'en_US' : currentLang === 'pt' ? 'pt_BR' : 'es_ES'} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={t.metaTitle} />
                <meta property="twitter:description" content={t.metaDescription} />
                <meta property="twitter:image" content="https://beacademics.com/Dashboard%20Syncrotime.png" />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchemaData)}
                </script>
            </Helmet>

            {/* Header / Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-6 md:gap-8">
                        <Link to="/" className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
                            <span className="text-lg leading-none pb-0.5">&lsaquo;</span>
                            <img src="/Logo-BE-Academic.png" alt="BE Academic" className="h-5 w-auto object-contain" />
                        </Link>
                        <div className="flex items-center gap-2">
                            <span className="text-corp-cyan font-bold text-lg tracking-tight">SyncroTime</span>
                            <span className="hidden sm:inline-block px-2 py-0.5 bg-cyan-50 text-corp-cyan text-xs font-semibold rounded-full border border-cyan-200">Global AI</span>
                        </div>
                        <div className="hidden lg:flex gap-6 text-gray-600">
                            <button onClick={() => document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-900 transition-colors">{t.navFunc}</button>
                            <button onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-900 transition-colors">{t.navBenefits}</button>
                            <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-900 transition-colors">{t.navFaq}</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4">
                        {/* Language Selector */}
                        <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200 text-xs font-bold">
                            <button 
                                onClick={() => changeLanguage('es')}
                                className={`px-2.5 py-1 rounded-full transition-all ${currentLang === 'es' ? 'bg-corp-cyan text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'}`}
                                title="Español"
                            >
                                ES
                            </button>
                            <button 
                                onClick={() => changeLanguage('en')}
                                className={`px-2.5 py-1 rounded-full transition-all ${currentLang === 'en' ? 'bg-corp-cyan text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'}`}
                                title="English"
                            >
                                EN
                            </button>
                            <button 
                                onClick={() => changeLanguage('pt')}
                                className={`px-2.5 py-1 rounded-full transition-all ${currentLang === 'pt' ? 'bg-corp-cyan text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'}`}
                                title="Português"
                            >
                                PT
                            </button>
                        </div>

                        <a href="https://syncrotime.com" className="text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">
                            {t.login}
                        </a>
                        <a href={pricingUrl} className="bg-corp-cyan text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition-colors shadow-sm font-semibold">
                            {t.pricing}
                        </a>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 text-center lg:text-left">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight mb-6"
                    >
                        {t.heroTitle1} <br className="hidden lg:block" /> {t.heroTitle2}
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="text-2xl font-semibold text-corp-cyan mb-6"
                    >
                        {t.heroSubtitle}
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium"
                    >
                        {t.heroDesc}
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start"
                    >
                        <a href={pricingUrl} className="bg-corp-cyan text-white px-8 py-3.5 rounded-full text-lg font-bold hover:scale-105 transition-transform w-full sm:w-auto text-center shadow-lg hover:shadow-xl">
                            {t.heroCta1}
                        </a>
                        <a href="https://wa.me/message/7NPPQUPQWQLCN1" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-medium px-8 py-3.5 flex items-center justify-center gap-2 border-2 border-corp-cyan hover:bg-cyan-50 rounded-full transition-colors w-full sm:w-auto text-center">
                            {t.heroCta2}
                        </a>
                    </motion.div>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex-1 w-full max-w-2xl"
                >
                    <div className="relative rounded-[2rem] bg-apple-light border border-gray-200 p-2 shadow-2xl overflow-hidden flex flex-col">
                        <div className="flex items-center gap-2 px-3 pt-2 pb-3">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-inner">
                            <img 
                                src="/Dashboard%20Syncrotime.png" 
                                alt={t.imgAlt} 
                                className="w-full h-auto object-cover"
                                loading="eager"
                            />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Problem Statement Section */}
            <section className="py-24 bg-cyan-50/50 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
                        {t.problemHeading}
                    </h2>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed">
                        {t.problemDesc}
                    </p>
                </div>
            </section>

            {/* Features */}
            <section id="funcionalidades" className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-100">
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        {t.featuresTitle}
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:border-cyan-100 transition-all">
                        <div className="bg-cyan-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                            <span className="text-2xl">⚙️</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.feat1Title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {t.feat1Desc}
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:border-cyan-100 transition-all">
                        <div className="bg-cyan-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                            <span className="text-2xl">✋</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.feat2Title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {t.feat2Desc}
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:border-cyan-100 transition-all">
                        <div className="bg-cyan-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                            <span className="text-2xl">👁️</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.feat3Title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {t.feat3Desc}
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:border-cyan-100 transition-all">
                        <div className="bg-cyan-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                            <span className="text-2xl">📊</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.feat4Title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {t.feat4Desc}
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl hover:border-cyan-100 transition-all md:col-span-2">
                        <div className="bg-cyan-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                            <span className="text-2xl">⚠️</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.feat5Title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {t.feat5Desc}
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section id="beneficios" className="py-24 px-6 bg-apple-light border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                            {t.benefitsTitle}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-gray-200 pt-16">
                        <div className="flex flex-col items-center group">
                            <span className="text-5xl mb-6 group-hover:scale-110 transition-transform">🎯</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.ben1Title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {t.ben1Desc}
                            </p>
                        </div>
                        <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-8 group">
                            <span className="text-5xl mb-6 group-hover:scale-110 transition-transform">⚡</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.ben2Title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {t.ben2Desc}
                            </p>
                        </div>
                        <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-8 group">
                            <span className="text-5xl mb-6 group-hover:scale-110 transition-transform">🛡️</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.ben3Title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {t.ben3Desc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-24 px-6 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-corp-cyan text-sm font-bold mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                            {t.faqTitle}
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {t.faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-apple-light/50">
                                <button
                                    onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                                    className="w-full px-6 py-5 text-left font-bold text-lg text-gray-900 flex justify-between items-center gap-4 hover:bg-cyan-50/50 transition-colors"
                                >
                                    <span>{faq.q}</span>
                                    <span className="text-corp-cyan text-xl shrink-0">{faqOpen === index ? '−' : '+'}</span>
                                </button>
                                {faqOpen === index && (
                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-white">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="cotizar" className="py-32 bg-[#1e293b] text-white px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                        {t.ctaTitle}
                    </h2>
                    <p className="text-xl text-gray-300 font-medium leading-relaxed mb-12">
                        {t.ctaDesc}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href={pricingUrl} className="bg-corp-cyan text-white px-10 py-4 rounded-full text-xl font-medium hover:scale-105 transition-transform w-full sm:w-auto text-center shadow-md">
                            {t.ctaBtn1}
                        </a>
                        <a href="https://wa.me/message/7NPPQUPQWQLCN1" target="_blank" rel="noopener noreferrer" className="bg-transparent text-corp-cyan border-2 border-corp-cyan px-10 py-4 rounded-full text-xl font-medium hover:bg-cyan-900 transition-colors w-full sm:w-auto text-center">
                            {t.ctaBtn2}
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-500 py-10 text-center text-sm border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <p className="mb-2">{t.footerTag}</p>
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

