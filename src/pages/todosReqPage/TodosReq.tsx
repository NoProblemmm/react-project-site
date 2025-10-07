import { Layout } from "antd";
// @ts-ignore
import { AppHeader } from "@components/AppHomepage/AppHeader/AppHeader";
// @ts-ignore
import AppTodos from "@components/AppTodosPage/AppTodos";

export function TodosReq() {
  return (
    <div className="layout-container  rounded-xs p-5">
      <Layout className="rounded-[2rem] shadow-black shadow-xl/30">
        <title>Todos</title>
        <link rel="icon" type="image" href="/static/favicon.ico" />
        <AppHeader />
        <AppTodos />
      </Layout>
    </div>
  );
}
