import { makeAutoObservable, runInAction } from "mobx";
import { taskBook } from "../../tasks-file";
import { IBook } from "./TaskBook.store.types";
class TaskBookStore {
  taskBooks: IBook[] = [];
  selectedBook: IBook | null = null;
  messageBook: String[] = [];

  constructor() {
    makeAutoObservable(this);
    this.taskBooks = taskBook.taskBooks;
  }

  addBook = (newBook: IBook) => {
    this.taskBooks.push(newBook);
    this.messageBook?.push(`Книга ${newBook.title} добавлена`);
  };

  changeTaskCompletion = (
    id: number | string,
    index: number,
    value: boolean
  ) => {
    runInAction(() => {
      const foundBook = this.taskBooks.find((book) => book.id === id);
      if (foundBook) {
        foundBook.tasks[index].complited = value;
      }
    });
  };

  deleteBook = (id: number | string) => {
    const deletedBook = this.taskBooks.find((book: IBook) => book.id === id);
    this.taskBooks = this.taskBooks.filter((book: IBook) => book.id !== id);
    this.selectedBook = null;
    this.messageBook?.push(`Книга ${deletedBook?.title} удалена`);
  };

  selectBook = (book: IBook) => {
    this.selectedBook = book;
    console.log("Открыта книга:", book.title);
  };

  clearSelectBook = () => {
    this.selectedBook = null;
  };

  clearMessage = () => {
    this.messageBook = [];
  };
}

export const taskBookStore = new TaskBookStore();
