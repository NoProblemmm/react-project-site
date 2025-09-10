import { createFileRoute } from "@tanstack/react-router";
import { TodosReq } from "../Page/TodosReq/TodosReq";

export const Route = createFileRoute("/todos")({
  component: TodosReq,
});
