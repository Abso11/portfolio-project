import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../locales/en/translations.json';
import translationPL from '../locales/pl/translations.json';

const resources = {
  en: {
    translation: translationEN
  },
  pl: {
    translation: translationPL
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    keySeparator: '.',
    debug: process.env.NODE_ENV === 'development',
    interpolation: { escapeValue: false },
    react: { useSuspense: false }
  });

export default i18n;
