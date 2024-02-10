import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import es from "../assets/flags/es.png";
import en from "../assets/flags/en.png";

const langs = {
  es: { nativeName: "ES", icon: es },
  en: { nativeName: "EN", icon: en },
};

function LanguageSwitcher() {
  const [, setActive] = useState(langs.es);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      {Object.keys(langs).map((lng, icon) => (
        <button
          type="submit"
          key={lng}
          onClick={() => {
            setActive(langs[lng]);
            changeLanguage(lng);
          }}
        >
          <img
            className="w-4 h-4"
            src={icon === 0 ? es : en}
            alt={langs[lng].nativeName}
          />
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
