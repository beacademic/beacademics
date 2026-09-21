import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import seoData from '../seo/routes.json';
import { PrimaryButton } from '../components/ui/PrimaryButton';

export default function NotFound() {
    return (
        <div className="bg-[#F5F5F7] min-h-screen text-[#1D1D1F] font-sans flex flex-col items-center justify-center px-6 text-center">
            <Helmet>
                <html lang="es" />
                <title>{seoData.notFound.title}</title>
                <meta name="description" content={seoData.notFound.description} />
                <meta name="robots" content="noindex, follow" />
            </Helmet>
            <p className="text-sm font-bold uppercase tracking-widest text-[#515154] mb-4">Error 404</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-display">
                No encontramos esta página.
            </h1>
            <p className="text-base md:text-lg text-[#515154] max-w-xl mb-8">
                Es posible que el enlace haya cambiado. Vuelva al inicio o escríbanos desde la página de{' '}
                <Link to="/contacto/" className="underline hover:text-[#1D1D1F] transition-colors">contacto</Link>.
            </p>
            <PrimaryButton to="/" size="lg">Volver al inicio</PrimaryButton>
        </div>
    );
}
