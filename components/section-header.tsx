import type { ReactNode } from 'react';

interface SectionHeaderProps {
  icon: ReactNode;
  title: string;
  className?: string;
}

export function SectionHeader({ icon, title, className = '' }: SectionHeaderProps) {
  return (
    <div className={`inline-flex items-center gap-3 mb-6 md:mb-8 ${className}`}>
      {icon}
      <h2 className="text-heading-2 font-bold tracking-tight m-0">{title}</h2>
    </div>
  );
}
