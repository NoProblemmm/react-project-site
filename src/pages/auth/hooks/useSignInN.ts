import { useCallback, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ISignInRequest } from "../../../api/data-details";
import { useSessionStore } from "../../../store/session/Session.store";
import { message } from "antd";

export const useSignInN = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const signInStore = useSessionStore.signInStore;
  const [messageApi, contextHolder] = message.useMessage();

  const authSuccessMes = () => {
    messageApi.open({
      type: "success",
      content: "Authorization success!",
    });
  };

  const authErrorMes = () => {
    messageApi.open({
      type: "error",
      content: "Authorization trouble!",
    });
  };

  const handleLogin = useCallback(async (data: ISignInRequest) => {
    setIsLoading(true);
    try {
      const response = await signInStore(data);
      if (!response) {
        authErrorMes();
      } else {
        authSuccessMes();
        navigate({ to: "/" });
      }
    } catch (error) {
      authErrorMes();
      console.log(String(error));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleNavigateSignUpForm = useCallback(() => {
    return navigate({ to: "/auth/signUp" });
  }, [navigate]);

  const handleNavigateChangePass = useCallback(() => {
    console.log("Смена пароля");
  }, []);

  const handleEnterAboutPage = useCallback(() => {
    return navigate({ to: "/about" });
  }, [navigate]);

  return {
    handleLogin,
    handleNavigateSignUpForm,
    handleNavigateChangePass,
    handleEnterAboutPage,
    isLoading,
  };
};
