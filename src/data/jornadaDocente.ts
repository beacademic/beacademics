/**
 * Distribución oficial de la jornada docente (año escolar 2019 en adelante), en minutos.
 *
 * Fuente: Mineduc, «Orientaciones: incremento de horas no lectivas establecidas por la Ley N° 20.903»
 * (tablas de los arts. 69 y 80 del DFL N° 1 de 1996 y del art. cuarto transitorio de la Ley 20.903).
 * Las tablas consideran horas de clase de 45 minutos (art. 6° letra a) del Estatuto Docente).
 *
 * Cada fila: horas de contrato → [horas lectivas de 45 min, docencia de aula, recreo, horas no lectivas].
 * Generado desde el PDF oficial; en cada fila se verificó que aula + recreo + no lectivas = contrato × 60
 * y que aula = horas lectivas × 45.
 */
export type FilaJornada = readonly [lectivas45: number, aulaMin: number, recreoMin: number, noLectivasMin: number];

/** Regla general 65/35 (arts. 69 y 80 del Estatuto Docente). */
export const TABLA_GENERAL: Readonly<Record<number, FilaJornada>> = {
    44: [38, 1710, 180, 750],
    43: [37, 1665, 176, 739],
    42: [36, 1620, 172, 728],
    41: [35, 1575, 168, 717],
    40: [35, 1575, 164, 661],
    39: [34, 1530, 160, 650],
    38: [33, 1485, 155, 640],
    37: [32, 1440, 151, 629],
    36: [31, 1395, 147, 618],
    35: [30, 1350, 143, 607],
    34: [29, 1305, 139, 596],
    33: [29, 1305, 135, 540],
    32: [28, 1260, 131, 529],
    31: [27, 1215, 127, 518],
    30: [26, 1170, 123, 507],
    29: [25, 1125, 119, 496],
    28: [24, 1080, 115, 485],
    27: [23, 1035, 110, 475],
    26: [22, 990, 106, 464],
    25: [22, 990, 102, 408],
    24: [21, 945, 98, 397],
    23: [20, 900, 94, 386],
    22: [19, 855, 90, 375],
    21: [18, 810, 86, 364],
    20: [17, 765, 82, 353],
    19: [16, 720, 78, 342],
    18: [16, 720, 74, 286],
    17: [15, 675, 70, 275],
    16: [14, 630, 65, 265],
    15: [13, 585, 61, 254],
    14: [12, 540, 57, 243],
    13: [11, 495, 53, 232],
    12: [10, 450, 49, 221],
    11: [10, 450, 45, 165],
    10: [9, 405, 41, 154],
    9: [8, 360, 37, 143],
    8: [7, 315, 33, 132],
    7: [6, 270, 29, 121],
    6: [5, 225, 25, 110],
    5: [4, 180, 20, 100],
    4: [3, 135, 16, 89],
    3: [3, 135, 12, 33],
    2: [2, 90, 8, 22],
    1: [1, 45, 4, 11],
};

/**
 * Docentes de 1° a 4° básico en establecimientos con 80 % o más de alumnos prioritarios
 * (art. cuarto transitorio de la Ley 20.903): docencia de aula de hasta 60 % del contrato.
 */
export const TABLA_PRIORITARIOS: Readonly<Record<number, FilaJornada>> = {
    44: [35, 1575, 180, 885],
    43: [34, 1530, 176, 874],
    42: [33, 1485, 172, 863],
    41: [33, 1485, 168, 807],
    40: [32, 1440, 164, 796],
    39: [31, 1395, 160, 785],
    38: [30, 1350, 155, 775],
    37: [29, 1305, 151, 764],
    36: [29, 1305, 147, 708],
    35: [28, 1260, 143, 697],
    34: [27, 1215, 139, 686],
    33: [26, 1170, 135, 675],
    32: [25, 1125, 131, 664],
    31: [25, 1125, 127, 608],
    30: [24, 1080, 123, 597],
    29: [23, 1035, 119, 586],
    28: [22, 990, 115, 575],
    27: [21, 945, 110, 565],
    26: [21, 945, 106, 509],
    25: [20, 900, 102, 498],
    24: [19, 855, 98, 487],
    23: [18, 810, 94, 476],
    22: [18, 810, 90, 420],
    21: [17, 765, 86, 409],
    20: [16, 720, 82, 398],
    19: [15, 675, 78, 387],
    18: [14, 630, 74, 376],
    17: [14, 630, 70, 320],
    16: [13, 585, 65, 310],
    15: [12, 540, 61, 299],
    14: [11, 495, 57, 288],
    13: [10, 450, 53, 277],
    12: [10, 450, 49, 221],
    11: [9, 405, 45, 210],
    10: [8, 360, 41, 199],
    9: [7, 315, 37, 188],
    8: [6, 270, 33, 177],
    7: [6, 270, 29, 121],
    6: [5, 225, 25, 110],
    5: [4, 180, 20, 100],
    4: [3, 135, 16, 89],
    3: [2, 90, 12, 78],
    2: [2, 90, 8, 22],
    1: [1, 45, 4, 11],
};

export const FUENTE_TABLAS_URL =
    'https://especial.mineduc.cl/wp-content/uploads/sites/31/2017/04/Orientaciones_Horas_No_Lectivas.pdf';
