import React, { useState, createContext, useEffect, useContext } from "react";
import { taskBook } from "../tasks-file";
import type { Book } from "../components/Layout/AppTaskDetails"; // импортируйте здесь тип Book

interface TaskBookContextType {
  addNewBook: (newBook: Book) => void;
  deleteBook: (id: number | string) => void;
  taskBook: typeof taskBook; // сохраните исходный объект taskBook
}

// Создаем контекст с правильными типами
const TaskBookContext = createContext<TaskBookContextType | undefined>(
  undefined
);

// Типизация Provider'а
type TaskBookContextProviderProps = {
  children: React.ReactNode; // тип ReactNode подходит для любых компонентов
};

// Компонент-обертка для контекста
export function TaskBookContextProvider({
  children,
}: TaskBookContextProviderProps) {
  const [selectedBlock, setSelectedBlock] = useState<null | any>(null);
  const [taskBooks, setTaskBooks] = useState<Book[]>(taskBook.taskBooks);

  const addNewBook = (newBook: Book) => {
    setTaskBooks([...taskBooks, newBook]);
    console.log("Home Page", taskBook);
  };

  const deleteBook = (id: number | string) => {
    setTaskBooks(taskBooks.filter((task) => task.id !== id));
  };

  return (
    <TaskBookContext.Provider value={{ addNewBook, deleteBook, taskBook }}>
      {children}
    </TaskBookContext.Provider>
  );
}

export default TaskBookContext;
