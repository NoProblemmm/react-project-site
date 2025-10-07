import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "../pages/aboutPage/AboutPage";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});
