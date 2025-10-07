import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../pages/homePage/HomePage";

export const Route = createFileRoute("/")({
  component: HomePage,
});
