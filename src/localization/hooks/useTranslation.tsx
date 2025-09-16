import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("i18nextLng") || "en"
  );
  const changeLanguage = (lang: "en" | "ru") => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <>
      {language === "en" ? (
        <Button onClick={() => changeLanguage("ru")}>RU</Button>
      ) : (
        <Button onClick={() => changeLanguage("en")}>EN</Button>
      )}
    </>
  );
}
