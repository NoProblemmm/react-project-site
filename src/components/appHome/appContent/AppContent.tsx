import React, { FC, memo } from "react";
import { Layout, Button, Divider, List, Checkbox, Progress } from "antd";
import { observer } from "mobx-react-lite";
import { Trans } from "@lingui/react/macro";
import { t } from "@lingui/core/macro";
import { taskBookStore } from "../../../store/taskBookData/TaskBook.store";
import "./AppContent.styles.css";
import { ITask } from "../../../store/taskBookData/TaskBook.store.types";

const { Content } = Layout;

export const AppContent: FC = observer(() => {
  const { deleteBook, selectedBook, clearSelectBook } = taskBookStore;

  if (!selectedBook || selectedBook == null) {
    return (
      <div
        style={{ width: "100%", height: "100%" }}
        className="content-custom "
      >
        <Divider orientation="left" className="content-custom-divider">
          <Trans>Look Book</Trans>
        </Divider>
      </div>
    );
  }

  const handleCloseSelectedBook = () => {
    clearSelectBook();
  };

  const handleCheck = (index: number, newComplited: boolean) => {
    taskBookStore.changeTaskCompletion(selectedBook.id, index, newComplited);
  };
  const completedCount = selectedBook.tasks.filter(
    (task: ITask) => task.complited
  ).length;

  const progressValue =
    selectedBook.tasks.length > 0
      ? Math.round((completedCount / selectedBook.tasks.length) * 100)
      : 0;
  return (
    <>
      <Content className="content-custom">
        <>
          <Divider orientation="left" className="content-custom-divider">
            {selectedBook.title}
          </Divider>
          <Button
            className="mb-2 flex w-[99%]"
            onClick={() => handleCloseSelectedBook()}
          >
            <h1 className="text-4xl mb-1">←</h1>
          </Button>

          <div className="max-w-[88rem] h-[39rem] overflow-y-scroll overflow-x-hidden scrollbar-sider-content">
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
              rowKey={(task: ITask) => task.id}
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
export default memo(AppContent);
