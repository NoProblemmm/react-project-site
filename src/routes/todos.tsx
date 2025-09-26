import { createFileRoute } from "@tanstack/react-router";
import { TodosReq } from "../pages/todosReq/TodosReq";

export const Route = createFileRoute("/todos")({
  component: TodosReq,
});
