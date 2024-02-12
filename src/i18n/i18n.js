import i18next from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      // format: (value, format, lng) => { // legacy usage
      //   if (value instanceof Date) {
      //     return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime[format])
      //   }
      //   return value;
      // }
    },
  });
