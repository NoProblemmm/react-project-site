import { createFileRoute } from "@tanstack/react-router";
import { TodosReq } from "../pages/todosReqPage/TodosReq";

export const Route = createFileRoute("/todos")({
  component: TodosReq,
});
