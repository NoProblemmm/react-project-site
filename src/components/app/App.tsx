import React, { useEffect, useState } from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { routeTree } from "../../routeTree.gen";
import { Api } from "../../api/Api";
import { useConnectSocket } from "../../service/socket/useConnectSocket";
import { messages as ruMessages } from "../../locales/ru/messages";
import { messages as enMessages } from "../../locales/en/messages";
import { useApiTokenProvider } from "../../api/ApiToken.provider";
import { useSessionStore } from "../../store/session/Session.store";
import { Flex, Spin } from "antd";
import "../../theme/typeTheme/theme.css";

const loading = (
  <div className="w-[100%] h-[100%] pt-[30%] justify-items-center">
    <Flex align="center" gap="middle">
      <Spin tip="Loading" size="large" />
    </Flex>
  </div>
);

export const router = createRouter({
  routeTree,
  defaultPendingMinMs: 500,
  defaultPendingComponent: () => {
    loading;
  },
});

i18n.load("en", enMessages);
i18n.activate("en");

function App() {
  // useConnectSocket(); // Сокет

  const [isLoading, setIsLoading] = useState(true);
  const { getMyProfile } = Api();
  const refreshToken = useApiTokenProvider.refreshToken;
  const signInStore = useSessionStore.signInStore;

  useEffect(() => {
    let languageSetting = localStorage.getItem("language") || "en";

    if (languageSetting === "ru") {
      i18n.load("ru", ruMessages);
      i18n.activate("ru");
    } else {
      i18n.load("en", enMessages);
      i18n.activate("en");
    }

    if (!refreshToken) {
      console.log("Следует войти");
      setIsLoading(false);
      return;
    }

    async function getProfile() {
      try {
        const response = await getMyProfile();
        const data = {
          login: response.username,
          password: response.password,
        };
        await signInStore(data);
      } catch (error) {
        console.error("Ошибка загрузки профиля:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getProfile();
  }, []);

  return (
    <>
      <I18nProvider i18n={i18n}>
        {/* // <ThemeProvider> */}
        <RouterProvider router={router} />
        {/* // </ThemeProvider> */}
      </I18nProvider>
    </>
  );
}

export default App;
