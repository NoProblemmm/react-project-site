import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "../Page/AboutPage";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});
