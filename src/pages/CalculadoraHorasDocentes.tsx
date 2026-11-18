import { useId, useState } from 'react';
import { openCookiePreferences } from '../lib/consent';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import Seo, { canonicalUrl } from '../components/Seo';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { StatusBadge } from '../components/ui/StatusBadge';
import { LogoContainer } from '../components/ui/LogoContainer';
import { TABLA_GENERAL, TABLA_PRIORITARIOS, FUENTE_TABLAS_URL, type FilaJornada } from '../data/jornadaDocente';

const PATH = '/recursos/calculadora-horas-docentes/';
const pageUrl = canonicalUrl(PATH);

type Regla = 'general' | 'prioritarios';

const REGLAS: Record<Regla, { tabla: Readonly<Record<number, FilaJornada>>; etiqueta: string; detalle: string }> = {
    general: {
        tabla: TABLA_GENERAL,
        etiqueta: 'Regla general (65/35)',
        detalle: 'Arts. 69 y 80 del Estatuto Docente. Aplica a la mayoría de los docentes de establecimientos con financiamiento del Estado.',
    },
    prioritarios: {
        tabla: TABLA_PRIORITARIOS,
        etiqueta: '1° a 4° básico con 80 % o más de alumnos prioritarios (60/40)',
        detalle: 'Art. cuarto transitorio de la Ley 20.903. Solo para docentes de primer ciclo básico en esos establecimientos.',
    },
};

/** 1710 → "28 h 30 min" */
function formatoHoras(minutos: number): string {
    const total = Math.round(minutos);
    const h = Math.floor(total / 60);
    const m = total % 60;
    if (h === 0) return `${m} min`;
    return m === 0 ? `${h} h` : `${h} h ${m} min`;
}

const faqs = [
    {
        q: '¿Cuántas horas lectivas tiene un contrato de 44 horas?',
        a: 'Desde el año escolar 2019, un contrato de 44 horas cronológicas semanales tiene como máximo 38 horas lectivas de 45 minutos, es decir, 28 horas y 30 minutos de docencia de aula. El resto se distribuye en 3 horas de recreo y 12 horas y 30 minutos de horas no lectivas.',
    },
    {
        q: '¿Cuántos minutos dura una hora pedagógica?',
        a: 'Una hora pedagógica (hora de clase) dura 45 minutos, según el artículo 6° letra a) del Estatuto Docente. Para pasar de horas pedagógicas a cronológicas se multiplica por 45 y se divide por 60: por ejemplo, 38 horas pedagógicas equivalen a 28 horas y 30 minutos.',
    },
    {
        q: '¿El recreo cuenta como hora lectiva o no lectiva?',
        a: 'Ninguna de las dos. El límite de docencia de aula se fija "excluidos los recreos" (descanso docente), por eso la tabla oficial muestra el recreo en una columna aparte.',
    },
    {
        q: '¿Qué es la proporción 65/35?',
        a: 'Es la distribución de la jornada docente que rige desde el año escolar 2019 por la Ley 20.903: la docencia de aula se limita a aproximadamente el 65 % de las horas cronológicas de contrato, y el tiempo restante se destina a actividades curriculares no lectivas y recreos.',
    },
    {
        q: '¿Qué cambia en establecimientos con 80 % o más de alumnos prioritarios?',
        a: 'Para los docentes de 1° a 4° básico de esos establecimientos, la docencia de aula baja a cerca del 60 % del contrato: en 44 horas, como máximo 35 horas lectivas (26 horas y 15 minutos de aula). La Superintendencia de Educación puede eximir por razones fundadas, por ejemplo en escuelas uni, bi o tridocentes.',
    },
    {
        q: '¿En qué se deben usar las horas no lectivas?',
        a: 'Desde la Ley 21.625 (2023), al menos la mitad de las horas no lectivas debe destinarse a la preparación de clases y a la evaluación de aprendizajes. El resto puede usarse en otras actividades profesionales definidas por el establecimiento, como trabajo colaborativo o atención de apoderados.',
    },
    {
        q: '¿Cómo se cuentan las 3 horas PIE del Decreto 170?',
        a: 'Para el profesor de educación regular, las 3 horas cronológicas de planificación, evaluación y seguimiento del PIE se imputan dentro de su docencia de aula (horas lectivas), según el dictamen N° 17.810 de 2016 de la Contraloría. Para el educador diferencial o profesional PIE, el trabajo colaborativo se realiza en sus horas no lectivas, que deben asignarse en bloques suficientes.',
    },
    {
        q: '¿Sirve para educación parvularia o educación especial?',
        a: 'No directamente. En educación parvularia las horas lectivas son de 60 minutos, por lo que se usa el valor de docencia de aula en horas cronológicas. En educación especial con horas de 30 o 40 minutos, el número de clases debe ajustarse a esa duración manteniendo el máximo de aula que fija la ley.',
    },
];

const schemaApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Calculadora de horas lectivas y no lectivas docentes',
    url: pageUrl,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    inLanguage: 'es-CL',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'CLP' },
    description:
        'Calcula las horas lectivas, la docencia de aula, el recreo y las horas no lectivas de un docente según sus horas de contrato, con las tablas oficiales del Mineduc (Ley 20.903, proporción 65/35).',
    publisher: { '@id': 'https://beacademics.com/#organization' },
};

const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
};

const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: canonicalUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Calculadora de horas docentes', item: pageUrl },
    ],
};

function TablaJornada({ tabla, caption }: { tabla: Readonly<Record<number, FilaJornada>>; caption: string }) {
    const filas = Object.entries(tabla)
        .map(([contrato, fila]) => [Number(contrato), fila] as const)
        .sort((a, b) => b[0] - a[0]);
    return (
        <div className="overflow-x-auto rounded-2xl border border-black/5 bg-white">
            <table className="w-full text-sm text-left tabular-nums">
                <caption className="sr-only">{caption}</caption>
                <thead className="bg-[#F5F5F7] text-[#1D1D1F]">
                    <tr>
                        <th scope="col" className="px-4 py-3 font-semibold">Horas de contrato</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Horas lectivas (45 min)</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Docencia de aula</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Recreo</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Horas no lectivas</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-[#515154]">
                    {filas.map(([contrato, [lectivas, aula, recreo, noLectivas]]) => (
                        <tr key={contrato}>
                            <th scope="row" className="px-4 py-2 font-semibold text-[#1D1D1F]">{contrato} h</th>
                            <td className="px-4 py-2">{lectivas}</td>
                            <td className="px-4 py-2">{formatoHoras(aula)}</td>
                            <td className="px-4 py-2">{formatoHoras(recreo)}</td>
                            <td className="px-4 py-2">{formatoHoras(noLectivas)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function Dato({ etiqueta, valor, nota }: { etiqueta: string; valor: string; nota?: string }) {
    return (
        <div className="rounded-2xl bg-[#F5F5F7] p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#515154]">{etiqueta}</p>
            <p className="mt-1 text-2xl font-bold text-[#1D1D1F] tabular-nums">{valor}</p>
            {nota && <p className="mt-1 text-xs text-[#515154]">{nota}</p>}
        </div>
    );
}

export default function CalculadoraHorasDocentes() {
    const ids = useId();
    const [contratoTexto, setContratoTexto] = useState('44');
    const [regla, setRegla] = useState<Regla>('general');
    const [asignadasTexto, setAsignadasTexto] = useState('');
    const [pedagogicasTexto, setPedagogicasTexto] = useState('38');

    const contratoNum = Number(contratoTexto);
    const contratoValido = Number.isInteger(contratoNum) && contratoNum >= 1 && contratoNum <= 44;
    const fila = contratoValido ? REGLAS[regla].tabla[contratoNum] : undefined;

    const asignadas = asignadasTexto.trim() === '' ? null : Number(asignadasTexto);
    const asignadasValida = asignadas !== null && Number.isFinite(asignadas) && asignadas >= 0;

    const pedagogicas = Number(pedagogicasTexto.replace(',', '.'));
    const pedagogicasValida = pedagogicasTexto.trim() !== '' && Number.isFinite(pedagogicas) && pedagogicas >= 0;

    const inputClasses =
        'w-full min-h-12 rounded-xl border border-black/10 bg-white px-4 text-base text-[#1D1D1F] tabular-nums focus:outline-none focus:ring-2 focus:ring-[#007AFF]';

    return (
        <div className="bg-[#F5F5F7] min-h-screen text-[#1D1D1F] font-sans selection:bg-[#007AFF] selection:text-white flex flex-col">
            <Seo path={PATH}>
                <script type="application/ld+json">{JSON.stringify(schemaApp)}</script>
                <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
                <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
            </Seo>

            <header className="sticky top-0 left-0 right-0 z-50 bg-[#F5F5F7]/80 backdrop-blur-[20px] border-b border-black/5">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between text-sm font-medium">
                    <Link to="/" className="flex items-center gap-2 group transition-opacity hover:opacity-80" aria-label="BE Academic, ir al inicio">
                        <LogoContainer className="w-9 h-9">
                            <img src="/Logo-BE-Academic.png" width={400} height={344} alt="" className="h-4 w-auto object-contain" />
                        </LogoContainer>
                        <span className="text-xs font-semibold text-[#515154] group-hover:text-[#1D1D1F] transition-colors">BE Academic</span>
                    </Link>
                    <PrimaryButton variant="green" size="sm" to="/syncroedu/">
                        <span className="sm:hidden">SyncroEdu</span>
                        <span className="hidden sm:inline">Validar toda la dotación</span>
                    </PrimaryButton>
                </nav>
            </header>

            <main id="contenido" tabIndex={-1} className="outline-none flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                <nav aria-label="Ruta de navegación" className="text-xs text-[#515154] mb-6">
                    <Link to="/" className="hover:text-[#1D1D1F]">Inicio</Link>
                    <span aria-hidden="true"> / </span>
                    <span>Calculadora de horas docentes</span>
                </nav>

                <StatusBadge label="RECURSO GRATUITO · NORMATIVA DOCENTE" variant="primary" pulse={false} className="mb-5" />
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] mb-5 font-display" style={{ textWrap: 'balance' }}>
                    Calculadora de horas docentes: lectivas y no lectivas
                </h1>
                <p className="text-lg text-[#515154] max-w-3xl leading-relaxed mb-10">
                    Ingrese las horas de contrato de un docente y obtenga el máximo de horas lectivas, la docencia de aula, el recreo y las horas no lectivas que corresponden según la proporción 65/35 de la Ley 20.903. Los valores salen de las tablas oficiales del Mineduc.
                </p>

                {/* Calculadora */}
                <section aria-labelledby={`${ids}-calc`} className="rounded-3xl bg-white border border-black/5 shadow-sm p-5 sm:p-8 mb-12">
                    <h2 id={`${ids}-calc`} className="flex items-center gap-2 text-xl font-bold mb-6 font-display">
                        <Calculator className="w-5 h-5 text-[#007AFF]" aria-hidden="true" />
                        Calcular la jornada de un docente
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2 mb-8">
                        <div>
                            <label htmlFor={`${ids}-contrato`} className="block text-sm font-semibold mb-2">
                                Horas cronológicas semanales de contrato
                            </label>
                            <input
                                id={`${ids}-contrato`}
                                type="number"
                                inputMode="numeric"
                                min={1}
                                max={44}
                                step={1}
                                value={contratoTexto}
                                onChange={(e) => setContratoTexto(e.target.value)}
                                aria-describedby={`${ids}-contrato-ayuda`}
                                aria-invalid={!contratoValido}
                                className={inputClasses}
                            />
                            <p id={`${ids}-contrato-ayuda`} className={`mt-2 text-xs ${contratoValido ? 'text-[#515154]' : 'text-[#C9302C] font-semibold'}`}>
                                {contratoValido ? 'Número entero entre 1 y 44 (máximo legal por sostenedor).' : 'Ingrese un número entero entre 1 y 44.'}
                            </p>
                        </div>

                        <div>
                            <label htmlFor={`${ids}-asignadas`} className="block text-sm font-semibold mb-2">
                                Horas lectivas asignadas hoy <span className="font-normal text-[#515154]">(opcional, de 45 min)</span>
                            </label>
                            <input
                                id={`${ids}-asignadas`}
                                type="number"
                                inputMode="numeric"
                                min={0}
                                step={1}
                                placeholder="Ej.: 40"
                                value={asignadasTexto}
                                onChange={(e) => setAsignadasTexto(e.target.value)}
                                className={inputClasses}
                            />
                            <p className="mt-2 text-xs text-[#515154]">Para revisar si la carga actual supera el máximo.</p>
                        </div>
                    </div>

                    <fieldset className="mb-8">
                        <legend className="text-sm font-semibold mb-3">Tipo de docente</legend>
                        <div className="grid gap-3 md:grid-cols-2">
                            {(Object.keys(REGLAS) as Regla[]).map((clave) => (
                                <label
                                    key={clave}
                                    className={`flex gap-3 rounded-2xl border p-4 cursor-pointer transition-colors ${regla === clave ? 'border-[#007AFF] bg-[#007AFF]/5' : 'border-black/10 hover:bg-black/[0.02]'}`}
                                >
                                    <input
                                        type="radio"
                                        name={`${ids}-regla`}
                                        value={clave}
                                        checked={regla === clave}
                                        onChange={() => setRegla(clave)}
                                        className="mt-1 h-4 w-4 accent-[#007AFF]"
                                    />
                                    <span>
                                        <span className="block text-sm font-semibold">{REGLAS[clave].etiqueta}</span>
                                        <span className="block text-xs text-[#515154] mt-1">{REGLAS[clave].detalle}</span>
                                    </span>
                                </label>
                            ))}
                        </div>
                    </fieldset>

                    <div aria-live="polite">
                        {fila ? (
                            <>
                                <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
                                    <Dato etiqueta="Horas lectivas máx." valor={String(fila[0])} nota="horas de 45 minutos" />
                                    <Dato
                                        etiqueta="Docencia de aula"
                                        valor={formatoHoras(fila[1])}
                                        nota={`${((fila[1] / (contratoNum * 60)) * 100).toLocaleString('es-CL', { maximumFractionDigits: 1 })} % del contrato`}
                                    />
                                    <Dato etiqueta="Recreo" valor={formatoHoras(fila[2])} nota="no es lectivo ni no lectivo" />
                                    <Dato
                                        etiqueta="Horas no lectivas"
                                        valor={formatoHoras(fila[3])}
                                        nota={`mín. ${formatoHoras(Math.ceil(fila[3] / 2))} para preparar clases y evaluar`}
                                    />
                                </div>

                                {asignadasValida && asignadas !== null && (
                                    asignadas > fila[0] ? (
                                        <p className="mt-5 flex items-start gap-2 rounded-2xl bg-[#FF3B30]/10 p-4 text-sm text-[#A1271F]">
                                            <AlertTriangle className="w-5 h-5 shrink-0" aria-hidden="true" />
                                            <span>
                                                <strong>Excede el máximo en {asignadas - fila[0]} {asignadas - fila[0] === 1 ? 'hora lectiva' : 'horas lectivas'}.</strong>{' '}
                                                Con {contratoNum} horas de contrato el tope es {fila[0]} horas de 45 minutos.
                                            </span>
                                        </p>
                                    ) : (
                                        <p className="mt-5 flex items-start gap-2 rounded-2xl bg-[#34C759]/10 p-4 text-sm text-[#1F7A38]">
                                            <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                                            <span>
                                                <strong>Dentro del máximo.</strong>{' '}
                                                {asignadas === fila[0]
                                                    ? 'La carga asignada coincide con el tope.'
                                                    : `Quedan ${fila[0] - asignadas} ${fila[0] - asignadas === 1 ? 'hora lectiva' : 'horas lectivas'} de margen.`}
                                            </span>
                                        </p>
                                    )
                                )}
                            </>
                        ) : (
                            <p className="rounded-2xl bg-[#F5F5F7] p-4 text-sm text-[#515154]">Ingrese las horas de contrato para ver el resultado.</p>
                        )}
                    </div>
                </section>

                {/* Conversor */}
                <section aria-labelledby={`${ids}-conv`} className="rounded-3xl bg-white border border-black/5 shadow-sm p-5 sm:p-8 mb-12">
                    <h2 id={`${ids}-conv`} className="text-xl font-bold mb-2 font-display">Conversor de horas pedagógicas a cronológicas</h2>
                    <p className="text-sm text-[#515154] mb-5">Una hora pedagógica dura 45 minutos; una hora cronológica, 60.</p>
                    <div className="grid gap-4 sm:grid-cols-2 items-end">
                        <div>
                            <label htmlFor={`${ids}-pedagogicas`} className="block text-sm font-semibold mb-2">Horas pedagógicas</label>
                            <input
                                id={`${ids}-pedagogicas`}
                                type="text"
                                inputMode="decimal"
                                value={pedagogicasTexto}
                                onChange={(e) => setPedagogicasTexto(e.target.value)}
                                className={inputClasses}
                            />
                        </div>
                        <p className="rounded-2xl bg-[#F5F5F7] p-4 text-sm" aria-live="polite">
                            {pedagogicasValida ? (
                                <>
                                    <span className="text-[#515154]">Equivalen a </span>
                                    <strong className="text-lg tabular-nums">{formatoHoras(pedagogicas * 45)}</strong>
                                    <span className="text-[#515154]"> cronológicas</span>
                                </>
                            ) : (
                                <span className="text-[#515154]">Ingrese un número (puede usar decimales).</span>
                            )}
                        </p>
                    </div>
                </section>

                {/* Explicación */}
                <section className="mb-12 max-w-3xl">
                    <h2 className="text-2xl font-bold mb-4 font-display">Cómo se calcula la jornada docente</h2>
                    <div className="space-y-4 text-[#515154] leading-relaxed">
                        <p>
                            La jornada de un docente se fija en horas cronológicas (de 60 minutos) y no puede superar las 44 horas semanales con un mismo sostenedor. Dentro de ese contrato se distinguen tres tiempos: la <strong className="text-[#1D1D1F]">docencia de aula</strong> (las clases), el <strong className="text-[#1D1D1F]">recreo</strong> y las <strong className="text-[#1D1D1F]">actividades curriculares no lectivas</strong>.
                        </p>
                        <p>
                            Desde el año escolar 2019, para un contrato de 44 horas la docencia de aula no puede exceder de 28 horas y 30 minutos, excluidos los recreos: son 38 clases de 45 minutos. Para contratos menores, el máximo se calcula en la misma proporción, y la tabla oficial redondea el resultado a clases completas. Por eso la calculadora no aplica un 65 % exacto, sino los valores de la tabla.
                        </p>
                        <p>
                            En los establecimientos con 80 % o más de alumnos prioritarios, los docentes de 1° a 4° básico tienen un tope menor: 26 horas y 15 minutos de aula en un contrato de 44 horas. Además, la Ley 21.625 exige que al menos la mitad de las horas no lectivas se destine a preparar clases y evaluar aprendizajes.
                        </p>
                    </div>
                </section>

                {/* Tablas completas */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-2 font-display">Tabla de horas lectivas y no lectivas (65/35)</h2>
                    <p className="text-sm text-[#515154] mb-5 max-w-3xl">
                        Distribución oficial para contratos de 1 a 44 horas, vigente desde el año escolar 2019 (arts. 69 y 80 del DFL N° 1 de 1996).
                    </p>
                    <TablaJornada tabla={TABLA_GENERAL} caption="Distribución de la jornada docente, regla general 65/35" />

                    <details className="mt-6 rounded-2xl border border-black/5 bg-white p-5">
                        <summary className="cursor-pointer font-semibold">
                            Tabla para 1° a 4° básico en establecimientos con 80 % o más de alumnos prioritarios
                        </summary>
                        <p className="text-sm text-[#515154] my-4">Art. cuarto transitorio de la Ley 20.903.</p>
                        <TablaJornada tabla={TABLA_PRIORITARIOS} caption="Distribución de la jornada docente, establecimientos con 80 % o más de alumnos prioritarios" />
                    </details>
                </section>

                {/* FAQ */}
                <section className="mb-12 max-w-3xl">
                    <h2 className="text-2xl font-bold mb-5 font-display">Preguntas frecuentes</h2>
                    <div className="space-y-3">
                        {faqs.map((faq) => (
                            <details key={faq.q} className="rounded-2xl border border-black/5 bg-white p-5">
                                <summary className="cursor-pointer font-semibold">{faq.q}</summary>
                                <p className="mt-3 text-[#515154] leading-relaxed">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="rounded-3xl bg-[#1C1C1E] text-white p-6 sm:p-10 mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 font-display">¿Necesita revisar a toda la dotación?</h2>
                    <p className="text-[#A1A1A6] max-w-2xl mb-6 leading-relaxed">
                        SyncroEdu aplica esta misma tabla a cada docente de su colegio, marca quién excede el máximo y genera el horario respetando la proporción 65/35 y las horas PIE.
                    </p>
                    <PrimaryButton variant="green" size="lg" to="/syncroedu/" icon={<ArrowRight className="w-4 h-4" />}>
                        Conocer SyncroEdu
                    </PrimaryButton>
                </section>

                <p className="text-xs text-[#515154] max-w-3xl leading-relaxed">
                    Herramienta de referencia; no reemplaza la asesoría legal. Fuente:{' '}
                    <a href={FUENTE_TABLAS_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1D1D1F] inline-flex items-center gap-1">
                        Mineduc, Orientaciones sobre el incremento de horas no lectivas (Ley 20.903)
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                    . Revise si hay cambios normativos posteriores antes de tomar decisiones de contratación.
                </p>
            </main>

            <footer className="bg-[#1C1C1E] text-[#A1A1A6] py-12 text-sm border-t border-white/10 mt-auto">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <div>
                        <p className="text-white font-semibold mb-1">BE Academic. Ecosistema Tecnológico para la Educación en Chile.</p>
                        <p>&copy; {new Date().getFullYear()} Sociedad de Formación BE Academic Limitada. Todos los derechos reservados.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <Link to="/syncroedu/" className="hover:text-white transition-colors">SyncroEdu</Link>
                        <Link to="/syncrotime/" className="hover:text-white transition-colors">SyncroTime</Link>
                        <Link to="/privacidad/" className="hover:text-white transition-colors">Política de privacidad</Link>
                        <Link to="/cookies/" className="hover:text-white transition-colors">Política de cookies</Link>
                        <button type="button" onClick={openCookiePreferences} className="hover:text-white transition-colors">Preferencias de cookies</button>
                        <Link to="/legal/" className="hover:text-white transition-colors">Información Legal</Link>
                        <Link to="/contacto/" className="hover:text-white transition-colors">Contacto</Link>
                        <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
