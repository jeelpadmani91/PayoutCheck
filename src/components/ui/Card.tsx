'use client'

import React from 'react';
import { useLocale } from '@/i18n/context';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

export default function Card({ children, className = '', highlight = false }: CardProps) {
  const { locale } = useLocale();
  const isRtl = locale === 'ar';
  
  const highlightClass = highlight ? (isRtl ? 'border-r-4 border-r-emerald' : 'border-l-4 border-l-emerald') : '';

  return (
    <div className={`bg-white border border-border-light rounded-lg p-6 ${highlightClass} ${className}`}>
      {children}
    </div>
  );
}
