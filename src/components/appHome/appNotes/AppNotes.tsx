import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { Trans } from "@lingui/react/macro";
import { t } from "@lingui/core/macro";
import { Form, Input, Button, Divider, List, Typography, Alert } from "antd";
import { Note } from "../../../store/taskBookData/TaskBook.store.types";
import { noteBookStore } from "../../../store/taskBookData/Notes.store";

export const AppNotes: FC = observer(() => {
  const [form] = Form.useForm();
  const { noteBook, addNotes, deleteNotes } = noteBookStore;
  let nextId = noteBook.length + 1;

  const addNewNote = (values: { note: string }) => {
    if (!values.note.trim()) return;

    const newNote: Note = {
      id: nextId++,
      title: values.note,
    };

    addNotes(newNote);
    form.resetFields();
  };

  return (
    <>
      <Form
        form={form}
        name="wrap"
        labelCol={{ flex: "110px" }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        style={{ maxWidth: 600 }}
        className="ant-modal-content"
        onFinish={addNewNote}
      >
        <Alert
          message={t`Please add the name Note` + " ..."}
          type="info"
          showIcon
          style={{ marginBottom: "1rem" }}
        />
        <Form.Item
          label={
            <>
              <Trans>Note</Trans>:
            </>
          }
          name="note"
          rules={[
            {
              required: true,
              message: t`Please add the name Note` + "!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            <Trans>Add Note</Trans>
          </Button>
        </Form.Item>
      </Form>
      <Divider orientation="left" className="ant-modal-content">
        <Trans>Notes</Trans>
      </Divider>

      <List
        style={{ borderColor: "#000", color: "#000" }}
        header={<div>{t`Note` + ":"}</div>}
        footer={"..."}
        className="ant-modal-content"
        dataSource={noteBook}
        bordered
        renderItem={(note) => (
          <List.Item style={{ color: "#000" }}>
            <div
              style={{ display: "flex", width: "100%" }}
              className="ant-modal-content"
            >
              <div style={{ width: "29rem" }}>
                <Typography.Text mark></Typography.Text>
                {note.title}
              </div>
              <div style={{ flex: "right" }}>
                <Button
                  color="danger"
                  variant="outlined"
                  style={{ flex: "right" }}
                  onClick={() => deleteNotes(note.id)}
                >
                  <Trans>DEL</Trans>
                </Button>
              </div>
            </div>
          </List.Item>
        )}
      />
    </>
  );
});
