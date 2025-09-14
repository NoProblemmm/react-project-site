import React, { useState } from "react";
import { Layout } from "antd";
import { taskBook } from "../../tasks-file";
import { observer } from "mobx-react-lite";
import { ConfigProvider } from "antd";

// @ts-ignore
import { AppHeader } from "@components/Layout/AppHeader";
// @ts-ignore
import { AppSider } from "@components/Layout/AppSider";
// @ts-ignore
import { AppFooter } from "@components/Layout/AppFooter";
// @ts-ignore
import { AppContent } from "@components/Layout/AppContent";
// @ts-ignore
import { Book } from "@components/Layout/AppTaskDetails";

type State = {
  taskBooks: Book[];
};

function HomePage() {
  return (
    <>
      <title>HomePage</title>

      <link rel="icon" type="image" href="/static/favicon.ico" />

      <Layout>
        <AppHeader showButtons={true} />
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
        <AppFooter />
      </Layout>
    </>
  );
}

export default observer(HomePage);
