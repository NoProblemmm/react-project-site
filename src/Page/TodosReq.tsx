import { Layout } from "antd";
import { AppHeader } from "../components/Layout/AppHeader";
import { observable } from "mobx";
import todosStore from "../store/todos.store";
import { useEffect } from "react";
import AppTodosPage from "../components/AppTodosPage";

export function TodosReq() {
  return (
    <Layout>
      <AppHeader />
      <AppTodosPage />
    </Layout>
  );
}
