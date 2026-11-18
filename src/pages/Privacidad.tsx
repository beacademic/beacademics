import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PoliticaLayout from '../components/PoliticaLayout';
import { openCookiePreferences } from '../lib/consent';
import { INSTITUTIONAL_EMAIL, SALES_PHONE_DISPLAY } from '../config/contact';

interface Tratamiento {
    finalidad: string;
    datos: string;
    base: string;
    destinatarios: string;
    conservacion: string;
}

/**
 * Cada finalidad con su base de licitud, destinatarios y plazo: es el contenido que la Ley 21.719 exige informar
 * (identidad del responsable, finalidades, base de licitud, destinatarios, plazo de conservación, derechos).
 */
const TRATAMIENTOS: Tratamiento[] = [
    {
        finalidad: 'Responder consultas y coordinar demostraciones (formulario, correo, teléfono o WhatsApp)',
        datos: 'Nombre, correo, teléfono, establecimiento, cargo y mensaje que usted escribe',
        base: 'Medidas precontractuales a solicitud suya',
        destinatarios: 'HubSpot; WhatsApp/Meta, si nos escribe por ese canal',
        conservacion: 'El tiempo necesario para atender su solicitud',
    },
    {
        finalidad: 'Seguimiento comercial de la solicitud que usted hizo',
        datos: 'Los mismos datos del formulario y el historial de la conversación',
        base: 'Interés legítimo de BE Academic en dar seguimiento a quien pidió información; usted puede oponerse en cualquier momento',
        destinatarios: 'HubSpot',
        conservacion: 'Mientras dure la relación comercial o hasta que usted se oponga o pida la supresión',
    },
    {
        finalidad: 'Entregar el sitio, mantener su seguridad y obtener estadísticas agregadas',
        datos: 'Dirección IP, navegador, páginas solicitadas, fecha y hora',
        base: 'Interés legítimo en la seguridad y el funcionamiento del sitio',
        destinatarios: 'GitHub y Cloudflare',
        conservacion: 'Según los registros de esos proveedores; no los usamos para identificarlo',
    },
    {
        finalidad: 'Estadísticas de uso del sitio (cookies de análisis)',
        datos: 'Identificadores de cookies y páginas visitadas',
        base: 'Su consentimiento, que puede retirar cuando quiera',
        destinatarios: 'Google',
        conservacion: 'La duración de las cookies (hasta 2 años); ver Política de cookies',
    },
    {
        finalidad: 'Medir anuncios y mostrar publicidad de BE Academic (cookies de marketing)',
        datos: 'Identificadores de cookies y clics en anuncios',
        base: 'Su consentimiento, que puede retirar cuando quiera',
        destinatarios: 'Google',
        conservacion: 'La duración de las cookies (de 90 días a 13 meses); ver Política de cookies',
    },
    {
        finalidad: 'Atender sus derechos y defender los nuestros ante reclamos',
        datos: 'Los datos de su solicitud y de nuestra respuesta',
        base: 'Obligación legal y defensa de derechos',
        destinatarios: 'Ninguno, salvo requerimiento de una autoridad',
        conservacion: 'Los plazos de prescripción que fije la ley',
    },
];

export default function Privacidad() {
    return (
        <>
            <Seo path="/privacidad/" />
            <PoliticaLayout titulo="Política de privacidad del sitio web" actualizacion="18 de noviembre de 2026 · versión 2.0">
                <p>
                    Esta política explica cómo <strong>BE Academic</strong> trata los datos personales de quienes visitan <strong>beacademics.com</strong>,
                    escriben a nuestro equipo o solicitan una demostración. Se rige por la Ley N° 19.628 sobre protección de la vida privada y, desde su entrada
                    en vigencia, por la Ley N° 21.719 sobre protección y tratamiento de los datos personales. Ya aplicamos los estándares de esta última:
                    información clara, consentimiento previo para las cookies no necesarias y facilidad para ejercer sus derechos.
                </p>
                <p>
                    No es la política de la plataforma: si usted es usuario de SyncroEdu, el tratamiento de datos dentro del software se explica en la{' '}
                    <Link to="/privacidad-syncroedu/">Política de privacidad de SyncroEdu</Link>.
                </p>

                <h2>1. Quién es el responsable</h2>
                <ul>
                    <li><strong>Razón social:</strong> Sociedad de Formación BE Academic Limitada</li>
                    <li><strong>RUT:</strong> 77.650.439-4</li>
                    <li><strong>Domicilio:</strong> El Pinar Lt. E-1 C-A, comuna de Los Ángeles, Región del Biobío, Chile</li>
                    <li><strong>Responsable de privacidad:</strong> Carlos Mundaca Valdebenito</li>
                    <li><strong>Contacto de privacidad y derechos:</strong> <a href={`mailto:${INSTITUTIONAL_EMAIL}`}>{INSTITUTIONAL_EMAIL}</a></li>
                </ul>

                <h2>2. Qué datos tratamos, para qué y con qué base</h2>
                <p>
                    Los datos los entrega usted directamente (formulario, correo, teléfono o WhatsApp) o los genera su navegador al visitar el sitio. Entregar
                    los datos del formulario es voluntario, pero sin ellos no podemos responder su solicitud.
                </p>
                <div className="overflow-x-auto my-4 rounded-xl border border-black/10">
                    <table className="w-full text-left text-sm">
                        <caption className="sr-only">Finalidades, datos, base de licitud, destinatarios y conservación</caption>
                        <thead className="bg-[#F5F5F7] text-[#1D1D1F]">
                            <tr>
                                <th scope="col" className="px-3 py-2 font-semibold">Finalidad</th>
                                <th scope="col" className="px-3 py-2 font-semibold">Datos</th>
                                <th scope="col" className="px-3 py-2 font-semibold">Base de licitud</th>
                                <th scope="col" className="px-3 py-2 font-semibold">Destinatarios</th>
                                <th scope="col" className="px-3 py-2 font-semibold">Conservación</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-black/5">
                            {TRATAMIENTOS.map((t) => (
                                <tr key={t.finalidad}>
                                    <th scope="row" className="px-3 py-2 align-top font-semibold text-[#1D1D1F]">{t.finalidad}</th>
                                    <td className="px-3 py-2 align-top">{t.datos}</td>
                                    <td className="px-3 py-2 align-top">{t.base}</td>
                                    <td className="px-3 py-2 align-top">{t.destinatarios}</td>
                                    <td className="px-3 py-2 align-top">{t.conservacion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p>
                    Al hacer clic en un botón de WhatsApp se abre la aplicación con un mensaje prellenado; lo que usted envía lo tratan WhatsApp (Meta) bajo sus
                    propias condiciones y nosotros, que recibimos su número y su mensaje para responderle. Lo mismo ocurre si llama al {SALES_PHONE_DISPLAY} o
                    nos escribe por correo. La calculadora de horas docentes funciona completamente en su navegador: los datos que ingresa no se envían ni se guardan.
                </p>

                <h2>3. Comunicaciones comerciales</h2>
                <p>
                    Solo le escribimos para responder lo que usted solicitó y para dar seguimiento a esa solicitud. Si en el futuro le enviamos boletines u
                    ofertas, lo haremos únicamente si usted lo autoriza, y cada mensaje incluirá una forma simple de dejar de recibirlos. Puede oponerse al
                    marketing directo en cualquier momento escribiéndonos, y dejaremos de usar sus datos para ese fin.
                </p>

                <h2>4. Decisiones automatizadas</h2>
                <p>
                    No tomamos decisiones automatizadas ni elaboramos perfiles que tengan efectos jurídicos sobre usted. Si usted acepta las cookies de
                    marketing, Google puede usar identificadores para medir anuncios y mostrarle publicidad de BE Academic; puede retirar ese permiso en
                    cualquier momento.
                </p>

                <h2>5. Con quién compartimos los datos</h2>
                <p>No vendemos ni arrendamos datos personales. Usamos proveedores que los tratan por cuenta nuestra o por cuenta propia, según el caso:</p>
                <ul>
                    <li><strong>HubSpot, Inc.</strong>: formulario de contacto y registro de contactos comerciales.</li>
                    <li><strong>GitHub, Inc.</strong> y <strong>Cloudflare, Inc.</strong>: alojamiento del sitio, red de distribución y seguridad.</li>
                    <li><strong>Google LLC</strong>: Google Tag Manager, Google Analytics y Google Ads, únicamente si usted acepta las cookies correspondientes.</li>
                    <li><strong>WhatsApp / Meta Platforms, Inc.</strong>: solo si usted nos escribe por ese canal.</li>
                </ul>
                <p>
                    También podemos entregar datos a una autoridad cuando la ley lo exija. Las tipografías del sitio se sirven desde nuestro propio dominio, sin
                    conexión a Google Fonts.
                </p>

                <h2>6. Transferencias internacionales</h2>
                <p>
                    Los proveedores indicados tratan datos principalmente en <strong>Estados Unidos</strong>, fuera de Chile. Esas transferencias se rigen por
                    los acuerdos de tratamiento de datos y las cláusulas contractuales de transferencia que cada proveedor ofrece, y por las garantías que
                    establece la ley chilena. Si no desea que sus datos de navegación lleguen a Google, rechace las cookies de análisis y de marketing.
                </p>

                <h2>7. Sus derechos</h2>
                <p>Usted puede ejercer gratuitamente los siguientes derechos sobre sus datos personales:</p>
                <ul>
                    <li><strong>Acceso:</strong> saber qué datos suyos tratamos, para qué y de quién los obtuvimos, y recibir una copia.</li>
                    <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
                    <li><strong>Supresión:</strong> pedir que eliminemos sus datos cuando ya no sean necesarios o retire su consentimiento.</li>
                    <li><strong>Oposición:</strong> oponerse a un tratamiento, en especial al marketing directo, a la publicidad personalizada y a la elaboración de perfiles comerciales.</li>
                    <li><strong>Portabilidad:</strong> recibir los datos que nos entregó en un formato estructurado, de uso común y lectura mecánica, cuando la ley lo permita.</li>
                    <li><strong>Bloqueo temporal:</strong> pedir que suspendamos el uso de sus datos mientras se resuelve una solicitud de rectificación, supresión u oposición.</li>
                    <li><strong>No ser objeto de decisiones automatizadas</strong> con efectos jurídicos significativos, y pedir intervención humana.</li>
                    <li>
                        <strong>Retirar su consentimiento</strong> en cualquier momento, tan fácilmente como lo dio, sin efecto sobre lo ya realizado. Para las cookies,
                        use{' '}
                        <button type="button" onClick={openCookiePreferences} className="underline text-[#0066CC] cursor-pointer">
                            Preferencias de cookies
                        </button>
                        .
                    </li>
                </ul>
                <h3>Cómo ejercerlos</h3>
                <p>
                    Escriba a <a href={`mailto:${INSTITUTIONAL_EMAIL}`}>{INSTITUTIONAL_EMAIL}</a> con el asunto «Derechos sobre mis datos», e indique su nombre, un
                    medio de contacto y el derecho que ejerce. Podemos pedirle información para confirmar su identidad. Le responderemos a la brevedad y, a más
                    tardar, dentro de <strong>30 días corridos</strong>; en casos complejos el plazo puede prorrogarse una vez por otros 30 días, y le avisaremos
                    el motivo. Si denegamos su solicitud, le explicaremos por qué.
                </p>
                <p>
                    Si considera que no atendimos bien su solicitud, puede reclamar ante la Agencia de Protección de Datos Personales una vez que esta entre en
                    funciones y, mientras tanto, ante los tribunales de justicia conforme a la ley.
                </p>

                <h2>8. Seguridad</h2>
                <p>
                    El sitio se entrega por conexión cifrada (HTTPS) y nuestros proveedores aplican medidas técnicas y organizativas de seguridad. Limitamos el
                    acceso a los datos de contacto al personal que los necesita. Si ocurriera una vulneración de seguridad que afecte sus datos, la comunicaremos a la
                    autoridad y a las personas afectadas cuando la ley lo exija.
                </p>

                <h2>9. Menores de edad</h2>
                <p>
                    El sitio está dirigido a profesionales y directivos de establecimientos educacionales. No recopilamos intencionalmente datos de menores de
                    edad. Los menores de 14 años necesitan el consentimiento de sus padres o representantes legales; si supiéramos que tenemos datos de un menor
                    sin ese consentimiento, los eliminaremos.
                </p>

                <h2>10. Cambios en esta política</h2>
                <p>
                    Publicaremos cualquier modificación en esta página, con su fecha y número de versión. Si el cambio altera de forma importante el uso de sus
                    datos o de las cookies, se lo informaremos y, cuando corresponda, volveremos a pedir su consentimiento.
                </p>
            </PoliticaLayout>
        </>
    );
}
