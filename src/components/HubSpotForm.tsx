import { useEffect, useRef, useState } from 'react';
import { SALES_EMAIL, whatsappLink } from '../config/contact';
import type { WhatsAppProduct } from '../config/contact';

/** Identificador del portal de HubSpot de BE Academic. */
export const HUBSPOT_PORTAL_ID = '50405101';
/** Región del portal de HubSpot. */
export const HUBSPOT_REGION = 'na1';

/** Formularios de HubSpot usados en el sitio. */
export const HUBSPOT_FORMS = {
    /** Solicitud de demo de SyncroEdu (página /syncroedu/). */
    syncroeduDemo: '21671d47-e4c2-4761-b72f-8d07650b335f',
    /** Contacto general (página /contacto/). */
    contacto: '9baeca2e-479f-47c0-b8c8-66993a9f1794',
} as const;

/** Segundos tras los cuales, si el formulario no apareció, se muestra el texto alternativo. */
const LOAD_TIMEOUT_MS = 8000;
const SCRIPT_MARK = 'data-hubspot-embed';

type Status = 'loading' | 'ready' | 'failed';

interface HubSpotFormProps {
    /** Identificador del formulario en HubSpot. */
    formId: string;
    portalId?: string;
    region?: string;
    /** Producto para el enlace de WhatsApp del texto alternativo. */
    whatsappProduct?: WhatsAppProduct;
    /** Mensaje propio para el enlace de WhatsApp del texto alternativo. */
    whatsappMessage?: string;
    /** Espera a que el formulario esté cerca de la pantalla antes de cargar el script de HubSpot. */
    lazy?: boolean;
    className?: string;
}

/**
 * Formulario de HubSpot (embed oficial: script + div.hs-form-frame).
 *
 * Los campos y los estilos del formulario los define HubSpot, no este código.
 *
 * El script de HubSpot solo busca los .hs-form-frame de la página en el momento en que se
 * ejecuta. En una SPA el formulario se monta y desmonta al navegar, por eso el script se
 * inserta al montar y se retira al desmontar: nunca queda más de un <script> a la vez y, al
 * volver a la página, se vuelve a ejecutar y renderiza el formulario de nuevo.
 * Si el formulario no aparece dentro de unos segundos (bloqueador de anuncios, sin red),
 * se muestra un texto alternativo con el correo y el WhatsApp de ventas.
 */
export default function HubSpotForm({
    formId,
    portalId = HUBSPOT_PORTAL_ID,
    region = HUBSPOT_REGION,
    whatsappProduct = 'general',
    whatsappMessage,
    lazy = true,
    className = '',
}: HubSpotFormProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<HTMLDivElement>(null);
    const [near, setNear] = useState(!lazy);
    const [status, setStatus] = useState<Status>('loading');

    // Carga diferida: espera a que el formulario esté cerca de la pantalla.
    useEffect(() => {
        if (near) return;
        const element = wrapperRef.current;
        if (!element || typeof IntersectionObserver === 'undefined') {
            setNear(true);
            return;
        }
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    setNear(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '300px' },
        );
        observer.observe(element);
        return () => observer.disconnect();
    }, [near]);

    // Inserta el script del embed y vigila que HubSpot dibuje el formulario.
    useEffect(() => {
        if (!near) return;
        const frame = frameRef.current;
        if (!frame) return;

        setStatus(frame.childElementCount > 0 ? 'ready' : 'loading');

        const observer = new MutationObserver(() => {
            if (frame.childElementCount > 0) setStatus('ready');
        });
        observer.observe(frame, { childList: true });

        const markFailed = () => setStatus((current) => (current === 'ready' ? current : 'failed'));

        document.querySelectorAll(`script[${SCRIPT_MARK}]`).forEach((stale) => stale.remove());
        const script = document.createElement('script');
        script.src = `https://js.hsforms.net/forms/embed/${portalId}.js`;
        script.async = true;
        script.setAttribute(SCRIPT_MARK, portalId);
        script.onerror = markFailed;
        document.body.appendChild(script);

        const timer = window.setTimeout(markFailed, LOAD_TIMEOUT_MS);

        return () => {
            window.clearTimeout(timer);
            observer.disconnect();
            script.onerror = null;
            script.remove();
        };
    }, [near, portalId, formId, region]);

    const whatsappHref = whatsappLink(whatsappProduct, { message: whatsappMessage });

    return (
        <div ref={wrapperRef} className={`relative min-h-[420px] ${className}`}>
            {status === 'loading' && (
                <div aria-hidden="true" className="absolute inset-0 z-10 bg-white">
                    <div className="space-y-6 animate-pulse">
                        <div className="h-4 bg-[#F5F5F7] rounded w-1/4"></div>
                        <div className="h-12 bg-[#F5F5F7] rounded-xl"></div>
                        <div className="h-4 bg-[#F5F5F7] rounded w-1/3"></div>
                        <div className="h-12 bg-[#F5F5F7] rounded-xl"></div>
                        <div className="h-32 bg-[#F5F5F7] rounded-xl"></div>
                        <div className="h-12 bg-[#007AFF]/20 rounded-full w-1/2"></div>
                    </div>
                </div>
            )}
            {status === 'failed' && (
                <div role="status" className="relative z-20 mb-4 rounded-2xl border border-black/5 bg-[#F5F5F7] p-5 text-sm text-[#515154] leading-relaxed">
                    No pudimos cargar el formulario. Escríbanos a{' '}
                    <a href={`mailto:${SALES_EMAIL}`} className="font-semibold text-[#1D1D1F] underline">
                        {SALES_EMAIL}
                    </a>{' '}
                    o por{' '}
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1D1D1F] underline">
                        WhatsApp
                    </a>{' '}
                    y coordinaremos su solicitud.
                </div>
            )}
            <div
                ref={frameRef}
                className="hs-form-frame"
                data-region={region}
                data-form-id={formId}
                data-portal-id={portalId}
            ></div>
        </div>
    );
}
