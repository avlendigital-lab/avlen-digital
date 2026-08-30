import { useEffect, useState } from 'react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

const STORAGE_KEY = 'avlen-language';
const DEFAULT_LANGUAGE: Language = 'tr';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'tr' || stored === 'en' ? stored : DEFAULT_LANGUAGE;
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;

    if (!window.location.pathname.startsWith('/templates/')) {
      document.title = translations[language].meta.title;

      const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (description) {
        description.content = translations[language].meta.description;
      }
    }
  }, [language]);

  return [language, setLanguage] as const;
}
