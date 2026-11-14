import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, AlertTriangle, Calculator } from 'lucide-react';
import Seo, { canonicalUrl } from '../components/Seo';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { StatusBadge } from '../components/ui/StatusBadge';
import { LogoContainer } from '../components/ui/LogoContainer';
import { MODULOS, type ModuloSyncroEdu } from '../data/syncroeduModulos';
import { whatsappLink } from '../config/contact';

export default function SyncroEduModulo({ modulo }: { modulo: ModuloSyncroEdu }) {
    const path = `/syncroedu/${modulo.slug}/`;
    const pageUrl = canonicalUrl(path);
    const otros = MODULOS.filter((m) => m.slug !== modulo.slug);

    const schemaFaq = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: modulo.faqs.map((faq) => ({
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
            { '@type': 'ListItem', position: 2, name: 'SyncroEdu', item: canonicalUrl('/syncroedu/') },
            { '@type': 'ListItem', position: 3, name: modulo.nombre, item: pageUrl },
        ],
    };

    return (
        <div className="bg-[#F5F5F7] min-h-screen text-[#1D1D1F] font-sans selection:bg-[#34C759] selection:text-white flex flex-col">
            <Seo path={path}>
                <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
                <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
            </Seo>

            <header className="sticky top-0 left-0 right-0 z-50 bg-[#F5F5F7]/80 backdrop-blur-[20px] border-b border-black/5">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between text-sm font-medium">
                    <Link to="/syncroedu/" className="flex items-center gap-2 group transition-opacity hover:opacity-80" aria-label="SyncroEdu, ir a la página del producto">
                        <LogoContainer className="w-9 h-9">
                            <img src="/Logo-SyncroEdu.png" alt="" width={254} height={289} className="h-5 w-5 object-contain" />
                        </LogoContainer>
                        <span className="font-bold text-base tracking-tight">SyncroEdu</span>
                    </Link>
                    <PrimaryButton variant="green" size="sm" to="/contacto/">
                        <span className="sm:hidden">Demo</span>
                        <span className="hidden sm:inline">Agendar demo</span>
                    </PrimaryButton>
                </nav>
            </header>

            <main id="contenido" tabIndex={-1} className="outline-none flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
                <nav aria-label="Ruta de navegación" className="text-xs text-[#515154] mb-6">
                    <Link to="/" className="hover:text-[#1D1D1F]">Inicio</Link>
                    <span aria-hidden="true"> / </span>
                    <Link to="/syncroedu/" className="hover:text-[#1D1D1F]">SyncroEdu</Link>
                    <span aria-hidden="true"> / </span>
                    <span>{modulo.nombre}</span>
                </nav>

                <section className="grid gap-10 lg:grid-cols-2 lg:items-center mb-16">
                    <div>
                        <StatusBadge label={modulo.badge} variant="success" pulse={false} className="mb-5" />
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] mb-5 font-display" style={{ textWrap: 'balance' }}>
                            {modulo.h1}
                        </h1>
                        <p className="text-lg text-[#515154] leading-relaxed mb-8">{modulo.intro}</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <PrimaryButton variant="green" size="lg" to="/contacto/" icon={<ArrowRight className="w-4 h-4" />}>
                                Agendar una demo
                            </PrimaryButton>
                            <PrimaryButton variant="secondary" size="lg" to="/syncroedu/">
                                Ver todo SyncroEdu
                            </PrimaryButton>
                        </div>
                    </div>
                    <div className="rounded-3xl bg-white border border-black/5 shadow-sm p-3">
                        <img
                            src={modulo.imagen.src}
                            alt={modulo.imagen.alt}
                            width={modulo.imagen.width}
                            height={modulo.imagen.height}
                            className="w-full h-auto rounded-2xl"
                        />
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 font-display">{modulo.problemaTitulo}</h2>
                    <div className="grid gap-4 md:grid-cols-3">
                        {modulo.problemas.map((p) => (
                            <div key={p.titulo} className="rounded-3xl bg-white border border-black/5 p-6">
                                <AlertTriangle className="w-5 h-5 text-[#FF9500] mb-3" aria-hidden="true" />
                                <h3 className="font-bold mb-2">{p.titulo}</h3>
                                <p className="text-sm text-[#515154] leading-relaxed">{p.texto}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-16 grid gap-8 lg:grid-cols-2">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-display">{modulo.solucionTitulo}</h2>
                        <p className="text-[#515154] leading-relaxed">{modulo.solucionTexto}</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-black/5 p-6">
                        <h3 className="font-bold mb-4">Qué incluye</h3>
                        <ul className="space-y-3">
                            {modulo.funciones.map((f) => (
                                <li key={f} className="flex gap-3 text-sm text-[#515154] leading-relaxed">
                                    <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0" aria-hidden="true" />
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 text-xs font-semibold text-[#1F7A38] bg-[#34C759]/10 rounded-xl px-3 py-2">
                            Disponible en: Plan {modulo.planes.join(' y Plan ')}. {modulo.planNota}
                        </p>
                    </div>
                </section>

                <section className="mb-16 rounded-3xl bg-white border border-black/5 p-6 sm:p-8">
                    <h2 className="text-xl font-bold mb-2 font-display">Caso piloto y puesta en marcha</h2>
                    <p className="text-sm text-[#515154] mb-5">
                        El colegio piloto es un particular subvencionado de la Región del Biobío con jornada escolar completa: 62 docentes, 36 asistentes de la educación y más de 900 estudiantes.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-3 text-center">
                        <div className="rounded-2xl bg-[#F5F5F7] p-4">
                            <p className="text-2xl font-bold">1–3 días</p>
                            <p className="text-xs text-[#515154]">para confeccionar el horario en el colegio piloto (antes, 3 semanas)</p>
                        </div>
                        <div className="rounded-2xl bg-[#F5F5F7] p-4">
                            <p className="text-2xl font-bold">~1 semana</p>
                            <p className="text-xs text-[#515154]">de puesta en marcha, con 3 capacitaciones</p>
                        </div>
                        <div className="rounded-2xl bg-[#F5F5F7] p-4">
                            <p className="text-2xl font-bold">2 meses</p>
                            <p className="text-xs text-[#515154]">de acompañamiento después de la implementación</p>
                        </div>
                    </div>
                </section>

                <section className="mb-16 max-w-3xl">
                    <h2 className="text-2xl font-bold mb-5 font-display">Preguntas frecuentes</h2>
                    <div className="space-y-3">
                        {modulo.faqs.map((faq) => (
                            <details key={faq.q} className="rounded-2xl border border-black/5 bg-white p-5">
                                <summary className="cursor-pointer font-semibold">{faq.q}</summary>
                                <p className="mt-3 text-[#515154] leading-relaxed">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-5 font-display">Otros módulos de SyncroEdu</h2>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {otros.map((m) => (
                            <Link
                                key={m.slug}
                                to={`/syncroedu/${m.slug}/`}
                                className="rounded-2xl bg-white border border-black/5 p-4 font-semibold hover:border-[#34C759]/40 hover:shadow-sm transition-all flex items-center justify-between gap-2"
                            >
                                <span>{m.nombre}</span>
                                <ArrowRight className="w-4 h-4 text-[#34C759] shrink-0" aria-hidden="true" />
                            </Link>
                        ))}
                    </div>
                    <Link
                        to="/recursos/calculadora-horas-docentes/"
                        className="mt-3 rounded-2xl bg-white border border-black/5 p-4 font-semibold hover:shadow-sm transition-all flex items-center gap-3"
                    >
                        <Calculator className="w-5 h-5 text-[#007AFF]" aria-hidden="true" />
                        <span>Calculadora gratuita de horas lectivas y no lectivas</span>
                    </Link>
                </section>

                <section className="rounded-3xl bg-[#1C1C1E] text-white p-6 sm:p-10">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 font-display">Vea SyncroEdu con los datos de su colegio</h2>
                    <p className="text-[#A1A1A6] max-w-2xl mb-6 leading-relaxed">
                        En una demo de 30 a 45 minutos le mostramos la plataforma con datos modelo y revisamos la estructura de su dotación.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <PrimaryButton variant="green" size="lg" to="/contacto/" icon={<ArrowRight className="w-4 h-4" />}>
                            Agendar una demo
                        </PrimaryButton>
                        <PrimaryButton
                            variant="secondary"
                            size="lg"
                            href={whatsappLink('syncroedu', { message: `Hola, quiero información sobre ${modulo.nombre.toLowerCase()} en SyncroEdu` })}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Escribir por WhatsApp
                        </PrimaryButton>
                    </div>
                </section>
            </main>

            <footer className="bg-[#1C1C1E] text-[#A1A1A6] py-12 text-sm border-t border-white/10 mt-16">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <div>
                        <p className="text-white font-semibold mb-1">SyncroEdu, desarrollado por BE Academic.</p>
                        <p>&copy; {new Date().getFullYear()} Sociedad de Formación BE Academic Limitada. Todos los derechos reservados.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <Link to="/syncroedu/" className="hover:text-white transition-colors">SyncroEdu</Link>
                        <Link to="/recursos/calculadora-horas-docentes/" className="hover:text-white transition-colors">Calculadora de horas docentes</Link>
                        <Link to="/legal/" className="hover:text-white transition-colors">Información Legal</Link>
                        <Link to="/contacto/" className="hover:text-white transition-colors">Contacto</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
