import { useState, useCallback, useEffect } from "react";
import { useTheme } from "../../../../theme/SwitchTheme";
import { taskBookStore } from "../../../../store/taskbook.store";
import { useTranslation } from "react-i18next";

export const useHeaderLogic = () => {
  const [modal, setModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const { theme, switchTheme } = useTheme();
  const { t } = useTranslation();
  const [sizeWindow, setSizeWindow] = useState(window.innerWidth < 640);
  const [menuOpen, setMenuOpen] = useState(false);

  const { messageBook } = taskBookStore;

  const handleResize = useCallback(() => {
    const isSizeWindow = window.innerWidth < 640;
    setSizeWindow(isSizeWindow);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const toggleModal = useCallback(() => setModal((prev) => !prev), []);
  const toggleDrawer = useCallback(() => setDrawer((prev) => !prev), []);

  const toggleMessageModal = () => {
    setMessageModal((prev) => !prev);
    if (messageModal) {
      taskBookStore.clearMessage();
    }
  };
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const logout = () => {
    console.log("EXIT");
  };

  return {
    modal,
    toggleModal,
    messageModal,
    toggleMessageModal,
    drawer,
    toggleDrawer,
    sizeWindow,
    menuOpen,
    toggleMenu,
    theme,
    switchTheme,
    logout,
    messageBook,
    t,
  };
};
