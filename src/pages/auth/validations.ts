import { z } from "zod";
import { loginValidation } from "../../common/validations";
import { passwordValidation } from "../../common/validations";

export const signInFormValidation = z.object({
  login: loginValidation,
  password: passwordValidation,
});

export const signUpFormValidation = z
  .object({
    login: loginValidation,
    password: passwordValidation,
    confirmPassword: passwordValidation,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpFormValidation>;
export type TSignInSchema = z.infer<typeof signInFormValidation>;
