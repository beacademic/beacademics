import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import { OPEN_PREFERENCES_EVENT, readConsent, saveConsent, type ConsentChoice } from '../lib/consent';

/**
 * Aviso de cookies: banner no bloqueante (el sitio se puede usar sin responder), con "Aceptar todas" y
 * "Rechazar todas" de igual jerarquía visual, un panel para elegir por categoría y un botón permanente
 * para cambiar la elección. Solo se dibuja en el navegador: el HTML prerenderizado no lo incluye.
 */
const buttonBase =
    'inline-flex items-center justify-center min-h-11 px-5 rounded-full text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007AFF]';
const equalButton = `${buttonBase} bg-[#1D1D1F] text-white hover:bg-[#3A3A3C]`;
const outlineButton = `${buttonBase} bg-white text-[#1D1D1F] border border-black/20 hover:bg-[#F5F5F7]`;

function Switch({
    id,
    label,
    description,
    checked,
    disabled,
    onChange,
}: {
    id: string;
    label: string;
    description: string;
    checked: boolean;
    disabled?: boolean;
    onChange?: (value: boolean) => void;
}) {
    return (
        <div className="flex items-start justify-between gap-4 rounded-2xl border border-black/10 p-4">
            <div>
                <label htmlFor={id} className="block text-sm font-semibold text-[#1D1D1F]">
                    {label}
                </label>
                <p id={`${id}-desc`} className="mt-1 text-xs leading-relaxed text-[#515154]">
                    {description}
                </p>
            </div>
            <input
                id={id}
                type="checkbox"
                role="switch"
                checked={checked}
                disabled={disabled}
                aria-describedby={`${id}-desc`}
                onChange={(e) => onChange?.(e.target.checked)}
                className="mt-1 h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full bg-[#C7C7CC] transition-colors checked:bg-[#34C759] disabled:cursor-not-allowed disabled:opacity-60 relative before:absolute before:left-0.5 before:top-0.5 before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:content-[''] checked:before:translate-x-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007AFF]"
            />
        </div>
    );
}

export default function CookieConsent() {
    const ids = useId();
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [mounted, setMounted] = useState(false);
    const [decided, setDecided] = useState(true);
    const [choice, setChoice] = useState<ConsentChoice>({ analytics: false, marketing: false });

    useEffect(() => {
        const stored = readConsent();
        setDecided(stored !== null);
        if (stored) setChoice({ analytics: stored.analytics, marketing: stored.marketing });
        setMounted(true);
    }, []);

    const openPreferences = useCallback(() => {
        const stored = readConsent();
        setChoice(stored ? { analytics: stored.analytics, marketing: stored.marketing } : { analytics: false, marketing: false });
        dialogRef.current?.showModal();
    }, []);

    useEffect(() => {
        window.addEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
        return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
    }, [openPreferences]);

    const decide = (value: ConsentChoice) => {
        setChoice(value);
        setDecided(true);
        dialogRef.current?.close();
        saveConsent(value);
    };

    if (!mounted) return null;

    return (
        <>
            {!decided && (
                <section
                    aria-labelledby={`${ids}-title`}
                    className="fixed inset-x-3 bottom-3 z-[70] rounded-3xl border border-black/10 bg-white p-5 shadow-[0_8px_40px_rgba(0,0,0,0.18)] sm:right-auto sm:max-w-md pb-[max(1.25rem,env(safe-area-inset-bottom))]"
                >
                    <h2 id={`${ids}-title`} className="mb-2 text-base font-bold text-[#1D1D1F]">
                        Su privacidad en este sitio
                    </h2>
                    <p className="mb-4 text-sm leading-relaxed text-[#515154]">
                        Usamos cookies de análisis y de marketing de Google solo si usted lo autoriza, para medir el uso del sitio y la efectividad
                        de nuestros anuncios. Si no elige, no se activa ninguna. Puede aceptarlas, rechazarlas o elegir cuáles, y cambiar su decisión
                        cuando quiera. Más información en la{' '}
                        <Link to="/cookies/" className="font-semibold text-[#0066CC] underline underline-offset-2">
                            Política de cookies
                        </Link>{' '}
                        y la{' '}
                        <Link to="/privacidad/" className="font-semibold text-[#0066CC] underline underline-offset-2">
                            Política de privacidad
                        </Link>
                        .
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                        <button type="button" className={equalButton} onClick={() => decide({ analytics: true, marketing: true })}>
                            Aceptar todas
                        </button>
                        <button type="button" className={equalButton} onClick={() => decide({ analytics: false, marketing: false })}>
                            Rechazar todas
                        </button>
                        <button type="button" className={`${outlineButton} col-span-2`} onClick={openPreferences}>
                            Elegir cuáles
                        </button>
                    </div>
                </section>
            )}

            {decided && (
                <button
                    type="button"
                    onClick={openPreferences}
                    aria-label="Preferencias de cookies"
                    title="Preferencias de cookies"
                    className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#1D1D1F] shadow-md transition-transform hover:scale-105 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007AFF] print:hidden"
                >
                    <Cookie className="h-5 w-5" aria-hidden="true" />
                </button>
            )}

            <dialog
                ref={dialogRef}
                aria-labelledby={`${ids}-prefs`}
                className="m-auto w-[min(92vw,34rem)] max-h-[90vh] overflow-y-auto rounded-3xl border border-black/10 bg-white p-0 text-[#1D1D1F] shadow-2xl backdrop:bg-black/40"
            >
                <div className="p-6">
                    <div className="mb-4 flex items-start justify-between gap-4">
                        <h2 id={`${ids}-prefs`} className="text-xl font-bold">
                            Preferencias de cookies
                        </h2>
                        <button
                            type="button"
                            onClick={() => dialogRef.current?.close()}
                            aria-label="Cerrar"
                            className="inline-flex h-11 w-11 -mr-2 -mt-2 items-center justify-center rounded-full hover:bg-black/5 cursor-pointer"
                        >
                            <X className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                    <p className="mb-5 text-sm leading-relaxed text-[#515154]">
                        Elija qué cookies permite. Puede cambiar su decisión cuando quiera con el botón de cookies de la esquina inferior izquierda.
                        Detalle de cada cookie en la{' '}
                        <Link to="/cookies/" onClick={() => dialogRef.current?.close()} className="font-semibold text-[#0066CC] underline underline-offset-2">
                            Política de cookies
                        </Link>
                        .
                    </p>
                    <div className="space-y-3">
                        <Switch
                            id={`${ids}-nec`}
                            label="Necesarias"
                            description="Guardan en su navegador esta elección de cookies. El sitio no funciona sin ellas y no requieren consentimiento."
                            checked
                            disabled
                        />
                        <Switch
                            id={`${ids}-ana`}
                            label="Análisis"
                            description="Nos permiten saber cómo se usa el sitio (páginas visitadas, tiempo de permanencia) con herramientas de Google, para mejorarlo."
                            checked={choice.analytics}
                            onChange={(analytics) => setChoice((c) => ({ ...c, analytics }))}
                        />
                        <Switch
                            id={`${ids}-mkt`}
                            label="Marketing"
                            description="Permiten medir las conversiones de nuestros anuncios en Google Ads y mostrarle publicidad de BE Academic en otros sitios."
                            checked={choice.marketing}
                            onChange={(marketing) => setChoice((c) => ({ ...c, marketing }))}
                        />
                    </div>
                    <div className="mt-6 grid gap-2 sm:grid-cols-3">
                        <button type="button" className={equalButton} onClick={() => decide({ analytics: true, marketing: true })}>
                            Aceptar todas
                        </button>
                        <button type="button" className={equalButton} onClick={() => decide({ analytics: false, marketing: false })}>
                            Rechazar todas
                        </button>
                        <button type="button" className={outlineButton} onClick={() => decide(choice)}>
                            Guardar selección
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    );
}
