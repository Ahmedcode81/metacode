/**
 * LANGUAGE CONTEXT — EN/AR with RTL support
 * Provides the current language, direction, and a translate helper.
 */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { translations, Lang } from './translations';

const STORAGE_KEY = 'restaurant_lang';

interface LanguageContextValue {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  /** Translate a key for the current language. */
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'ar') return saved;
  } catch {
    /* ignore */
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const dir: 'ltr' | 'rtl' = lang === 'ar' ? 'rtl' : 'ltr';
  const isRTL = lang === 'ar';

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = dir;
    document.body.classList.toggle('rtl', isRTL);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    // Update meta description / title
    document.title =
      lang === 'ar'
        ? 'سافورا · منصة METACODE'
        : 'Savora · METACODE Platform';
  }, [lang, dir, isRTL]);

  const setLang = (next: Lang) => setLangState(next);
  const toggleLang = () =>
    setLangState((prev) => (prev === 'en' ? 'ar' : 'en'));

  const t = (key: string): string => {
    const dict = translations[lang];
    if (dict[key] !== undefined) return dict[key];
    const en = translations.en[key];
    return en !== undefined ? en : key;
  };

  const value = useMemo(
    () => ({ lang, dir, isRTL, setLang, toggleLang, t }),
    [lang, dir, isRTL, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
