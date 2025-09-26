import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../pages/homePage/Homepage";

export const Route = createFileRoute("/")({
  component: HomePage,
});
