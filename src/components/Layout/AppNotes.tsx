import React from "react";
import { Form, Input, Button, Divider, List, Typography } from "antd";
import { Note } from "./AppTaskDetails";
import { noteBook } from "../../tasks-file";
import { useState, useEffect } from "react";
import { noteBookStore } from "../../store/notes.store";
import { observer } from "mobx-react-lite";

const data = ["Adsasd", "SAdasda", "asdasdas"];

const validateMessages = {
  required: "'${name}' is required!",
};

export const AppNotes = observer(() => {
  const { noteBook, addNotes, deleteNotes } = noteBookStore;
  let nextId = noteBook.length + 1;

  const addNewNote = (values: { note: string }) => {
    if (!values.note.trim()) return;

    const newNote: Note = {
      id: nextId++,
      title: values.note,
    };

    addNotes(newNote);
  };

  return (
    <>
      <Form
        name="wrap"
        labelCol={{ flex: "110px" }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        style={{ maxWidth: 600 }}
        onFinish={addNewNote}
        validateMessages={validateMessages}
      >
        <Form.Item label="Note:" name="note">
          <Input />
        </Form.Item>

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Add Note
          </Button>
        </Form.Item>
      </Form>
      <Divider orientation="left">Notes</Divider>

      <List
        style={{ borderColor: "#000", color: "#000" }}
        header={<div>Note:</div>}
        footer={"..."}
        dataSource={noteBook}
        bordered
        renderItem={(note) => (
          <List.Item style={{ color: "#000" }}>
            <div style={{ display: "flex", width: "100%" }}>
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
                  DEL
                </Button>
              </div>
            </div>
          </List.Item>
        )}
      />
    </>
  );
});
