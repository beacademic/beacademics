# Cumplimiento de datos personales — beacademics.com

Versión 1.0 · 18 de noviembre de 2026 · Documento interno. No es asesoría legal: debe revisarlo un abogado.

## 1. Estado de la normativa

- **Hoy rige la Ley N° 19.628.** La Ley N° 21.719 (publicada el 13 de diciembre de 2024) crea la Agencia de Protección de Datos Personales y reemplaza el régimen actual.
- **Fecha de vigencia: probablemente 15 de octubre de 2027.** La ley fijaba el 1 de diciembre de 2026, pero el Congreso despachó el 17 de noviembre de 2026 un proyecto que la posterga al 15 de octubre de 2027. A esa fecha falta su promulgación y publicación en el Diario Oficial. **Verificar el Diario Oficial antes del 1 de diciembre de 2026.**
- **Decisión tomada:** el sitio ya cumple el estándar de la Ley 21.719 y las políticas no fijan una fecha de vigencia, de modo que siguen siendo correctas con cualquiera de las dos.
- Fuentes consultadas: [La Tercera](https://www.latercera.com/pulso/noticia/congreso-aprueba-postergacion-de-la-ley-de-proteccion-de-datos/), [Garrigues](https://www.garrigues.com/es_ES/noticia/senado-chileno-aprueba-proyecto-ley-busca-postergar-15-octubre-2027-entrada-vigencia-nueva), [Carey](https://www.carey.cl/gobierno-ingresa-proyecto-de-ley-que-posterga-en-un-ano-entrada-en-vigor-de-la-ley-sobre-proteccion-de-datos-personales), texto oficial: buscar «Ley 21.719» en [LeyChile](https://www.bcn.cl/leychile). Son guías y notas de prensa: confirmar los artículos en la fuente oficial.

## 2. Lo que el sitio ya cumple (implementado)

| Exigencia | Cómo se cumple |
|---|---|
| Información clara y permanente (identidad, finalidades, base de licitud, destinatarios, conservación, derechos, transferencias, decisiones automatizadas) | `/privacidad/` con tabla por finalidad, versión y fecha |
| Consentimiento libre, informado, específico e inequívoco, con acción afirmativa | Banner sin casillas premarcadas; nada de Google se carga antes de aceptar |
| Rechazar tan fácil como aceptar | «Aceptar todas» y «Rechazar todas» de igual jerarquía visual |
| Consentimiento granular | Panel con análisis y marketing por separado |
| Retirar el consentimiento con la misma facilidad | Botón permanente de cookies en cada página y enlace en el pie; al retirar se borran las cookies de Google |
| Prueba del consentimiento | Se guarda versión, fecha, elección y versión de la política durante 12 meses (`be_cookie_consent`) |
| Información en el momento de recoger datos | Aviso bajo el formulario de contacto, con enlace a la política |
| Minimización | Sin cookies propias; tipografías alojadas en el sitio (sin conexión a Google Fonts); calculadora que no envía datos |
| Derechos (acceso, rectificación, supresión, oposición, portabilidad, bloqueo, no decisiones automatizadas) | Descritos en la política, con canal y plazo (30 días corridos, prorrogables una vez por otros 30) |

## 3. Lo que debe hacer BE Academic (no se resuelve con código)

Ordenado por urgencia.

1. **Aceptar los acuerdos de tratamiento de datos de cada proveedor** (la ley exige un contrato con el encargado):
   - HubSpot: aceptar su *Acuerdo de procesamiento de datos* (Data Processing Agreement) desde la configuración de privacidad de la cuenta.
   - Google: aceptar las condiciones de tratamiento de datos de Google Ads y de Google Tag Manager desde la configuración de cada cuenta.
   - Cloudflare y GitHub: aceptar su *Data Processing Addendum*, que publican en sus páginas de condiciones.
   - Los nombres de menú cambian: si no encuentra la opción, búsquela por «Data Processing Agreement» en la ayuda del proveedor.
   - Guardar una copia firmada o el comprobante de aceptación.
2. **Configurar HubSpot para el consentimiento.** En las opciones del formulario, sección de consentimiento y privacidad: agregar el texto de tratamiento y una casilla separada y **sin marcar** para recibir comunicaciones comerciales, si se piensa enviar boletines. Mientras no exista esa casilla, usar los contactos solo para responder la solicitud.
3. **Habilitar un correo propio para derechos** (por ejemplo `privacidad@beacademics.com`) en lugar de la cuenta de Gmail. Cambiarlo en `src/config/contact.ts` (`INSTITUTIONAL_EMAIL`) y en las políticas.
4. **Designar a una persona responsable** de atender solicitudes y vulneraciones, y dejar su nombre en el registro de abajo. La ley permite, sin exigirlo, un delegado de protección de datos.
5. **Revisión legal** de `/privacidad/`, `/cookies/`, de la base de licitud de cada finalidad (en especial el «interés legítimo» del seguimiento comercial) y de las transferencias a Estados Unidos.
6. **Tag Manager:** activar en el contenedor la configuración de consentimiento y mantener las etiquetas de Google Ads con sus permisos integrados.
7. **Revisar lo que no cubre este trabajo:** `syncrotime.com` y `app.syncrotime.com` (tienen su propia política y usan un procesador de pagos) y la plataforma SyncroEdu (`syncroedu.com`, con datos de docentes y asistentes). Allí BE Academic es encargada o responsable de datos de terceros y el estándar es más alto.
8. **Capacitar** al equipo que atiende consultas: qué es un dato personal, no reenviar datos por canales informales, y a quién derivar un reclamo.

## 4. Registro de actividades de tratamiento del sitio

Mantener actualizado; es la base para demostrar cumplimiento ante la Agencia.

| Tratamiento | Datos | Titulares | Base | Encargado / destinatario | País | Conservación | Responsable interno |
|---|---|---|---|---|---|---|---|
| Consultas y demos | Nombre, correo, teléfono, establecimiento, cargo, mensaje | Directivos y docentes de colegios | Medidas precontractuales | HubSpot | EE. UU. | Mientras se atienda la solicitud | (completar) |
| Seguimiento comercial | Datos anteriores + historial | Ídem | Interés legítimo | HubSpot | EE. UU. | Mientras dure la relación o hasta oposición | (completar) |
| Seguridad y entrega del sitio | IP, navegador, páginas | Visitantes | Interés legítimo | GitHub, Cloudflare | EE. UU. | Según proveedor | (completar) |
| Análisis | Identificadores de cookies | Visitantes que aceptan | Consentimiento | Google | EE. UU. | Hasta 2 años | (completar) |
| Marketing | Identificadores de cookies y clics | Visitantes que aceptan | Consentimiento | Google | EE. UU. | 90 días a 13 meses | (completar) |
| Atención de derechos | Datos de la solicitud | Quien la presenta | Obligación legal | — | Chile | Plazos de prescripción | (completar) |

## 5. Protocolo para solicitudes de derechos

1. **Recibir** en el correo de privacidad. Registrar fecha, nombre, derecho ejercido y medio de contacto.
2. **Confirmar la identidad** (responder desde el mismo correo o pedir un dato que solo el titular conozca). No pedir copia de cédula salvo que sea imprescindible.
3. **Responder en un máximo de 30 días corridos.** Si el caso es complejo, prorrogar una vez por 30 días más, avisando el motivo antes de que venza el primer plazo.
4. **Ejecutar:** buscar al titular en HubSpot, el correo y WhatsApp. Acceso: entregar copia. Rectificación o supresión: aplicarla en todos los sistemas y avisar a los proveedores. Oposición a marketing: marcar al contacto como «no contactar» en HubSpot.
5. **Si se deniega**, explicar el motivo por escrito (por ejemplo, un deber legal de conservación) e informar que puede reclamar ante la Agencia.
6. **Archivar** la solicitud y la respuesta como prueba, por el plazo de prescripción.

Respuesta tipo: *«Estimado/a [nombre]: recibimos el [fecha] su solicitud de [derecho]. [Hicimos / no podemos hacer] lo solicitado porque [motivo]. Si no está conforme, puede reclamar ante la Agencia de Protección de Datos Personales. Saludos, BE Academic.»*

## 6. Protocolo ante una vulneración de seguridad

1. **Contener** (cambiar contraseñas de HubSpot, Google y Cloudflare; revocar accesos) y **registrar** qué pasó, cuándo y qué datos afecta.
2. **Evaluar el riesgo** para los titulares. Si hay riesgo razonable, **avisar a la Agencia** por los medios más expeditos y sin dilaciones indebidas, y conservar el registro del aviso.
3. **Avisar a los titulares** cuando afecte datos sensibles, de menores de 14 años o de obligaciones económicas, bancarias o comerciales, o cuando la ley lo exija.
4. **Corregir la causa** y dejar constancia de las medidas tomadas.

## 7. Cuándo hay que volver a pedir consentimiento

- Si cambia de forma importante el uso de cookies (nuevo proveedor de publicidad, nuevas finalidades), subir `CONSENT_VERSION` en `src/lib/consent.ts`; todos los visitantes verán el aviso otra vez.
- Si solo cambia el texto de las políticas, actualizar `POLICY_VERSION` y la fecha en `/privacidad/` y `/cookies/`.
- Si se agrega una cookie o un proveedor, actualizar la tabla de `/cookies/` en el mismo cambio.
