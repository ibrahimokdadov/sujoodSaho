import React, { createContext, useContext, useState } from 'react';
import { en } from './en';
import type { TranslationKey } from './en';
import { ar } from './ar';

type Lang = 'en' | 'ar';

interface I18nContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
  isArabic: boolean;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  const toggleLang = () => setLang(l => l === 'en' ? 'ar' : 'en');

  const t = (key: TranslationKey): string => {
    if (lang === 'ar') {
      return ar[key] ?? en[key];
    }
    return en[key];
  };

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t, isArabic: lang === 'ar' }}>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
        {children}
      </div>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
