import { Layout } from "antd";
import { AppHeader } from "../components/Layout/AppHeader";
import { observable } from "mobx";
import todosStore from "../store/todos.store";
import { useEffect } from "react";
import AppTodosPage from "../components/AppTodosPage";

export function TodosReq() {
  return (
    <Layout>
      <title>Todos</title>
      <link rel="icon" type="image" href="/static/favicon.ico" />
      <AppHeader />
      <AppTodosPage />
    </Layout>
  );
}
