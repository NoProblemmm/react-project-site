import { useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "@tanstack/react-router";
import { taskBookStore } from "../../../../store/taskBookData/TaskBook.store";
import { useTheme } from "../../../../theme/SwitchTheme";
import { useSessionStore } from "../../../../store/session/Session.store";
import { Api } from "../../../../api/Api";

export const useHeaderLogic = () => {
  const [modal, setModal] = useState(false);
  const [profileData, setProfileData] = useState();
  const [messageModal, setMessageModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const { theme, switchTheme } = useTheme();
  const { t } = useTranslation();
  const { isLogout } = useSessionStore;
  const [sizeWindow, setSizeWindow] = useState(window.innerWidth < 640);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { getMyProfile } = Api();

  const { messageBook } = taskBookStore;

  const toggleModal = useCallback(() => setModal((prev) => !prev), []);
  const toggleDrawer = useCallback(() => setDrawer((prev) => !prev), []);

  const handleResize = useCallback(() => {
    const isSizeWindow = window.innerWidth < 640;
    setSizeWindow(isSizeWindow);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // useEffect(() => {
  //   if(profileData === null){
  //   (async () => {
  //     const data = await getMyProfile();
  //     setProfileData(data)
  //   })();}
  // }, []);

  const toggleMessageModal = () => {
    setMessageModal((prev) => !prev);
    if (messageModal) {
      taskBookStore.clearMessage();
    }
  };
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const logout = () => {
    isLogout();
    navigate({ to: "/auth/signIn" });
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
