import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Space, Typography } from "antd";
import { useState } from "react";
import { Book, Task } from "./AppTaskDetails";
import { taskBookStore } from "../../store/taskbook.store";

export function AppModal() {
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
      count = 1;
    }
  }

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      form={form}
      name="dynamic_form_complex"
      style={{ maxWidth: 600 }}
      autoComplete="off"
      initialValues={{ items: [{}] }}
      onFinish={onFinish}
    >
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <div style={{ display: "flex", rowGap: 16, flexDirection: "column" }}>
            {fields.map((field) => (
              <Card
                style={{ marginTop: "1rem" }}
                size="small"
                title={`Book`}
                key={field.key}
              >
                <Form.Item label="Book" name={[field.name, "title"]}>
                  <Input name="title" />
                </Form.Item>

                <Form.Item label="Tasks">
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
                              <Input placeholder="task" name="task" />
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
                          + Add Sub TaskBook
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
        <Button
          type="primary"
          shape="round"
          htmlType="submit"
          style={{
            marginLeft: "9rem",
          }}
        >
          Add New TaskBook
        </Button>
      </Form.Item>
    </Form>
  );
}
