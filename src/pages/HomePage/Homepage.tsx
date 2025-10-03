import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "@tanstack/react-router";
import { useSessionStore } from "../../store/session/Session.store";
import { Layout, Spin } from "antd";

// @ts-ignore
import { AppHeader } from "@components/AppHomepage/AppHeader/AppHeader";
// @ts-ignore
import { AppSider } from "@components/AppHomepage/AppSider/AppSider";
// @ts-ignore
import { AppFooter } from "@components/AppHomepage/AppFooter/AppFooter";
// @ts-ignore
import { AppContent } from "@components/AppHomepage/AppContent/AppContent";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const { isAutentificate } = useSessionStore;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAutentificate) {
      navigate({ to: "/auth/signIn" });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <title>HomePage</title>

      <link rel="icon" type="image" href="/static/favicon.ico" />
      {!isLoading ? (
        <div className="layout-container rounded-xs p-5">
          <Layout
            className="layout-custom rounded-[2rem] shadow-black shadow-xl/30"
            style={{ maxHeight: "55rem" }}
          >
            <AppHeader showButtons={true} />
            <Layout>
              <AppSider />
              <AppContent />
            </Layout>
            <AppFooter />
          </Layout>
        </div>
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
