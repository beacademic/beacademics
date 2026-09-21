import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { INSTITUTIONAL_EMAIL } from '../config/contact';

export default function PrivacidadSyncroEdu() {
    return (
        <div className="bg-apple-light min-h-screen text-apple-gray font-sans selection:bg-corp-dark selection:text-white flex flex-col">
            <Seo path="/privacidad-syncroedu/" />
            
            {/* Header / Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-apple-light/80 backdrop-blur-md border-b border-gray-200">
                <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center">
                            <img src="/Logo-BE-Academic.png" width={400} height={344} alt="BE Academic" className="h-8 w-auto" />
                        </Link>
                        <div className="hidden md:flex gap-6">
                            <Link to="/syncroedu/" className="text-gray-600 hover:text-corp-dark transition-colors">Volver a SyncroEdu</Link>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Content Section */}
            <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto flex-grow w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        Política de Privacidad de SyncroEdu
                    </h1>
                    <p className="text-gray-500 mb-10">Última actualización: Septiembre de 2026</p>
                    
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-600">
                        <p className="text-xl leading-relaxed text-gray-800 mb-8">
                            En SyncroEdu nos comprometemos a proteger la privacidad de toda nuestra comunidad escolar. Por eso, hemos redactado esta Política de Privacidad de manera transparente y directa, eliminando términos legales complejos para que entienda perfectamente cómo cuidamos su información, en total conformidad con la normativa chilena vigente de protección de datos personales (Ley N° 19.628 y la nueva Ley N° 21.719).
                        </p>
                        
                        <p className="mb-8">A continuación, le explicamos detalladamente qué hacemos con sus datos cuando utiliza nuestra plataforma de gestión y planificación de horarios escolares.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. ¿Qué datos recopilamos y para qué los necesitamos?</h2>
                        <p className="mb-6">Para que SyncroEdu funcione correctamente y le ayude a optimizar los tiempos de su establecimiento, recopilamos únicamente la información necesaria dividida en tres categorías:</p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">A. Datos de Administradores y Usuarios de la Plataforma</h3>
                        <p className="mb-4">Son los datos de las personas encargadas de gestionar la plataforma en el colegio.</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Qué datos solicitamos:</strong> Su nombre completo, correo electrónico, Rol Único Tributario (RUT), rol asignado (ej. Administrador, Coordinador Académico, Superadministrador) y una contraseña (la cual almacenamos de forma encriptada e ilegible para nosotros).</li>
                            <li><strong>Para qué los usamos:</strong> Para validar su identidad al iniciar sesión, asegurar que acceda solo a las funciones permitidas, brindarle soporte técnico y enviarle alertas o avisos importantes sobre el servicio.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">B. Datos de Docentes y Asistentes de la Educación</h3>
                        <p className="mb-4">Es la información que el establecimiento ingresa para poder planificar la jornada escolar.</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Qué datos procesamos:</strong> RUT, nombre completo, género (opcional), total de horas de contrato, tipo de jornada (ej. 65/35), cargo (ej. Inspector, Auxiliar, Psicopedagogo), pertenencia a programas de integración (como el PIE), disponibilidad de horario, restricciones pedagógicas (bloques máximos de clases) e historial de ausencias o reemplazos.</li>
                            <li><strong>Para qué los usamos:</strong> Esta información permite que nuestro motor de diseño calcule horarios de clase óptimos, asigne reemplazos en tiempo real cuando un docente se ausenta, planifique las horas de los profesionales PIE y facilite la exportación o impresión de los calendarios del colegio.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">C. Información Técnica y de Seguridad</h3>
                        <p className="mb-4">Datos que se registran de forma automática al navegar en la plataforma.</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Qué datos registramos:</strong> Su dirección IP, tipo de navegador, fecha y hora de ingreso, y un historial detallado de los cambios realizados dentro del sistema (bitácora o Audit Logs).</li>
                            <li><strong>Para qué los usamos:</strong> Para proteger el sistema contra accesos indebidos o ciberataques, corregir errores de programación y permitir que el colegio audite internamente quién realizó cada cambio en la planificación de los horarios.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. ¿Durante cuánto tiempo conservamos esta información?</h2>
                        <p className="mb-4">La seguridad de sus datos también implica no guardarlos más tiempo del necesario:</p>
                        <ul className="list-disc pl-6 mb-8 space-y-2">
                            <li><strong>Mientras dure el contrato:</strong> Toda la información se mantiene disponible mientras el establecimiento educacional tenga una cuenta activa en SyncroEdu.</li>
                            <li><strong>Al finalizar el servicio:</strong> Si el establecimiento decide cerrar su cuenta, eliminaremos permanentemente todos los datos de nuestros servidores activos en un plazo máximo de 30 días hábiles.</li>
                            <li><strong>Obligaciones legales:</strong> Solo conservaremos información bloqueada posterior a este plazo si la ley chilena (como normativas de la Superintendencia de Educación o de carácter tributario) nos obliga a mantener registros históricos de los horarios y reemplazos.</li>
                            <li><strong>Copias de seguridad:</strong> Las copias de respaldo de nuestros servidores se sobrescriben automáticamente en ciclos máximos de 90 días, eliminando por completo cualquier rastro anterior.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. ¿Compartimos los datos con terceras personas o empresas?</h2>
                        <p className="mb-4">En SyncroEdu tenemos una política muy estricta: <strong>NO vendemos, arrendamos ni comerciamos con sus datos bajo ninguna circunstancia.</strong></p>
                        <p className="mb-4">Solo compartimos información de forma confidencial con proveedores tecnológicos indispensables para que la plataforma funcione:</p>
                        <ul className="list-disc pl-6 mb-8 space-y-2">
                            <li><strong>Hospedaje de datos:</strong> Proveedores de bases de datos y servidores en la nube que almacenan la información ingresada.</li>
                            <li><strong>Pasarela de pagos en línea:</strong> Entidades financieras seguras que procesan el pago de su suscripción (en SyncroEdu nunca guardamos los datos de sus tarjetas de crédito o débito).</li>
                            <li><strong>Servicio de correos automatizados:</strong> Plataformas que envían los mensajes para recuperar contraseñas o alertas de reemplazo de turnos.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Servicio de Terceros y Alojamiento de los Datos</h2>
                        <p className="mb-4">Para ofrecer alta disponibilidad, escalabilidad y un procesamiento seguro de la información, nuestra plataforma utiliza servicios de terceros especializados, específicamente <strong>Google Cloud</strong> y <strong>Firebase</strong>, para el procesamiento y almacenamiento de datos.</p>
                        <p className="mb-8"><strong>Ubicación de Servidores:</strong> Cumpliendo con las normativas vigentes sobre protección de datos personales, garantizamos la soberanía y baja latencia de la información al asegurar que todos los datos son almacenados y procesados en servidores ubicados físicamente en la ciudad de <strong>Santiago de Chile</strong>.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Sus Derechos sobre sus datos (Derechos ARCOP)</h2>
                        <p className="mb-4">La ley chilena le otorga el control total de sus datos personales a través de los Derechos ARCOP, los cuales puede ejercer de manera completamente gratuita:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Acceso:</strong> Tiene derecho a saber si estamos usando sus datos y a solicitar una copia de ellos.</li>
                            <li><strong>Rectificación:</strong> Puede pedirnos que corrijamos o actualicemos su información si es inexacta, incompleta o está desactualizada.</li>
                            <li><strong>Cancelación o Supresión:</strong> Puede solicitar que eliminemos sus datos si ya no hay una razón legal o contractual para conservarlos.</li>
                            <li><strong>Oposición:</strong> Tiene derecho a pedirnos que no utilicemos sus datos para un fin o proceso específico.</li>
                            <li><strong>Portabilidad:</strong> Puede solicitar una copia de sus datos en un formato digital ordenado para que pueda transferirlos a otra plataforma o sistema.</li>
                            <li><strong>Bloqueo:</strong> Puede pedirnos que suspendamos temporalmente el uso de sus datos mientras se aclara si son correctos o si su uso es legal.</li>
                        </ul>
                        
                        <p className="font-bold mb-2">¿Cómo puede ejercer estos derechos?</p>
                        <p className="mb-8">Si desea realizar alguna solicitud relacionada con sus datos, solo debe enviar un correo electrónico a nuestro encargado de privacidad a: <strong>{INSTITUTIONAL_EMAIL}</strong> con el asunto "Derechos ARCOP - [Su Nombre Completo]". Le responderemos en un plazo máximo de 15 días hábiles de forma totalmente gratuita.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Datos de Terceros (Responsabilidad del Establecimiento)</h2>
                        <p className="mb-8">SyncroEdu es un software diseñado para uso institucional. Cuando un administrador del colegio registra datos de sus docentes o asistentes de la educación en la plataforma, el establecimiento educacional garantiza que cuenta con la base legal o el consentimiento explícito de esas personas para ingresar y procesar su información. SyncroEdu actúa como un procesador de datos de buena fe bajo la directriz del colegio.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. Actualizaciones de esta política</h2>
                        <p className="mb-8">Es posible que actualicemos esta política de privacidad para adaptarla a futuras actualizaciones del software, dictámenes de la Agencia de Protección de Datos Personales de Chile o modificaciones legales. Si realizamos un cambio importante, se lo notificaremos con un aviso destacado en la pantalla de inicio de la plataforma antes de que entre en vigor.</p>
                    </div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-500 py-10 text-center text-sm border-t border-gray-800 mt-auto">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <p className="mb-2">BE Academic. Ecosistema Tecnológico para la Educación en Chile.</p>
                        <p>&copy; {new Date().getFullYear()} Sociedad de Formación BE Academic Limitada · RUT 77.650.439-4. Todos los derechos reservados.</p>
                    </div>
                    <div className="flex gap-4">
                        <Link to="/legal/" className="hover:text-white transition-colors">Información Legal</Link>
                        <Link to="/privacidad-syncroedu/" className="hover:text-white transition-colors">Política de Privacidad (SyncroEdu)</Link>
                        <Link to="/contacto/" className="hover:text-white transition-colors">Contacto</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
