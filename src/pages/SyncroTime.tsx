import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
    Cpu, 
    Move, 
    LayoutGrid, 
    FileSpreadsheet, 
    AlertTriangle, 
    Target, 
    Zap, 
    ShieldCheck, 
    MessageSquare, 
    ArrowRight, 
    Globe,
    CheckCircle2
} from 'lucide-react';
import { BentoCard } from '../components/ui/BentoCard';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { StatusBadge } from '../components/ui/StatusBadge';
import { LogoContainer } from '../components/ui/LogoContainer';
import Seo, { getRouteMeta, canonicalUrl } from '../components/Seo';
import { whatsappLink } from '../config/contact';

type Lang = 'es' | 'en' | 'pt';

const esMeta = getRouteMeta('/syncrotime/');

const content = {
    es: {
        metaTitle: esMeta.title,
        metaDescription: esMeta.description,
        metaKeywords: esMeta.keywords ?? '',
        navFunc: 'Funcionalidades',
        navBenefits: 'Beneficios',
        navFaq: 'Preguntas Frecuentes',
        login: 'Iniciar Sesión',
        pricing: 'Ver Precios',
        chip: 'Motor de horarios',
        badge: 'MOTOR DE OPTIMIZACIÓN DE HORARIOS ESCOLARES',
        heroTitle1: 'Generación de',
        heroTitle2: 'Horarios Escolares.',
        heroSubtitle: 'Arme el horario escolar en minutos, con detección de topes.',
        heroDesc: 'Motor de optimización de horarios: algoritmos de optimización y validación determinista que respetan las restricciones de su institución para facilitar la creación, edición y reporte de la carga académica.',
        heroCta1: 'Cotizar Ahora',
        heroCta2: 'Conversar con experto',
        heroChip1: 'Multi-país, en la nube',
        heroChip2: 'Detección automática de topes',
        chooseText: '¿Necesita validar además la normativa docente chilena (regla 65/35, horas PIE)? Elija SyncroEdu. SyncroTime es la opción si solo necesita generar el horario.',
        chooseLink: 'Conocer SyncroEdu',
        imgAlt: 'Panel de control de SyncroTime: resumen de docentes, asignaturas, cursos y última generación de horario',
        problemHeading: '¿Semanas armando horarios que igual terminan con topes?',
        problemDesc: 'Deje atrás los pizarrones magnéticos y las hojas de cálculo desordenadas. SyncroTime considera las variables docentes, las reglas institucionales y la infraestructura de su establecimiento, y propone una estructura de horario en minutos. Recupere su tiempo.',
        featuresTitle: 'Funcionalidades del motor de optimización de horarios',
        feat1Title: 'Motor de Generación de Horarios',
        feat1Desc: 'Olvídese del trabajo manual. Ingrese sus docentes y asignaturas; el algoritmo de optimización evalúa miles de combinaciones y propone una distribución que respeta las restricciones configuradas, evitando cruces de docentes y de salas.',
        feat2Title: 'Edición Intuitiva Drag & Drop',
        feat2Desc: 'Afine los detalles arrastrando y soltando bloques. El sistema le muestra "espacios seguros" en verde y le advierte de los movimientos que no son posibles, para reducir errores de edición.',
        feat3Title: 'Control a Vista de Pájaro',
        feat3Desc: 'Analice su colegio desde cualquier ángulo en tiempo real. Alterne instantáneamente entre Vista Docente, Vista Curso y Panorámicas Globales para detectar necesidades y optimizar cada sala.',
        feat4Title: 'Reportabilidad a un Clic',
        feat4Desc: 'Deje de transcribir horarios. Descargue sábanas institucionales en Excel o imprima horarios individuales en PDF, listos para entregar a cada docente. Profesionalice su gestión.',
        feat5Title: 'Sistema de Alertas Anti-Topes en Vivo',
        feat5Desc: 'Mantenga el control. Durante la edición manual, si intenta mover una clase a un bloque que genera un choque de horarios o incumple una restricción, el sistema le alerta al instante y le deja decidir si aborta el movimiento para proteger el horario, o confirma el cambio y asume la excepción.',
        benefitsTitle: 'Por qué elegir SyncroTime en su Institución',
        ben1Title: 'Validación de Cruces',
        ben1Desc: 'Alertas de cruces de horario y de profesores asignados a dos salas a la vez, con respeto por las ventanas pedagógicas configuradas.',
        ben2Title: 'Agilidad Visual',
        ben2Desc: 'Mueva piezas como en un tablero interactivo. La edición basada en colores e indicadores visuales hace más simple un trabajo arduo.',
        ben3Title: 'Restricciones Flexibles',
        ben3Desc: 'Defina las reglas del juego: bloqueos de disponibilidad docente, prioridades de aulas o salas de laboratorio. El motor las considera al generar el horario.',
        faqTitle: 'Preguntas Frecuentes sobre el Generador de Horarios',
        faqs: [
            {
                q: '¿Cómo evita SyncroTime los cruces de horarios y los topes docentes?',
                a: 'SyncroTime utiliza algoritmos de optimización y validación determinista con verificación en tiempo real. Comprueba simultáneamente la disponibilidad del profesor, la sala asignada, las restricciones del curso y los límites pedagógicos antes de fijar cualquier bloque.'
            },
            {
                q: '¿Para qué instituciones y niveles educativos está pensado SyncroTime?',
                a: 'SyncroTime es una plataforma web y configurable, pensada para colegios de educación básica y secundaria, bachilleratos, escuelas técnicas y universidades, con interfaz en español, inglés y portugués. Consúltenos por los requisitos de su institución.'
            },
            {
                q: '¿Se pueden exportar los horarios a Excel y PDF?',
                a: 'Sí. Con un solo clic puede descargar la sábana global del colegio en formato Excel para edición o análisis, así como generar horarios individuales en PDF para cada profesor y curso.'
            },
            {
                q: '¿Qué pasa si necesito hacer cambios a mitad de semestre?',
                a: 'Puede editar cualquier bloque en segundos mediante el sistema Drag & Drop. Las alertas en vivo le indicarán al instante si el cambio afecta a otros docentes o salas.'
            }
        ],
        ctaTitle: '¿Listo para generar su próximo ciclo académico?',
        ctaDesc: 'Aproveche el potencial organizativo de su establecimiento. Solicite ahora mismo una demostración de SyncroTime.',
        ctaBtn1: 'Ver Planes y Precios',
        ctaBtn2: 'Hablar directamente por WhatsApp',
        footerTag: 'BE Academic. Ecosistema Tecnológico Global para la Educación.',
        rights: 'Todos los derechos reservados.'
    },
    en: {
        metaTitle: 'SyncroTime | School Timetable Optimization Engine',
        metaDescription: 'SyncroTime is a school timetable optimization engine. Generate schedules that respect teacher, room and curriculum constraints, edit them with live clash detection, and export to Excel and PDF.',
        metaKeywords: 'school timetable software, timetable optimization engine, school schedule generator, school schedule creator, school timetable maker, conflict-free timetable, university schedule builder, school scheduling software',
        navFunc: 'Features',
        navBenefits: 'Benefits',
        navFaq: 'FAQ',
        login: 'Sign In',
        pricing: 'View Pricing',
        chip: 'Timetable engine',
        badge: 'SCHOOL TIMETABLE OPTIMIZATION ENGINE',
        heroTitle1: 'School Timetable',
        heroTitle2: 'Generation.',
        heroSubtitle: 'Build your school schedule in minutes, with conflict checks built in.',
        heroDesc: 'A timetable optimization engine. SyncroTime uses optimization algorithms and deterministic validation to respect your institution’s rules, teacher availability and classroom constraints, so you can create, edit and report on the academic load.',
        heroCta1: 'Get a Quote',
        heroCta2: 'Talk to a Scheduling Expert',
        heroChip1: 'Multi-country, cloud-based',
        heroChip2: 'Automatic clash detection',
        chooseText: 'Also need to validate Chilean teacher regulations (65/35 rule, PIE hours)? Choose SyncroEdu. SyncroTime is the right fit if you only need to generate the timetable.',
        chooseLink: 'Explore SyncroEdu',
        imgAlt: 'SyncroTime control panel: summary of teachers, subjects, courses and latest timetable generation',
        problemHeading: 'Spending weeks stuck building schedules that still end with clashes?',
        problemDesc: 'Say goodbye to magnetic boards and chaotic spreadsheets. SyncroTime takes teacher constraints, subjects, and room capacities into account and proposes a clash-checked schedule in minutes. Reclaim your time.',
        featuresTitle: 'Timetable Optimization Engine Features',
        feat1Title: 'Timetable Generation Engine',
        feat1Desc: 'No more manual trial-and-error. Enter your staff and subjects; our optimization algorithm evaluates thousands of combinations and proposes a balanced distribution that respects your configured constraints, avoiding double-bookings.',
        feat2Title: 'Intuitive Drag & Drop Editor',
        feat2Desc: 'Fine-tune schedule slots effortlessly. SyncroTime highlights safe slots in green and warns you about moves that are not possible.',
        feat3Title: 'Bird’s-Eye Panoramic Control',
        feat3Desc: 'Inspect your entire institution from any perspective. Seamlessly toggle between Teacher View, Class View, and Room View to optimize facility utilization.',
        feat4Title: 'One-Click Export & Reporting',
        feat4Desc: 'Never manually transcribe schedules again. Export comprehensive institutional matrices to Excel or generate printable, high-resolution PDFs for teachers and students.',
        feat5Title: 'Live Anti-Clash Alert System',
        feat5Desc: 'Stay in control. If a manual shift triggers a teacher conflict or room overload, the system alerts you in real time with instant resolution options.',
        benefitsTitle: 'Why Schools Choose SyncroTime',
        ben1Title: 'Clash Validation',
        ben1Desc: 'Automatic checks for schedule overlaps and double-booked teachers, within the pedagogical requirements you configure.',
        ben2Title: 'Visual Agility',
        ben2Desc: 'Manage time slots on an interactive visual board. Color-coded markers make complex scheduling intuitive.',
        ben3Title: 'Flexible Custom Rules',
        ben3Desc: 'Configure availability blocks, teacher preferences, specialized labs, and room priorities. The algorithm takes them into account when generating the schedule.',
        faqTitle: 'Frequently Asked Questions about SyncroTime',
        faqs: [
            {
                q: 'How does SyncroTime prevent timetable clashes and double-booked teachers?',
                a: 'SyncroTime uses optimization algorithms and deterministic validation with real-time verification. It simultaneously checks teacher availability, room capacity, course requirements, and pedagogical limits.'
            },
            {
                q: 'Which institutions is SyncroTime designed for?',
                a: 'SyncroTime is a cloud-based, configurable platform designed for primary schools, high schools, academies, technical schools, and universities, with an interface in Spanish, English and Portuguese. Contact us to review your institution’s requirements.'
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
        footerTag: 'BE Academic. Global Educational Technology Ecosystem.',
        rights: 'All rights reserved.'
    },
    pt: {
        metaTitle: 'SyncroTime | Motor de Otimização de Horários Escolares',
        metaDescription: 'O SyncroTime é um motor de otimização de horários escolares. Gere grades que respeitam as restrições de professores, salas e turmas, edite com detecção de conflitos e exporte para Excel e PDF.',
        metaKeywords: 'gerador de grade horaria escolar, software de horarios escolares, motor de otimização de horários, criador de grade de aulas, montar horario escolar automatico, grade horaria colegio, montar horario de professores',
        navFunc: 'Recursos',
        navBenefits: 'Benefícios',
        navFaq: 'Dúvidas Frequentes',
        login: 'Entrar',
        pricing: 'Ver Preços',
        chip: 'Motor de horários',
        badge: 'MOTOR DE OTIMIZAÇÃO DE HORÁRIOS ESCOLARES',
        heroTitle1: 'Geração de Grade',
        heroTitle2: 'Horária Escolar.',
        heroSubtitle: 'Monte o horário escolar em minutos, com detecção de conflitos.',
        heroDesc: 'Motor de otimização de horários: algoritmos de otimização e validação determinística que respeitam as restrições da sua instituição para criar, editar e emitir relatórios de carga horária.',
        heroCta1: 'Solicitar Cotação',
        heroCta2: 'Falar com Especialista',
        heroChip1: 'Multipaís, na nuvem',
        heroChip2: 'Detecção automática de conflitos',
        chooseText: 'Também precisa validar a normativa docente chilena (regra 65/35, horas PIE)? Escolha o SyncroEdu. O SyncroTime é a opção se você só precisa gerar o horário.',
        chooseLink: 'Conhecer o SyncroEdu',
        imgAlt: 'Painel de controle do SyncroTime: resumo de professores, disciplinas, turmas e última geração de horário',
        problemHeading: 'Semanas travado montando horários que sempre terminam com choques de aulas?',
        problemDesc: 'Diga adeus às planilhas manuais e aos quadros magnéticos. O SyncroTime considera a disponibilidade dos professores, turmas e salas e propõe uma grade verificada contra conflitos em minutos. Recupere o seu tempo.',
        featuresTitle: 'Recursos do Motor de Otimização de Horários',
        feat1Title: 'Motor de Geração de Horários',
        feat1Desc: 'Esqueça o desgaste manual. Insira professores e disciplinas; nosso algoritmo de otimização avalia milhares de combinações e propõe uma grade que respeita as restrições configuradas, evitando sobreposições.',
        feat2Title: 'Edição Intuitiva Arrastar e Soltar',
        feat2Desc: 'Ajuste aulas com facilidade arrastando blocos. O sistema sinaliza espaços livres em verde e avisa sobre movimentos inválidos.',
        feat3Title: 'Visão Panorâmica Completa',
        feat3Desc: 'Analise a instituição por qualquer ângulo em tempo real. Alterne instantaneamente entre Visão por Professor, Visão por Turma e Visão por Sala.',
        feat4Title: 'Relatórios e Impressão em 1 Clique',
        feat4Desc: 'Chega de retrabalho. Exporte a grade geral para Excel ou gere horários individuais em PDF de alta qualidade prontos para entregar aos professores.',
        feat5Title: 'Alertas Anti-Conflito em Tempo Real',
        feat5Desc: 'Mantenha o controle. Durante edições manuais, qualquer choque de professor ou sala é imediatamente sinalizado com orientações de ajuste.',
        benefitsTitle: 'Por que escolher o SyncroTime em sua Escola',
        ben1Title: 'Validação de Conflitos',
        ben1Desc: 'Verificação automática de choques de horário e de professores em duas salas ao mesmo tempo, respeitando as janelas pedagógicas configuradas.',
        ben2Title: 'Agilidade Visual',
        ben2Desc: 'Mova blocos como em um tabuleiro intuitivo. A interface visual e colorida torna o processo simples e ágil.',
        ben3Title: 'Restrições Personalizadas',
        ben3Desc: 'Defina regras como folgas, dias bloqueados, laboratórios específicos e limites de aulas consecutivas.',
        faqTitle: 'Perguntas Frequentes sobre o Gerador de Horários',
        faqs: [
            {
                q: 'Como o SyncroTime evita choques de professores ou salas?',
                a: 'O SyncroTime usa algoritmos de otimização combinatória e validação determinística que checam em tempo real a disponibilidade de cada professor, salas, disciplinas e diretrizes pedagógicas.'
            },
            {
                q: 'Para quais instituições o SyncroTime foi pensado?',
                a: 'A plataforma é online e configurável, pensada para o Ensino Fundamental, Médio, Cursos Técnicos e Ensino Superior, com interface em espanhol, inglês e português. Fale conosco para revisar os requisitos da sua instituição.'
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
        footerTag: 'BE Academic. Ecossistema Tecnológico Global para a Educação.',
        rights: 'Todos os direitos reservados.'
    }
};

export default function SyncroTime() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentLang, setCurrentLang] = useState<Lang>('es');
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    useEffect(() => {
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
    const loginUrl = 'https://app.syncrotime.com/es/login';
    const pricingUrl = 'https://syncrotime.com/es/#precios';
    const whatsappUrl = whatsappLink('syncrotime', { lang: currentLang });
    const seoLocale = currentLang === 'en' ? 'en_US' : currentLang === 'pt' ? 'pt_BR' : 'es_ES';
    const baseUrl = canonicalUrl('/syncrotime/');

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SyncroTime",
        "alternateName": ["Syncro Time", "SyncroTime Timetable Generator", "Gerador de Horários SyncroTime"],
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "All, Web, Cloud SaaS",
        "url": canonicalUrl('/syncrotime/'),
        "description": t.metaDescription,
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
        <div className="bg-[#F5F5F7] min-h-screen text-[#1D1D1F] font-sans selection:bg-[#007AFF] selection:text-white">
            <Seo
                path="/syncrotime/"
                title={t.metaTitle}
                description={t.metaDescription}
                keywords={t.metaKeywords}
                lang={currentLang}
                locale={seoLocale}
            >
                {/* Hreflang para las tres versiones de idioma */}
                <link rel="alternate" hrefLang="es" href={`${baseUrl}?lang=es`} />
                <link rel="alternate" hrefLang="en" href={`${baseUrl}?lang=en`} />
                <link rel="alternate" hrefLang="pt" href={`${baseUrl}?lang=pt`} />
                <link rel="alternate" hrefLang="x-default" href={baseUrl} />

                {/* JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchemaData)}
                </script>
            </Seo>

            {/* Header / Navigation Glassmorphism */}
            <header className="sticky top-0 left-0 right-0 z-50 bg-[#F5F5F7]/80 backdrop-blur-[20px] border-b border-black/5 transition-all duration-300">
                <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-6 md:gap-8">
                        <Link to="/" className="flex items-center gap-2 group transition-opacity opacity-80 hover:opacity-100">
                            <LogoContainer className="w-9 h-9">
                                <img src="/Logo-BE-Academic.png" alt="BE Academic" width={400} height={344} className="h-4 w-auto object-contain" />
                            </LogoContainer>
                            <span className="text-xs font-semibold text-[#515154] group-hover:text-[#1D1D1F] hidden sm:inline transition-colors">
                                BE Academic
                            </span>
                        </Link>

                        <div className="h-5 w-px bg-black/10 hidden sm:block" />

                        <div className="flex items-center gap-2">
                            <LogoContainer className="w-8 h-8 bg-[#007AFF]/10 border-[#007AFF]/20">
                                <img src="/Logo-SyncroTime.png" alt="SyncroTime" width={200} height={198} className="h-5 w-5 object-contain" />
                            </LogoContainer>
                            <span className="font-bold text-base tracking-tight text-[#1D1D1F]">SyncroTime</span>
                            <span className="hidden md:inline-block px-2 py-0.5 bg-[#007AFF]/10 text-[#007AFF] text-[11px] font-bold rounded-full border border-[#007AFF]/20">
                                {t.chip}
                            </span>
                        </div>

                        <div className="hidden lg:flex items-center gap-6 text-[#515154]">
                            <button onClick={() => document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#1D1D1F] transition-colors cursor-pointer">{t.navFunc}</button>
                            <button onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#1D1D1F] transition-colors cursor-pointer">{t.navBenefits}</button>
                            <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#1D1D1F] transition-colors cursor-pointer">{t.navFaq}</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4">
                        {/* Apple-style Segmented Language Switcher */}
                        <div className="flex items-center bg-[#E8E8ED] rounded-full p-1 border border-black/5 text-xs font-bold">
                            {(['es', 'en', 'pt'] as Lang[]).map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => changeLanguage(lang)}
                                    className={`px-2.5 py-1 rounded-full transition-all cursor-pointer uppercase ${
                                        currentLang === lang 
                                            ? 'bg-white text-[#1D1D1F] shadow-xs' 
                                            : 'text-[#515154] hover:text-[#1D1D1F]'
                                    }`}
                                    title={lang === 'es' ? 'Español' : lang === 'en' ? 'English' : 'Português'}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>

                        <a 
                            href={loginUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-[#515154] hover:text-[#1D1D1F] transition-colors hidden sm:block px-2"
                        >
                            {t.login}
                        </a>

                        {/* En pantallas muy angostas el mismo botón aparece justo debajo, en el hero */}
                        <div className="hidden sm:block">
                            <PrimaryButton
                                variant="blue"
                                size="sm"
                                href={pricingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t.pricing}
                            </PrimaryButton>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="pt-20 pb-16 md:py-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                <div className="flex-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-6 flex justify-center lg:justify-start"
                    >
                        <StatusBadge label={t.badge} variant="primary" pulse={true} />
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1D1F] leading-[1.08] mb-6 font-display"
                        style={{ textWrap: 'balance' }}
                    >
                        {t.heroTitle1} <br className="hidden lg:block" /> {t.heroTitle2}
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                        className="text-xl md:text-2xl font-semibold text-[#007AFF] mb-6 font-display"
                    >
                        {t.heroSubtitle}
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="text-lg md:text-xl text-[#515154] max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal"
                    >
                        {t.heroDesc}
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start"
                    >
                        <PrimaryButton 
                            variant="blue"
                            size="lg"
                            href={pricingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            icon={<ArrowRight className="w-4 h-4" />}
                        >
                            {t.heroCta1}
                        </PrimaryButton>

                        <PrimaryButton 
                            variant="secondary"
                            size="lg"
                            href={whatsappUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            icon={<MessageSquare className="w-4 h-4 text-[#007AFF]" />}
                        >
                            {t.heroCta2}
                        </PrimaryButton>
                    </motion.div>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-xs text-[#515154] justify-center lg:justify-start font-medium">
                        <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-[#007AFF]" /> {t.heroChip1}</span>
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#007AFF]" /> {t.heroChip2}</span>
                    </div>

                    <p className="mt-6 text-sm text-[#515154] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        {t.chooseText}{' '}
                        <Link to="/syncroedu/" className="font-semibold text-[#0066CC] hover:underline underline-offset-2">
                            {t.chooseLink}
                        </Link>
                    </p>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex-1 w-full max-w-2xl"
                >
                    <div className="relative rounded-3xl bg-white border border-black/5 p-3 shadow-2xl overflow-hidden">
                        {/* Apple Window Header */}
                        <div className="flex items-center justify-between px-3 py-2 border-b border-black/5 mb-3 bg-[#F5F5F7]/60 rounded-t-2xl">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
                                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
                            </div>
                            <span className="text-[11px] font-semibold text-[#515154]">SyncroTime Matrix — Live Engine</span>
                            <div className="w-12" />
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-black/5 bg-white shadow-inner">
                            <img 
                                src="/Dashboard-Syncrotime.webp" 
                                alt={t.imgAlt} 
                                width={1600}
                                height={862}
                                className="w-full h-auto object-cover"
                                loading="eager"
                                decoding="async"
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Problem Statement Bento Section */}
            <section className="px-6 max-w-7xl mx-auto mb-16">
                <BentoCard glowColor="#007AFF" className="p-8 md:p-12 text-center max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#1D1D1F] mb-4 font-display" style={{ textWrap: 'balance' }}>
                        {t.problemHeading}
                    </h2>
                    <p className="text-base md:text-lg text-[#515154] font-normal leading-relaxed">
                        {t.problemDesc}
                    </p>
                </BentoCard>
            </section>

            {/* Features Bento Grid */}
            <section id="funcionalidades" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center md:text-left mb-14">
                    <StatusBadge label="ARQUITECTURA DE SOFTWARE" variant="primary" pulse={false} className="mb-4" />
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                        {t.featuresTitle}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <BentoCard glowColor="#007AFF">
                        <div className="w-12 h-12 rounded-2xl bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center text-[#007AFF] mb-5">
                            <Cpu className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D1D1F] mb-2 font-display">{t.feat1Title}</h3>
                        <p className="text-[#515154] text-sm leading-relaxed">
                            {t.feat1Desc}
                        </p>
                    </BentoCard>

                    <BentoCard glowColor="#34C759">
                        <div className="w-12 h-12 rounded-2xl bg-[#34C759]/10 border border-[#34C759]/20 flex items-center justify-center text-[#34C759] mb-5">
                            <Move className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D1D1F] mb-2 font-display">{t.feat2Title}</h3>
                        <p className="text-[#515154] text-sm leading-relaxed">
                            {t.feat2Desc}
                        </p>
                    </BentoCard>

                    <BentoCard glowColor="#5856D6">
                        <div className="w-12 h-12 rounded-2xl bg-[#5856D6]/10 border border-[#5856D6]/20 flex items-center justify-center text-[#5856D6] mb-5">
                            <LayoutGrid className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D1D1F] mb-2 font-display">{t.feat3Title}</h3>
                        <p className="text-[#515154] text-sm leading-relaxed">
                            {t.feat3Desc}
                        </p>
                    </BentoCard>

                    <BentoCard glowColor="#FF9500">
                        <div className="w-12 h-12 rounded-2xl bg-[#FF9500]/10 border border-[#FF9500]/20 flex items-center justify-center text-[#FF9500] mb-5">
                            <FileSpreadsheet className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D1D1F] mb-2 font-display">{t.feat4Title}</h3>
                        <p className="text-[#515154] text-sm leading-relaxed">
                            {t.feat4Desc}
                        </p>
                    </BentoCard>

                    <BentoCard glowColor="#FF3B30" className="md:col-span-2 lg:col-span-2">
                        <div className="w-12 h-12 rounded-2xl bg-[#FF3B30]/10 border border-[#FF3B30]/20 flex items-center justify-center text-[#FF3B30] mb-5">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D1D1F] mb-2 font-display">{t.feat5Title}</h3>
                        <p className="text-[#515154] text-sm leading-relaxed">
                            {t.feat5Desc}
                        </p>
                    </BentoCard>
                </div>
            </section>

            {/* Benefits Bento Grid */}
            <section id="beneficios" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <StatusBadge label="VENTAJAS OPERACIONALES" variant="success" pulse={false} className="mb-4" />
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                        {t.benefitsTitle}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <BentoCard glowColor="#007AFF" className="text-center flex flex-col items-center">
                        <div className="w-14 h-14 rounded-2xl bg-[#007AFF]/10 border border-[#007AFF]/20 flex items-center justify-center text-[#007AFF] mb-6">
                            <Target className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D1D1F] mb-3 font-display">{t.ben1Title}</h3>
                        <p className="text-[#515154] text-sm leading-relaxed">
                            {t.ben1Desc}
                        </p>
                    </BentoCard>

                    <BentoCard glowColor="#34C759" className="text-center flex flex-col items-center">
                        <div className="w-14 h-14 rounded-2xl bg-[#34C759]/10 border border-[#34C759]/20 flex items-center justify-center text-[#34C759] mb-6">
                            <Zap className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D1D1F] mb-3 font-display">{t.ben2Title}</h3>
                        <p className="text-[#515154] text-sm leading-relaxed">
                            {t.ben2Desc}
                        </p>
                    </BentoCard>

                    <BentoCard glowColor="#5856D6" className="text-center flex flex-col items-center">
                        <div className="w-14 h-14 rounded-2xl bg-[#5856D6]/10 border border-[#5856D6]/20 flex items-center justify-center text-[#5856D6] mb-6">
                            <ShieldCheck className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D1D1F] mb-3 font-display">{t.ben3Title}</h3>
                        <p className="text-[#515154] text-sm leading-relaxed">
                            {t.ben3Desc}
                        </p>
                    </BentoCard>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 md:py-24 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-14">
                    <StatusBadge label="FAQ" variant="primary" pulse={false} className="mb-4" />
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] font-display">
                        {t.faqTitle}
                    </h2>
                </div>

                <div className="space-y-4">
                    {t.faqs.map((faq, index) => (
                        <div key={index} className="rounded-2xl border border-black/5 bg-white overflow-hidden shadow-xs">
                            <button
                                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                                className="w-full px-6 py-5 text-left font-bold text-base md:text-lg text-[#1D1D1F] flex justify-between items-center gap-4 hover:bg-[#F5F5F7] transition-colors cursor-pointer font-display"
                            >
                                <span>{faq.q}</span>
                                <span className="text-[#007AFF] text-xl shrink-0 font-bold">{faqOpen === index ? '−' : '+'}</span>
                            </button>
                            <AnimatePresence>
                                {faqOpen === index && (
                                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                                        <div className="px-6 pb-6 text-[#515154] text-sm leading-relaxed border-t border-black/5 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section id="cotizar" className="py-20 px-6 max-w-7xl mx-auto">
                <div className="rounded-3xl bg-[#1C1C1E] border border-white/10 p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                        <StatusBadge label="GLOBAL SAAS" variant="primary" pulse={true} className="mx-auto" />
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display" style={{ textWrap: 'balance' }}>
                            {t.ctaTitle}
                        </h2>
                        <p className="text-base sm:text-lg text-[#86868B] font-normal leading-relaxed">
                            {t.ctaDesc}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <PrimaryButton 
                                variant="blue"
                                size="lg"
                                href={pricingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                icon={<ArrowRight className="w-4 h-4" />}
                            >
                                {t.ctaBtn1}
                            </PrimaryButton>

                            <PrimaryButton 
                                variant="secondary"
                                size="lg"
                                href={whatsappUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                icon={<MessageSquare className="w-4 h-4 text-[#007AFF]" />}
                            >
                                {t.ctaBtn2}
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#1C1C1E] text-[#86868B] py-14 text-sm border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <LogoContainer className="w-8 h-8 bg-white/10 border-white/15">
                            <img src="/Logo-SyncroTime.png" alt="SyncroTime" width={200} height={198} className="h-5 w-5 object-contain" />
                        </LogoContainer>
                        <div>
                            <p className="text-white font-bold text-sm tracking-tight">SyncroTime</p>
                            <p className="text-xs text-[#86868B]">{t.footerTag}</p>
                        </div>
                    </div>

                    <div className="flex gap-6 text-xs font-medium">
                        <Link to="/legal/" className="hover:text-white transition-colors">Información Legal</Link>
                        <Link to="/contacto/" className="hover:text-white transition-colors">Contacto</Link>
                        <Link to="/" className="hover:text-white transition-colors">BE Academic</Link>
                    </div>

                    <p className="text-xs text-[#86868B]">
                        &copy; {new Date().getFullYear()} Sociedad de Formación BE Academic Limitada. {t.rights}
                    </p>
                </div>
            </footer>
        </div>
    );
}
