import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("i18nextLng") || "en"
  );
  const changeLanguage = (lang: "en" | "ru") => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      {language === "en" ? (
        <Button
          className="float-right mt-4 mr-4"
          onClick={() => changeLanguage("ru")}
        >
          RU{" "}
        </Button>
      ) : (
        <Button
          className="float-right mt-4 mr-4"
          onClick={() => changeLanguage("en")}
        >
          EN{" "}
        </Button>
      )}
    </>
  );
}
