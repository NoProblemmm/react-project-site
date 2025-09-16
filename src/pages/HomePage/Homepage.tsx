import React, { useState, useEffect } from "react";
import { Layout, Spin } from "antd";
import { observer } from "mobx-react-lite";

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
      <title>HomePage</title>

      <link rel="icon" type="image" href="/static/favicon.ico" />
      {!isLoading ? (
        <Layout>
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
    </>
  );
}

export default observer(HomePage);
