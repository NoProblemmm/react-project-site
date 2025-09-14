import React from "react";
import { Layout, Typography } from "antd";
import { useTheme } from "../../theme/SwitchTheme";
const { Footer } = Layout;

export function AppFooter() {
  const { theme } = useTheme();
  return (
    <Footer className="footer-custom">
      <Typography className="footer-custom text-center">TaskBook</Typography>
    </Footer>
  );
}
