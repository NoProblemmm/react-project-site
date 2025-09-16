import React, { memo, useState, useCallback } from "react";
import { Button, Layout, Modal, Drawer } from "antd";
import { AppModal } from "./AppModal";
import "@ant-design/v5-patch-for-react-19";
import { AppNotes } from "./AppNotes";
import { Link } from "@tanstack/react-router";
import { useTheme } from "../../theme/SwitchTheme";
import LanguageSwitcher from "../../localization/hooks/useTranslation";
import { useTranslation } from "react-i18next";

const { Header } = Layout;

type Props = {
  showButtons?: boolean;
};

export const AppHeader = memo(({ showButtons }: Props) => {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const { theme, switchTheme } = useTheme();

  const handleModal = useCallback(() => setModal((prev) => !prev), []);
  const handleDrawer = useCallback(() => setDrawer((prev) => !prev), []);

  return (
    <>
      <Header className="header-custom text-center color-#fff">
        {showButtons && (
          <Button
            style={{ float: "left", marginTop: "1rem" }}
            onClick={handleModal}
          >
            {t("navigation.PageAddTask")}
          </Button>
        )}
        <Modal
          title={t("navigation.ModalTitle")}
          open={modal}
          footer={null}
          onCancel={handleModal}
          className="ant-modal-title "
        >
          {showButtons && <AppModal handleCloseModal={handleModal} />}
        </Modal>

        <Link to="/" className="mr-2">
          <Button type="dashed" style={{ marginRight: "1rem" }}>
            {t("navigation.PageTaskPage")}
          </Button>
        </Link>
        <Link to="/about" className="mr-2">
          <Button type="dashed"> {t("navigation.PageAboutPage")}</Button>
        </Link>
        <Link to="/todos" className="mr-2">
          <Button type="dashed" style={{ marginLeft: "1rem" }}>
            {t("navigation.PageTodoPage")}
          </Button>
        </Link>

        {showButtons && (
          <Button className="float-right mt-4" onClick={handleDrawer}>
            {t("navigation.PageNotes")}
          </Button>
        )}
        <LanguageSwitcher />
        <Button
          type="dashed"
          className="mt-4 mr-4 float-right"
          onClick={switchTheme}
        >
          {theme === "dark"
            ? t("navigation.PageTheme.light")
            : t("navigation.PageTheme.dark")}
        </Button>
        <Drawer
          width={600}
          destroyOnHidden
          title={t("navigation.NotesDrawerTitle")}
          className="ant-modal-content"
          onClose={handleDrawer}
          open={drawer}
        >
          <AppNotes />
        </Drawer>
      </Header>
    </>
  );
});
