import React from 'react';

export function StatusBadge({
  label,
  variant = 'success',
  pulse = true,
  className = '',
  onDark = false,
}: {
  label: string;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'orange' | 'pink';
  pulse?: boolean;
  className?: string;
  onDark?: boolean;
}) {
  const styles = {
    primary: 'bg-[#007AFF]/10 text-[#0066CC] border-[#007AFF]/20',
    success: 'bg-[#34C759]/10 text-[#1F7A38] border-[#34C759]/20',
    warning: 'bg-[#FF9500]/10 text-[#8F5000] border-[#FF9500]/20',
    danger: 'bg-[#FF3B30]/10 text-[#C20013] border-[#FF3B30]/20',
    purple: 'bg-[#5856D6]/10 text-[#5856D6] border-[#5856D6]/20',
    orange: 'bg-[#FF9500]/10 text-[#8F5000] border-[#FF9500]/20',
    pink: 'bg-[#FF2D55]/10 text-[#C4002F] border-[#FF2D55]/20',
  }[variant] || 'bg-[#007AFF]/10 text-[#0066CC] border-[#007AFF]/20';

  const stylesOnDark = {
    primary: 'bg-[#007AFF]/20 text-[#64A8FF] border-[#64A8FF]/30',
    success: 'bg-[#34C759]/15 text-[#34C759] border-[#34C759]/30',
    warning: 'bg-[#FF9500]/15 text-[#FFB340] border-[#FFB340]/30',
    danger: 'bg-[#FF3B30]/15 text-[#FF6961] border-[#FF6961]/30',
    purple: 'bg-[#5856D6]/25 text-[#A5A3FF] border-[#A5A3FF]/30',
    orange: 'bg-[#FF9500]/15 text-[#FFB340] border-[#FFB340]/30',
    pink: 'bg-[#FF2D55]/15 text-[#FF6B88] border-[#FF6B88]/30',
  }[variant];

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border ${onDark ? stylesOnDark : styles} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
        </span>
      )}
      <span className="tracking-widest uppercase text-xs font-bold">{label}</span>
    </span>
  );
}
