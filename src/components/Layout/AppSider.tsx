import React, { useState } from "react";
import { Divider, Layout } from "antd";
import { Card, Button } from "antd";
import { taskBookStore } from "../../store/taskbook.store";
import { observer } from "mobx-react-lite";
import { useTheme } from "../../theme/ThemeContext";
const { Sider } = Layout;

export const AppSider = observer(() => {
  const { deleteBook, taskBooks, selectBook } = taskBookStore;
  const { theme } = useTheme();

  return (
    <Sider
      width="25%"
      className={`sider-custom ${theme === "dark" ? "dark" : "light"} `}
    >
      <div
        style={{
          width: "100%",
          overflowX: "hidden",
          height: "50rem",
          overflowY: "scroll",
          scrollbarColor: "#000000ff #b6b6b6ff",
        }}
      >
        {taskBooks.map((book) => (
          <Card
            key={book.id}
            title={book.title}
            variant="borderless"
            className={`card-custom ${theme === "dark" ? "dark" : "light"}`}
            style={{ margin: "3px", width: "99%" }}
          >
            <div
              style={{
                float: "right",
                position: "relative",
                justifyContent: "flex-start",
              }}
            >
              <Button
                style={{ marginRight: "1rem" }}
                color="red"
                variant="outlined"
                onClick={() => deleteBook(book.id)}
              >
                Delite
              </Button>
              <Button
                color="blue"
                variant="outlined"
                onClick={() => selectBook(book)}
              >
                Look
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Sider>
  );
});
export default AppSider;
