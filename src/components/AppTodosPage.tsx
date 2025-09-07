import { observer, Observer } from "mobx-react-lite";
import todosStore from "../store/todos.store";
import { useEffect } from "react";
import Layout from "antd/es/layout/layout";
import { AppHeader } from "./Layout/AppHeader";
import { List, Typography, Spin } from "antd";

const AppTodosPage = observer(() => {
  const { getAll, todos, isLoading } = todosStore;

  useEffect(() => {
    getAll();
  }, [getAll]);
  return (
    <div>
      {!isLoading ? (
        <List
          bordered
          dataSource={todos}
          renderItem={(todo) => (
            <List.Item>
              <Typography.Text>
                {todo.todo} -{" "}
                {todo.completed ? "Задача выполнена" : "Задача в процессе"}
              </Typography.Text>
            </List.Item>
          )}
        />
      ) : (
        <div style={{ width: "100%", height: "100%" }}>
          <Spin
            size="large"
            style={{ marginTop: "20%", width: "100%", height: "500px" }}
          />
        </div>
      )}
    </div>
  );
});
export default AppTodosPage;
