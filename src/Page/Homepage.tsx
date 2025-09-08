import React, { useState } from "react";
import { Layout } from "antd";
import { AppHeader } from "../components/Layout/AppHeader";
import { AppSider } from "../components/Layout/AppSider";
import { AppFooter } from "../components/Layout/AppFooter";
import { taskBook } from "../tasks-file";
import { AppContent } from "../components/Layout/AppContent";
import { Book } from "../components/Layout/AppTaskDetails";
import { taskBookStore } from "../store/taskbook.store";
import { observer } from "mobx-react-lite";

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
