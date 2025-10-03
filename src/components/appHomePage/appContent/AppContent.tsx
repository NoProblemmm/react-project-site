import React from "react";
import { Layout, Button, Divider, List, Checkbox, Progress } from "antd";
import { observer } from "mobx-react-lite";
import { Trans } from "@lingui/react/macro";
import { t } from "@lingui/core/macro";
import { taskBookStore } from "../../../store/taskBookData/TaskBook.store";
import "./AppContent.styles.css";

const { Content } = Layout;

export const AppContent = observer(() => {
  const { deleteBook, selectedBook } = taskBookStore;

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
          <Trans>Look Book</Trans>
        </Divider>
      </div>
    );
  }
  const handleCheck = (index: number, newComplited: boolean) => {
    taskBookStore.changeTaskCompletion(selectedBook.id, index, newComplited);
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
      <Content className="content-custom ">
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

          <div className="max-w-[88rem] h-[100%] overflow-y-scroll overflow-x-hidden scrollbar-sider-content">
            <List
              style={{
                color: "var(--text-color)",
                borderColor: "var(--text-color)",
              }}
              header={t`Tasks` + ":"}
              footer={
                <>
                  <Progress
                    className="ant-progress-text max-w-[100%]"
                    style={{ width: "100%" }}
                    percent={progressValue}
                    percentPosition={{ align: "center", type: "outer" }}
                  />
                  <div>
                    {progressValue === 100 && (
                      <Button
                        type="primary"
                        className="mb-[1rem]"
                        onClick={() => deleteBook(selectedBook.id)}
                      >
                        <Trans>Finish the Book</Trans>
                      </Button>
                    )}
                  </div>
                </>
              }
              bordered
              dataSource={selectedBook.tasks}
              rowKey={(task) => task.id}
              renderItem={(task, index) => (
                <List.Item className="text-amber-50">
                  <div className="content-custom flex justify-between items-center w-full">
                    <div className="flex items-center w-full overflow-hidden">
                      <div
                        style={{
                          whiteSpace: "normal",
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                          maxWidth: "100%",
                        }}
                        className="break-words whitespace-normal"
                      >
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
                    </div>
                    <div className="ml-4">
                      <Checkbox
                        checked={task.complited}
                        onChange={(event) =>
                          handleCheck(index, event?.target.checked)
                        }
                        className="transform scale-250"
                      />
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
