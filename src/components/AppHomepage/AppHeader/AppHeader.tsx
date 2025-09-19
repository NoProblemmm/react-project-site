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
import { MessageModal } from "./ui/MessageMenu";
import { taskBookStore } from "../../../store/taskbook.store";
import { observer } from "mobx-react-lite";

const { Header } = Layout;

type Props = {
  showButtons?: boolean;
};

export const AppHeader = memo(
  observer(({ showButtons }: Props) => {
    const { t } = useTranslation();
    const [modal, setModal] = useState(false);
    const [messageModal, setMessageModal] = useState(false);
    const [drawer, setDrawer] = useState(false);
    const { theme, switchTheme } = useTheme();

    const [sizeWindow, setSizeWindow] = useState(window.innerWidth < 640);
    const [menuOpen, setMenuOpen] = useState(false);

    const { messageBook } = taskBookStore;

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

    const handleModal = useCallback(() => setModal((prev) => !prev), []);
    const handleDrawer = useCallback(() => setDrawer((prev) => !prev), []);

    const handleMessageModal = () => {
      setMessageModal((prev) => !prev);
      if (messageModal) {
        taskBookStore.clearMessage();
      }
    };

    const logout = () => {
      console.log("EXIT");
    };

    const toggleMenu = () => {
      setMenuOpen((prev) => !prev);
    };
    //{t("navigation.PageAddTask")}
    return (
      <>
        <Header className="header-custom text-center flex-col ">
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
              <div className="relative flex items-center float-right gap-5 text-black">
                <button
                  className="massage-bell relative flex items-center float-right mt-[1.3rem]"
                  onClick={handleMessageModal}
                >
                  <div
                    className="absolute top-[-6px] right-[5px] bg-red-600 rounded-full flex items-center justify-center
               text-white text-xs font-bold px-1 min-w-[20px] max-w-[50px] overflow-hidden whitespace-nowrap z-10"
                  >
                    {messageBook?.length === 0 ? "" : messageBook.length}
                  </div>
                  <img
                    src="/static/bell.svg"
                    className="w-6 header-img-bell "
                  />
                </button>
                {messageModal && <MessageModal />}
                <div className="h-9 bg-stone-400 w-[0.1px] rounded-2xl mt-4"></div>
                <button
                  className="massage-bell relative flex items-center float-right mt-[1.3rem]"
                  onClick={logout}
                >
                  <img
                    src="/static/exit.svg"
                    className="w-8 header-img-bell "
                  />
                </button>
              </div>
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
              <Modal
                title={t("navigation.ModalTitle")}
                open={modal}
                footer={null}
                onCancel={handleModal}
                className="ant-modal-title "
              >
                {showButtons && <AppModal handleCloseModal={handleModal} />}
              </Modal>
            </>
          ) : null}
        </Header>
      </>
    );
  })
);
