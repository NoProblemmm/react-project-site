import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../Page/HomePage/Homepage";

export const Route = createFileRoute("/")({
  component: HomePage,
});
