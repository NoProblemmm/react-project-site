import React, { useState, useEffect, useCallback } from "react";
import { taskBookStore } from "../../../../store/taskBookData/TaskBook.store";
import { Book } from "../../../../store/taskBookData/TaskBook.store.types";
import { fa } from "zod/v4/locales";

export const useSiderLogic = () => {
  const [sizeWindow, setSizeWindow] = useState(window.innerWidth <= 640);
  const [drawerSider, setDrawerSider] = useState(false);
  const [searchValue, setSearchValue] = useState<String>("");
  const { deleteBook, taskBooks, selectBook } = taskBookStore;

  const handleResize = useCallback(() => {
    const isSizeWindow = window.innerWidth <= 640;
    setSizeWindow(isSizeWindow);
  }, []);

  const toggleDrawer = useCallback(() => {
    setDrawerSider((prev) => !prev);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const searchCardBook = () => {
    if (searchValue.trim() === "") {
      return taskBooks;
    } else {
      return taskBooks.filter((book) =>
        book.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
    }
  };
  const taskBook = searchCardBook();

  const selectedBook = (book: Book) => {
    selectBook(book);
    setDrawerSider(false);
  };

  return {
    toggleDrawer,
    drawerSider,
    sizeWindow,
    taskBook,
    selectedBook,
    deleteBook,
    searchValue,
    setSearchValue,
    handleSearchChange,
  };
};
