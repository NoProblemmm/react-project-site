import React, { memo, FC } from "react";
import { Trans } from "@lingui/react/macro";
import { t } from "@lingui/core/macro";
import { Book, Task } from "../../../store/taskBookData/TaskBook.store.types";
import { taskBookStore } from "../../../store/taskBookData/TaskBook.store";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Space, Alert, message } from "antd";
import { IModalFormValues } from "./AppModal.types";

type Props = {
  toggleModal: () => void;
};

export const AppModal: FC<Props> = memo(({ toggleModal }: Props) => {
  const [form] = Form.useForm();
  const { addBook } = taskBookStore;
  let count = 1;

  function onFinish(values: IModalFormValues) {
    if (values.items && values.items.length > 0) {
      const firstItem = values.items[0];
      console.log(values);
      const newBook: Book = {
        id: +taskBookStore.taskBooks.length + 1,
        title: firstItem.title,
        tasks: firstItem.tasks.map((taskItem: Task) => ({
          id: count++,
          name: taskItem.name,
          complited: false,
        })),
      };

      addBook(newBook);
      form.resetFields();

      count = 1;
      toggleModal();
      message.info(`The book was created successfully!`);
    } else {
      throw Error("Ошибка создания книги!");
    }
  }

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      form={form}
      name="dynamic_form_complex"
      className="ant-modal-content"
      style={{ maxWidth: 600 }}
      autoComplete="off"
      initialValues={{ items: [{}] }}
      onFinish={onFinish}
    >
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <div
            style={{
              display: "flex",
              rowGap: 16,
              flexDirection: "column",
            }}
            className="ant-modal-content"
          >
            {fields.map((field) => (
              <Card
                size="small"
                title={<Trans>Book</Trans>}
                key={field.key}
                className="ant-modal-content"
              >
                <Alert
                  message={
                    <>
                      <Trans>Please add the name book and tasks</Trans> ...
                    </>
                  }
                  type="info"
                  showIcon
                  style={{ marginBottom: "1rem" }}
                />
                <Form.Item
                  label={<Trans>Book</Trans>}
                  name={[field.name, "title"]}
                  dependencies={["bookTitle"]}
                  rules={[
                    {
                      required: true,
                      message: t`Please Add the Name Book!`,
                    },
                  ]}
                >
                  <Input name="title" />
                </Form.Item>

                <Form.Item
                  label={<Trans>Task</Trans>}
                  className="ant-form-item-required custom-label"
                >
                  <Form.List name={[field.name, "tasks"]}>
                    {(subFields, subOpt) => (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          rowGap: 16,
                        }}
                      >
                        {subFields.map((subField) => (
                          <Space key={subField.key}>
                            <Form.Item noStyle name={[subField.name, "name"]}>
                              <Input placeholder={t`task`} name="task" />
                            </Form.Item>
                            <CloseOutlined
                              onClick={() => {
                                subOpt.remove(subField.name);
                              }}
                            />
                          </Space>
                        ))}
                        <Button
                          type="dashed"
                          onClick={() => subOpt.add()}
                          block
                        >
                          <Trans>Add Task</Trans>
                        </Button>
                      </div>
                    )}
                  </Form.List>
                </Form.Item>
              </Card>
            ))}
          </div>
        )}
      </Form.List>

      <Form.Item noStyle shouldUpdate>
        <div className="w-full text-center">
          <Button
            type="primary"
            shape="round"
            htmlType="submit"
            className="mt-[1rem]"
          >
            <Trans>Add New TaskBook</Trans>
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
});
