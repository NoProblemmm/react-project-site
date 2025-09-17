import React, { memo } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Space, Alert } from "antd";
import { Book } from "./AppTaskDetails";
import { taskBookStore } from "../../store/taskbook.store";
import { useTranslation } from "react-i18next";

type Props = {
  handleCloseModal: () => void;
};

export const AppModal = memo(({ handleCloseModal }: Props) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { addBook } = taskBookStore;
  let count = 1;
  function onFinish(values: any) {
    if (values.items && values.items.length > 0) {
      const firstItem = values.items[0];

      const newBook: Book = {
        id: +taskBookStore.taskBooks.length + 1,
        title: firstItem.title,
        tasks: firstItem.tasks.map((taskItem: any) => ({
          id: count++,
          name: taskItem.task,
          complited: false,
        })),
      };

      addBook(newBook);
      form.resetFields();

      count = 1;
      handleCloseModal();
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
                title={t("navigation.ModalSubTitle")}
                key={field.key}
                className="ant-modal-content"
              >
                <Alert
                  message={t("navigation.ModalHint") + " ..."}
                  type="info"
                  showIcon
                  style={{ marginBottom: "1rem" }}
                />
                <Form.Item
                  label={t("navigation.ModalInpTitleBook")}
                  name={[field.name, "title"]}
                  dependencies={["bookTitle"]}
                  rules={[
                    {
                      required: true,
                      message: t("navigation.ModalRulesMessage"),
                    },
                  ]}
                >
                  <Input name="title" />
                </Form.Item>

                <Form.Item
                  label={t("navigation.ModalInpTitleTask")}
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
                            <Form.Item noStyle name={[subField.name, "task"]}>
                              <Input
                                placeholder={t(
                                  "navigation.ModalPlaceHolderTask"
                                )}
                                name="task"
                              />
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
                          {t("navigation.ModalInpAddTask")}
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
            {t("navigation.ModalButtonAddTaskBook")}
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
});
