import React from "react";
import { Layout, Typography } from "antd";
import { useTheme } from "../../theme/ThemeContext";
const { Footer } = Layout;

export function AppFooter() {
  const { theme } = useTheme();
  return (
    <Footer
      className={`footer-custom ${theme === "dark" ? "dark" : "light"} text-center `}
    >
      <Typography
        className={`footer-custom ${theme === "dark" ? "dark" : "light"} text-center `}
      >
        TaskBook
      </Typography>
    </Footer>
  );
}
