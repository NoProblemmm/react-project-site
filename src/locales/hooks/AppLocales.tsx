import React, { useState, useEffect } from "react";
import { messages as ruMessages } from "../ru/messages";
import { messages as enMessages } from "../en/messages";
import { i18n } from "@lingui/core";
import { Button } from "antd";

// Добавление локализации с помощью lingui
export function AppLocales() {
  const [language, setLanguage] = useState(() => {
    const storedLang = localStorage.getItem("language");
    return storedLang || "en";
  });

  useEffect(() => {
    if (language === "ru") {
      i18n.load("ru", ruMessages);
      i18n.activate("ru");
    } else {
      i18n.load("en", enMessages);
      i18n.activate("en");
    }
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (lang: "ru" | "en") => {
    setLanguage(lang);
  };

  return (
    <>
      {language === "en" ? (
        <Button className="" onClick={() => changeLanguage("ru")}>
          RU{" "}
        </Button>
      ) : (
        <Button className="" onClick={() => changeLanguage("en")}>
          EN{" "}
        </Button>
      )}
    </>
  );
}
