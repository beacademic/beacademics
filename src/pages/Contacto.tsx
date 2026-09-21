import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import HubSpotForm, { HUBSPOT_FORMS } from '../components/HubSpotForm';
import { INSTITUTIONAL_EMAIL, SALES_PHONE_DISPLAY, SALES_PHONE_TEL, BUSINESS_HOURS, whatsappLink } from '../config/contact';
import { 
    Mail, 
    Phone, 
    MessageSquare, 
    Clock, 
    ShieldCheck, 
    ArrowRight 
} from 'lucide-react';
import { BentoCard } from '../components/ui/BentoCard';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { StatusBadge } from '../components/ui/StatusBadge';
import { LogoContainer } from '../components/ui/LogoContainer';

export default function Contacto() {
    return (
        <div className="bg-[#F5F5F7] min-h-screen text-[#1D1D1F] font-sans selection:bg-[#007AFF] selection:text-white flex flex-col">
            <Seo path="/contacto/" />

            {/* Header / Navigation Glassmorphism */}
            <header className="sticky top-0 left-0 right-0 z-50 bg-[#F5F5F7]/80 backdrop-blur-[20px] border-b border-black/5 transition-all duration-300">
                <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center gap-6">
                        <Link to="/" className="flex items-center gap-2 group transition-opacity opacity-80 hover:opacity-100">
                            <LogoContainer className="w-9 h-9">
                                <img src="/Logo-BE-Academic.png" width={400} height={344} alt="BE Academic" className="h-4 w-auto object-contain" />
                            </LogoContainer>
                            <span className="text-xs font-semibold text-[#515154] group-hover:text-[#1D1D1F] hidden sm:inline transition-colors">
                                BE Academic
                            </span>
                        </Link>

                        <div className="h-5 w-px bg-black/10 hidden sm:block" />

                        <div className="hidden md:flex gap-6 text-[#515154]">
                            <Link to="/" className="hover:text-[#1D1D1F] transition-colors">Ecosistema</Link>
                            <Link to="/syncroedu/" className="hover:text-[#1D1D1F] transition-colors">SyncroEdu</Link>
                            <Link to="/syncrotime/" className="hover:text-[#1D1D1F] transition-colors">SyncroTime</Link>
                            <span className="text-[#1D1D1F] font-semibold border-b-2 border-[#1D1D1F] pb-0.5">Contacto</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <PrimaryButton 
                            variant="primary"
                            size="sm"
                            to="/acceso/"
                        >
                            Portal Clientes
                        </PrimaryButton>
                    </div>
                </nav>
            </header>

            {/* Content Section */}
            <main className="flex-1 pt-16 pb-24 px-6 max-w-7xl mx-auto w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-14"
                >
                    <StatusBadge label="ATENCIÓN & ASESORÍA INSTITUCIONAL" variant="primary" pulse={false} className="mb-4 mx-auto" />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1D1D1F] mb-4 font-display" style={{ textWrap: 'balance' }}>
                        Converse con nuestro equipo.
                    </h1>
                    <p className="text-lg md:text-xl text-[#515154] max-w-2xl mx-auto font-normal">
                        Déjenos un mensaje y coordinaremos una sesión técnica o responderemos sus consultas a la brevedad.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Information Bento */}
                    <motion.div 
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="lg:col-span-5 space-y-6"
                    >
                        <div className="rounded-3xl bg-[#1C1C1E] text-white p-8 md:p-10 border border-white/10 shadow-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">Canales Directos</h2>
                            <p className="text-[#86868B] text-sm leading-relaxed mb-8">
                                Transforme la gestión operativa de su establecimiento escolar. Escríbanos y un consultor asignado se pondrá en contacto a la brevedad.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#34C759] shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-semibold text-[#86868B] uppercase tracking-wider mb-1">Correo Electrónico</h3>
                                        <a href={`mailto:${INSTITUTIONAL_EMAIL}`} className="text-sm sm:text-base font-semibold text-white hover:text-[#34C759] transition-colors break-all">
                                            {INSTITUTIONAL_EMAIL}
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#34C759] shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-semibold text-[#86868B] uppercase tracking-wider mb-1">Teléfono & WhatsApp</h3>
                                        <a href={`tel:${SALES_PHONE_TEL}`} className="text-sm sm:text-base font-semibold text-white hover:text-[#34C759] transition-colors">
                                            {SALES_PHONE_DISPLAY}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#007AFF] shrink-0">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-semibold text-[#86868B] uppercase tracking-wider mb-1">Horario de Atención</h3>
                                        <p className="text-sm text-white font-medium">
                                            {BUSINESS_HOURS} (Chile)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <a 
                                    href={whatsappLink('general', { message: 'Hola, deseo asesoría sobre BE Academic' })} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="flex items-center justify-center gap-2 bg-[#1F7A38] hover:bg-[#186230] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md transition-all w-full"
                                >
                                    <MessageSquare className="w-4 h-4 fill-current" />
                                    <span>Conversar por WhatsApp Directo</span>
                                </a>
                            </div>
                        </div>

                        {/* Security Assurance Card */}
                        <div className="rounded-2xl bg-white border border-black/5 p-6 shadow-xs flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#007AFF]/10 flex items-center justify-center text-[#007AFF] shrink-0">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <p className="text-xs text-[#515154] leading-relaxed">
                                Tratamos los antecedentes de su dotación institucional según nuestra <Link to="/privacidad-syncroedu/" className="underline hover:text-[#1D1D1F] transition-colors">Política de Privacidad</Link>.
                            </p>
                        </div>
                    </motion.div>

                    {/* HubSpot Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="lg:col-span-7 rounded-3xl bg-white p-8 md:p-10 shadow-xl border border-black/5 min-h-[500px] relative overflow-hidden"
                    >
                        <HubSpotForm
                            formId={HUBSPOT_FORMS.contacto}
                            whatsappMessage="Hola, deseo asesoría sobre BE Academic"
                            className="[&_.hs-form]:!font-sans min-h-[500px]"
                        />
                    </motion.div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#1C1C1E] text-[#86868B] py-12 text-sm border-t border-white/10 mt-auto">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <div>
                        <p className="text-white font-semibold mb-1">BE Academic. Ecosistema Tecnológico para la Educación en Chile.</p>
                        <p>&copy; {new Date().getFullYear()} Sociedad de Formación BE Academic Limitada. Todos los derechos reservados.</p>
                    </div>
                    <div className="flex gap-6">
                        <Link to="/legal/" className="hover:text-white transition-colors">Información Legal</Link>
                        <Link to="/condiciones-syncroedu/" className="hover:text-white transition-colors">Condiciones SyncroEdu</Link>
                        <Link to="/privacidad-syncroedu/" className="hover:text-white transition-colors">Privacidad SyncroEdu</Link>
                        <Link to="/contacto/" className="hover:text-white transition-colors">Contacto</Link>
                        <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
