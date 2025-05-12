import { createI18n } from "vue-i18n";
import en from "./en.json";
import frFR from "./fr-FR.json";

export const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: "en", // set default locale
  fallbackLocale: "en",
  messages: {
    en,
    "fr-FR": frFR,
  },
});
