import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Posiciona el scroll al cambiar de ruta: si la URL trae ancla (#caso-piloto) baja hasta ese
 * id (reintenta unos instantes por si la página aún se está montando); si no, vuelve arriba.
 * Cambios solo de query (?lang=) no mueven el scroll.
 */
export default function ScrollManager() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            return;
        }

        let id = hash.slice(1);
        try {
            id = decodeURIComponent(id);
        } catch {
            // ancla con codificación inválida: se usa tal cual
        }

        let attempts = 0;
        let timer: number | undefined;
        const scrollToTarget = () => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView();
                return;
            }
            if (attempts++ < 20) {
                timer = window.setTimeout(scrollToTarget, 50);
            }
        };
        scrollToTarget();

        return () => window.clearTimeout(timer);
    }, [pathname, hash]);

    return null;
}
