import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations
const resources = {
  en: {
    translation: {
      appName: 'Our Special Date',
      createPage: 'Create Your Page',
      viewPage: 'View Page',
      // Add more translations as needed
    }
  },
  'pt-BR': {
    translation: {
      appName: 'Nossa Data Especial',
      createPage: 'Criar Sua Página',
      viewPage: 'Ver Página',
      // Add more translations as needed
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;