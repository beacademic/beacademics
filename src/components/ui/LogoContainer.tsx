import React from 'react';

export function LogoContainer({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-10 h-10 rounded-2xl bg-white dark:bg-[#2C2C2E] border border-black/5 dark:border-white/10 shadow-sm p-1.5 flex items-center justify-center shrink-0 ${className}`}>
      <div className="w-full h-full flex items-center justify-center p-0.5">
        {children}
      </div>
    </div>
  );
}
