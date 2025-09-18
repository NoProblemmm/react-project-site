import React from "react";
import { Form, Input, Button, Divider, List, Typography, Alert } from "antd";
import { Note } from "../../AppTaskDetails/AppTaskDetails";
import { noteBookStore } from "../../../store/notes.store";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

export const AppNotes = observer(() => {
  const { t } = useTranslation();

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
          message={t("navigation.NotesDrawerHint") + " ..."}
          type="info"
          showIcon
          style={{ marginBottom: "1rem" }}
        />
        <Form.Item
          label="Note:"
          name="note"
          rules={[
            {
              required: true,
              message: t("navigation.NotesDrawerHint") + "!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            {t("navigation.NotesDrawerButtonAddNote")}
          </Button>
        </Form.Item>
      </Form>
      <Divider orientation="left" className="ant-modal-content">
        {t("navigation.NotesDrawerDividerTitle")}
      </Divider>

      <List
        style={{ borderColor: "#000", color: "#000" }}
        header={<div>{t("navigation.NotesDrawerInpTitle") + ":"}</div>}
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
                  {t("navigation.NotesDrawerButtonDelite")}
                </Button>
              </div>
            </div>
          </List.Item>
        )}
      />
    </>
  );
});
