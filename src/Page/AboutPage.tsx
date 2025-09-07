import React, { useState } from "react";
import { Layout } from "antd";
import { AppHeader } from "../components/Layout/AppHeader";
import { AppFooter } from "../components/Layout/AppFooter";
import { AppAboutPage } from "../components/AppAboutPage";

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% - 8px)",
  maxWidth: "calc(100% - 8px)",
};

export function AboutPage() {
  return (
    <Layout style={layoutStyle}>
      <AppHeader />
      <AppAboutPage />
      <AppFooter />
    </Layout>
  );
}
