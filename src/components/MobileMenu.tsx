import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

export type MobileMenuItem =
    | { label: string; to: string }
    | { label: string; href: string }
    | { label: string; sectionId: string };

const itemClasses =
    'flex w-full items-center justify-between rounded-2xl px-4 min-h-12 text-left text-base font-medium text-[#1D1D1F] hover:bg-black/5 active:bg-black/10 transition-colors cursor-pointer';

export default function MobileMenu({
    items,
    label = 'Menú',
    breakpoint = 'md',
}: {
    items: MobileMenuItem[];
    label?: string;
    breakpoint?: 'md' | 'lg' | 'xl';
}) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [open, setOpen] = useState(false);

    const show = () => {
        dialogRef.current?.showModal();
        setOpen(true);
    };
    const close = () => dialogRef.current?.close();

    return (
        <>
            <button
                type="button"
                onClick={show}
                aria-haspopup="dialog"
                aria-expanded={open}
                aria-label={`Abrir ${label.toLowerCase()}`}
                className={`${{ md: 'md:hidden', lg: 'lg:hidden', xl: 'xl:hidden' }[breakpoint]} inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-full text-[#1D1D1F] hover:bg-black/5 active:bg-black/10 transition-colors cursor-pointer`}
            >
                <Menu className="w-5 h-5" aria-hidden="true" />
            </button>

            <dialog
                ref={dialogRef}
                className="sheet"
                aria-label={label}
                onClose={() => setOpen(false)}
                onClick={(event) => {
                    if (event.target === event.currentTarget) close();
                }}
            >
                <div className="sheet-panel bg-[#F5F5F7] rounded-b-3xl shadow-xl px-4 pt-3 pb-6 pt-[max(0.75rem,env(safe-area-inset-top))]">
                    <div className="flex items-center justify-between px-2 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#515154]">{label}</span>
                        <button
                            type="button"
                            onClick={close}
                            aria-label="Cerrar menú"
                            className="inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-full text-[#1D1D1F] hover:bg-black/5 active:bg-black/10 transition-colors cursor-pointer"
                        >
                            <X className="w-5 h-5" aria-hidden="true" />
                        </button>
                    </div>
                    <nav aria-label={label}>
                        <ul className="space-y-1">
                            {items.map((item) => (
                                <li key={item.label}>
                                    {'to' in item ? (
                                        <Link to={item.to} onClick={close} className={itemClasses}>
                                            {item.label}
                                        </Link>
                                    ) : 'href' in item ? (
                                        <a href={item.href} onClick={close} className={itemClasses}>
                                            {item.label}
                                        </a>
                                    ) : (
                                        <button
                                            type="button"
                                            className={itemClasses}
                                            onClick={() => {
                                                close();
                                                scrollToId(item.sectionId);
                                            }}
                                        >
                                            {item.label}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </dialog>
        </>
    );
}
