'use client';

import React, { createContext, useContext, useState } from 'react';
import { Locale, defaultLocale, getTranslations } from '@/lib/i18n';
import { trackLanguageSwitch } from '@/lib/analytics';

interface LayoutContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ReturnType<typeof getTranslations>;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
}

interface LayoutProviderProps {
  children: React.ReactNode;
  initialLocale?: Locale;
}

export function LayoutProvider({ children, initialLocale = defaultLocale }: LayoutProviderProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = getTranslations(locale);

  return (
    <LayoutContext.Provider value={{ locale, setLocale, t }}>
      <div className={`min-h-screen bg-primary-dark text-text-light ${locale === 'ar' ? 'rtl' : 'ltr'}`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LayoutContext.Provider>
  );
}

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLayout();

  const handleLanguageChange = (newLocale: Locale) => {
    if (newLocale !== locale) {
      trackLanguageSwitch(locale, newLocale);
      setLocale(newLocale);
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        onClick={() => handleLanguageChange('ar')}
        className={`px-3 py-1 rounded text-sm transition-colors ${
          locale === 'ar' 
            ? 'bg-primary-gold text-primary-dark' 
            : 'text-text-light hover:text-primary-gold'
        }`}
      >
        العربية
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 rounded text-sm transition-colors ${
          locale === 'en' 
            ? 'bg-primary-gold text-primary-dark' 
            : 'text-text-light hover:text-primary-gold'
        }`}
      >
        English
      </button>
    </div>
  );
}