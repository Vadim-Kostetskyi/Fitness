import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./locales/en/en.json";
import translationUa from "./locales/ua/ua.json";

const resources = {
  en: {
    translation: translationEn,
  },
  ua: {
    translation: translationUa,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ua",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
