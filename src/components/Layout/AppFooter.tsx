import React from "react";
import { Flex, Layout, Typography } from "antd";

const { Footer, Sider, Content } = Layout;

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#363636ff",
};

export function AppFooter() {
  return (
    <Footer style={footerStyle}>
      <Typography style={{ color: "#fff" }}>TaskBook</Typography>
    </Footer>
  );
}
