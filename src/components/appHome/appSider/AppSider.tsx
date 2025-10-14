import React, { FC } from "react";
import { Trans } from "@lingui/react/macro";
import { Drawer, Layout } from "antd";
import { Card, Button } from "antd";
import { taskBookStore } from "../../../store/taskBookData/TaskBook.store";
import { observer } from "mobx-react-lite";
import { SearchInput } from "../../ui/searchInput/SearchInput";
import { useSiderLogic } from "./hooks/useSiderLogic";
import "./AppSider.css";
const { Sider } = Layout;

export const AppSider: FC = observer(() => {
  const {
    sizeWindow,
    taskBook,
    toggleDrawer,
    drawerSider,
    searchValue,
    handleSearchChange,
    selectedBook,
    deleteBook,
    setSearchValue,
  } = useSiderLogic();

  return (
    <Sider width="25%" className="sider-custom-theme sider-custom">
      {sizeWindow ? (
        <>
          <div className="sider-nav-menu w-10 pt-2 ">
            <img
              className="sider-nav-menu__book w-10 cursor-pointer"
              src="/static/book-sider-menu.svg"
              onClick={() => toggleDrawer()}
            />
          </div>

          <Drawer
            placement="left"
            size={"large"}
            className="drawer-sider"
            title={
              <>
                <div className="m-1">
                  <SearchInput
                    value={searchValue}
                    setSearchValue={setSearchValue}
                    onChange={handleSearchChange}
                  />
                </div>
              </>
            }
            open={drawerSider}
            onClose={toggleDrawer}
            getContainer={false}
          >
            <div className="scrollbar-sider w-[99%] overflow-x-hidden h-[39rem] overflow-y-scroll ml-[2px]">
              {taskBook.map((book) => (
                <Card
                  key={book.id}
                  title={book.title}
                  variant="borderless"
                  className="card-custom mr-3 w-full border-1 "
                >
                  <div className="float-right relative justify-start">
                    <Button
                      className="float-right"
                      color="blue"
                      variant="outlined"
                      onClick={() => selectedBook(book)}
                    >
                      <Trans>Look</Trans>
                    </Button>
                    <Button
                      className="mr-[1px] float-right"
                      color="red"
                      variant="outlined"
                      onClick={() => deleteBook(book.id)}
                    >
                      <Trans>Delete</Trans>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Drawer>
        </>
      ) : null}
      {!sizeWindow ? (
        <>
          <div className="m-1">
            <SearchInput
              value={searchValue}
              setSearchValue={setSearchValue}
              onChange={handleSearchChange}
            />
          </div>

          <div className="scrollbar-sider w-[99%] overflow-x-hidden h-[42.2rem] overflow-y-scroll ml-[2px]">
            {taskBook.map((book) => (
              <Card
                key={book.id}
                title={book.title}
                variant="borderless"
                className="card-custom mr-3 w-full border-1 "
              >
                <div className="float-right relative justify-start">
                  <Button
                    className="float-right"
                    color="blue"
                    variant="outlined"
                    onClick={() => selectedBook(book)}
                  >
                    <Trans>Look</Trans>
                  </Button>
                  <Button
                    className="mr-[1px] float-right"
                    color="red"
                    variant="outlined"
                    onClick={() => deleteBook(book.id)}
                  >
                    <Trans>Delete</Trans>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </>
      ) : null}
    </Sider>
  );
});
export default AppSider;
