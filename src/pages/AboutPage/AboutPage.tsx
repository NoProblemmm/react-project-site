import React, { useState } from "react";
import { Layout } from "antd";
// @ts-ignore
import { AppHeader } from "@components/Layout/AppHeader";
// @ts-ignore
import { AppFooter } from "@components/Layout/AppFooter";
// @ts-ignore
import { AppAboutPage } from "@components/AppAboutPage";

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% - 8px)",
  maxWidth: "calc(100% - 8px)",
};

export function AboutPage() {
  return (
    <Layout style={layoutStyle}>
      <title>About</title>
      <link rel="icon" type="image" href="/static/favicon.ico" />
      <AppHeader />
      <AppAboutPage />
      <AppFooter />
    </Layout>
  );
}
