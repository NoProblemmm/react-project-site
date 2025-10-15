import { makeAutoObservable } from "mobx";
import { noteBook } from "../../tasks-file";
import { INote } from "./TaskBook.store.types";

class NoteBookStore {
  noteBook: INote[] = [];

  constructor() {
    makeAutoObservable(this);
    this.noteBook = noteBook.noteBooks;
  }

  addNotes = (newNotes: INote) => {
    this.noteBook.push(newNotes);
    console.log("Добавлена новая запись:", newNotes.title);
  };

  deleteNotes = (id: number | string) => {
    console.log("Удаление записи №:", id);
    this.noteBook = this.noteBook.filter((note: INote) => note.id !== id);
  };
}

export const noteBookStore = new NoteBookStore();
