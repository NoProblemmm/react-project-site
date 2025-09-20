import React, { useState } from "react";
import { Divider, Layout } from "antd";
import { Card, Button } from "antd";
import { taskBookStore } from "../../../store/taskbook.store";
import { observer } from "mobx-react-lite";
import { useTheme } from "../../../theme/SwitchTheme";
import { useTranslation } from "react-i18next";
import { SearchInput } from "../../ui/searchInput/SearchInput";
const { Sider } = Layout;

export const AppSider = observer(() => {
  const { t } = useTranslation();
  const { deleteBook, taskBooks, selectBook } = taskBookStore;
  const { theme } = useTheme();

  const [searchValue, setSearchValue] = useState<String>("");

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

  return (
    <Sider width="25%" className="sider-custom h-[54rem] ">
      <div className="m-1">
        <SearchInput
          value={searchValue}
          setSearchValue={setSearchValue}
          onChange={handleSearchChange}
        />
      </div>

      <div className="scrollbar-sider w-[99%] overflow-x-hidden h-[51rem] overflow-y-scroll ml-[2px]">
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
                onClick={() => selectBook(book)}
              >
                {t("navigation.PageCardButtonLook")}
              </Button>
              <Button
                className="mr-[1px] float-right"
                color="red"
                variant="outlined"
                onClick={() => deleteBook(book.id)}
              >
                {t("navigation.PageCardButtonDelite")}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Sider>
  );
});
export default AppSider;
