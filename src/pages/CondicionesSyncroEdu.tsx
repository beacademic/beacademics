import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function CondicionesSyncroEdu() {
    return (
        <div className="bg-apple-light min-h-screen text-apple-gray font-sans selection:bg-corp-dark selection:text-white flex flex-col">
            <Helmet>
                <title>Condiciones de Servicio - SyncroEdu | BE Academic</title>
                <meta name="description" content="Condiciones de Servicio de SyncroEdu. Naturaleza del servicio, contratación, planes y facturación, cuentas de usuario." />
            </Helmet>
            
            {/* Header / Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-apple-light/80 backdrop-blur-md border-b border-gray-200">
                <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center">
                            <img src="/Logo-BE-Academic.png" alt="BE Academic" className="h-8 w-auto" />
                        </Link>
                        <div className="hidden md:flex gap-6">
                            <Link to="/syncroedu" className="text-gray-600 hover:text-corp-dark transition-colors">Volver a SyncroEdu</Link>
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
                        Condiciones de Servicio de SyncroEdu
                    </h1>
                    <p className="text-gray-500 mb-10">Última actualización: Junio de 2026</p>
                    
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-600">
                        <p className="text-xl leading-relaxed text-gray-800 mb-8">
                            Te damos la bienvenida a SyncroEdu, la plataforma de diseño, optimización y gestión de horarios para establecimientos educacionales.
                        </p>
                        
                        <p className="mb-4">
                            Estas Condiciones de Servicio (en adelante, las "Condiciones") regulan la relación contractual y el uso del software SyncroEdu entre nuestra empresa (en adelante, "SyncroEdu") y las instituciones educativas, sostenedores o colegios que contratan la plataforma (en adelante, el "Cliente" o la "Institución").
                        </p>

                        <p className="mb-8">
                            Al utilizar nuestra plataforma, la Institución acepta regirse por estas Condiciones. Recomendamos leerlas detenidamente.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Naturaleza del Servicio y Licencia de Uso</h2>
                        <p className="mb-4">SyncroEdu es un software bajo la modalidad SaaS (Software como Servicio). Esto significa que la Institución no compra el programa, sino que adquiere una licencia de uso temporal, no exclusiva e intransferible para acceder al sistema a través de internet durante el periodo contratado.</p>
                        <p className="mb-4">La plataforma está diseñada como una herramienta de planificación y guía visual para ayudar a las escuelas y colegios a:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Generación de horarios de clases:</strong> Estructurar, calcular y optimizar los horarios para docentes y asistentes de la educación de forma manual o automática.</li>
                            <li><strong>Ajuste a la normativa para docentes:</strong> La plataforma incluye módulos de auditoría que evalúan los horarios creados frente a las exigencias normativas vigentes para los docentes (como la proporción de horas lectivas y no lectivas, descansos, etc.).</li>
                            <li><strong>Guía visual y alarmas preventivas:</strong> El sistema actúa como un asistente visual que emite alertas, alarmas y advertencias en pantalla cuando detecta inconsistencias o posibles contravenciones a la norma.</li>
                            <li><strong>Libertad de configuración y no restricción:</strong> Estas alertas y alarmas son informativas. La plataforma no bloquea ni restringe al usuario en las decisiones de diseño que tome. La Institución es completamente autónoma para configurar y guardar los horarios de la manera que estime conveniente, asumiendo o ignorando las alertas emitidas.</li>
                            <li><strong>Sin responsabilidad por configuración:</strong> SyncroEdu no asume responsabilidad alguna por la forma en que los usuarios configuren cada horario, el uso que le den a las herramientas de edición, ni por la decisión de ignorar las advertencias y alarmas del sistema.</li>
                            <li>Gestión de reemplazos diarios de personal ausente de forma ágil.</li>
                            <li>Planificar y auditar la carga horaria del Programa de Integración Escolar (PIE).</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. Proceso de Contratación y Adquisición</h2>
                        <p className="mb-4">Para garantizar una atención personalizada y adecuada a la realidad de cada colegio, SyncroEdu no se vende de forma directa ni automatizada a través de nuestro sitio web. El proceso de adquisición se realiza de la siguiente manera:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Contacto Inicial:</strong> El establecimiento interesado solicita información a través del formulario del sitio web o nos contacta vía telefónica.</li>
                            <li><strong>Reunión de Demostración:</strong> Nuestro equipo realiza una sesión de presentación (remota o presencial) para mostrar las capacidades del software y evaluar las necesidades del establecimiento (número de docentes, jornadas, cantidad de alumnos, etc.).</li>
                            <li><strong>Propuesta Comercial y Cierre:</strong> Emitimos una cotización o propuesta comercial formal. La contratación se concreta de forma remota (por correo electrónico/firma electrónica) o presencialmente mediante la firma del respectivo acuerdo de servicios, donde se especifican los valores, plazos y condiciones acordadas con cada colegio.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Planes, Precios y Facturación</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Condiciones Particulares:</strong> El precio de la suscripción, la forma de pago (mensual, semestral o anual) y las fechas de facturación serán las estipuladas de mutuo acuerdo en la propuesta comercial firmada por el Cliente.</li>
                            <li><strong>Estandarización Futura:</strong> SyncroEdu podrá, en el futuro, establecer planes con tarifas estandarizadas de carácter público. No obstante, para los contratos vigentes siempre prevalecerán las tarifas y condiciones pactadas en el acuerdo comercial firmado individualmente por cada Institución hasta el término de su vigencia.</li>
                            <li><strong>Mora o No Pago:</strong> El retraso en el pago de las suscripciones según los plazos acordados podrá facultar a SyncroEdu a suspender temporalmente el acceso a la plataforma previo aviso por escrito de al menos 5 días hábiles.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Cuentas de Usuario y Seguridad</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Administración y Creación de Accesos:</strong> SyncroEdu administra de manera centralizada la creación y habilitación de todas las cuentas de usuario de la plataforma. La suscripción básica o estándar incluye un total de tres (3) cuentas de acceso (ej. Administrador principal, Coordinador Académico, Director). Si la Institución requiere cuentas de acceso adicionales, estas tendrán un costo extra que se establecerá en el contrato de suscripción individual firmado con cada establecimiento.</li>
                            <li><strong>Custodia de Contraseñas:</strong> El Cliente es responsable de mantener la confidencialidad de sus contraseñas. Cualquier acción realizada con las cuentas creadas bajo la administración del colegio será responsabilidad exclusiva de la Institución.</li>
                            <li><strong>Acceso Móvil:</strong> La plataforma cuenta con controles para permitir o bloquear el acceso de los usuarios desde aplicaciones móviles (según se configure en el panel de control del Administrador del establecimiento).</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Responsabilidad de la Institución sobre los Datos y Anexo de Seguridad</h2>
                        <p className="mb-4">SyncroEdu actúa únicamente como Encargado de Tratamiento de la información ingresada por la Institución, de acuerdo con la Ley N° 19.628 y la Ley N° 21.719.</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>El Cliente es el único propietario y Responsable de la Base de Datos de su establecimiento.</li>
                            <li>Es obligación estricta de la Institución contar con la legitimidad, los derechos o el consentimiento necesario de sus docentes, asistentes de la educación y colaboradores para ingresar su información personal (como RUT, nombres y horarios) a la plataforma, liberando a SyncroEdu de cualquier reclamación de terceros al respecto.</li>
                            <li><strong>Anexo de Tratamiento de Datos (DPA):</strong> El detalle de las medidas técnicas, organizativas y de ciberseguridad (incluyendo encriptación de datos, protocolos de backups y controles de acceso restringido), así como los deberes de confidencialidad de SyncroEdu en su rol de encargado, se regularán de forma específica en el Anexo de Tratamiento de Datos (DPA) que forma parte integrante del contrato suscrito formalmente entre ambas partes.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Validación de Horarios y Cumplimiento Laboral</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Herramienta de Apoyo y Dinámica Normativa:</strong> SyncroEdu es una herramienta automatizada para facilitar la confección y sugerencia de horarios de clase y reemplazos. Si bien SyncroEdu realiza esfuerzos continuos para mantener el software actualizado con las últimas normativas chilenas vigentes, la legislación educativa y laboral es dinámica y está sujeta a constantes cambios o reformas. Por lo tanto, la responsabilidad final de verificar que los parámetros de configuración y los resultados del software coincidan rigurosamente con la ley vigente en cada momento recae exclusivamente en el sostenedor.</li>
                            <li><strong>Responsabilidad de Supervisión:</strong> La validación definitiva de los horarios generados por el sistema, así como la verificación de que estos cumplan con los contratos laborales de los docentes, el Estatuto Docente chileno, las directrices del Ministerio de Educación (Mineduc) y la legislación de la Dirección del Trabajo, es responsabilidad exclusiva e indelegable del equipo directivo del establecimiento.</li>
                            <li><strong>Exención de Responsabilidad:</strong> SyncroEdu no garantiza que el software detecte la totalidad de las posibles infracciones a la normativa, ya que esta es dinámica y su interpretación puede variar. La Institución reconoce que el software funciona sobre la base de parámetros configurados por el usuario y que el resultado final es un modelo de planificación. El Cliente asume los riesgos derivados de la interpretación de la normativa aplicable, liberando a SyncroEdu de cualquier responsabilidad por errores de interpretación, multas, sanciones administrativas o demandas laborales que pudieren surgir.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. Disponibilidad, Soporte y Mantenimiento</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Disponibilidad del Servicio:</strong> Nos esforzamos por mantener la plataforma operativa las 24 horas del día, los 7 días de la semana, con un porcentaje de disponibilidad (Uptime) del 99.5%.</li>
                            <li><strong>Mantenimiento Programado:</strong> Ocasionalmente realizaremos tareas de mantenimiento, actualizaciones o mejoras de seguridad. Estas interrupciones se programarán preferentemente durante la noche o fines de semana (horas de baja actividad escolar) y serán notificadas previamente a los administradores.</li>
                            <li><strong>Exclusión por Servicios de Terceros y Fuerza Mayor:</strong> SyncroEdu no se hace responsable por interrupciones en el servicio, pérdida de datos o indisponibilidad temporal causadas por fallas en la infraestructura de terceros proveedores de hosting en la nube (como Google Cloud, AWS, Supabase o Vercel), fallas generales en redes de telecomunicaciones, proveedores de internet de la Institución o eventos fortuitos y de fuerza mayor fuera del control directo de SyncroEdu.</li>
                            <li><strong>Soporte Técnico:</strong> Brindamos asistencia técnica remota (vía telefónica, correo electrónico y/o videollamada) para resolver dudas de uso o incidentes dentro del horario laboral acordado en el contrato de servicio.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">8. Propiedad Intelectual</h2>
                        <p className="mb-6">Todos los derechos de propiedad intelectual e industrial sobre el software SyncroEdu, incluyendo el código fuente, la arquitectura, el diseño visual, las marcas comerciales, los logotipos y las tecnologías de optimización (motores de generación de horarios), pertenecen exclusivamente a SyncroEdu. La Institución no adquiere ningún derecho de propiedad sobre el software, limitándose su derecho al uso del servicio según lo descrito en estas Condiciones.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">9. Duración y Término del Contrato</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Plazo de Vigencia:</strong> La duración de la suscripción será la definida en la propuesta comercial firmada (usualmente de renovación anual automática).</li>
                            <li><strong>Término Anticipado:</strong> Cualquiera de las partes podrá poner término al servicio de forma anticipada en caso de incumplimiento grave de las obligaciones de la otra parte, o bien mediante aviso previo por escrito según los plazos establecidos en el contrato de suscripción individual.</li>
                            <li><strong>Eliminación de Datos:</strong> Al término de la relación contractual, y según lo señalado en nuestra Política de Privacidad, los datos cargados por la Institución serán borrados de nuestros sistemas activos en un plazo de 30 días hábiles, salvo que exista una obligación legal de retención.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">10. Limitación de Responsabilidad (Techo de Indemnización)</h2>
                        <p className="mb-6"><strong>Límite de Responsabilidad:</strong> En la medida máxima permitida por la ley aplicable, la responsabilidad civil total y agregada de SyncroEdu derivada de o en relación con este servicio, sea contractual, extracontractual o de cualquier otra naturaleza, estará estrictamente limitada a la suma total que el Cliente haya pagado efectivamente a SyncroEdu por concepto de la suscripción durante los últimos seis (6) meses inmediatamente anteriores al evento que originó la reclamación. SyncroEdu no será responsable en ningún caso por lucro cesante, pérdida de datos o daños indirectos sufridos por la Institución.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">11. Ley Aplicable y Jurisdicción</h2>
                        <p className="mb-6">Estas Condiciones se rigen e interpretan bajo las leyes de la República de Chile. Para cualquier controversia derivada de la interpretación, validez o ejecución de estas Condiciones, las partes fijan su domicilio y competencia territorial en la comuna de Concepción, sometiéndose a la jurisdicción de sus Tribunales Ordinarios de Justicia. (Nota: La Institución declara conocer y aceptar esta cláusula de jurisdicción y prórroga de competencia, la cual se ratificará formalmente de manera destacada en el respectivo Acuerdo Comercial firmado físicamente o por firma digital por el representante de la Institución).</p>
                    </div>
                </motion.div>
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
