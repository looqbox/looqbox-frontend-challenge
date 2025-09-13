import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationPT_BR from './locales/pt-BR.json';

const resources = {
  en: {
    translation: translationEN,
  },
  'pt-BR': {
    translation: translationPT_BR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt-BR',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
