import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PoliticaLayout from '../components/PoliticaLayout';
import { openCookiePreferences } from '../lib/consent';
import { INSTITUTIONAL_EMAIL, SALES_PHONE_DISPLAY } from '../config/contact';

export default function Privacidad() {
    return (
        <>
            <Seo path="/privacidad/" />
            <PoliticaLayout titulo="Política de privacidad del sitio web" actualizacion="18 de noviembre de 2026">
                <p>
                    Esta política explica cómo <strong>BE Academic</strong> trata los datos personales de quienes visitan{' '}
                    <strong>beacademics.com</strong>, escriben a nuestro equipo o solicitan una demostración. La redactamos conforme a la Ley N° 19.628
                    sobre protección de la vida privada y a la Ley N° 21.719, que la reemplaza y entra en vigencia el 1 de diciembre de 2026.
                </p>
                <p>
                    No es la política de la plataforma: si usted es usuario de SyncroEdu, el tratamiento de los datos dentro del software se explica en la{' '}
                    <Link to="/privacidad-syncroedu/">Política de privacidad de SyncroEdu</Link>.
                </p>

                <h2>1. Quién es el responsable</h2>
                <ul>
                    <li><strong>Razón social:</strong> Sociedad de Formación BE Academic Limitada</li>
                    <li><strong>RUT:</strong> 77.650.439-4</li>
                    <li><strong>Domicilio:</strong> El Pinar Lt. E-1 C-A, comuna de Los Ángeles, Región del Biobío, Chile</li>
                    <li><strong>Contacto de privacidad:</strong> <a href={`mailto:${INSTITUTIONAL_EMAIL}`}>{INSTITUTIONAL_EMAIL}</a></li>
                </ul>

                <h2>2. Qué datos tratamos, para qué y con qué fundamento</h2>
                <h3>Formulario de contacto y de demostración</h3>
                <p>
                    Los datos que usted escribe en el formulario (por ejemplo, nombre, correo, teléfono, establecimiento, cargo y mensaje). Los usamos para
                    responder su consulta, coordinar una demostración y hacerle seguimiento comercial de esa solicitud. El fundamento es su solicitud y,
                    para cualquier otro uso, su consentimiento. El formulario lo presta <strong>HubSpot</strong> (ver sección 3).
                </p>
                <h3>WhatsApp y correo</h3>
                <p>
                    Al hacer clic en un botón de WhatsApp se abre la aplicación con un mensaje prellenado; lo que usted envía lo tratan WhatsApp (Meta)
                    bajo sus propias condiciones y nosotros, que recibimos su número y su mensaje para responderle. Lo mismo ocurre si nos escribe por correo
                    o llama al {SALES_PHONE_DISPLAY}.
                </p>
                <h3>Datos técnicos de navegación</h3>
                <p>
                    Al visitar el sitio, nuestro proveedor de alojamiento y de red registra datos técnicos (dirección IP, navegador, páginas solicitadas, fecha y
                    hora) para entregar las páginas, proteger el sitio de ataques y obtener estadísticas agregadas. No los usamos para identificarlo.
                </p>
                <h3>Cookies de análisis y de marketing</h3>
                <p>
                    Solo las usamos <strong>si usted las acepta</strong> en el aviso de cookies. Si las rechaza, no se carga ninguna herramienta de Google. El
                    detalle está en la <Link to="/cookies/">Política de cookies</Link>.
                </p>
                <h3>Calculadora de horas docentes</h3>
                <p>
                    La calculadora funciona completamente en su navegador: los datos que ingresa no se envían a nuestros servidores ni se guardan.
                </p>

                <h2>3. Con quién compartimos los datos</h2>
                <p>No vendemos ni arrendamos datos personales. Usamos proveedores que tratan datos por cuenta nuestra:</p>
                <ul>
                    <li><strong>HubSpot, Inc.</strong>: formulario de contacto y registro de contactos comerciales (servidores en Estados Unidos).</li>
                    <li><strong>GitHub, Inc.</strong> y <strong>Cloudflare, Inc.</strong>: alojamiento del sitio, red de distribución y seguridad.</li>
                    <li><strong>Google LLC</strong>: Google Tag Manager y Google Ads, únicamente si usted acepta las cookies de análisis o de marketing.</li>
                    <li><strong>WhatsApp / Meta</strong>: solo si usted nos escribe por ese canal.</li>
                </ul>
                <p>
                    Estos proveedores pueden tratar datos fuera de Chile, principalmente en Estados Unidos. Lo hacen bajo las garantías contractuales y de
                    seguridad que ofrecen en sus condiciones de tratamiento de datos. Las fuentes tipográficas del sitio se sirven desde nuestro propio
                    dominio, sin conexión a Google Fonts.
                </p>

                <h2>4. Cuánto tiempo conservamos los datos</h2>
                <p>
                    Los datos del formulario y de las conversaciones se conservan el tiempo necesario para atender su solicitud y, si se inicia una relación
                    comercial, mientras ella dure y por los plazos que exija la ley. Puede pedirnos su eliminación en cualquier momento. Su elección sobre
                    cookies se guarda 12 meses en su navegador.
                </p>

                <h2>5. Sus derechos</h2>
                <p>Usted puede, de forma gratuita:</p>
                <ul>
                    <li><strong>Acceder</strong> a sus datos y pedir una copia.</li>
                    <li><strong>Rectificarlos</strong> si son inexactos o están incompletos.</li>
                    <li><strong>Suprimirlos</strong> cuando ya no sean necesarios.</li>
                    <li><strong>Oponerse</strong> a un tratamiento, por ejemplo al envío de comunicaciones comerciales.</li>
                    <li><strong>Solicitar la portabilidad</strong> de los datos que nos entregó.</li>
                    <li><strong>Pedir el bloqueo temporal</strong> mientras se aclara la exactitud o licitud del tratamiento.</li>
                    <li><strong>Retirar su consentimiento</strong> en cualquier momento, sin efecto sobre lo ya realizado. Para las cookies, use el botón
                        {' '}<button type="button" onClick={openCookiePreferences} className="underline text-[#0066CC] cursor-pointer">Preferencias de cookies</button>.</li>
                </ul>
                <p>
                    Para ejercerlos, escriba a <a href={`mailto:${INSTITUTIONAL_EMAIL}`}>{INSTITUTIONAL_EMAIL}</a> con el asunto «Derechos sobre mis datos» e
                    indique su nombre y el derecho que ejerce. Responderemos dentro de 15 días hábiles. Si considera que no atendimos bien su solicitud,
                    puede recurrir a la autoridad de protección de datos personales que corresponda según la ley chilena.
                </p>

                <h2>6. Seguridad</h2>
                <p>
                    El sitio se entrega por conexión cifrada (HTTPS) y nuestros proveedores aplican medidas técnicas y organizativas de seguridad. Ningún
                    sistema es infalible; si ocurriera una vulneración que afecte sus datos, actuaremos conforme a la ley.
                </p>

                <h2>7. Menores de edad</h2>
                <p>El sitio está dirigido a profesionales y directivos de establecimientos educacionales. No recopilamos de forma intencional datos de menores de edad.</p>

                <h2>8. Cambios en esta política</h2>
                <p>
                    Si modificamos esta política, publicaremos la nueva versión en esta página con su fecha. Si el cambio altera de forma importante el
                    uso de cookies, volveremos a pedir su consentimiento.
                </p>
            </PoliticaLayout>
        </>
    );
}
