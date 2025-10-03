import React, { useState, useEffect } from "react";
import { i18n } from "@lingui/core";
import { messages as ruMessages } from "../ru/messages";
import { messages as enMessages } from "../en/messages";

// Добавление локализации с помощью lingui
export function AppLocales({ ...props }) {
  const [language, setLanguage] = useState(() => {
    const storedLang = localStorage.getItem("language ");

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
        <button
          className="message-bell  relative flex items-center float-right mt-[1.3rem]"
          onClick={() => changeLanguage("ru")}
        >
          <p className="header-img flex items-center text-2xl mt-[-4px]">RU</p>
        </button>
      ) : (
        <button
          className="message-bell  relative flex items-center float-right mt-[1.3rem]"
          onClick={() => changeLanguage("en")}
        >
          <p className="header-img flex items-center text-2xl mt-[-4px]">EN</p>
        </button>
      )}
    </>
  );
}
