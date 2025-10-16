import React, { FC, memo } from "react";
import { t } from "@lingui/core/macro";
import { Link } from "@tanstack/react-router";
import { Trans } from "@lingui/react/macro";
import { observer } from "mobx-react-lite";
import { useHeaderLogic } from "./hooks/useHeaderLogic";
import { AppModal } from "../appModal/AppModal";
import { AppNotes } from "../appNotes/AppNotes";
import { AppLocales } from "../../../locales/hooks/AppLocales";
import { MessageModal } from "./ui/MessageMenu";
import { Button, Layout, Modal, Drawer } from "antd";
import "@ant-design/v5-patch-for-react-19";
import "./AppHeader.css";
import { useSessionStore } from "../../../store/session/Session.store";

const { Header } = Layout;

type Props = {
  showButtons?: boolean;
};

export const AppHeader: FC<Props> = memo(
  observer(({ showButtons }: Props) => {
    const { isAutentificate } = useSessionStore;
    const {
      toggleMenu,
      toggleModal,
      toggleDrawer,
      toggleMessageModal,
      switchTheme,
      logout,
      modal,
      messageModal,
      drawer,
      sizeWindow,
      headerMenuOpen,
      theme,
      messageBook,
    } = useHeaderLogic();

    return (
      <>
        <Header className="header-custom text-center flex-col">
          {sizeWindow ? (
            <div className="tab-menu" onClick={toggleMenu}>
              <img src="/static/menu.svg" alt="" />
            </div>
          ) : null}

          {!sizeWindow || headerMenuOpen ? (
            <>
              {showButtons && (
                <Button
                  onClick={toggleModal}
                  className="w-full sm:w-auto sm:m-1"
                >
                  <Trans>New Task</Trans>
                </Button>
              )}
              {isAutentificate && (
                <>
                  <Link to="/">
                    <Button type="dashed" className="w-full sm:w-auto">
                      <Trans>Task</Trans>
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button type="dashed" className="w-full sm:w-auto sm:m-1">
                      <Trans>About</Trans>
                    </Button>
                  </Link>
                  <Link to="/todos">
                    <Button type="dashed" className="w-full sm:w-auto">
                      <Trans>Todo</Trans>
                    </Button>
                  </Link>
                </>
              )}

              {showButtons && (
                <Button
                  className="w-full sm:w-auto sm:m-1"
                  onClick={toggleDrawer}
                >
                  <Trans>Notes</Trans>
                </Button>
              )}
              <div className="inline ">
                {sizeWindow ? (
                  <div
                    className="text-left text-4xl relative cursor-pointer"
                    onClick={toggleMenu}
                  >
                    <p className="absolute left-[-2.5rem] top-2">^</p>
                  </div>
                ) : null}
                <div className="float-left h-5 pt-3">
                  <button onClick={switchTheme} className="message-bell ">
                    <img
                      className="w-9 header-img"
                      src={
                        theme === "dark"
                          ? "/static/light-theme.svg"
                          : "/static/dark-theme.svg"
                      }
                    />
                  </button>
                </div>
                <div className="relative flex items-center float-right gap-5 text-black pt-3">
                  <AppLocales />
                  {isAutentificate && (
                    <button
                      className="message-bell relative float-right "
                      onClick={toggleMessageModal}
                    >
                      <div
                        className="absolute top-[-6px] right-[5px] bg-red-600 rounded-full flex items-center justify-center
               text-white text-xs font-bold px-1 min-w-[20px] max-w-[50px] overflow-hidden whitespace-nowrap z-10 "
                      >
                        {messageBook?.length === 0
                          ? ""
                          : +messageBook.length > 999
                            ? "+999"
                            : messageBook.length}
                      </div>
                      <img src="/static/bell.svg" className="w-6 header-img " />
                    </button>
                  )}

                  {messageModal && <MessageModal />}
                  <div className="h-9 bg-stone-400 w-[0.1px] rounded-2xl "></div>

                  <button
                    onClick={logout}
                    className="message-bell relative flex items-center float-right"
                  >
                    <img src="/static/exit.svg" className="w-8 header-img " />
                  </button>
                </div>
              </div>
              <Drawer
                width={600}
                destroyOnHidden
                title={t`Notes`}
                className="ant-modal-content"
                onClose={toggleDrawer}
                open={drawer}
              >
                <AppNotes />
              </Drawer>
              <Modal
                title={t`Add TaskBook`}
                open={modal}
                footer={null}
                onCancel={toggleModal}
                className="ant-modal "
              >
                {showButtons && <AppModal toggleModal={toggleModal} />}
              </Modal>
            </>
          ) : null}
        </Header>
      </>
    );
  })
);
