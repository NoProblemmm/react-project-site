import { Layout } from "antd";
// @ts-ignore
import { AppHeader } from "@components/Layout/AppHeader";
// @ts-ignore
import AppTodosPage from "@components/AppTodosPage";

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
