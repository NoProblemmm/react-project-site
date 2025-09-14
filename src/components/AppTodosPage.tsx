import { observer } from "mobx-react-lite";
import todosStore from "../store/todos.store";
import { useEffect } from "react";
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
          style={{
            color: "var(--text-color)",
            borderColor: "var(--text-color)",
          }}
          dataSource={todos}
          renderItem={(todo) => (
            <List.Item>
              <div className="content-custom  ">
                <Typography.Text className="content-custom">
                  {todo.todo} -{" "}
                  {todo.completed ? "Задача выполнена" : "Задача в процессе"}
                </Typography.Text>
              </div>
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
