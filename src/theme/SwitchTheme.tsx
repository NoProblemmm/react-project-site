import React, { useState, useLayoutEffect } from "react";
const isDarkTheme = window?.matchMedia("(prefers-color-scheme: dark").matches;
const defaultTheme = isDarkTheme ? "dark" : "light";

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("app-theme") || defaultTheme
  );

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    return;
  };
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return { theme, setTheme, switchTheme };
};
