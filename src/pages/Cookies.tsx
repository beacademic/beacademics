import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PoliticaLayout from '../components/PoliticaLayout';
import { openCookiePreferences } from '../lib/consent';

interface FilaCookie {
    nombre: string;
    proveedor: string;
    finalidad: string;
    duracion: string;
}

const NECESARIAS: FilaCookie[] = [
    {
        nombre: 'be_cookie_consent (almacenamiento local)',
        proveedor: 'BE Academic (propia)',
        finalidad: 'Guarda su elección de cookies (versión, fecha y categorías aceptadas) para no volver a preguntarle y para poder demostrar el consentimiento.',
        duracion: '12 meses',
    },
];

const ANALISIS: FilaCookie[] = [
    { nombre: '_ga', proveedor: 'Google Analytics', finalidad: 'Distingue visitantes para generar estadísticas de uso.', duracion: '2 años' },
    { nombre: '_ga_<ID>', proveedor: 'Google Analytics', finalidad: 'Mantiene el estado de la sesión de medición.', duracion: '2 años' },
];

const MARKETING: FilaCookie[] = [
    { nombre: '_gcl_au', proveedor: 'Google Ads', finalidad: 'Atribuye a un anuncio las acciones realizadas después de hacer clic en él (conversiones).', duracion: '90 días' },
    { nombre: '_gcl_aw', proveedor: 'Google Ads', finalidad: 'Guarda el identificador del clic en un anuncio para medir conversiones.', duracion: '90 días' },
    { nombre: 'IDE (dominio doubleclick.net)', proveedor: 'Google', finalidad: 'Mide conversiones y muestra publicidad de BE Academic en otros sitios (remarketing).', duracion: '13 meses' },
    { nombre: 'test_cookie (dominio doubleclick.net)', proveedor: 'Google', finalidad: 'Comprueba si el navegador acepta cookies.', duracion: '15 minutos' },
];

function Tabla({ titulo, filas }: { titulo: string; filas: FilaCookie[] }) {
    return (
        <div className="overflow-x-auto my-3 rounded-xl border border-black/10">
            <table className="w-full text-left text-sm">
                <caption className="sr-only">{titulo}</caption>
                <thead className="bg-[#F5F5F7] text-[#1D1D1F]">
                    <tr>
                        <th scope="col" className="px-3 py-2 font-semibold">Cookie</th>
                        <th scope="col" className="px-3 py-2 font-semibold">Proveedor</th>
                        <th scope="col" className="px-3 py-2 font-semibold">Finalidad</th>
                        <th scope="col" className="px-3 py-2 font-semibold">Duración</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                    {filas.map((f) => (
                        <tr key={f.nombre}>
                            <th scope="row" className="px-3 py-2 font-mono text-xs font-semibold text-[#1D1D1F] align-top">{f.nombre}</th>
                            <td className="px-3 py-2 align-top">{f.proveedor}</td>
                            <td className="px-3 py-2 align-top">{f.finalidad}</td>
                            <td className="px-3 py-2 align-top whitespace-nowrap">{f.duracion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function Cookies() {
    return (
        <>
            <Seo path="/cookies/" />
            <PoliticaLayout titulo="Política de cookies" actualizacion="18 de noviembre de 2026 · versión 2.0">
                <p>
                    Esta política explica qué cookies y tecnologías similares usa <strong>beacademics.com</strong>, para qué sirven y cómo puede aceptarlas,
                    rechazarlas o cambiar su decisión. Complementa la <Link to="/privacidad/">Política de privacidad</Link>. Se rige por la Ley N° 19.628 y, desde
                    su entrada en vigencia, por la Ley N° 21.719; ya aplicamos desde hoy el estándar de esta última: consentimiento libre, informado, específico e
                    inequívoco, dado con una acción afirmativa.
                </p>
                <p>
                    <button
                        type="button"
                        onClick={openCookiePreferences}
                        className="inline-flex min-h-11 items-center rounded-full bg-[#1D1D1F] px-5 text-sm font-semibold text-white no-underline cursor-pointer hover:bg-[#3A3A3C]"
                    >
                        Cambiar mis preferencias de cookies
                    </button>
                </p>

                <h2>1. Qué son las cookies</h2>
                <p>
                    Son pequeños archivos que un sitio guarda en su navegador para recordar información. También existen tecnologías similares, como el
                    almacenamiento local del navegador, que usamos con el mismo propósito.
                </p>

                <h2>2. Cómo las usamos</h2>
                <p>
                    <strong>Sin su permiso solo guardamos su elección de cookies.</strong> Las cookies de análisis y de marketing nunca se cargan antes de que
                    usted las acepte, y rechazarlas es tan fácil como aceptarlas. Puede seguir usando todo el sitio sin aceptarlas.
                </p>

                <h3>Necesarias (no requieren consentimiento)</h3>
                <Tabla titulo="Cookies necesarias" filas={NECESARIAS} />

                <h3>Análisis (solo si las acepta)</h3>
                <p>Miden cómo se usa el sitio con Google Analytics, a través de Google Tag Manager, para mejorarlo.</p>
                <Tabla titulo="Cookies de análisis" filas={ANALISIS} />

                <h3>Marketing (solo si las acepta)</h3>
                <p>Permiten medir cuántas visitas desde anuncios de Google Ads terminan en una solicitud de contacto y mostrar publicidad de BE Academic.</p>
                <Tabla titulo="Cookies de marketing" filas={MARKETING} />

                <p>
                    Estas son todas las cookies que pueden usar las herramientas de Google que habilitamos; las que efectivamente se creen dependen de las
                    etiquetas que tengamos activas, y mantenemos esta lista actualizada. Google actúa como responsable de los datos que recibe con esas
                    cookies; sus condiciones están en{' '}
                    <a href="https://policies.google.com/technologies/cookies?hl=es" target="_blank" rel="noopener noreferrer">policies.google.com/technologies/cookies</a>.
                </p>

                <h2>3. Otros servicios que no usan cookies en este sitio</h2>
                <ul>
                    <li>
                        <strong>Formulario de contacto (HubSpot).</strong> Al llegar al formulario, el navegador se conecta a servidores de HubSpot (Estados
                        Unidos) para mostrarlo. No guarda cookies en beacademics.com, pero HubSpot recibe la dirección IP del visitante. Es el servicio que
                        recibe sus datos cuando usted envía el formulario.
                    </li>
                    <li>
                        <strong>Alojamiento y red (GitHub y Cloudflare).</strong> Entregan y protegen las páginas, y Cloudflare mide estadísticas
                        agregadas de visitas sin usar cookies ni identificarlo.
                    </li>
                    <li>
                        <strong>Tipografías.</strong> Se sirven desde nuestro propio dominio; no se conecta con Google Fonts.
                    </li>
                </ul>

                <h2>4. Cómo cambiar o retirar su consentimiento</h2>
                <ul>
                    <li>
                        Use el botón con el ícono de galleta de la esquina inferior izquierda de cada página, o el botón de arriba. Al retirar un permiso, borramos
                        las cookies de Google que el sitio haya creado.
                    </li>
                    <li>
                        También puede borrar o bloquear cookies desde la configuración de su navegador (Chrome, Safari, Firefox, Edge). Si las bloquea todas, el
                        sitio sigue funcionando, aunque tendremos que preguntarle de nuevo en cada visita.
                    </li>
                </ul>
                <p>
                    Guardamos su elección durante <strong>12 meses</strong>; después volveremos a preguntarle. También se la volveremos a pedir si cambia de
                    forma importante el uso de cookies.
                </p>

                <h2>5. Más información</h2>
                <p>
                    Para consultas sobre esta política o sobre sus datos personales, revise la <Link to="/privacidad/">Política de privacidad</Link> o escríbanos
                    desde la página de <Link to="/contacto/">contacto</Link>.
                </p>
            </PoliticaLayout>
        </>
    );
}
