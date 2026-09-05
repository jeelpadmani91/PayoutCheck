'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import type { Locale } from '@/i18n/settings';

interface LocaleContextProps {
  locale: Locale;
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
  locale: Locale;
}

export const LocaleProvider = ({ children, locale }: LocaleProviderProps) => {
  const isRTL = locale === 'ar';
  const dir = isRTL ? 'rtl' : 'ltr';

  const value: LocaleContextProps = {
    locale,
    dir,
    isRTL,
  };

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextProps => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
