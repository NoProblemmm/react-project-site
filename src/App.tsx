import React, { useEffect } from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./theme/typeTheme/theme.css";
import { i18n } from "@lingui/core";
import { messages as ruMassages } from "./locales/ru/messages";
import { messages as enMassages } from "./locales/en/messages";
import { useConnectSocket } from "./api/hooks/useConnectSocket";

const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  // Использование lingui

  useConnectSocket();

  useEffect(() => {
    const saveLocal = localStorage.getItem("language") || "en";
    if (saveLocal === "ru") {
      i18n.load("ru", ruMassages);
      i18n.activate("ru");
    } else {
      i18n.load("en", enMassages);
      i18n.activate("en");
    }
  });
  return (
    <>
      {/* // <ThemeProvider> */}
      <RouterProvider router={router} />

      {/* // </ThemeProvider> */}
    </>
  );
}

export default App;
