import { createRootRoute, Outlet } from "@tanstack/react-router";
import { AppHeader } from "@components/AppHomepage/AppHeader/AppHeader";

const Route = createRootRoute({
  component: () => (
    <>
      <AppHeader />
      <Outlet />
    </>
  ),
});

export default Route;
