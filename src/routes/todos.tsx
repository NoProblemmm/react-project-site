import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "../Page/AboutPage";
import { TodosReq } from "../Page/TodosReq";

export const Route = createFileRoute("/todos")({
  component: TodosReq,
});
