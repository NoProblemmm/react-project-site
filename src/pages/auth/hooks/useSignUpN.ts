import { useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";
import { TSignInSchema } from "../validations";

export const useSignUpN = () => {
  const navigate = useNavigate();

  const onSubmit = async (data: TSignInSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Форма отправлена c данными: ", data);
  };

  const handleNavigateSignInForm = useCallback(() => {
    navigate({ to: "/auth/signIn" });
  }, [navigate]);

  return { handleNavigateSignInForm, onSubmit };
};
