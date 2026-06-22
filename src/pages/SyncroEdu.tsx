import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const UrgencyBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const month = new Date().getMonth() + 1;
    const isUrgency = (month >= 7 || month <= 3);
    const isYearEnd = month >= 7;

    if (!isUrgency || !isVisible) return null;

    return (
        <div className="bg-amber-500 text-gray-900 text-sm py-2 px-4 text-center relative z-50 font-medium">
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 pr-8">
                {isYearEnd ? (
                    <span>⏰ <strong>Período de planificación escolar 2026–2027</strong> — Los colegios que contratan SyncroEdu ahora llegan al inicio del año con horarios legalmente conformes. <a href="https://wa.me/56964375050?text=Quiero%20agendar%20una%20demo%20de%20SyncroEdu" target="_blank" rel="noreferrer" className="underline font-bold hover:text-white transition-colors">Agendar mi demo ahora &rarr;</a></span>
                ) : (
                    <span>⚠️ <strong>Año escolar en marcha</strong> — ¿Ya validó la proporcionalidad 65/35 de todos sus docentes? Un error detectado ahora evita multas de hasta $66.000.000 CLP. <a href="https://wa.me/56964375050?text=Necesito%20asesoría%20sobre%20el%20cumplimiento%2065%2F35" target="_blank" rel="noreferrer" className="underline font-bold hover:text-white transition-colors">Hablar con un asesor &rarr;</a></span>
                )}
            </div>
            <button onClick={() => setIsVisible(false)} className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 font-bold">&times;</button>
        </div>
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
                `Hola, soy ${data.nombre}, ${data.cargo} del ${data.colegio}. Completé el formulario de SyncroEdu y me interesa agendar una demo. Tenemos aproximadamente ${data.funcionarios}. Mi email es: ${data.email}.`
            );
            window.open(`https://wa.me/56964375050?text=${msg}`, '_blank');
        }, 2500);
    };

    const counterAnimation = (value: number) => {
        return <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>${value.toLocaleString('es-CL')}</motion.span>;
    };

    return (
        <div className="bg-white min-h-screen text-apple-gray font-sans selection:bg-corp-green selection:text-white pb-20 md:pb-0">
            <Helmet>
                <title>SyncroEdu | Compliance Escolar y Horarios para Colegios Chilenos</title>
                <meta name="description" content="SyncroEdu automatiza los horarios escolares, valida la Ley 65/35 en tiempo real y gestiona reemplazos desde el celular. Proteja su colegio de multas de la Supereduc. Demo gratuita." />
                <meta name="keywords" content="horarios escolares Chile, compliance educativo, Superintendencia de Educación, Ley 20.903, Decreto 170 PIE, gestión docente, SaaS educativo Chile" />
                <link rel="canonical" href="https://beacademic.cl/syncroedu" />
            </Helmet>

            <UrgencyBar />

            {/* Header / Navigation */}
            <header id="header" className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300" style={{ top: document.querySelector('.bg-amber-500') ? '36px' : '0' }}>
                <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
                            <span className="text-lg leading-none pb-0.5">&lsaquo;</span>
                            <img src="/Logo-BE-Academic.png" alt="BE Academic" className="h-5 w-auto object-contain" />
                        </Link>
                        <span className="text-corp-green font-bold text-xl tracking-tight flex items-center gap-2">
                            <span className="bg-corp-green text-white w-7 h-7 rounded-md flex items-center justify-center font-bold text-sm">S</span>
                            SyncroEdu
                        </span>
                        <div className="hidden lg:flex gap-6">
                            <button onClick={() => document.getElementById('pilares')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-corp-green transition-colors">Funcionalidades</button>
                            <button onClick={() => document.getElementById('caso-orione')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-corp-green transition-colors">Caso de Éxito</button>
                            <button onClick={() => document.getElementById('comparativa')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-corp-green transition-colors">¿Por qué SyncroEdu?</button>
                            <button onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-corp-green transition-colors">Contacto</button>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="https://syncroedu.com" className="text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">
                            Iniciar Sesión
                        </a>
                        <button 
                            onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })} 
                            className="bg-corp-green text-white px-4 py-1.5 rounded-full font-medium hover:bg-green-600 transition-colors shadow-sm flex items-center gap-2"
                        >
                            Agendar Demo
                        </button>
                    </div>
                </nav>
            </header>

            {/* SECCIÓN 2 — HERO */}
            <section id="hero" className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative">
                 
                <div className="flex-1 text-center lg:text-left z-10 pt-10 pb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-corp-green/10 text-corp-green text-sm font-bold tracking-wide mb-8"
                    >
                        ✓ Plataforma N°1 de Compliance Escolar en Chile
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight mb-6"
                    >
                        ¿Su colegio arriesga <br className="hidden lg:block" /><span className="text-corp-green">multas millonarias</span> por un Excel?
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium"
                    >
                        SyncroEdu automatiza la generación de horarios escolares, valida en tiempo real el cumplimiento de la Ley 65/35 y gestiona reemplazos de emergencia desde el celular — protegiendo el presupuesto y la continuidad de su establecimiento ante cualquier fiscalización de la Superintendencia de Educación.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start"
                    >
                        <a href="https://wa.me/56964375050" target="_blank" rel="noreferrer" className="bg-corp-green text-white px-8 py-3 rounded-full text-lg font-bold hover:scale-105 transition-transform w-full sm:w-auto text-center shadow-lg hover:shadow-xl">
                            Cotizar Ahora
                        </a>
                        <button onClick={() => document.getElementById('pilares')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-900 font-medium px-8 py-3 flex items-center justify-center gap-2 border-2 border-corp-green hover:bg-green-50 rounded-full transition-colors w-full sm:w-auto text-center">
                            Ver cómo funciona &rsaquo;
                        </button>
                    </motion.div>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-sm text-gray-400 justify-center lg:justify-start">
                        <span>🔒 Sin tarjeta de crédito</span>
                        <span>✓ Demo en vivo con datos</span>
                        <span>📞 Respuesta en {'<'} 2 horas</span>
                    </div>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex-1 w-full max-w-2xl z-10 perspective-[1000px]"
                >
                    <div className="relative rounded-[2rem] bg-apple-light border border-gray-200 p-2 shadow-2xl flex items-center justify-center transform transition-transform duration-500 hover:rotate-x-2 hover:-rotate-y-4">
                        <img src="/Dashboard.PNG" alt="Dashboard Principal" className="w-full h-auto object-contain rounded-xl relative z-10 bg-white" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML += '<div class="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-xl line-clamp-2">Dashboard SyncroEdu</div>' }} />
                        
                        {/* Decorative floating elements */}
                        <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 border border-gray-100 hidden md:block">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-corp-green text-white rounded-full p-1 w-5 h-5 flex items-center justify-center text-xs">✓</span>
                                <span className="text-gray-900 font-bold text-sm">Cumplimiento legal</span>
                            </div>
                            <p className="text-xs text-gray-500 mb-1">Docente validado: 100%</p>
                            <div className="w-40 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="bg-corp-green w-[65%] h-full"></div>
                            </div>
                            <p className="text-[10px] text-gray-400 mt-1 text-right">65% Lectivo</p>
                        </div>

                        <div className="absolute -bottom-6 -right-6 bg-gray-900 text-white p-4 rounded-xl shadow-xl z-20 border border-gray-700 hidden md:block">
                            <div className="flex items-center gap-2 mb-1">
                                <span>⚡</span>
                                <span className="font-bold text-sm">Reemplazo asignado</span>
                            </div>
                            <p className="text-xs text-slate-300">Bloque 3 — Aula cubierta</p>
                            <p className="text-[10px] text-corp-green mt-1">Hace 12 segundos</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* SECCIÓN 3 — SOCIAL PROOF */}
            <section className="bg-white border-b border-gray-100 py-8 px-6 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap">
                    <span className="text-sm text-gray-500 font-medium">Piloteado y en producción en un:</span>
                    <div className="font-bold text-gray-900 text-lg flex items-center gap-2">
                         Colegio Particular Subvencionado <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full ml-2 font-medium">Caso Real</span>
                    </div>
                    <div className="hidden md:block w-px h-8 bg-gray-200"></div>
                    <div className="flex flex-wrap gap-8 justify-center text-center">
                        <div><p className="text-2xl font-black text-corp-green tracking-tight">62</p><p className="text-xs text-gray-500">Docentes</p></div>
                        <div><p className="text-2xl font-black text-corp-green tracking-tight">36</p><p className="text-xs text-gray-500">Asistentes</p></div>
                        <div><p className="text-2xl font-black text-corp-green tracking-tight">900+</p><p className="text-xs text-gray-500">Estudiantes (JEC)</p></div>
                        <div><p className="text-2xl font-black text-corp-green tracking-tight">1-3 días</p><p className="text-xs text-gray-500">de confección</p></div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 4 — PAIN SECTION */}
            <section id="problema" className="py-24 px-6 bg-apple-light border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-corp-green/10 text-corp-green text-sm font-bold mb-6">🔍 ¿Le resulta familiar esto?</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                            ¿Le resulta familiar alguna de estas situaciones?
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                            Si respondió que sí a alguna de estas, su colegio está expuesto a pérdidas financieras y riesgos normativos que ocurren hoy mismo, en silencio.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "⏰", title: "La UTP vive esclavizada al Excel cada inicio de año", text: "Diseñar el horario escolar a mano toma entre 2 y 3 semanas de trabajo intensivo, fórmulas frágiles y nerviosismo. Todo para un Excel que Contabilidad debe revisar sin validación legal." },
                            { icon: "⚖️", title: "Cada contrato docente es una bomba de tiempo", text: "¿Seguro que ningún profesor supera su proporción lectiva/no lectiva? La Ley 20.903 exige distribuciones estrictas. Un error expone a multas entre 1 y 1.000 UTM de la Supereduc." },
                            { icon: "📱", title: "Los reemplazos se gestionan por WhatsApp sin evidencia legal", text: "Cuando un docente falta, se cubre el aula vía WhatsApp. Sin bitácora formal, el colegio queda expuesto ante visitas de fiscalización del MINEDUC." },
                            { icon: "💰", title: "El Decreto 170 PIE es una caja negra financiera", text: "Una mala planificación de co-docencia puede obligar a devolver la subvención PIE: hasta $9.000.000 CLP por grupo NEE. Sin auditoría, se sabe cuando llega el fiscalizador." },
                            { icon: "🔀", title: "Contabilidad y UTP trabajan en silos", text: "La información horaria llega tarde y sin validación contractual. Resultado: anexos fuera de plazo, errores en liquidaciones y riesgo de denuncias en la Inspección del Trabajo." }
                        ].map((pain, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-red-500 hover:shadow-xl hover:-translate-y-1 transition-all">
                                <span className="text-4xl mb-4 block">{pain.icon}</span>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{pain.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{pain.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN 5 — IMPACTO FINANCIERO */}
            <section id="riesgo-financiero" className="py-24 px-6 bg-cyan-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                            ¿Cuánto dinero está perdiendo su colegio cada año?
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                            El diseño manual de horarios y la falta de control normativo generan pérdidas medibles y perfectamente evitables. Estos son los 5 riesgos financieros que SyncroEdu neutraliza desde el primer día.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            { icon: "⚠️", border: "border-amber-500", amount: 1320000, label: "Multa promedio Supereduc", text: "Por incumplimiento de proporción lectiva/no lectiva en 1 docente (20 UTM)." },
                            { icon: "💸", border: "border-red-500", amount: 9000000, label: "Subvención PIE en riesgo", text: "Por incumplimiento de co-docencia en 1 curso de 5 alumnos NEE (Decreto N°170)." },
                            { icon: "⏱️", border: "border-corp-green", amount: 1687500, label: "Costo horas UTP perdidas", text: "150 horas anuales de trabajo directivo dedicadas a tareas manuales y automatizables." },
                            { icon: "📉", border: "border-amber-500", amount: 4560000, label: "Fugas anuales en nómina docente", text: "Por horas contratadas subutilizadas o extras no justificadas (8 hrs/sem × 38 sem)." },
                            { icon: "🔄", border: "border-red-500", amount: 2500000, label: "Costo de ausentismo no detectado", text: "Licencias cortas y frecuentes no monitoreadas. Sin alertas, se vuelven crónicas." }
                        ].map((risk, idx) => (
                            <div key={idx} className={`bg-white rounded-xl p-8 border-t-4 shadow-sm hover:shadow-md transition-shadow ${risk.border}`}>
                                <div className="text-3xl bg-gray-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">{risk.icon}</div>
                                <div className="text-3xl font-black text-gray-900 mb-1">
                                    {counterAnimation(risk.amount)} <span className="text-sm text-gray-500 font-normal">CLP</span>
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">{risk.label}</h4>
                                <p className="text-sm text-gray-600">{risk.text}</p>
                            </div>
                        ))}
                        
                        <div className="bg-gradient-to-br from-[#00B4A6] to-[#009e91] rounded-xl p-8 text-center flex flex-col justify-center lg:col-span-1 shadow-2xl">
                            <p className="text-xs font-bold text-white/80 uppercase tracking-widest mb-2">VALOR TOTAL ENTREGADO ANUAL</p>
                            <div className="text-5xl font-black text-white mb-2">
                                {counterAnimation(19397500)} <span className="text-xl font-bold">CLP / año</span>
                            </div>
                            <p className="text-sm text-white/80">Estimación para colegio mediano (35 func.)</p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-900 font-medium text-xl mb-6">¿Quiere saber cuánto está en riesgo <span className="font-bold underline decoration-corp-green/40 decoration-4 underline-offset-2">su colegio</span> específicamente?</p>
                        <button onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })} className="bg-corp-green text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-300">
                            Hablar con un asesor &rarr;
                        </button>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 6 — SOLUCIÓN */}
            <section id="comparativa" className="py-24 px-6 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-corp-green/10 text-corp-green text-sm font-bold mb-6">✓ La Plataforma</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                            SyncroEdu: El escudo legal y financiero de su colegio
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                            No es un generador de horarios. Es la primera plataforma integrada de Compliance Escolar, Continuidad Operativa y Optimización de Recursos Humanos diseñada exclusivamente para Chile.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-red-50 rounded-2xl p-8 border-t-4 border-red-500">
                            <div className="text-center mb-8">
                                <span className="text-4xl block mb-2">❌</span>
                                <h3 className="text-xl font-bold text-gray-900">Generadores tradicionales</h3>
                                <p className="text-sm text-gray-500">(aSc Timetables · Prime Timetable · Excel)</p>
                            </div>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex gap-3"><span>❌</span> Distribuyen bloques, ciegos a la ley chilena</li>
                                <li className="flex gap-3"><span>❌</span> Sin calculadora de proporciones lectivas (65/35)</li>
                                <li className="flex gap-3"><span>❌</span> Sin gestión de reemplazos con evidencia</li>
                                <li className="flex gap-3"><span>❌</span> Sin auditoría del Decreto 170 PIE</li>
                                <li className="flex gap-3"><span>❌</span> Sin analítica de Recursos Humanos</li>
                                <li className="flex gap-3"><span>❌</span> Sin App Móvil para directivos</li>
                                <li className="flex gap-3"><span>❌</span> Sin integración entre UTP y Contabilidad</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 rounded-2xl p-8 border-t-4 border-corp-green">
                            <div className="text-center mb-8">
                                <span className="text-4xl block mb-2">✅</span>
                                <h3 className="text-xl font-bold text-gray-900">SyncroEdu</h3>
                                <p className="text-sm text-corp-green font-medium">Plataforma integrada de Compliance Escolar</p>
                            </div>
                            <ul className="space-y-4 text-gray-700 font-medium">
                                <li className="flex gap-3"><span>✅</span> Genera Y valida horarios según la ley vigente</li>
                                <li className="flex gap-3"><span>✅</span> Calculadora 65/35 y 60/40 en tiempo real</li>
                                <li className="flex gap-3"><span>✅</span> Reemplazos gestionados con bitácora legal</li>
                                <li className="flex gap-3"><span>✅</span> Auditoría PIE completa con simulador financiero</li>
                                <li className="flex gap-3"><span>✅</span> HR Analytics con Bradford Factor y eNPS</li>
                                <li className="flex gap-3"><span>✅</span> App iOS + Android para directivos en terreno</li>
                                <li className="flex gap-3"><span>✅</span> Informes directos para Contabilidad y RRHH</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 7 — LOS 4 PILARES */}
            <section id="pilares" className="py-24 px-6 bg-apple-light border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-corp-green/10 text-corp-green text-sm font-bold mb-6">⚙️ Funcionalidades</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                            4 pilares que protegen su colegio
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center border-b border-gray-200 overflow-x-auto pb-4">
                        {['⚙️ Generación', '⚖️ Compliance', '📱 Continuidad', '📊 HR Analytics'].map((tab, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`px-6 py-4 font-bold text-lg border-b-[3px] whitespace-nowrap transition-colors ${activeTab === idx ? 'border-corp-green text-corp-green' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                        {activeTab === 0 && (
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1 space-y-6">
                                    <h3 className="text-3xl font-bold text-gray-900">De 3 semanas de estrés a 1-3 días. Así de simple.</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Nuestro motor algorítmico genera el horario óptimo de su establecimiento en minutos, respetando todas las restricciones: ventanas horarias, topes de asignaturas por día, salas preferidas, y bloques de co-docencia PIE. Con un solo clic, el borrador aprobado se inyecta automáticamente en los horarios de todos los docentes.
                                    </p>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex gap-2">✅ Reducción del 80% en horas administrativas de UTP</li>
                                        <li className="flex gap-2">✅ Eliminación del doble ingreso de información</li>
                                        <li className="flex gap-2">✅ Soporte de co-docencia PIE integrada</li>
                                    </ul>
                                </div>
                                <div className="flex-1 w-full rounded-2xl overflow-hidden border border-gray-200">
                                    <img src="/Generador.png" alt="Generador de horarios" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        )}
                        {activeTab === 1 && (
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1 space-y-6">
                                    <h3 className="text-3xl font-bold text-gray-900">Nunca más una multa por error en el contrato</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        SyncroEdu es la única plataforma en Chile que actúa como asesor legal en tiempo real. Valida automáticamente que cada docente cumpla las proporciones exigidas por las Leyes 20.903 y 20.976.
                                    </p>
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm overflow-x-auto text-gray-700">
                                        <div className="flex font-bold border-b border-gray-300 pb-2 mb-2"><div className="w-1/2">Régimen</div><div className="w-1/4">Lectivas</div><div className="w-1/4">No Lectivas</div></div>
                                        <div className="flex py-1"><div className="w-1/2">Estándar Nacional</div><div className="w-1/4 text-center">65%</div><div className="w-1/4 text-center">35%</div></div>
                                        <div className="flex py-1"><div className="w-1/2">1° Ciclo (≥80% prioritarios)</div><div className="w-1/4 text-center">60%</div><div className="w-1/4 text-center">40%</div></div>
                                    </div>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex gap-2">✅ Semáforo verde/amarillo/rojo por docente</li>
                                        <li className="flex gap-2">✅ Clasificación MINEDUC automática</li>
                                        <li className="flex gap-2">✅ Alertas preventivas antes de auditoría</li>
                                    </ul>
                                </div>
                                <div className="flex-1 w-full rounded-2xl overflow-hidden border border-gray-200">
                                    <img src="/Semaforo 1.png" alt="Calculadora legal" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        )}
                        {activeTab === 2 && (
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1 space-y-6">
                                    <h3 className="text-3xl font-bold text-gray-900">Reemplazos urgentes desde el celular</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Con SyncroEdu, la dirección gestiona los reemplazos directamente desde la App Móvil mientras recorre los pasillos — sin ir a la oficina, sin llamadas. Nuestro buscador escanea toda la dotación disponible en segundos y sugiere el reemplazante idóneo.
                                    </p>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex gap-2">✅ App Móvil iOS + Android para directivos</li>
                                        <li className="flex gap-2">✅ Buscador de personal disponible en tiempo real</li>
                                        <li className="flex gap-2">✅ Bitácora legal de reemplazos en PDF para fiscalización</li>
                                    </ul>
                                </div>
                                <div className="flex-1 w-full rounded-2xl overflow-hidden border border-gray-200">
                                    <img src="/Dahsboard%20movil.png" alt="App móvil" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        )}
                        {activeTab === 3 && (
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1 space-y-6">
                                    <h3 className="text-3xl font-bold text-gray-900">Decisiones informadas con HR Analytics</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        SyncroEdu incorpora metodologías analíticas de alta complejidad al mundo educativo. Transforma los datos operativos en indicadores estratégicos que ninguna planilla Excel puede entregar.
                                    </p>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex gap-2"><span className="text-corp-green">&rarr;</span> Ratio Alumno/Docente en JCE</li>
                                        <li className="flex gap-2"><span className="text-corp-green">&rarr;</span> Índice de Ocupación Docente</li>
                                        <li className="flex gap-2"><span className="text-corp-green">&rarr;</span> Bradford Factor (ausentismo corto y frecuente)</li>
                                        <li className="flex gap-2"><span className="text-corp-green">&rarr;</span> Simulador financiero PIE</li>
                                    </ul>
                                </div>
                                <div className="flex-1 w-full rounded-2xl overflow-hidden border border-gray-200">
                                    <img src="/Gestion-de-personas.png" alt="Analítica de RRHH" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* SECCIÓN 8 — CASO DE ÉXITO */}
            <section id="caso-orione" className="py-24 px-6 bg-apple-light text-gray-900 border-b border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-corp-green/10 text-corp-green text-sm font-bold mb-6">✓ Caso de éxito verificado</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Establecimiento Subvencionado: De 3 semanas de estrés a 1-3 días de trabajo
                        </h2>
                    </div>

                    <div className="bg-white rounded-3xl p-8 mb-8 text-center flex flex-col items-center shadow-lg border border-gray-100">
                        <div className="text-4xl font-bold text-gray-900 mb-4 italic tracking-widest font-serif flex items-center gap-4">
                            <span className="text-2xl">🏫</span>
                            Colegio Confidencial
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg font-bold text-corp-green">
                            <span>62 Docentes</span>
                            <span className="hidden sm:inline text-gray-300">|</span>
                            <span>36 Asistentes</span>
                            <span className="hidden sm:inline text-gray-300">|</span>
                            <span>900+ Estudiantes (JEC)</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-sm">
                            <div className="p-4 font-bold text-gray-400 uppercase tracking-widest bg-gray-50">INDICADOR</div>
                            <div className="p-4 font-bold text-gray-400 uppercase tracking-widest bg-gray-50">ANTES (Manual)</div>
                            <div className="p-4 font-bold text-corp-green uppercase tracking-widest bg-green-50">CON SYNCROEDU</div>
                            
                            <div className="p-4 font-medium text-gray-700">Tiempos de confección</div>
                            <div className="p-4 text-red-500 italic">3 semanas intensivas</div>
                            <div className="p-4 text-corp-green font-bold">1 a 3 días ✅</div>

                            <div className="p-4 font-medium text-gray-700">Traspaso manual de datos</div>
                            <div className="p-4 text-red-500 italic">Sí — Riesgo error humano</div>
                            <div className="p-4 text-corp-green font-bold">Automatizado ✅</div>

                            <div className="p-4 font-medium text-gray-700">Auditoría / Trazabilidad</div>
                            <div className="p-4 text-red-500 italic">Parcial e incompleta</div>
                            <div className="p-4 text-corp-green font-bold">Auditable 100% ✅</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 9 — SIMULACIÓN DE OPTIMIZACIÓN */}
            <section id="roi" className="py-24 px-6 bg-slate-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-2 h-10 bg-corp-green"></div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                                Simulación de Optimización
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Column */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Estudio de Caso: <span className="underline decoration-corp-green/40 decoration-4 underline-offset-4">Establecimiento 40 Docentes</span>
                            </h3>
                            
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Un colegio que mantiene un promedio de <span className="font-bold underline decoration-corp-green/30 decoration-2 underline-offset-2">2 horas semanales</span> contratadas por sobre el mínimo técnico (fugas por ventanas u ociosidad horaria) genera un impacto financiero medible:
                            </p>

                            <ul className="space-y-3 text-lg text-gray-700 list-disc ml-6 marker:text-corp-green">
                                <li>Impacto en remuneraciones directas e indirectas.</li>
                                <li>Costo de oportunidad del equipo UTP en gestión manual.</li>
                                <li>Exposición a multas por descalce en contratos.</li>
                            </ul>

                            <div className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight border-b-4 border-corp-green inline-block pb-2">
                                40 docentes <span className="text-gray-400">&times;</span> 2 horas semanales optimizables <span className="text-gray-400">&times;</span> $16.500 por hora <span className="text-gray-400">&times;</span> 40 semanas.
                            </div>

                            <div className="bg-white border-l-4 border-corp-green p-6 rounded-r-xl shadow-sm mt-8 relative">
                                <p className="text-gray-600 italic text-sm">
                                    "SyncroEdu no garantiza montos de ahorro específicos. La plataforma entrega herramientas para optimizar la gestión, reducir riesgos normativos y apoyar la toma de decisiones basadas en evidencia técnica y legal."
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-6">
                            <div className="bg-gray-900 rounded-[2rem] p-10 text-center shadow-xl flex flex-col items-center justify-center relative overflow-hidden">
                                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-corp-green via-cyan-400 to-corp-green"></div>
                                <p className="text-white font-bold tracking-widest text-sm mb-4 uppercase">Potencial de Mitigación Anual</p>
                                <div className="text-6xl md:text-[5rem] font-black text-corp-green mb-2 racking-tight flex items-center justify-center">
                                    <span className="text-4xl md:text-5xl mr-1">+</span>$50M
                                </div>
                                <p className="text-white/80 font-medium">Pesos Chilenos (CLP)</p>
                            </div>

                            <div className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-lg shadow-gray-200/50">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-blue-500 font-bold text-xl">📈</span>
                                    <h4 className="font-bold text-gray-900">Analítica de Cumplimiento Legal Global</h4>
                                </div>
                                <div className="w-full text-xs overflow-hidden">
                                    <div className="grid grid-cols-5 font-bold text-gray-400 mb-4 uppercase tracking-wider text-[10px]">
                                        <div className="col-span-2">Ítem</div>
                                        <div className="text-center">Real</div>
                                        <div className="text-center">Regla</div>
                                        <div className="text-right">Discrepancia</div>
                                    </div>
                                    <div className="grid grid-cols-5 items-center py-4 border-t border-gray-100">
                                        <div className="col-span-2">
                                            <p className="font-bold text-gray-900 text-sm">Contratos Totales</p>
                                            <p className="text-gray-400 text-[10px] hidden sm:block">Horas asignadas vs lo requerido.</p>
                                        </div>
                                        <div className="font-bold text-gray-900 text-center text-sm">2426h</div>
                                        <div className="text-gray-500 text-center text-sm">1861h</div>
                                        <div className="text-right">
                                            <span className="bg-amber-50 border border-amber-200 text-amber-700 px-2 py-1 rounded-md text-[10px] font-bold whitespace-nowrap">+565h 00m</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-5 items-center py-4 border-t border-gray-100">
                                        <div className="col-span-2">
                                            <p className="font-bold text-gray-900 text-sm">Recreos</p>
                                            <p className="text-gray-400 text-[10px] hidden sm:block">Minutos de recreos requeridos.</p>
                                        </div>
                                        <div className="font-bold text-gray-900 text-center text-sm">
                                            <div>168h</div>
                                            <div>00m</div>
                                        </div>
                                        <div className="text-gray-500 text-center text-sm">126h 52m</div>
                                        <div className="text-right">
                                            <span className="bg-amber-50 border border-amber-200 text-amber-700 px-2 py-1 rounded-md text-[10px] font-bold whitespace-nowrap">+41h 08m</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-5 items-center py-4 border-t border-gray-100">
                                        <div className="col-span-2">
                                            <p className="font-bold text-gray-900 text-sm">Prep. Enseñanza (35-40%)</p>
                                            <p className="text-gray-400 text-[10px] hidden sm:block">Tiempo legal preparación.</p>
                                        </div>
                                        <div className="font-bold text-gray-900 text-center text-sm">
                                            <div>223h</div>
                                            <div>40m</div>
                                        </div>
                                        <div className="text-gray-500 text-center text-sm">
                                            <div>211h</div>
                                            <div>31.2m</div>
                                        </div>
                                        <div className="text-right">
                                            <span className="bg-amber-50 border border-amber-200 text-amber-700 px-2 py-1 rounded-md text-[10px] font-bold whitespace-nowrap">+12h 08.8m</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-5 items-center py-4 border-t border-gray-100">
                                        <div className="col-span-2">
                                            <p className="font-bold text-gray-900 text-sm">Otras Act. (Max 60%)</p>
                                            <p className="text-gray-400 text-[10px] hidden sm:block">Límite máximo no lectivo.</p>
                                        </div>
                                        <div className="font-bold text-gray-900 text-center text-sm">
                                            <div>818h</div>
                                            <div>30m</div>
                                        </div>
                                        <div className="text-gray-500 text-center text-sm">
                                            <div>317h</div>
                                            <div>16.8m</div>
                                        </div>
                                        <div className="text-right">
                                            <span className="bg-amber-50 border border-amber-200 text-amber-700 px-2 py-1 rounded-md text-[10px] font-bold whitespace-nowrap">+501h 13.2m</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-5 items-center py-4 border-t border-gray-100">
                                        <div className="col-span-2">
                                            <p className="font-bold text-gray-900 text-sm">Horas PIE / Colaboración</p>
                                            <p className="text-gray-400 text-[10px] hidden sm:block">Asignado a doc. regulares.</p>
                                        </div>
                                        <div className="font-bold text-gray-900 text-center text-sm">
                                            <div>62h</div>
                                            <div>30m</div>
                                        </div>
                                        <div className="text-gray-500 text-center flex items-center justify-center gap-1 text-sm">
                                            <div className="border border-gray-200 rounded px-2 py-0.5">63</div>
                                            <div className="text-xs">h</div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-red-500 font-bold border border-red-100 bg-red-50 px-2 py-1 rounded-md text-[10px] whitespace-nowrap">-30m</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-xs text-gray-400 mt-12 text-center max-w-4xl mx-auto">
                        El resultado real depende de la estructura contractual y operacional de cada establecimiento. Simulación basada en valores de mercado ponderados 2026.
                    </p>
                </div>
            </section>

            {/* SECCIÓN 10 — ROLES */}
            <section id="roles" className="py-24 px-6 bg-apple-light border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                            Habla el idioma de todo su equipo directivo
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all border-t-4 border-gray-900">
                            <div className="bg-gray-50 p-6 text-gray-900 border-b border-gray-100">
                                <div className="text-4xl mb-4">💼</div>
                                <h3 className="text-2xl font-bold">Para el Sostenedor</h3>
                                <p className="text-gray-500">Enfoque financiero y de riesgo</p>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-4 text-gray-700">
                                    <li>&rarr; Evite multas de hasta $66M CLP</li>
                                    <li>&rarr; Proteja subvención PIE</li>
                                    <li>&rarr; Identifique fugas en nómina en tiempo real</li>
                                    <li>&rarr; ROI demostrado de 10x en año 1</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all border-t-4 border-cyan-500">
                            <div className="bg-cyan-50 p-6 text-cyan-900 border-b border-cyan-100">
                                <div className="text-4xl mb-4">🏫</div>
                                <h3 className="text-2xl font-bold">Para la Dirección</h3>
                                <p className="text-cyan-700">Enfoque de continuidad</p>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-4 text-gray-700">
                                    <li>&rarr; Reemplazos en segundos desde celular</li>
                                    <li>&rarr; Nunca más un aula desatendida</li>
                                    <li>&rarr; Bitácora legal lista para MINEDUC</li>
                                    <li>&rarr; Información de reemplazos y Factor Bradford</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all border-t-4 border-corp-green">
                            <div className="bg-green-50 p-6 text-green-900 border-b border-green-100">
                                <div className="text-4xl mb-4">📚</div>
                                <h3 className="text-2xl font-bold">Para la UTP</h3>
                                <p className="text-green-700">Enfoque operativo</p>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-4 text-gray-700">
                                    <li>&rarr; Horario listo en 1 a 3 días</li>
                                    <li>&rarr; Generador que respeta contratos</li>
                                    <li>&rarr; Co-docencia PIE automática</li>
                                    <li>&rarr; Recupere semanas de oficina</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 11 — PROCESO COMERCIAL */}
            <section id="proceso" className="py-24 px-6 bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-corp-green/10 text-corp-green text-sm font-bold mb-6">🚀 Proceso de Contratación</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-12">
                            Operando en su colegio en menos de una semana
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { num: "01", icon: "📞", title: "Contacto Inicial", text: "Breve conversación para entender su escenario y dotación.", time: "Hoy mismo" },
                            { num: "02", icon: "💻", title: "Demo en Vivo", text: "45 min mostrando SyncroEdu con datos reales. Sin presión.", time: "30-45 min" },
                            { num: "03", icon: "✍️", title: "Contratación", text: "Firma digital del plan ideal para su tamaño institucinal.", time: "Mismo día" },
                            { num: "04", icon: "🚀", title: "Lanzamiento", text: "Carga masiva, setup y 3 capacitaciones al equipo directivo.", time: "~1 semana" }
                        ].map((step, i) => (
                            <div key={i} className="text-center relative">
                                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#00B4A6] to-corp-green rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg shrink-0 z-10 relative">
                                    {step.num}
                                </div>
                                <div className="text-2xl mb-2">{step.icon}</div>
                                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                                <p className="text-sm text-gray-600 mb-3">{step.text}</p>
                                <span className="inline-block bg-gray-100 text-corp-green text-xs font-bold px-3 py-1 rounded-full">{step.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN 12 — INFRAESTRUCTURA */}
            <section id="infraestructura" className="py-24 px-6 bg-apple-light border-b border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                            Infraestructura empresarial. Sus datos, seguros.
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {[
                            { icon: "☁️", title: "Google Cloud Enterprise", text: "Alojado en Google Cloud. Alta disponibilidad y escalabilidad automática." },
                            { icon: "🔒", title: "Datos Encriptados SHA-256", text: "Respaldos firmados digitalmente. Doble confirmación para borrado." },
                            { icon: "🏢", title: "Multi-Tenant Aislado", text: "Su establecimiento opera en un entorno 100% aislado criptográficamente." },
                            { icon: "⚡", title: "Sincronización Tiempo Real", text: "Cambios reflejados en toda la red interna de su colegio cada 5 segundos." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN 13 — EQUIPO */}
            <section id="equipo" className="py-24 px-6 bg-apple-light border-b border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-corp-green/10 text-corp-green text-sm font-bold mb-6">✓ El Equipo</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                            Creado por educadores. <span className="text-corp-green">Para educadores.</span>
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                            SyncroEdu nace de la experiencia directa de profesores que vivieron en carne propia el "calvario" del horario manual y la angustia de una fiscalización.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-white rounded-3xl p-10 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-24 h-24 mx-auto rounded-full bg-corp-green flex items-center justify-center text-3xl font-bold text-white mb-6 border-4 border-green-100">CM</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">Carlos Mundaca</h3>
                            <p className="text-corp-green font-medium mb-6">Co-Fundador · Director Pedagógico</p>
                            <p className="text-gray-600 text-sm leading-relaxed">Profesor, UdeC. Especialista en liderazgo educativo y gestión directiva escolar. Une la mirada pedagógica con la gestión financiera de establecimientos.</p>
                        </div>
                        <div className="bg-white rounded-3xl p-10 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-24 h-24 mx-auto rounded-full bg-corp-cyan flex items-center justify-center text-3xl font-bold text-white mb-6 border-4 border-cyan-100">AG</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">Aracelli Garcia</h3>
                            <p className="text-corp-cyan font-medium mb-6">Co-Fundadora · Directora Académica</p>
                            <p className="text-gray-600 text-sm leading-relaxed">Profesora de Inglés, UCT. Magíster en Didáctica. Académica universitaria y experta en diseño y control de procesos técnico-pedagógicos.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 14 — FAQ */}
            <section id="faq" className="py-24 px-6 bg-white border-b border-gray-100">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 text-center mb-16">
                        Preguntas Frecuentes
                    </h2>
                    
                    <div className="space-y-4">
                        {[
                            { q: "¿Reemplaza completamente el Excel y aSc Timetables?", a: "Sí. SyncroEdu integra en una plataforma generación de horarios, validación legal en tiempo real y gestión de reemplazos. Sin traspasos manuales entre sistemas." },
                            { q: "¿Qué pasa si necesitamos modificar el horario durante el año?", a: "El editor interactivo permite ajustes con detección de conflictos en tiempo real. Cada modificación queda en el Audit Log, asegurando trazabilidad." },
                            { q: "¿Cuánto tiempo toma la implementación?", a: "Aproximadamente 1 semana, incluyendo carga masiva de datos y 3 sesiones de capacitación virtual." },
                            { q: "¿Funciona para colegios con PIE (Decreto N°170)?", a: "Es uno de nuestros módulos estrella. Calcula horas PIE automáticamente y asegura co-docencias correctas." },
                            { q: "¿El precio varía según el tamaño de mi colegio?", a: "Sí. Planes por tramos de dotación total (docentes y asistentes). Contáctenos para una propuesta." }
                        ].map((faq, i) => (
                            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                                <button 
                                    className="w-full text-left px-6 py-5 font-bold text-gray-900 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                                >
                                    {faq.q}
                                    <span className="text-2xl font-normal leading-none text-gray-400">{faqOpen === i ? '✖' : '+'}</span>
                                </button>
                                <AnimatePresence>
                                    {faqOpen === i && (
                                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                                            <div className="p-6 text-gray-600 leading-relaxed border-t border-gray-100">{faq.a}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN 15 — CUBIERTA FORMULARIO */}
            <section id="formulario" className="py-24 px-6 bg-apple-light border-y border-gray-200 relative overflow-hidden">
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-2 bg-corp-green"></div>
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-corp-green/10 text-corp-green text-sm font-bold mb-6">🎯 Sin costo · Sin compromiso</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">Agendemos una demo personalizada</h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            En 30-45 minutos le mostramos SyncroEdu funcionando con datos reales de un establecimiento similar al suyo. 
                        </p>
                        <ul className="space-y-4 text-gray-700 font-medium mb-12">
                            <li className="flex gap-3">✅ El generador trabajando en vivo</li>
                            <li className="flex gap-3">✅ La calculadora 65/35 validando contratos</li>
                            <li className="flex gap-3">✅ Cómo ahorramos multas reales</li>
                            <li className="flex gap-3">✅ Cómo se adapta a su dotación específica</li>
                        </ul>
                        <div className="flex gap-6 items-center">
                            <a href="https://wa.me/56964375050" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 hover:border-corp-green text-gray-800 font-bold font-mono transition-colors">
                                <span>📱</span> +56 9 6437 5050
                            </a>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border-t-8 border-corp-green relative">
                        {formSubmitted ? (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                                <div className="text-6xl mb-4">✅</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Recibimos su solicitud!</h3>
                                <p className="text-gray-600 mb-4">Redirigiendo a WhatsApp para agendar fecha...</p>
                                <div className="flex justify-center mt-6">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-corp-green"></div>
                                </div>
                            </motion.div>
                        ) : (
                            <form id="form-contacto" onSubmit={handleFormSubmit} className="space-y-5">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Solicitar demo gratuita</h3>
                                
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Nombre y Apellido</label>
                                    <input required name="nombre" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-corp-green focus:ring-1 focus:ring-corp-green transition-all" placeholder="Ej: María González" />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Nombre del Establecimiento</label>
                                    <input required name="colegio" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-corp-green focus:ring-1 focus:ring-corp-green transition-all" placeholder="Ej: Colegio San Marcos" />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Su Cargo</label>
                                    <select required name="cargo" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-corp-green focus:ring-1 focus:ring-corp-green transition-all bg-white">
                                        <option value="">-- Seleccione su cargo --</option>
                                        <option value="Sostenedor">Sostenedor / Propietario</option>
                                        <option value="Director">Director / Directora</option>
                                        <option value="UTP">Jefe/a de UTP</option>
                                        <option value="Otro">Otro directivo</option>
                                    </select>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                        <input required name="email" type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-corp-green focus:ring-1 focus:ring-corp-green transition-all" placeholder="correo@micolegio.cl" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp</label>
                                        <input required name="telefono" type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-corp-green focus:ring-1 focus:ring-corp-green transition-all" placeholder="+56 9 XXXX XXXX" />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Tamaño de Dotación</label>
                                    <select required name="funcionarios" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-corp-green focus:ring-1 focus:ring-corp-green transition-all bg-white">
                                        <option value="">-- Docentes + Asistentes --</option>
                                        <option value="Menos de 30">Hasta 30 funcionarios</option>
                                        <option value="31 a 60">31 a 60 funcionarios</option>
                                        <option value="61 a 100">61 a 100 funcionarios</option>
                                        <option value="Más de 100">Más de 100 funcionarios</option>
                                    </select>
                                </div>
                                
                                <button type="submit" className="w-full bg-corp-green text-white font-bold text-lg py-4 rounded-full mt-4 hover:bg-green-600 transition-colors shadow-lg shadow-corp-green/30">
                                    Solicitar mi demo gratuita &rarr;
                                </button>
                                <p className="text-xs text-center text-gray-400 mt-4">🔒 Sus datos están seguros. No compartimos su información.</p>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* SECCIÓN 16 — FINAL CTA */}
            <section className="py-24 px-6 bg-gray-900 text-center">
                <div className="max-w-4xl mx-auto text-white">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                        ¿Cuánto dinero está perdiendo hoy su colegio?
                    </h2>
                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Le mostraremos en vivo, en 30 minutos, cómo SyncroEdu resuelve lo que le toma semanas a su equipo — y cuánto puede ahorrar específicamente.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="https://wa.me/56964375050" target="_blank" rel="noreferrer" className="bg-corp-green text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform w-full sm:w-auto shadow-xl">
                            Hablar por WhatsApp
                        </a>
                        <button onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })} className="border-2 border-white/50 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 w-full sm:w-auto transition-colors">
                            Completar formulario &rarr;
                        </button>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 17 — FOOTER (Retained existing) */}
            <footer className="bg-gray-900 text-gray-400 py-12 text-sm border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="text-corp-green font-bold text-2xl tracking-tight flex items-center gap-2 mb-4">
                            <span className="bg-corp-green text-white w-8 h-8 rounded-md flex items-center justify-center font-bold text-lg">S</span> SyncroEdu
                        </div>
                        <p className="mb-4">La plataforma de Compliance Escolar, Continuidad Operativa y Optimización de RRHH para Chile.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Plataforma</h4>
                        <div className="flex flex-col gap-2">
                            <button onClick={() => document.getElementById('pilares')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors text-left w-max">Funcionalidades</button>
                            <button onClick={() => document.getElementById('caso-orione')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors text-left w-max">Caso de Éxito</button>
                            <Link to="/legal" className="hover:text-white transition-colors">Términos Legales</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Contacto</h4>
                        <p className="flex items-center gap-2 mb-2">📱 <a href="tel:+56964375050" className="hover:text-white">+56 9 6437 5050</a></p>
                        <p className="flex items-center gap-2 mb-2">📧 <a href="mailto:ventas@beacademics.com" className="hover:text-white">ventas@beacademics.com</a></p>
                        <p className="flex items-center gap-2 text-gray-500 mt-6">Lunes a Viernes · 9:00 a 18:00 hrs</p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-gray-600 gap-4">
                    <p>SyncroEdu &copy; {new Date().getFullYear()} Beacademics SpA. Todos los derechos reservados.</p>
                    <p>Desarrollado en Chile 🇨🇱 para colegios chilenos.</p>
                </div>
            </footer>

            {/* BOTÓN FLOTANTE WHATSAPP STICKY */}
            <a href="https://wa.me/56964375050" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 md:px-6 md:py-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] font-bold text-sm md:text-base hover:scale-105 transition-transform animate-[pulse_2s_infinite]">
                 <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 21.0423L12.031 21.0423C13.5615 21.0409 15.0646 20.6276 16.3888 19.8459L16.4837 19.7895L20.4439 20.8286L19.4262 16.9634L19.3364 16.8209C18.4116 15.3533 17.9255 13.6267 17.9255 11.8596C17.9255 6.94557 21.8795 3 26.7905 3C29.1704 3 31.4285 3.92683 33.1118 5.61011C34.7951 7.29339 35.722 9.55152 35.722 11.9314C35.722 16.8455 31.768 20.791 26.8571 20.791C25.0746 20.791 23.3333 20.2929 21.8532 19.3496L21.7223 19.2661L17.7621 20.3053L18.7844 16.4355L18.666 16.2464C17.8488 14.9455 17.4173 13.4158 17.4173 11.8596C17.4173 8.35821 20.2655 5.51 23.7669 5.51C25.464 5.51 27.0628 6.17066 28.2618 7.36971C29.4609 8.56875 30.1215 10.1675 30.1215 11.8646C30.1215 15.366 27.2733 18.2142 23.7719 18.2142C22.2571 18.2142 20.7909 17.7818 19.5393 16.9538L19.2882 16.8041L16.2575 17.596L17.0673 14.6366L16.8996 14.3683C15.9625 12.8717 15.4673 11.1098 15.4673 9.30906C15.4673 4.14817 19.6644 0 24.8329 0C27.3391 0 29.6975 0.976073 31.4682 2.74681C33.2389 4.51756 34.215 6.87593 34.215 9.38211C34.215 14.543 30.0179 18.7404 24.8494 18.7404C23.0805 18.7404 21.3533 18.2779 19.8335 17.3917L12.031 21.0423Z" transform="translate(-11.9688 -0.000488281)"/></svg>
                 <span className="hidden sm:inline">¿Dudas? Escríbanos</span>
            </a>
        </div>
    );
}
