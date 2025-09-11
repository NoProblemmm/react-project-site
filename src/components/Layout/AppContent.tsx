import React from "react";
import { Layout, Button } from "antd";
import { Divider, List, Typography, Checkbox, Progress } from "antd";
import { taskBookStore } from "../../store/taskbook.store";
import { observer } from "mobx-react-lite";

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: "left",
  width: "100%",
  height: "50rem",
  color: "#000000ff",
  backgroundColor: "#ffffffff",
};

export const AppContent = observer(() => {
  const selectedBook = taskBookStore.selectedBook;
  const { deleteBook } = taskBookStore;
  if (!selectedBook || selectedBook == null) {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Divider orientation="left">Look Book</Divider>
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
      <Content style={contentStyle}>
        <>
          <Divider orientation="left">{selectedBook.title}</Divider>
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
                borderColor: "#000",
                color: "#000",
              }}
              header={<div>Tasks:</div>}
              footer={
                <>
                  <Progress
                    style={{ width: "100%" }}
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
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "125rem" }}>
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
