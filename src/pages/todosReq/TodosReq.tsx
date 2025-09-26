import { Layout } from "antd";
// @ts-ignore
import { AppHeader } from "@components/AppHomepage/AppHeader/AppHeader";
// @ts-ignore
import AppTodosPage from "@components/AppTodosPage/AppTodosPage";

export function TodosReq() {
  return (
    <div className="layout-container  rounded-xs p-5">
      <Layout className="rounded-[2rem] shadow-black shadow-xl/30">
        <title>Todos</title>
        <link rel="icon" type="image" href="/static/favicon.ico" />
        <AppHeader />
        <AppTodosPage />
      </Layout>
    </div>
  );
}
