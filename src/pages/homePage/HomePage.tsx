import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "@tanstack/react-router";
import { useSessionStore } from "../../store/session/Session.store";

import { useApiTokenProvider } from "../../api/ApiToken.provider";
import { Layout, Spin } from "antd";

// @ts-ignore
import { AppHeader } from "@components/appHome/AppHeader/AppHeader";
// @ts-ignore
import { AppSider } from "@components/appHome/AppSider/AppSider";
// @ts-ignore
import { AppFooter } from "@components/appHome/AppFooter/AppFooter";
// @ts-ignore
import { AppContent } from "@components/appHome/AppContent/AppContent";
import { Api } from "../../api/Api";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const { getMyProfile } = Api();
  const { isAutentificate, signInStore } = useSessionStore;
  const refreshToken = useApiTokenProvider.refreshToken;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAutentificate) {
      if (!refreshToken) {
        navigate({ to: "/auth/signIn" });
      } else if (refreshToken) {
        //Получение пользователя, по refreshToken
        async function getProfile() {
          try {
            const response = await getMyProfile();
            const data = {
              login: response.username,
              password: response.password,
            };
            await signInStore(data);
            if (useSessionStore.isAutentificate) {
            }
          } catch (error) {
            console.error("Ошибка загрузки профиля:", error);
          } finally {
            setIsLoading(false);
          }
        }
        getProfile();
      }
    } else {
      navigate({ to: "/" });
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
