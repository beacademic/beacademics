import React from 'react';
import { Link } from 'react-router-dom';

export function PrimaryButton({
  children,
  onClick,
  icon,
  className = '',
  href,
  to,
  target,
  rel,
  variant = 'signature',
  size = 'md',
  id,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  href?: string;
  to?: string;
  target?: string;
  rel?: string;
  variant?: 'signature' | 'green' | 'blue' | 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  id?: string;
}) {
  let variantClasses = 'bg-gradient-to-r from-[#007AFF] to-[#5856D6] text-white shadow-[0_4px_14px_rgba(0,122,255,0.25)] hover:shadow-[0_6px_20px_rgba(0,122,255,0.35)]';
  
  if (variant === 'green') {
    variantClasses = 'bg-gradient-to-r from-[#34C759] to-[#248A3D] text-white shadow-[0_4px_14px_rgba(52,199,89,0.3)] hover:shadow-[0_6px_20px_rgba(52,199,89,0.4)]';
  } else if (variant === 'blue' || variant === 'primary') {
    variantClasses = 'bg-[#007AFF] text-white shadow-[0_4px_14px_rgba(0,122,255,0.25)] hover:bg-[#0066D6] hover:shadow-[0_6px_20px_rgba(0,122,255,0.35)]';
  } else if (variant === 'secondary') {
    variantClasses = 'bg-white text-[#1D1D1F] border border-black/5 hover:bg-[#E8E8ED] shadow-xs';
  } else if (variant === 'outline') {
    variantClasses = 'bg-transparent text-[#1D1D1F] border-2 border-[#007AFF] hover:bg-[#007AFF]/5';
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }[size];

  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight hover:opacity-95 active:scale-[0.98] transition-all duration-200 cursor-pointer ${sizeClasses} ${variantClasses} ${className}`;

  if (to) {
    return (
      <Link id={id} to={to} className={baseClasses}>
        {icon}
        <span>{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a id={id} href={href} target={target} rel={rel} className={baseClasses}>
        {icon}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button id={id} onClick={onClick} className={baseClasses}>
      {icon}
      <span>{children}</span>
    </button>
  );
}
