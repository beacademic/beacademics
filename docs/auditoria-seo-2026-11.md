# Auditoría SEO — beacademics.com

Fecha: 14 de noviembre de 2026 · Tipo: auditoría completa · Sitio en producción = commit `69ec732` (9 oct 2026)

> Sin herramienta SEO conectada: no hay datos de volumen, dificultad ni posiciones reales. Las estimaciones son cualitativas (búsqueda web + revisión del sitio y del código). Para cifras reales, autorizar Ahrefs (`/mcp`) o conectar Google Search Console.

## Resumen ejecutivo

La base técnica es buena: rutas limpias con barra final, canonical y metadatos por ruta generados en el build, 404 real con `noindex`, imágenes WebP con `alt` y dimensiones, CLS 0 y un sitemap que el build verifica. La página de SyncroEdu es el mejor activo (1.500 palabras, FAQ y casos de uso).

Las 3 prioridades:

1. **El contenido solo existe después de ejecutar JavaScript.** El HTML que se sirve trae `<div id="root"></div>` vacío; el prerender solo escribe el `<head>`. Google lo renderiza, pero Bing, los buscadores de IA (ChatGPT, Perplexity, Claude) y las vistas previas de LinkedIn/WhatsApp no ven texto, encabezados ni JSON-LD.
2. **No hay contenido que capte búsquedas informativas.** El sitio tiene 9 URL, todas comerciales o legales. Las búsquedas con más oportunidad (regla 65/35, horas no lectivas, horas PIE, horarios sin topes) hoy las responden dt.gob.cl, CPEIP y bcn.cl; ningún proveedor de software las ocupa con guías ni calculadoras.
3. **Señales confusas en títulos, idiomas y dominios.** El título de SyncroEdu mide 76 caracteres y se corta; los H1 no incluyen la palabra clave; las versiones `?lang=en/pt` de SyncroTime declaran canonical a la versión en español (Google las descarta); y syncroedu.com y syncrotime.com compiten con las páginas de producto de beacademics.com por las búsquedas de marca.

**Evaluación general: buena base técnica, falta trabajo de contenido y de indexabilidad.**

## Oportunidades de keywords

Mercado: Chile, español. Posición actual: sin datos (requiere Search Console o Ahrefs).

| Keyword | Dificultad est. | Oportunidad | Posición actual | Intención | Contenido recomendado |
|---|---|---|---|---|---|
| proporción 65/35 horas lectivas | Moderada (sitios .gob) | Alta | Sin datos | Informativa | Guía pilar + calculadora |
| calculadora horas lectivas y no lectivas | Fácil | Alta | Sin datos | Transaccional/herramienta | Calculadora gratuita (lead magnet) |
| generador de horarios escolares | Moderada | Alta | Sin datos | Comercial | Landing SyncroTime (optimizar) |
| software de horarios para colegios | Moderada | Alta | Sin datos | Comercial | Landing SyncroTime / SyncroEdu |
| programa para hacer horarios de clases | Moderada | Alta | Sin datos | Comercial | Sección en landing SyncroTime + FAQ |
| alternativa a aSc Horarios | Fácil | Alta | Sin datos | Comercial | Página comparativa |
| horas PIE Decreto 170 cálculo | Fácil | Alta | Sin datos | Informativa | Guía + calculadora de co-docencia |
| multas Superintendencia de Educación horas lectivas | Fácil–moderada | Alta | Sin datos | Informativa | Artículo con fuentes oficiales |
| plantilla carga horaria docente Excel | Moderada | Alta | Sin datos | Transaccional | Plantilla descargable con formulario HubSpot |
| horario escolar sin topes / cómo evitar topes | Fácil | Media–alta | Sin datos | Informativa | Guía práctica |
| Ley 20.903 horas no lectivas | Moderada (sitios .gob) | Media | Sin datos | Informativa | Sección de la guía pilar |
| gestión de reemplazos docentes | Fácil | Media | Sin datos | Comercial/informativa | Landing de módulo |
| distribución horas no lectivas ejemplo | Fácil | Media | Sin datos | Informativa | Artículo con ejemplos por tipo de contrato |
| software UTP colegio | Fácil | Media | Sin datos | Comercial | Landing por rol (UTP) |
| alternativa a Peñalara GHC en Chile | Fácil | Media | Sin datos | Comercial | Página comparativa |
| syncroedu / syncrotime (marca) | Fácil | Media | Sin datos (dividido entre dominios) | Navegacional | Definir una URL dueña por marca |
| Estándares Indicativos de Desempeño | Moderada (Agencia de Calidad) | Media | Sin datos | Informativa | Guía para la página de Nexus |
| software gestión escolar Chile | Difícil (Lirmi, Napsis, WebClass) | Media | Sin datos | Comercial | Comparativa honesta / página de categoría |
| capacitación docente colegios Chile | Moderada | Media | Sin datos | Comercial | Landing de servicios (hoy es una tarjeta en el inicio) |
| consultoría educacional colegios | Moderada | Media | Sin datos | Comercial | Landing de servicios |
| plan de mejoramiento educativo (PME) | Moderada | Baja–media | Sin datos | Informativa | Artículo para Nexus |
| school timetable generator (EN) | Difícil | Baja | Sin datos | Comercial | Solo tras arreglar hreflang |
| gerador de horário escolar (PT) | Difícil | Baja | Sin datos | Comercial | Solo tras arreglar hreflang |

## Datos de Search Console (jul 2025 – nov 2026)

Obtenidos con Supermetrics el 14/11/2026, propiedad `sc-domain:beacademics.com`.

- **Tráfico muy bajo:** 84 clics y ~1.000 impresiones en 16 meses. Casi todo es la marca ("be academic", posición 3) y la palabra genérica "academic" (126 impresiones, 0 clics).
- **Solo aparece el inicio.** /syncroedu/, /syncrotime/ y /nexus/ no tienen ni una impresión: hasta el 20/9 eran rutas con `#` (no indexables) y **no hay sitemap enviado** en Search Console.
- **Rankings perdidos en la migración de mayo–junio 2026.** El sitio anterior (`www.beacademics.com`) posicionaba:
  - `/material-gratuito` → "material gratuito", posición 7 (52 impresiones). Hoy esa URL da **404**.
  - una **calculadora docente** en el inicio → "calculadora docente" posición 5,9 (57 impresiones) y "calculadora de horas docentes" posición 4. Ya no existe.
- **Google ya asocia el sitio a búsquedas de horas docentes** ("hora docente", "horas cronológicas a pedagógicas", "carga horaria docente", "tabla de horas lectivas y no lectivas 2026"), pero en posiciones 50–70 porque no hay una página que las responda. Confirma la prioridad de la calculadora y la guía 65/35.
- La posición media pasó de ~5 (2025) a 20–40 desde junio de 2026, coincidiendo con el sitio nuevo.

## Problemas on-page

Medido en el sitio en producción (DOM renderizado).

| Página | Problema | Severidad | Corrección recomendada |
|---|---|---|---|
| Todas | El `<body>` llega vacío; texto, H1–H3 y JSON-LD aparecen solo tras ejecutar JS | Crítica | Prerenderizar también el contenido (ver plan) |
| /syncrotime/?lang=en, ?lang=pt | Canonical apunta a `/syncrotime/` (español) y el HTML estático está en español: el hreflang queda anulado | Alta | Canonical autorreferente por idioma, o rutas `/en/syncrotime/` y `/pt/syncrotime/` prerenderizadas |
| /syncroedu/ | Título de 76 caracteres (se corta en Google) | Alta | `SyncroEdu: horarios y regla 65/35 para colegios en Chile` (56) |
| /syncroedu/ | Meta description de 190 caracteres | Media | `Genere el horario escolar, valide la regla 65/35 (Ley 20.903) y las horas PIE (Decreto 170) y gestione reemplazos docentes. Pida una demo con sus datos.` (152) |
| /syncroedu/ | H1 sin keyword ("Proteja su colegio de multas millonarias…") | Media | Poner la keyword en el H1 y dejar la frase emocional como bajada |
| / | Título con solo nombres de marca, sin la categoría | Media | `BE Academic \| Software para colegios: horarios y normativa` (58) |
| / | H1 sin keyword ("Tecnología para que su colegio funcione…") | Media | Incluir "software para colegios" en el H1 o en la bajada inmediata |
| / | Meta description de 168 caracteres | Baja | `Software para colegios en Chile: SyncroEdu valida la regla 65/35 y las horas PIE, y SyncroTime genera horarios sin topes. Agende una demo gratuita.` (147) |
| /nexus/ | Contenido escaso (165 palabras), sin schema, sin formulario | Media | Ampliar a ~600 palabras sobre los Estándares Indicativos y agregar lista de espera (HubSpot) |
| /syncrotime/ | 543 palabras para una keyword comercial competida | Media | Ampliar: casos de uso, tipos de restricciones, comparativa, más FAQ |
| /syncrotime/ | Título no incluye "generador" (la forma más buscada) | Baja | `SyncroTime \| Generador de horarios escolares sin topes` (54) |
| /syncroedu/ | Saltos de jerarquía (H3 de cifras sueltas, H3 "NAVEGACIÓN" en el pie) | Baja | Pie con `<p>`/`<nav>`; cifras como texto, no encabezados |
| /syncroedu/ | No enlaza a /contacto/ ni a /nexus/; las demos salen a WhatsApp | Baja | Enlace interno a /contacto/ con texto descriptivo |
| /acceso/ | Página de 52 palabras, sin valor de búsqueda, en el sitemap | Baja | `noindex, follow` y quitar del sitemap |
| /contacto/ | 123 palabras, sin schema | Baja | `ContactPage` + `Organization` con dirección |
| Todas | Misma og:image genérica | Baja | Imagen OG propia por producto |
| Todas | `meta keywords` (Google la ignora) | Baja | Opcional: eliminar |

## Recomendaciones de contenido

| Tema / keyword | Por qué importa | Formato | Prioridad | Esfuerzo |
|---|---|---|---|---|
| Regla 65/35: guía completa (Ley 20.903, 19.070, 21.625) | Dolor central del comprador; hoy solo responden sitios .gob, que no explican en lenguaje de UTP | Guía pilar | Alta | Varios días |
| Calculadora de horas lectivas/no lectivas | Herramienta enlazable; capta UTP en etapa de descubrimiento y alimenta HubSpot | Herramienta interactiva | Alta | Varios días |
| Horas PIE y co-docencia (Decreto 170) | Diferenciador de SyncroEdu; poca competencia comercial | Guía + calculadora | Alta | Medio día–varios días |
| SyncroEdu vs aSc Horarios / Excel | Su propia FAQ ya menciona aSc; búsquedas de alternativa = intención alta | Página comparativa | Alta | Medio día |
| Plantilla de carga horaria docente | Lead magnet; Lirmi usa este modelo (descargas a cambio de datos) | Plantilla + landing | Media | Medio día |
| Cómo armar un horario escolar sin topes | Etapa de descubrimiento para SyncroTime | Artículo | Media | Medio día |
| Multas de la Superintendencia por proporción docente | Etapa de consideración; respalda el mensaje de riesgo con fuentes | Artículo con fuentes oficiales | Media | Medio día |
| Estándares Indicativos de Desempeño explicados | Prepara demanda para Nexus antes del lanzamiento | Guía | Media | Medio día |
| Capacitación y consultoría escolar | Hoy son 2 tarjetas en el inicio, sin URL propia que pueda posicionar | 2 landings de servicio | Media | Medio día |
| Caso de estudio con nombre y cifras | La página dice "Colegio Particular Subvencionado" sin nombre: poca credibilidad para Google y para el comprador | Caso de estudio | Media | Medio día |

**Clusters sugeridos:** (1) *Normativa docente* — pilar 65/35 → horas no lectivas, multas, contratos, PIE; (2) *Horarios escolares* — pilar "cómo hacer un horario escolar" → topes, restricciones, comparativas, plantillas; (3) *Calidad educativa* (Nexus) — Estándares Indicativos → PME, liderazgo, convivencia.

**Etapas del embudo:** hay páginas de decisión (producto, contacto) pero nada de descubrimiento ni consideración.

## Checklist técnico

| Revisión | Estado | Detalle |
|---|---|---|
| HTTPS forzado | Falla | `http://beacademics.com/` responde 200 sin redirigir a https (contenido duplicado). Activar "Always Use HTTPS" en Cloudflare |
| www → raíz | OK | `www` redirige 301 a `https://beacademics.com/` |
| Barra final | OK | `/syncroedu` → 301 → `/syncroedu/` |
| Contenido sin JS | Falla | Body vacío; solo el `<head>` está prerenderizado |
| Datos estructurados | Advertencia | JSON-LD solo existe tras ejecutar JS. `Organization.sameAs` apunta a dominios propios (debería apuntar a perfiles sociales: LinkedIn, Instagram). `SoftwareApplication` sin `offers` → no califica para resultados enriquecidos. Faltan `BreadcrumbList` y schema en Nexus/Contacto. FAQPage está bien (Google ya no lo muestra como resultado enriquecido para sitios comerciales, pero ayuda a buscadores de IA) |
| hreflang | Falla | Variantes `?lang=` de SyncroTime con canonical a otra URL |
| Canonical | OK (salvo `?lang`) | Autorreferente en las 8 rutas |
| robots.txt | Advertencia | Dos grupos `User-agent: *` (Cloudflare + propio); funciona, pero conviene uno. Bloquea bots de entrenamiento (GPTBot, ClaudeBot, Google-Extended): no afecta a Google Search. Confirmar que es la decisión buscada |
| Sitemap | Advertencia | `lastmod` 2026-09-20 en todas las URL aunque hubo cambios el 24/9 y el 9/10; incluye /acceso/ y URL `?lang=` en conflicto |
| 404 | OK | Código 404 real con `noindex, follow` |
| Viewport/móvil | OK | `width=device-width`, objetivos táctiles revisados en el último commit |
| CLS | OK | 0,000 en escritorio |
| LCP | Advertencia | 1,3 s en escritorio con buena conexión. Un solo JS de 577 KB (166 KB gzip) sin división por ruta y H1 animados desde `opacity: 0`. En móvil probablemente sea bastante mayor: medir con PageSpeed Insights |
| Imágenes | OK | WebP, `width`/`height`, `loading="lazy"`, `alt` descriptivo |
| Fuentes | Advertencia | Lexend desde Google Fonts con 5 pesos; autoalojar y reducir pesos |
| HSTS | Advertencia | Sin cabecera `Strict-Transport-Security` |
| Enlaces rotos | OK | Las 8 rutas responden 200; los enlaces internos apuntan a rutas válidas |
| Dominios hermanos | Advertencia | syncroedu.com y syncrotime.com sirven sitios propios sin canonical cruzado y compiten por las búsquedas de marca |

## Comparación con competidores

Cualitativa (sin datos de backlinks ni de posiciones).

| Dimensión | beacademics.com | Lirmi (lirmi.com) | WebClass (webclass.com) | Gana |
|---|---|---|---|---|
| URL indexables | 9 | ~82 en el sitemap + blog | ~136 páginas | WebClass |
| Profundidad de contenido | 1 página fuerte (SyncroEdu) | Landings por producto y descargas | Catálogo amplio por módulo | Lirmi / WebClass |
| Frecuencia de publicación | Ninguna (sin blog) | Blog activo + recursos descargables | Catálogos anuales en PDF | Lirmi |
| Señales de backlinks | Bajas (marca sin menciones en la búsqueda) | Prensa (Diario Estrategia, DF) | Marca establecida | Lirmi |
| Nicho normativo (65/35, PIE, horarios) | Mejor mensaje del mercado | Genérico (gestión escolar) | Módulo PIE, sin horarios | **beacademics** |
| Técnico | Bueno, salvo el contenido que depende de JS | Sin evaluar | Sin evaluar | — |
| Funciones SERP | Ninguna observada | Sin datos | Sin datos | — |

**Lectura:** competir de frente por "software de gestión escolar" no conviene. La ventaja de BE Academic está en el nicho normativo y de horarios, donde ningún proveedor publica guías ni herramientas. aSc Horarios (en uso en liceos chilenos) y Peñalara (España) son los rivales directos de SyncroTime, y ninguno tiene contenido local sobre la normativa chilena.

## Plan de acción priorizado

### Victorias rápidas (esta semana)

> Aplicadas en el código el 14/11/2026 (sin publicar): títulos y descripciones, H1, hreflang, noindex de /acceso/, schema `Organization` y `lastmod`. HTTPS y HSTS activos en Cloudflare (verificado el 14/11). `sameAs` con LinkedIn; falta Instagram. Pendiente: enviar el sitemap en Search Console y alta en Bing.

- [x] **Forzar HTTPS** en Cloudflare (SSL/TLS → Edge Certificates → Always Use HTTPS) y activar HSTS. Impacto: medio · Esfuerzo: 10 min · Dependencia: acceso a Cloudflare
- [x] **Reescribir títulos y descripciones** en `src/seo/routes.json` (propuestas en la tabla on-page). Impacto: alto · Esfuerzo: 30 min
- [x] **Poner la keyword en los H1** de Inicio y SyncroEdu. Impacto: medio · Esfuerzo: 30 min
- [x] **Arreglar el hreflang de SyncroTime:** como mínimo, quitar las alternativas `?lang=` del sitemap y del `<head>` hasta tener URL propias por idioma. Impacto: medio · Esfuerzo: 30 min
- [x] **/acceso/ con noindex** y fuera del sitemap. Impacto: bajo · Esfuerzo: 15 min
- [x] **Corregir `Organization`:** `sameAs` con perfiles sociales reales, dirección completa (ya está en /legal/) y `logo` como `ImageObject`. Impacto: medio · Esfuerzo: 30 min
- [x] **Actualizar `lastmod`** del sitemap (idealmente generarlo en el build con la fecha de git). Impacto: bajo · Esfuerzo: 30 min
- [ ] **Enviar el sitemap en Search Console** (está dado de alta pero sin sitemap) y dar de alta Bing Webmaster Tools. Impacto: alto (habilita medir todo lo demás) · Esfuerzo: 30 min

### Inversiones estratégicas (este trimestre)

- [ ] **Recuperar la calculadora docente** como /recursos/calculadora-horas-docentes/ y redirigir `/material-gratuito` hacia /recursos/. Impacto: alto (ya posicionó en el top 10) · Esfuerzo: 1–2 días

- [ ] **Prerender del contenido completo**: renderizar cada ruta a HTML en el build (por ejemplo, el prerender de React Router v7 o `react-dom/server` en `scripts/prerender-routes.mjs`), incluyendo el JSON-LD. Impacto: alto · Esfuerzo: 1–2 días · Dependencia: revisar que `motion` y `window` no rompan el render en servidor
- [ ] **Dividir el JS por ruta** (`React.lazy`) y no animar el H1 desde `opacity: 0`. Impacto: medio (LCP móvil) · Esfuerzo: medio día
- [ ] **Crear la sección /recursos/** con el cluster *Normativa docente*: pilar 65/35 + calculadora + guía PIE. Impacto: alto · Esfuerzo: 1–2 semanas · Dependencia: revisión legal de las cifras
- [ ] **Páginas comparativas**: SyncroEdu vs aSc Horarios / Excel; SyncroTime vs Peñalara. Impacto: alto · Esfuerzo: 1–2 días
- [ ] **Decidir la estrategia de dominios**: qué URL es la dueña de "syncroedu" y "syncrotime" (beacademics.com/… o el dominio propio) y canonicalizar o enlazar en consecuencia. Impacto: alto · Esfuerzo: medio día de decisión + implementación · Dependencia: equipo de producto
- [ ] **Rutas reales por idioma para SyncroTime** (`/en/`, `/pt/`) prerenderizadas, si el mercado internacional es objetivo. Impacto: medio · Esfuerzo: 1–2 días
- [ ] **Landings de servicios** (capacitación, consultoría) y **caso de estudio con nombre**. Impacto: medio · Esfuerzo: 2–3 días · Dependencia: autorización del colegio cliente
- [ ] **Ampliar Nexus** con guía de Estándares Indicativos y lista de espera. Impacto: medio · Esfuerzo: 1 día
- [ ] **Backlinks**: notas en medios educativos (Revista de Educación, Elige Educar), alianzas con sostenedores y fundaciones, la calculadora como recurso enlazable. Impacto: alto · Esfuerzo: continuo

## Fuentes de la investigación

- [Orientaciones Horas No Lectivas — CPEIP](https://www.cpeip.cl/wp-content/uploads/2019/05/Orientaciones-Horas-No-Lectivas.pdf)
- [Dictamen Dirección del Trabajo sobre la proporción horaria](https://dt.gob.cl/legislacion/1624/w3-article-115668.html)
- [Ley 20.903 — BCN](https://www.bcn.cl/leychile/navegar?idNorma=1087343)
- [Horario generado con aSc Horarios — Liceo Politécnico San Luis](https://www.politecnicosanluis.cl/wp-content/uploads/2025/04/CUARTOS-MEDIOS.pdf)
- [Lirmi en Diario Estrategia](https://www.diarioestrategia.cl/texto-diario/mostrar/5206213/lirmi-innovacion-eficiencia-gestion-escolar-carga-administrativa)
- [Catálogo WebClass Suite 2025](https://www.webclass.com/wp-content/uploads/2024/11/Catalogo-Producto-Suit-2025-1_compressed.pdf)
- [Peñalara GHC — Educación 3.0](https://www.educaciontrespuntocero.com/recursos/ghc-penalara/)
- [Tres Edtech — DF](https://www.df.cl/df-lab/transformacion-digital/tres-edtech-que-impulsan-la-evolucion-tecnologica-de-la-educacion)
