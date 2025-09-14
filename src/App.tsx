import React from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./theme/typeTheme/theme.css";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    // <ThemeProvider>

    <RouterProvider router={router} />

    // </ThemeProvider>
  );
}

export default App;
