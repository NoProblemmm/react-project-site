import { makeAutoObservable } from "mobx";
import { noteBook, taskBook } from "../tasks-file";
import { Note } from "../components/AppTaskDetails/AppTaskDetails";
import { useState } from "react";
class NoteBookStore {
  noteBook: Note[] = [];

  constructor() {
    makeAutoObservable(this);
    this.noteBook = noteBook.noteBooks;
  }

  addNotes = (newNotes: Note) => {
    this.noteBook.push(newNotes);
    console.log("Добавлена новая запись:", newNotes.title);
  };

  deleteNotes = (id: number | string) => {
    console.log("Удаление записи №:", id);
    this.noteBook = this.noteBook.filter((note: Note) => note.id !== id);
  };
}

export const noteBookStore = new NoteBookStore();
