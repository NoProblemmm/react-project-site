import React, { useState } from "react";
import { Layout } from "antd";
import { taskBook } from "../../tasks-file";
import { observer } from "mobx-react-lite";
// @ts-ignore
import { AppHeader } from "@components/Layout/AppHeader";
// @ts-ignore
import { AppSider } from "@components/Layout/AppSider";
// @ts-ignore
import { AppFooter } from "@components/Layout/AppFooter";
// @ts-ignore
import { AppContent } from "@components/Layout/AppContent";
// @ts-ignore
import { Book } from "@components/Layout/AppTaskDetails";

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% - 8px)",
  maxWidth: "calc(100% - 8px)",
};

type State = {
  taskBooks: Book[];
};

function HomePage() {
  const [taskBooks, setTaskBooks] = useState<Book[]>(taskBook.taskBooks);
  const addNewBook = (newBook: Book) => {
    setTaskBooks([...taskBooks, newBook]);
  };

  return (
    <>
      <title>HomePage</title>

      <link rel="icon" type="image" href="/static/favicon.ico" />
      <Layout style={layoutStyle}>
        <AppHeader showButtons={true} />
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
        <AppFooter />
      </Layout>
    </>
  );
}

export default observer(HomePage);
