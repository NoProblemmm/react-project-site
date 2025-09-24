import React, { useEffect } from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./theme/typeTheme/theme.css";
import { i18n } from "@lingui/core";
import { messages as ruMessages } from "./locales/ru/messages";
import { messages as enMessages } from "./locales/en/messages";
import { useConnectSocket } from "./api/hooks/useConnectSocket";
import { I18nProvider } from "@lingui/react";

const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
i18n.load("en", enMessages);
i18n.activate("en");

function App() {
  useConnectSocket();

  // Использование lingui
  useEffect(() => {
    const saveLocal = localStorage.getItem("language") || "en";
    if (saveLocal === "ru") {
      i18n.load("ru", ruMessages);
      i18n.activate("ru");
    } else {
      i18n.load("en", enMessages);
      i18n.activate("en");
    }
  });

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
