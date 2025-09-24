import { useNavigate } from "@tanstack/react-router";
import { useCallback } from "react";

export const useSignInN = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {};

  const handleNavigateSignUpForm = useCallback(() => {
    return navigate({ to: "/auth/signUp" });
  }, [navigate]);

  return { handleSubmit, handleNavigateSignUpForm };
};
