import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import ptTranslation from "@/core/constants/locales/pt/translation.json";
import enTranslation from "@/core/constants/locales/en/translation.json";
import esTranslation from "@/core/constants/locales/es/translation.json";
import itTranslation from "@/core/constants/locales/it/translation.json";
import frTranslation from "@/core/constants/locales/fr/translation.json";
import deTranslation from "@/core/constants/locales/de/translation.json";

const isDev = import.meta.env.DEV;

const resources = {
  pt: { translation: ptTranslation },
  en: { translation: enTranslation },
  es: { translation: esTranslation },
  it: { translation: itTranslation },
  fr: { translation: frTranslation },
  de: { translation: deTranslation },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: isDev,
    detection: {
      order: ["localStorage", "querystring", "navigator"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    fallbackLng: "en",
    saveMissing: isDev,
    ns: ["translation"],
  });

export default i18n;
