/**
 * Consentimiento de cookies de beacademics.com.
 *
 * Reglas que implementa (Ley 19.628 y estándar de la Ley 21.719 de protección de datos personales, que exige un
 * consentimiento libre, informado, específico e inequívoco, revocable con la misma facilidad con que se da;
 * y el estándar de la industria: Google Consent Mode v2, directrices del Comité Europeo de Protección de Datos):
 * - Nada de análisis ni de marketing se carga antes de que el visitante lo acepte. Google Tag Manager
 *   NO está en el HTML: solo se inyecta aquí, después de un consentimiento.
 * - Rechazar es tan fácil como aceptar; no hay casillas premarcadas.
 * - El consentimiento es por categoría, se puede cambiar o retirar en cualquier momento, y se guarda
 *   como prueba (versión, fecha y elección) durante 12 meses; después se vuelve a preguntar.
 * - Al retirar un permiso ya concedido se actualiza Consent Mode, se borran las cookies de Google
 *   que el sitio haya creado y se recarga la página para que no quede nada activo.
 */
export const GTM_ID = 'GTM-PT65BM4B';

export interface ConsentChoice {
    analytics: boolean;
    marketing: boolean;
}

interface StoredConsent extends ConsentChoice {
    /** Versión del texto del aviso; si cambia, se vuelve a pedir el consentimiento. */
    v: number;
    /** Momento de la elección (ms desde 1970). */
    ts: number;
    /** Versión de la política de cookies y de privacidad vigente cuando se decidió (prueba del consentimiento). */
    policy: string;
}

const STORAGE_KEY = 'be_cookie_consent';
const CONSENT_VERSION = 1;
/** Cambiar al modificar las políticas. Si cambia el uso de cookies, subir también CONSENT_VERSION para volver a preguntar. */
const POLICY_VERSION = '2026-11-18';
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

/** Evento para abrir el panel de preferencias desde cualquier enlace o botón. */
export const OPEN_PREFERENCES_EVENT = 'be:open-cookie-preferences';

declare global {
    interface Window {
        dataLayer?: unknown[];
    }
}

/** gtag debe empujar el objeto `arguments` tal cual: así lo exige Google Tag Manager. */
function gtag(..._args: unknown[]): void {
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
}

let consentDefaultSent = false;

export function readConsent(): StoredConsent | null {
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const data = JSON.parse(raw) as Partial<StoredConsent>;
        if (
            data.v !== CONSENT_VERSION ||
            typeof data.ts !== 'number' ||
            typeof data.analytics !== 'boolean' ||
            typeof data.marketing !== 'boolean' ||
            Date.now() - data.ts > MAX_AGE_MS
        ) {
            return null;
        }
        return { policy: '', ...data } as StoredConsent;
    } catch {
        return null;
    }
}

function gtmLoaded(): boolean {
    return !!document.querySelector('script[src*="googletagmanager.com/gtm.js"]');
}

function loadGtm(): void {
    if (gtmLoaded()) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(script);
}

/** Borra las cookies de Google que haya podido crear el sitio (en el dominio y en sus dominios padre). */
function clearGoogleCookies(): void {
    const names = document.cookie
        .split(';')
        .map((c) => c.split('=')[0].trim())
        .filter((name) => /^(_ga|_gid|_gat|_gcl_|_gac_|__gads|__gpi|FPID|FPLC)/.test(name));
    const parts = window.location.hostname.split('.');
    const domains: string[] = [window.location.hostname];
    for (let i = 0; i < parts.length - 1; i++) domains.push(`.${parts.slice(i).join('.')}`);
    for (const name of names) {
        for (const domain of domains) {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
        }
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
}

function applyConsent(choice: ConsentChoice): void {
    const state = (granted: boolean) => (granted ? 'granted' : 'denied');
    if (!consentDefaultSent) {
        // Consent Mode v2: todo denegado por defecto, antes de que se cargue cualquier etiqueta.
        gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted',
        });
        consentDefaultSent = true;
    }
    gtag('consent', 'update', {
        ad_storage: state(choice.marketing),
        ad_user_data: state(choice.marketing),
        ad_personalization: state(choice.marketing),
        analytics_storage: state(choice.analytics),
    });
    if (choice.analytics || choice.marketing) loadGtm();
}

/** Aplica el consentimiento guardado, si existe y sigue vigente. Se llama una vez al iniciar la app. */
export function initConsent(): void {
    const stored = readConsent();
    if (stored) applyConsent(stored);
}

/** Guarda la elección del visitante y la aplica. */
export function saveConsent(choice: ConsentChoice): void {
    const previous = readConsent();
    const record: StoredConsent = {
        v: CONSENT_VERSION,
        ts: Date.now(),
        policy: POLICY_VERSION,
        analytics: choice.analytics,
        marketing: choice.marketing,
    };
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    } catch {
        // Sin almacenamiento (modo privado estricto): la elección rige solo en esta visita.
    }
    const reduced =
        !!previous && ((previous.analytics && !choice.analytics) || (previous.marketing && !choice.marketing));
    applyConsent(choice);
    if (reduced && gtmLoaded()) {
        clearGoogleCookies();
        window.location.reload();
    }
}

export function openCookiePreferences(): void {
    window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
