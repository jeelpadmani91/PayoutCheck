import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'amber' | 'navy';
}

export default function Badge({ children, variant = 'emerald' }: BadgeProps) {
  const variants = {
    emerald: "bg-mint text-emerald",
    amber: "bg-amber/10 text-amber",
    navy: "bg-navy/10 text-navy"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}
