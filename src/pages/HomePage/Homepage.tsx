import React, { useState, useEffect } from "react";
import { Layout, Spin } from "antd";
import { observer } from "mobx-react-lite";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";

// @ts-ignore
import { AppHeader } from "@components/Layout/AppHeader";
// @ts-ignore
import { AppSider } from "@components/Layout/AppSider";
// @ts-ignore
import { AppFooter } from "@components/Layout/AppFooter";
// @ts-ignore
import { AppContent } from "@components/Layout/AppContent";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerLoading = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timerLoading);
  }, []);

  return (
    <>
      <I18nProvider i18n={i18n}>
        <title>HomePage</title>

        <link rel="icon" type="image" href="/static/favicon.ico" />
        {!isLoading ? (
          <Layout>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <AppHeader showButtons={true} />
            <Layout>
              <AppSider />
              <AppContent />
            </Layout>
            <AppFooter />
          </Layout>
        ) : (
          <div style={{ width: "100%", height: "100%" }}>
            <Spin
              size="large"
              style={{ marginTop: "20%", width: "100%", height: "500px" }}
            />
          </div>
        )}
      </I18nProvider>
    </>
  );
}

export default observer(HomePage);
