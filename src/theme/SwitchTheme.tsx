import React, {
  useState,
  useLayoutEffect,
  memo,
  useCallback,
  useMemo,
} from "react";
const isDarkTheme = window?.matchMedia("(prefers-color-scheme: dark").matches;
const defaultTheme = isDarkTheme ? "dark" : "light";

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("app-theme") || defaultTheme
  );

  const switchTheme = useCallback(
    () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
    []
  );
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return { theme, setTheme, switchTheme };
};
