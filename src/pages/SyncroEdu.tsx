import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export default function SyncroEdu() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen text-apple-gray font-sans selection:bg-corp-green selection:text-white">
            <Helmet>
                <title>SyncroEdu | Gestión Docente y Cumplimiento Legal MINEDUC</title>
                <meta name="description" content="SyncroEdu automatiza la gestión docente, cuadratura de contratos y cumplimiento legal ante el MINEDUC. Blinda tu colegio contra multas y optimiza procesos operativos." />
                <meta name="keywords" content="gestión docente chile, cumplimiento legal mineduc, syncroedu, cuadratura de contratos, software educativo chile" />
                <link rel="canonical" href="https://beacademic.cl/syncroedu" />
            </Helmet>
            {/* Header / Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
                            <span className="text-lg leading-none pb-0.5">&lsaquo;</span>
                            <img src="/Logo-BE-Academic.png" alt="BE Academic" className="h-5 w-auto object-contain" />
                        </Link>
                        <span className="text-corp-green font-bold text-lg tracking-tight">SyncroEdu</span>
                        <div className="hidden md:flex gap-6">
                            <button onClick={() => document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-gray-900 transition-colors">La Solución</button>
                            <button onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-gray-900 transition-colors">Beneficios y ROI</button>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="https://syncroedu.com" className="text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">
                            Iniciar Sesión
                        </a>
                        <button 
                            onClick={() => document.getElementById('cotizar')?.scrollIntoView({ behavior: 'smooth' })} 
                            className="bg-corp-green text-white px-4 py-1.5 rounded-full hover:bg-green-500 transition-colors"
                        >
                            Solicitar Demo
                        </button>
                    </div>
                </nav>
            </header>

            {/* 1. Hero Section */}
            <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corp-green/10 text-corp-green text-sm font-bold tracking-wide mb-6 uppercase"
                    >
                        El Software Escolar que Blinda tu Institución
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight mb-6"
                    >
                        Automatiza tus horarios y <br className="hidden lg:block" /> erradica las multas.
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium"
                    >
                        ¿Sabía que un error manual en el horario de un docente puede costarle hasta $1.300.000 en multas, o hacerle devolver la subvención PIE completa? SyncroEdu genera horarios en minutos, valida por ley cada contrato y gestiona reemplazos urgentes desde el celular.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start"
                    >
                        <button onClick={() => document.getElementById('cotizar')?.scrollIntoView({ behavior: 'smooth' })} className="bg-corp-green text-white px-8 py-3 rounded-full text-lg font-bold hover:scale-105 transition-transform w-full sm:w-auto text-center shadow-lg shadow-green-500/30">
                            Agendar Demo de 10 min
                        </button>
                    </motion.div>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex-1 w-full max-w-2xl"
                >
                    <div className="relative rounded-3xl bg-apple-light border border-gray-100 p-2 shadow-2xl flex flex-col items-center justify-center aspect-[4/3] overflow-hidden group hover:border-corp-green/30 transition-colors">
                        <img src="/Dashboard.PNG" alt="Dashboard Principal" className="w-full h-full object-cover rounded-2xl relative z-10 bg-white" />
                    </div>
                </motion.div>
            </section>

            {/* 2. El Problema (Pitch 2 min) */}
            <section className="py-24 bg-apple-light px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
                        Horarios rotos y fugas financieras: el peligro de usar un "programa ciego".
                    </h2>
                    <p className="text-xl text-gray-600 font-medium leading-relaxed mb-6 text-left">
                        Diseñar el horario de clases y cuadrar los contratos de los profesores es el dolor de cabeza más grande de cada inicio de año. Históricamente, la UTP pasa semanas armando la grilla a mano o usando "solvers" matemáticos que son ciegos a la ley, para que luego Contabilidad se dé cuenta de que algún profesor quedó con más horas lectivas de lo permitido, arriesgando multas millonarias.
                    </p>
                    <p className="text-xl text-corp-green font-bold leading-relaxed text-left">
                        Con SyncroEdu cambiamos las reglas del juego. No somos un simple software de horarios; somos un seguro operativo y financiero para su colegio que integra el cumplimiento de la ley (Ley 20.903) directamente en el diseño del turno.
                    </p>
                </div>
            </section>

            {/* 3. La Solución (Pilares e Inventario de Módulos) */}
            <section id="funcionalidades" className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-100">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        La Solución Completa
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Los módulos y áreas operativas que aseguran la continuidad de su establecimiento.
                    </p>
                </div>

                <div className="space-y-32">
                    {/* Feature 1: Calculadora Legal */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900">⚖️ Calculadora Legal de Cumplimiento</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Actúa como un asesor legal en tiempo real que verifica que la distribución lectiva/no lectiva (65/35 o 60/40) cumpla estrictamente la normativa educativa chilena. Contiene clasificaciones bajo el MINEDUC para distribuir correctamente el tiempo de Preparación (40%), DPD (60%) y Trabajo Comunitario (60%). Con un semáforo visual único.
                            </p>
                        </div>
                        <div className="flex-1 w-full bg-white rounded-3xl aspect-[4/3] flex flex-col items-center justify-center p-2 text-center border border-gray-100 shadow-xl relative overflow-hidden group">
                            <img src="/Semaforo 1.png" alt="Semaforo Legal" className="w-full h-full object-cover sm:object-contain rounded-2xl relative z-10 group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    {/* Feature 2: Motor Generador */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900">⚙️ Motor de Generación Algorítmica</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Un "solver" inteligente que respeta restricciones duras y blandas (como ventanas máximas, topes diarios). Permite la inyección masiva en la grilla oficial de docentes con un solo clic. Fundamental para asegurar la dotación de co-docencia y auditoría legal bajo el PIE (Decreto Supremo N° 170).
                            </p>
                        </div>
                        <div className="flex-1 w-full bg-white rounded-3xl aspect-[4/3] flex flex-col items-center justify-center p-2 text-center border border-gray-100 shadow-xl relative overflow-hidden group">
                            <img src="/Generador.png" alt="Motor Generador de Grilla" className="w-full h-full object-cover sm:object-contain rounded-2xl relative z-10 group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    {/* Feature 3: App Móvil */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900">📱 App Móvil de Emergencia Operativa</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Plataforma móvil para iOS y Android diseñada para el equipo directivo. Búsqueda instantánea e inteligente de reemplazos cruzando la dotación disponible frente a faltas imprevistas. Genera bitácoras para auditoría e historial auditable listo para cualquier fiscalización externa.
                            </p>
                        </div>
                        <div className="flex-1 w-full bg-white rounded-3xl aspect-[4/3] flex flex-col items-center justify-center p-2 text-center border border-gray-100 shadow-xl relative overflow-hidden group">
                            <img src="/Dahsboard%20movil.png" alt="App Móvil SyncroEdu" className="w-full h-full object-cover sm:object-contain rounded-2xl relative z-10 group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    {/* Feature 4: HR Analytics */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900">📊 Gestión de Personas</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Convierta datos en indicadores críticos de gestión como Costo por Alumno Atendido, Costo por Hora Lectiva e Índice de Ocupación. Incluye detección algorítmica <span className="font-semibold italic">Bradford Factor</span>, que alerta tempranamente sobre ausentismo corto (licencias médicas menores a 3 días) intermitente y recurrente los lunes y viernes.
                            </p>
                        </div>
                        <div className="flex-1 w-full bg-gray-50 rounded-3xl aspect-[4/3] flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-gray-300 relative overflow-hidden">
                            <span className="text-4xl mb-4 z-10 w-full">📈</span>
                            <span className="text-gray-500 font-medium z-10 text-lg leading-relaxed">[Imagen Requerida: Analytics Bradford Factor] <br/><span className="text-sm">Pantalla de analítica avanzada RRHH con índices como Bradford Factor, tasa de rotación o eNPS.</span></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Impacto Económico / ROI */}
            <section id="beneficios" className="py-24 px-6 bg-apple-light border-y border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                                Transformamos el Gasto en un Retorno de Inversión Seguro
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                El valor de SyncroEdu radica en 5 pilares críticos de rentabilidad (ROI) que blindan la operación financiera de su comunidad educativa:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                                    <span className="text-corp-green text-2xl font-bold">1</span>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Mitigación de Multas</h4>
                                        <p className="text-gray-600 text-sm mt-1">Alerta sobre violaciones normativas en cada contrato, evitando multas que promedian 20 UTM ($1.320.000 CLP).</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                                    <span className="text-corp-green text-2xl font-bold">2</span>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Control de Fugas en Planilla</h4>
                                        <p className="text-gray-600 text-sm mt-1">Identifique horas extras mal pagadas o capacidad ociosa de contratos. Optimiza sobre $4.5 M de pesos en colegios promedio.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                                    <span className="text-corp-green text-2xl font-bold">3</span>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Protección de Subvención PIE</h4>
                                        <p className="text-gray-600 text-sm mt-1">Planifique la dotación exacta por cada curso NEE; evite devolver hasta $9M anuales por curso por fallar en la co-docencia.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                                    <span className="text-corp-green text-2xl font-bold">4</span>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Ahorro Directo de Horas UTP/Oficina</h4>
                                        <p className="text-gray-600 text-sm mt-1">Reduce en un 80% las semanas administrativas que pierde Dirección en procesos manuales y planillas de cálculo.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                                    <span className="text-corp-green text-2xl font-bold">5</span>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Mitigación de Ausentismo (Bradford Factor)</h4>
                                        <p className="text-gray-600 text-sm mt-1">Frena las licencias médicas "cortas" de viernes y lunes identificando patrones destructivos de antemano.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-corp-green to-blue-500 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-xl flex flex-col w-full h-full relative overflow-hidden">
                                <div className="mb-6 border-b border-gray-100 pb-4">
                                    <h3 className="text-xl font-bold text-gray-900 leading-tight">Simulación Financiera del ROI</h3>
                                    <p className="text-sm text-gray-500 mt-1">Colegio Mediano (Tramo 2, ~35 funcionarios)</p>
                                </div>

                                {/* Inversión Section */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Inversión Año 1</p>
                                        <p className="text-xl font-bold text-gray-900">$1.929.900 <span className="text-xs font-normal text-gray-500">CLP</span></p>
                                        <p className="text-[10px] text-gray-400 mt-1 leading-tight">Plan Premium + Setup</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Inversión Año 2+</p>
                                        <p className="text-xl font-bold text-gray-900">$1.529.900 <span className="text-xs font-normal text-gray-500">CLP</span></p>
                                        <p className="text-[10px] text-gray-400 mt-1 leading-tight">Sin setup de implementación</p>
                                    </div>
                                </div>

                                {/* Table Section */}
                                <div className="flex-1 mb-6">
                                    <h4 className="text-sm font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2">Impactos Financieros y Ahorros Proyectados</h4>
                                    <div className="space-y-3">
                                        {[
                                            { concept: "Optimización Cargas Horarias", impact: "$4.560.000", status: "Ahorro Directo Garantizado" },
                                            { concept: "Ahorro de tiempo UTP", impact: "$1.687.500", status: "Eficiencia Directa Garantizada" },
                                            { concept: "Control Gestión RRHH", impact: "$2.500.000", status: "Optimización Costos Ocultos" },
                                            { concept: "Evitar Multa Supereduc", impact: "$1.320.000", status: "Mitigación Riesgo Alta" },
                                            { concept: "Evitar devolución Subv. PIE", impact: "$9.000.000", status: "Seguro Ingresos Crítico" },
                                            { concept: "Evitar multas por contratos", impact: "$330.000", status: "Mitigación Riesgo Media" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between text-sm gap-1 sm:gap-4">
                                                <div className="flex flex-col">
                                                    <span className="text-gray-700 font-medium leading-tight">{item.concept}</span>
                                                    <span className="text-[10px] text-gray-400">{item.status}</span>
                                                </div>
                                                <span className="font-mono text-gray-900 font-semibold text-right">{item.impact}</span>
                                            </div>
                                        ))}
                                        <div className="flex items-center justify-between text-sm font-bold pt-4 border-t border-gray-100 text-corp-green">
                                            <span>VALOR ENTREGADO ANUAL</span>
                                            <span className="text-right">$19.397.500 CLP</span>
                                        </div>
                                    </div>
                                </div>

                                {/* ROI & Breakeven Section */}
                                <div className="bg-corp-green/5 rounded-2xl p-5 border border-corp-green/20">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm border border-gray-50 text-sm">
                                            <span className="font-bold text-gray-700">ROI Año 1</span>
                                            <span className="text-lg font-bold text-corp-green text-right">10.05x <span className="hidden sm:inline text-xs text-gray-500 font-normal ml-1">(1005%)</span></span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm border border-gray-50 text-sm">
                                            <span className="font-bold text-gray-700">ROI Año 2+</span>
                                            <span className="text-lg font-bold text-corp-green text-right">12.67x <span className="hidden sm:inline text-xs text-gray-500 font-normal ml-1">(1267%)</span></span>
                                        </div>
                                        <div className="mt-2 text-xs text-gray-600 leading-relaxed border-t border-corp-green/20 pt-3">
                                            <span className="font-bold text-gray-900">Punto de Equilibrio:</span> Recupera el 100% de la inversión inicial en <span className="font-bold text-corp-green">menos de 45 días</span> operando con la plataforma.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Anclaje y Posicionamiento vs Competencia */}
            <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-100">
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        ¿Por qué un Simple "Solver" No es Suficiente?
                    </h2>
                    <p className="text-xl text-gray-500 max-w-3xl">
                        Un programa importado tradicional entrega horarios matemáticamente válidos, pero <span className="font-bold text-gray-700">legalmente ciegos</span> al mercado chileno. SyncroEdu opera en la liga del Compliance Escolar integrado.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-10 rounded-3xl bg-gray-50 border border-gray-200 hover:border-corp-green/40 transition-colors">
                        <span className="text-4xl mb-6 block">👩‍⚖️</span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">La Calculadora Legal vs el "Algoritmo Ciego"</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Nuestra plataforma respeta las leyes de Chile, clasifica horas no lectivas y cruza contratos internamente de forma automática garantizando que su grilla aprobada sea 100% auditable bajo Ley de Subvenciones.
                        </p>
                    </div>
                    <div className="p-10 rounded-3xl bg-gray-50 border border-gray-200 hover:border-corp-green/40 transition-colors">
                        <span className="text-4xl mb-6 block">📋</span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Evidencia Operacional Inmediata</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Con la bitácora móvil de reemplazos, basta un clic desde el celular del equipo directivo para demostrar bajo qué estado normativo se realizó una suplencia de emergencia, listo para fiscalizadores.
                        </p>
                    </div>
                    <div className="p-10 rounded-3xl bg-gray-50 border border-gray-200 hover:border-corp-green/40 transition-colors">
                        <span className="text-4xl mb-6 block">🤝</span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">El Puente Directo con Contabilidad</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            SyncroEdu genera reportes exactos para que Recursos Humanos confeccione anexos y contratos consolidados sin retrasos, anticipándose a denuncias en la Inspección del Trabajo.
                        </p>
                    </div>
                </div>
            </section>

            {/* 6. CTA Final */}
            <section id="cotizar" className="py-32 bg-[#1b263b] text-white px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
                        Solicite un Diagnóstico <br className="hidden md:block" /> Operativo con Nosotros
                    </h2>
                    <p className="text-xl text-gray-300 font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
                        Nuestra plataforma le permite recuperar el 100% de su inversión en menos de 45 días eliminando fugas financieras. <br/><span className="text-corp-green font-bold text-2xl mt-4 block">¿Está listo para dar el salto?</span>
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="/contacto" className="bg-corp-green text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform w-full sm:w-auto text-center shadow-lg shadow-green-500/20">
                            Agendar Demostración Oficial
                        </Link>
                        <a href="https://wa.me/message/7NPPQUPQWQLCN1" target="_blank" rel="noopener noreferrer" className="bg-transparent text-corp-green border-2 border-corp-green px-10 py-5 rounded-full text-xl font-bold hover:bg-[#1b263b] hover:shadow-lg transition-all w-full sm:w-auto text-center">
                            Consultar vía WhatsApp
                        </a>
                    </div>
                </div>
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
                        <Link to="/privacidad-syncroedu" className="hover:text-white transition-colors">Política de Privacidad (SyncroEdu)</Link>
                        <Link to="/condiciones-syncroedu" className="hover:text-white transition-colors">Condiciones de Servicio (SyncroEdu)</Link>
                        <Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
