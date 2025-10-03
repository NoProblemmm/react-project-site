import { useCallback, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ISignInRequest } from "../../../api/data-details";
import { Api } from "../../../api/Api";

export const useSignInN = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn } = Api();

  const handleLogin = useCallback(async (data: ISignInRequest) => {
    setIsLoading(true);
    const responce = await signIn(data);
    if (responce) {
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
