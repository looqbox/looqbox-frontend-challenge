import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import ptTranslation from "@/core/constants/locales/pt/translation.json";
import enTranslation from "@/core/constants/locales/en/translation.json";

const isDev = import.meta.env.DEV;

const resources = {
  pt: { translation: ptTranslation },
  en: { translation: enTranslation },
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
