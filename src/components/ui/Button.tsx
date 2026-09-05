'use client'

import React from 'react';
import { useLocale } from '@/i18n/context';

interface ButtonProps {
  variant?: 'whatsapp' | 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  className = '',
  children,
  target,
  rel,
  onClick,
  type,
  disabled,
}: ButtonProps) {
  const { locale } = useLocale();
  const isRtl = locale === 'ar';

  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-2 min-h-[44px]";
  
  const variants = {
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20b958]",
    primary: "bg-emerald text-white hover:bg-emerald/90",
    secondary: "bg-transparent border-2 border-navy text-navy hover:bg-navy/5",
    tertiary: "bg-transparent text-emerald underline hover:text-emerald/80"
  };

  const sizes = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  const iconSpacingClass = isRtl ? 'ml-2' : 'mr-2';

  const renderIcon = () => {
    if (variant === 'whatsapp') {
      return (
        <svg className={`w-5 h-5 ${iconSpacingClass}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      );
    }
    return null;
  };

  if (as === 'a' || href) {
    const isExternal = href?.startsWith('http');
    const aTarget = isExternal ? target || '_blank' : target;
    const aRel = isExternal ? rel || 'noopener noreferrer' : rel;

    return (
      <a href={href} className={combinedClassName} target={aTarget} rel={aRel} onClick={onClick}>
        {renderIcon()}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} type={type || 'button'} onClick={onClick} disabled={disabled}>
      {renderIcon()}
      {children}
    </button>
  );
}
