import { createRootRoute, Outlet } from "@tanstack/react-router";
import { AppHeader } from "../components/Layout/AppHeader";

const Route = createRootRoute({
  component: () => (
    <>
      <AppHeader />
      <Outlet />
    </>
  ),
});

export default Route;
