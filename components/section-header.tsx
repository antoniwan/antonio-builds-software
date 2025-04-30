import type { ReactNode } from 'react';

interface SectionHeaderProps {
  icon: ReactNode;
  title: string;
  className?: string;
}

export function SectionHeader({ icon, title, className = '' }: SectionHeaderProps) {
  return (
    <div className={`inline-flex items-center gap-4 mb-10 md:mb-12 fade-in relative ${className}`}>
      <div className="flex items-center gap-4">
        {icon}
        <h2 className="text-heading-2 font-bold tracking-tight m-0">{title}</h2>
      </div>
      <div className="hidden md:block absolute left-0 bottom-0 w-16 h-px bg-gradient-to-r from-primary/20 to-transparent" />
    </div>
  );
}
