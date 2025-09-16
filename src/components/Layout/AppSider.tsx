import React, { useState } from "react";
import { Divider, Layout } from "antd";
import { Card, Button } from "antd";
import { taskBookStore } from "../../store/taskbook.store";
import { observer } from "mobx-react-lite";
import { useTheme } from "../../theme/SwitchTheme";
import { useTranslation } from "react-i18next";
const { Sider } = Layout;

export const AppSider = observer(() => {
  const { t } = useTranslation();
  const { deleteBook, taskBooks, selectBook } = taskBookStore;
  const { theme } = useTheme();

  return (
    <Sider width="25%" className="sider-custom h-screen">
      <div className="scrollbar-sider w-[100%] overflow-x-hidden h-screen overflow-y-scroll ml-[2px]">
        {taskBooks.map((book) => (
          <Card
            key={book.id}
            title={book.title}
            variant="borderless"
            className="card-custom mr-3 w-full border-1"
          >
            <div className="float-right relative justify-start">
              <Button
                className="mr-[1rem]"
                color="red"
                variant="outlined"
                onClick={() => deleteBook(book.id)}
              >
                {t("navigation.PageCardButtonDelite")}
              </Button>
              <Button
                color="blue"
                variant="outlined"
                onClick={() => selectBook(book)}
              >
                {t("navigation.PageCardButtonLook")}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Sider>
  );
});
export default AppSider;
