import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const langs = {
  es: { nativeName: "ES" },
  en: { nativeName: "EN" },
};

function LanguageSwitcher() {
  const [active, setActive] = useState(langs.es);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const flagPath = (lng) => `assets/flags/${lng}.png`;

  return (
    <div className="flex items-center space-x-2">
      {Object.keys(langs).map((lng) => (
        <button
          type="submit"
          key={lng}
          icon={langs.es.icon}
          onClick={() => {
            setActive(langs[lng]);
            changeLanguage(lng);
          }}
        >
          <img
            className="w-4 h-4"
            src={flagPath("es" === lng ? "es" : "en")}
            alt={langs[lng].nativeName}
          />
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
