/**
 * Datos de contacto comerciales de BE Academic: fuente única para todo el sitio.
 * Para cambiar el número o el correo de ventas, edite solo este archivo.
 */

/** Número de ventas en formato internacional, sin "+" (formato de wa.me). */
export const SALES_PHONE_E164 = '56964375050';
/** Número de ventas tal como se muestra en pantalla. */
export const SALES_PHONE_DISPLAY = '+56 9 6437 5050';
/** Número de ventas para enlaces tel:. */
export const SALES_PHONE_TEL = `+${SALES_PHONE_E164}`;
/** Correo de ventas. */
export const SALES_EMAIL = 'ventas@syncroedu.com';
/** Correo institucional (Información Legal, privacidad y contacto general). */
export const INSTITUTIONAL_EMAIL = 'beacademic.ltda@gmail.com';
/** Horario de atención comercial. */
export const BUSINESS_HOURS = 'Lunes a Viernes · 9:00 a 18:00 hrs';

export type WhatsAppProduct = 'general' | 'syncroedu' | 'syncrotime' | 'nexus';
export type WhatsAppLang = 'es' | 'en' | 'pt';

/** Texto prellenado por producto e idioma. */
const DEFAULT_MESSAGES: Record<WhatsAppProduct, Record<WhatsAppLang, string>> = {
    general: {
        es: 'Hola, quiero información sobre los servicios de BE Academic',
        en: 'Hello, I would like information about BE Academic',
        pt: 'Olá, gostaria de informações sobre a BE Academic',
    },
    syncroedu: {
        es: 'Hola, quiero información sobre SyncroEdu',
        en: 'Hello, I would like information about SyncroEdu',
        pt: 'Olá, gostaria de informações sobre o SyncroEdu',
    },
    syncrotime: {
        es: 'Hola, quiero información sobre SyncroTime',
        en: 'Hello, I would like information about SyncroTime',
        pt: 'Olá, gostaria de informações sobre o SyncroTime',
    },
    nexus: {
        es: 'Hola, quiero información sobre Nexus',
        en: 'Hello, I would like information about Nexus',
        pt: 'Olá, gostaria de informações sobre o Nexus',
    },
};

/**
 * Arma el enlace de WhatsApp de ventas con texto prellenado.
 * @param product Producto sobre el que se consulta (define el texto por defecto).
 * @param options.lang Idioma del texto por defecto (es por defecto).
 * @param options.message Texto propio; reemplaza al texto por defecto.
 */
export function whatsappLink(
    product: WhatsAppProduct = 'general',
    options: { lang?: WhatsAppLang; message?: string } = {},
): string {
    const text = options.message ?? DEFAULT_MESSAGES[product][options.lang ?? 'es'];
    return `https://wa.me/${SALES_PHONE_E164}?text=${encodeURIComponent(text)}`;
}
