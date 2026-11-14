/**
 * Páginas por módulo de SyncroEdu (/syncroedu/<slug>/). Cada una apunta a una búsqueda distinta de
 * colegios chilenos. El texto sale de lo que ya publica la página principal de SyncroEdu y de sus
 * preguntas frecuentes (planes, funciones, caso piloto): no agregar funciones que el producto no tenga.
 *
 * Los títulos y descripciones para buscadores están en src/seo/routes.json.
 */
export type Plan = 'Básico' | 'Premium';

export interface ModuloSyncroEdu {
    slug: string;
    /** Nombre corto para enlaces y migas de pan. */
    nombre: string;
    badge: string;
    h1: string;
    intro: string;
    imagen: { src: string; alt: string; width: number; height: number };
    problemaTitulo: string;
    problemas: { titulo: string; texto: string }[];
    solucionTitulo: string;
    solucionTexto: string;
    funciones: string[];
    planes: Plan[];
    planNota: string;
    faqs: { q: string; a: string }[];
}

export const MODULOS: ModuloSyncroEdu[] = [
    {
        slug: 'horarios-escolares',
        nombre: 'Horarios escolares',
        badge: 'MÓDULO · GENERACIÓN DE HORARIOS',
        h1: 'Horarios escolares para colegios en Chile, validados contra la normativa',
        intro:
            'SyncroEdu genera el horario de su colegio respetando las variables pedagógicas y, al mismo tiempo, revisa que cada docente cumpla la proporción lectiva y no lectiva de la Ley 20.903. La UTP pasa de semanas de planillas a un horario listo en días.',
        imagen: {
            src: '/Generador.webp',
            alt: 'Pantalla de generación de horario de SyncroEdu con barra de progreso',
            width: 1600,
            height: 880,
        },
        problemaTitulo: 'Por qué armar el horario a mano es un riesgo',
        problemas: [
            {
                titulo: 'La UTP colapsada al inicio del año',
                texto: 'Elaborar la malla horaria a mano toma semanas, con fórmulas frágiles en Excel y revisiones repetitivas que no contemplan las exigencias contractuales de la legislación chilena.',
            },
            {
                titulo: 'Horarios que no cuadran con los contratos',
                texto: 'Un horario hecho en planillas no muestra si un docente quedó con más horas de aula de las permitidas. El error aparece recién en la fiscalización o en remuneraciones.',
            },
            {
                titulo: 'Doble traspaso de datos',
                texto: 'El horario se arma en una herramienta y se copia a otra para cargas horarias y contratos, con errores de transcripción en cada cambio.',
            },
        ],
        solucionTitulo: 'Cómo genera el horario SyncroEdu',
        solucionTexto:
            'El motor de optimización resuelve el horario en minutos considerando disponibilidad docente, topes de asignaturas por día, salas especializadas y bloques de co-docencia PIE. Después, el editor permite mover bloques y cambiar salas, y el sistema avisa al instante si el cambio genera un conflicto legal o pedagógico.',
        funciones: [
            'Generación automática respetando disponibilidad docente, topes por día y salas especializadas.',
            'Bloques de co-docencia PIE coordinados entre profesores de aula y especialistas.',
            'Validación de la proporción 65/35 de cada docente mientras se arma el horario.',
            'Editor interactivo con registro auditable de cada modificación.',
            'Envío automático de la malla horaria aprobada a los docentes.',
        ],
        planes: ['Básico', 'Premium'],
        planNota: 'La generación de horarios y las cargas horarias vienen desde el Plan Básico.',
        faqs: [
            {
                q: '¿Reemplaza a Excel y a generadores como aSc Horarios?',
                a: 'Sí. SyncroEdu une la generación de la malla horaria con la validación de las Leyes 20.903, 21.625 y 19.070 y con la gestión de reemplazos, así se evita duplicar planillas y el riesgo de error humano.',
            },
            {
                q: '¿Cuánto se demora en tener el horario?',
                a: 'En el colegio piloto (particular subvencionado con JEC, 62 docentes y más de 900 alumnos) la confección pasó de 3 semanas a entre 1 y 3 días hábiles.',
            },
            {
                q: '¿Qué pasa si hay que cambiar el horario a mitad de año?',
                a: 'El editor permite mover bloques y cambiar salas en segundos. El sistema revisa si el cambio genera un conflicto legal o pedagógico y guarda un registro de cada modificación.',
            },
        ],
    },
    {
        slug: 'cumplimiento-normativo',
        nombre: 'Cumplimiento normativo',
        badge: 'MÓDULO · VALIDACIÓN NORMATIVA',
        h1: 'Cumplimiento normativo docente: Ley 20.903 y proporción 65/35',
        intro:
            'SyncroEdu revisa en tiempo real que cada docente mantenga la proporción de horas lectivas y no lectivas que exige la legislación chilena (Leyes 20.903, 21.625 y 19.070), para corregir a tiempo y no enterarse en una fiscalización de la Superintendencia de Educación.',
        imagen: {
            src: '/Semaforo-1.webp',
            alt: 'Semáforo de cumplimiento normativo por docente en SyncroEdu',
            width: 1600,
            height: 424,
        },
        problemaTitulo: 'Dónde se generan los incumplimientos',
        problemas: [
            {
                titulo: 'Contratos docentes con descalce legal',
                texto: 'La Ley 20.903 fija distribuciones estrictas (65 % lectivas y 35 % no lectivas, aproximadamente). Un solo docente con sobrecarga de aula expone al colegio a multas de la Superintendencia de Educación.',
            },
            {
                titulo: 'Reglas distintas según el establecimiento',
                texto: 'En establecimientos con 80 % o más de alumnos prioritarios, los docentes de 1° a 4° básico tienen un tope de aula menor. Llevar ambas reglas en planillas es propenso a errores.',
            },
            {
                titulo: 'Desconexión entre UTP y Administración',
                texto: 'La información horaria llega tarde a remuneraciones y sin concordancia contractual, lo que produce anexos fuera de plazo y errores en liquidaciones.',
            },
        ],
        solucionTitulo: 'Cómo valida la normativa SyncroEdu',
        solucionTexto:
            'Cada docente aparece con un semáforo de cumplimiento según su contrato y su carga de aula, con la regla general 65/35 y la regla para primer ciclo en establecimientos con 80 % o más de alumnos prioritarios. Así la dirección ve de inmediato quién está fuera de norma y por cuánto.',
        funciones: [
            'Semáforo de cumplimiento verde, amarillo o rojo por cada docente.',
            'Regla general 65/35 y regla de primer ciclo para establecimientos con 80 % o más de prioritarios.',
            'Clasificación MINEDUC automática para anexos contractuales.',
            'Validación continua cada vez que cambia el horario o un contrato.',
        ],
        planes: ['Básico', 'Premium'],
        planNota: 'El cumplimiento normativo 65/35 viene desde el Plan Básico.',
        faqs: [
            {
                q: '¿Qué leyes revisa SyncroEdu?',
                a: 'La distribución de la jornada docente de la Ley 20.903 y el Estatuto Docente (Ley 19.070), junto con las exigencias sobre horas no lectivas de la Ley 21.625.',
            },
            {
                q: '¿Puedo revisar un docente sin contratar SyncroEdu?',
                a: 'Sí: la calculadora gratuita de horas docentes de BE Academic entrega el máximo de horas lectivas, el recreo y las horas no lectivas de un contrato según la tabla oficial del Mineduc.',
            },
            {
                q: '¿SyncroEdu reemplaza la asesoría legal?',
                a: 'No. Es una herramienta de apoyo que detecta descalces a tiempo; las decisiones contractuales siguen siendo del sostenedor y su asesoría jurídica.',
            },
        ],
    },
    {
        slug: 'reemplazos-docentes',
        nombre: 'Reemplazos docentes',
        badge: 'MÓDULO · CONTINUIDAD EN TERRENO',
        h1: 'Gestión de reemplazos docentes desde el celular',
        intro:
            'Cuando falta un docente, SyncroEdu busca en toda la dotación quién está disponible según su especialidad y sugiere el reemplazo idóneo. La dirección lo resuelve desde la app mientras recorre el colegio, y cada cobertura queda registrada.',
        imagen: {
            src: '/Dashboard-movil.webp',
            alt: 'App móvil de SyncroEdu con el resumen operativo y la cobertura de reemplazos del día',
            width: 1600,
            height: 1231,
        },
        problemaTitulo: 'El problema de los reemplazos improvisados',
        problemas: [
            {
                titulo: 'Reemplazos por WhatsApp sin respaldo',
                texto: 'Ante ausencias de última hora, las coberturas se coordinan por mensajería informal. Sin una bitácora, el colegio queda expuesto en fiscalizaciones y reclamos laborales.',
            },
            {
                titulo: 'Cursos sin profesor',
                texto: 'Sin saber quién está libre en ese bloque, encontrar a la persona adecuada toma tiempo y el curso queda sin clase.',
            },
            {
                titulo: 'Sobrecarga que nadie mide',
                texto: 'Los reemplazos tienden a caer siempre en las mismas personas, y esa carga extra no se ve en las planillas.',
            },
        ],
        solucionTitulo: 'Cómo gestiona los reemplazos SyncroEdu',
        solucionTexto:
            'El buscador revisa en tiempo real la disponibilidad de docentes y asistentes de la educación según el horario y la especialidad, y sugiere a quién asignar. Cada reemplazo genera un registro oficial en PDF listo para fiscalizaciones.',
        funciones: [
            'App directiva para iOS y Android.',
            'Buscador de personal disponible en tiempo real según especialidad.',
            'Reemplazos de docentes y de asistentes de la educación.',
            'Bitácora oficial en PDF lista para fiscalizaciones del MINEDUC.',
            'Ronda de Aula y Radar de Patios para el seguimiento en terreno.',
        ],
        planes: ['Premium'],
        planNota: 'La gestión de reemplazos y la app móvil son parte del Plan Premium.',
        faqs: [
            {
                q: '¿Funciona para asistentes de la educación?',
                a: 'Sí. El Plan Premium incluye la gestión de reemplazos de docentes y de asistentes de la educación.',
            },
            {
                q: '¿Queda registro de cada reemplazo?',
                a: 'Sí. Cada cobertura genera una bitácora oficial en PDF, útil como respaldo ante fiscalizaciones.',
            },
            {
                q: '¿Se necesita instalar algo?',
                a: 'La plataforma funciona en la nube desde el navegador, y la app directiva está disponible para iOS y Android.',
            },
        ],
    },
    {
        slug: 'gestion-de-personas',
        nombre: 'Gestión de personas',
        badge: 'MÓDULO · ANALÍTICA DE PERSONAS',
        h1: 'Gestión de personas y RRHH para colegios',
        intro:
            'SyncroEdu convierte la operación diaria en indicadores de recursos humanos: ausentismo reiterado, ocupación docente y proyecciones de costos. El sostenedor y la dirección toman decisiones de dotación con datos y no con intuición.',
        imagen: {
            src: '/Gestion-de-personas.webp',
            alt: 'Panel de analítica de personas de SyncroEdu: ausentismo, ocupación docente y simulador de costos',
            width: 1600,
            height: 1122,
        },
        problemaTitulo: 'Lo que no se ve sin indicadores',
        problemas: [
            {
                titulo: 'Ausentismo no detectado',
                texto: 'Las ausencias cortas y frecuentes desordenan el año escolar, pero en una planilla se ven como casos aislados y no como un patrón.',
            },
            {
                titulo: 'Horas ociosas y dotación descalzada',
                texto: 'Sin un índice de ocupación, es difícil saber si la dotación está bien dimensionada o si hay horas contratadas sin uso.',
            },
            {
                titulo: 'Presupuestos a ciegas',
                texto: 'Proyectar el costo de un cambio de dotación o del programa PIE suele hacerse con estimaciones manuales.',
            },
        ],
        solucionTitulo: 'Qué mide SyncroEdu',
        solucionTexto:
            'La analítica de personas usa los datos que ya están en la plataforma (horarios, contratos, ausencias y reemplazos) para calcular indicadores de gestión y simular el impacto financiero de las decisiones de dotación.',
        funciones: [
            'Cálculo automático del Factor de Bradford (ausentismo corto y frecuente).',
            'Índice de ocupación docente y razón de alumnos por profesional.',
            'Simulador de costos y proyecciones presupuestarias para sostenedores.',
            'Simulador financiero del programa PIE.',
        ],
        planes: ['Premium'],
        planNota: 'La analítica de RRHH es parte del Plan Premium.',
        faqs: [
            {
                q: '¿Qué es el Factor de Bradford?',
                a: 'Es un indicador de ausentismo que pondera más las ausencias cortas y frecuentes que una sola ausencia larga, porque son las que más desordenan la operación.',
            },
            {
                q: '¿De dónde salen los datos?',
                a: 'De la misma plataforma: horarios, contratos, ausencias y reemplazos. No hay que llenar planillas aparte.',
            },
            {
                q: '¿El precio depende del número de funcionarios?',
                a: 'Sí. Los planes van por tramos de dotación total (docentes y asistentes de la educación), con tarifas proporcionales para colegios pequeños, medianos y grandes.',
            },
        ],
    },
    {
        slug: 'auditoria-pie',
        nombre: 'Auditoría PIE',
        badge: 'MÓDULO · PIE · DECRETO 170',
        h1: 'Auditoría de horas PIE (Decreto 170) para proteger la subvención',
        intro:
            'SyncroEdu incorpora un módulo para el Programa de Integración Escolar: revisa que los bloques de co-docencia de 3 horas cronológicas queden asignados de forma coordinada entre profesores de aula y especialistas, para no arriesgar la subvención PIE.',
        imagen: {
            src: '/Dashboard.webp',
            alt: 'Centro de mando de SyncroEdu: continuidad del aula, mapa de disponibilidad docente e indicadores de dotación',
            width: 1600,
            height: 1231,
        },
        problemaTitulo: 'Por qué las horas PIE son un riesgo',
        problemas: [
            {
                titulo: 'Riesgo en la subvención PIE',
                texto: 'Una asignación incorrecta de las horas de co-docencia puede obligar a reintegrar la subvención especial PIE del curso.',
            },
            {
                titulo: 'Coordinación difícil de demostrar',
                texto: 'Las 3 horas cronológicas de trabajo colaborativo deben coincidir en el horario del profesor de aula y del especialista, y eso es difícil de controlar a mano.',
            },
            {
                titulo: 'Costos del programa sin proyección',
                texto: 'Sin un simulador, es difícil anticipar el costo de la dotación PIE frente a la subvención que recibe el colegio.',
            },
        ],
        solucionTitulo: 'Cómo audita el PIE SyncroEdu',
        solucionTexto:
            'Al generar el horario, SyncroEdu coordina los bloques de co-docencia del Decreto 170 entre los profesionales que corresponden, y la auditoría PIE muestra qué cursos cumplen y cuáles necesitan ajustes. El simulador financiero proyecta el costo del programa.',
        funciones: [
            'Bloques de co-docencia de 3 horas cronológicas coordinados en el horario.',
            'Auditoría por curso de las horas PIE asignadas.',
            'Simulador financiero del programa PIE.',
            'Integración con el horario general y con la validación 65/35.',
        ],
        planes: ['Premium'],
        planNota: 'La Auditoría PIE con simulador financiero es parte del Plan Premium.',
        faqs: [
            {
                q: '¿Cómo funciona para colegios con PIE?',
                a: 'SyncroEdu asegura que los bloques de co-docencia de 3 horas cronológicas se asignen de forma coordinada entre profesores de aula y especialistas, para proteger la subvención.',
            },
            {
                q: '¿Las 3 horas PIE son lectivas o no lectivas?',
                a: 'Depende del docente. Para el profesor de educación regular, las 3 horas cronológicas del artículo 86 letra b) del Decreto 170 (planificación, evaluación y seguimiento del PIE) se imputan dentro de su docencia de aula, es decir, como horas lectivas, según el dictamen N° 17.810 de 2016 de la Contraloría. Para el educador diferencial o profesional PIE, el trabajo colaborativo se considera dentro de sus horas no lectivas, que la dirección debe asignar en bloques suficientes. SyncroEdu aplica cada criterio al revisar la proporción 65/35.',
            },
            {
                q: '¿En qué plan está?',
                a: 'La Auditoría PIE con simulador financiero es parte del Plan Premium, junto con reemplazos, analítica de RRHH y la app móvil.',
            },
        ],
    },
];
