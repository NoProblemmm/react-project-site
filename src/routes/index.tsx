import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../Page/Homepage";

export const Route = createFileRoute("/")({
  component: HomePage,
});
