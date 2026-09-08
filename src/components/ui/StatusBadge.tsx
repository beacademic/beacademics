import React from 'react';

export function StatusBadge({
  label,
  variant = 'success',
  pulse = true,
  className = '',
}: {
  label: string;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'orange' | 'pink';
  pulse?: boolean;
  className?: string;
}) {
  const styles = {
    primary: 'bg-[#007AFF]/10 text-[#007AFF] border-[#007AFF]/20',
    success: 'bg-[#34C759]/10 text-[#248A3D] dark:text-[#34C759] border-[#34C759]/20',
    warning: 'bg-[#FF9500]/10 text-[#C97100] dark:text-[#FF9F0A] border-[#FF9500]/20',
    danger: 'bg-[#FF3B30]/10 text-[#D70015] dark:text-[#FF453A] border-[#FF3B30]/20',
    purple: 'bg-[#5856D6]/10 text-[#5856D6] border-[#5856D6]/20',
    orange: 'bg-[#FF9500]/10 text-[#FF9500] border-[#FF9500]/20',
    pink: 'bg-[#FF2D55]/10 text-[#FF2D55] border-[#FF2D55]/20',
  }[variant] || 'bg-[#007AFF]/10 text-[#007AFF] border-[#007AFF]/20';

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border ${styles} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
        </span>
      )}
      <span className="tracking-widest uppercase text-[10.5px] font-bold">{label}</span>
    </span>
  );
}
