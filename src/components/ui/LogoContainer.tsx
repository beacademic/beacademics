import React from 'react';

export function LogoContainer({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-10 h-10 rounded-2xl ${className.includes('bg-') ? '' : 'bg-white'} ${className.includes('border-') ? '' : 'border border-black/5'} shadow-sm p-1.5 flex items-center justify-center shrink-0 ${className}`}>
      <div className="w-full h-full flex items-center justify-center p-0.5">
        {children}
      </div>
    </div>
  );
}
