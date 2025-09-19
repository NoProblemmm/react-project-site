import { makeAutoObservable } from "mobx";
import { taskBook } from "../tasks-file";
import { Book } from "../components/AppTaskDetails/AppTaskDetails";
class TaskBookStore {
  taskBooks: Book[] = [];
  selectedBook: Book | null = null;
  messageBook: String[] = [];

  constructor() {
    makeAutoObservable(this);
    this.taskBooks = taskBook.taskBooks;
  }

  addBook = (newBook: Book) => {
    this.taskBooks.push(newBook);
    this.messageBook?.push(`Книга ${newBook.title} добавлена`);
  };

  deleteBook = (id: number | string) => {
    const deletedBook = this.taskBooks.find((book: Book) => book.id === id);
    this.taskBooks = this.taskBooks.filter((book: Book) => book.id !== id);
    this.selectedBook = null;
    this.messageBook?.push(`Книга ${deletedBook?.title} удалена`);
  };

  selectBook = (book: Book) => {
    this.selectedBook = book;
    console.log("Открыта книга:", book.title);
  };
}

export const taskBookStore = new TaskBookStore();
