import { createFileRoute } from "@tanstack/react-router";
import { TodosReq } from "../pages/TodosReq/TodosReq";

export const Route = createFileRoute("/todos")({
  component: TodosReq,
});
