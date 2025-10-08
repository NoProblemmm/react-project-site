import React, { useState } from "react";
import { Layout } from "antd";
// @ts-ignore
import { AppHeader } from "@components/appHome/appHeader/AppHeader";
// @ts-ignore
import { AppFooter } from "@components/appHome/appFooter/AppFooter";
// @ts-ignore
import AppAbout from "@components/appAbout/AppAbout";
export function AboutPage() {
  return (
    <div className="layout-container  rounded-xs p-5">
      <Layout className="rounded-[2rem] shadow-black shadow-xl/30">
        <title>About</title>
        <link rel="icon" type="image" href="/static/favicon.ico" />
        <AppHeader />
        <AppAbout />
        <AppFooter />
      </Layout>
    </div>
  );
}
