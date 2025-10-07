import React, { useState } from "react";
import { Layout } from "antd";
// @ts-ignore
import { AppHeader } from "@components/AppHomepage/AppHeader/AppHeader";
// @ts-ignore
import { AppFooter } from "@components/AppHomepage/AppFooter/AppFooter";
// @ts-ignore
import AppAboutPage from "@components/AppAboutPage/AppAboutPage";

export function AboutPage() {
  return (
    <div className="layout-container  rounded-xs p-5">
      <Layout className="rounded-[2rem] shadow-black shadow-xl/30">
        <title>About</title>
        <link rel="icon" type="image" href="/static/favicon.ico" />
        <AppHeader />
        <AppAboutPage />
        <AppFooter />
      </Layout>
    </div>
  );
}
