import React from "react";
import { Layout, Button } from "antd";
import { Divider, List, Typography, Checkbox, Progress } from "antd";
import { taskBookStore } from "../../store/taskbook.store";
import { observer } from "mobx-react-lite";
import { useTheme } from "../../theme/SwitchTheme";

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: "left",
  width: "100%",
  height: "50rem",
};

export const AppContent = observer(() => {
  const selectedBook = taskBookStore.selectedBook;
  const { theme } = useTheme();
  const { deleteBook } = taskBookStore;
  if (!selectedBook || selectedBook == null) {
    return (
      <div
        style={{ width: "100%", height: "100%" }}
        className="content-custom "
      >
        <Divider
          orientation="left"
          className="content-custom "
          style={{
            color: "var(--text-color)",
            borderColor: "var(--text-color)",
          }}
        >
          Look Book
        </Divider>
      </div>
    );
  }
  const handleCheck = (index: number, newComplited: boolean) => {
    selectedBook.tasks[index].complited = newComplited;
  };
  const completedCount = selectedBook.tasks.filter(
    (task: any) => task.complited
  ).length;

  const progressValue =
    selectedBook.tasks.length > 0
      ? Math.round((completedCount / selectedBook.tasks.length) * 100)
      : 0;

  return (
    <>
      <Content style={contentStyle} className="content-custom">
        <>
          <Divider
            orientation="left"
            className="content-custom "
            style={{
              color: "var(--text-color)",
              borderColor: "var(--text-color)",
            }}
          >
            {selectedBook.title}
          </Divider>

          <div
            style={{
              width: "88rem",
              height: "46rem",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            <List
              style={{
                color: "var(--text-color)",
                borderColor: "var(--text-color)",
              }}
              header={<div>Tasks:</div>}
              footer={
                <>
                  <Progress
                    style={{ width: "100%" }}
                    className="ant-progress-text"
                    percent={progressValue}
                    percentPosition={{ align: "center", type: "outer" }}
                  />
                  <div>
                    {progressValue === 100 && (
                      <Button
                        type="primary"
                        style={{ marginBottom: "1rem" }}
                        onClick={() => deleteBook(selectedBook.id)}
                      >
                        Закончить задачу
                      </Button>
                    )}
                  </div>
                </>
              }
              bordered
              dataSource={selectedBook.tasks}
              rowKey={(task) => task.id}
              renderItem={(task, index) => (
                <List.Item style={{ color: "#000" }}>
                  <div className="flex ">
                    <div className="content-custom w-500 ">
                      <Typography.Text mark></Typography.Text>
                      {task.complited ? (
                        <s>
                          {task.id}| {task.name}
                        </s>
                      ) : (
                        <>
                          {task.id}| {task.name}
                        </>
                      )}
                    </div>
                    <div style={{ width: "50%" }}>
                      <Checkbox
                        checked={task.complited}
                        onChange={(event) =>
                          handleCheck(index, event?.target.checked)
                        }
                        style={{
                          width: "50px",
                          transform: "scale(2.5)",
                        }}
                      ></Checkbox>
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </>
      </Content>
    </>
  );
});
export default AppContent;
