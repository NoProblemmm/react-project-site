import { makeAutoObservable } from "mobx";
import { taskBook } from "../tasks-file";
import { Book } from "../components/Layout/AppTaskDetails";
import { useState } from "react";
class TaskBookStore {
  taskBooks: Book[] = [];
  selectedBook: Book | null = null;

  constructor() {
    makeAutoObservable(this);
    this.taskBooks = taskBook.taskBooks;
  }

  addBook = (newBook: Book) => {
    this.taskBooks.push(newBook);
    console.log("Добавлена новая книга:", newBook.title);
  };

  deleteBook = (id: number | string) => {
    this.taskBooks = this.taskBooks.filter((book: Book) => book.id !== id);
    console.log("Удаление книги с №:", id);
  };

  selectBook = (book: Book) => {
    this.selectedBook = book;
    console.log("Открыта книга:", book.title);
  };
}

export const taskBookStore = new TaskBookStore();
