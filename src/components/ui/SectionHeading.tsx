import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  align?: 'center' | 'left' | 'right';
  className?: string;
}

export default function SectionHeading({ title, subtitle, centered = false, align, className = '' }: SectionHeadingProps) {
  const isCentered = centered || align === 'center';
  return (
    <div className={`mb-10 ${isCentered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-navy">{title}</h2>
      {subtitle && (
        <p className="text-lg text-slate-muted mt-4">{subtitle}</p>
      )}
    </div>
  );
}
