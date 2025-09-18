import React, { memo, useState, useCallback, useEffect } from "react";
import { Button, Layout, Modal, Drawer } from "antd";
import { AppModal } from "../AppModal/AppModal";
import "@ant-design/v5-patch-for-react-19";
import { AppNotes } from "../AppNotes/AppNotes";
import { Link } from "@tanstack/react-router";
import { useTheme } from "../../../theme/SwitchTheme";
import LanguageSwitcher from "../../../localization/hooks/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Trans } from "@lingui/react/macro";
import { AppLocales } from "../../../locales/hooks/AppLocales";
import "./AppHeader.css";

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

  const [sizeWindow, setSizeWindow] = useState(window.innerWidth < 640);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSizeWindow = window.innerWidth < 640;
      setSizeWindow(isSizeWindow);
      if (!isSizeWindow) {
        setSizeWindow(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  //{t("navigation.PageAddTask")}
  return (
    <>
      <Header className="header-custom text-center flex-col">
        {sizeWindow ? (
          <div className="tab-menu" onClick={toggleMenu}>
            <img src="/static/menu.svg" alt="" />
          </div>
        ) : null}
        {!sizeWindow || menuOpen ? (
          <>
            {showButtons && (
              <Button onClick={handleModal} className="sm:m-1">
                <Trans>New Task</Trans>
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

            <Link to="/">
              <Button type="dashed" className="w-full sm:w-auto">
                {t("navigation.PageTaskPage")}
              </Button>
            </Link>
            <Link to="/about">
              <Button type="dashed" className="w-full sm:w-auto sm:m-1">
                {" "}
                {t("navigation.PageAboutPage")}
              </Button>
            </Link>

            <Link to="/todos">
              <Button type="dashed" className="w-full sm:w-auto">
                {t("navigation.PageTodoPage")}
              </Button>
            </Link>

            {showButtons && (
              <Button
                className="w-full sm:w-auto sm:m-1"
                onClick={handleDrawer}
              >
                {t("navigation.PageNotes")}
              </Button>
            )}
            <AppLocales />
            <LanguageSwitcher />
            <Button type="dashed" className="sm:m-1" onClick={switchTheme}>
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
          </>
        ) : null}
      </Header>
    </>
  );
});
