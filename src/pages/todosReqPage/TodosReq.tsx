import { Layout } from "antd";
// @ts-ignore
import { AppHeader } from "@components/appHome/appHeader/AppHeader";
// @ts-ignore
import AppTodos from "@components/appTodos/AppTodos";

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
