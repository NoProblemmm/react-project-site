import { useCallback, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ISignInRequest } from "../../../api/data-details";
import { useSessionStore } from "../../../store/session/Session.store";

export const useSignInN = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const signInStore = useSessionStore.signInStore;

  const handleLogin = useCallback(async (data: ISignInRequest) => {
    setIsLoading(true);
    const response = await signInStore(data);
    if (response) {
      setIsLoading(false);
      navigate({ to: "/" });
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
