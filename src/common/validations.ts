import { z } from "zod";
import { isLogin, isPassword } from "./helpers/regex";

export const loginValidation = z
  .string({ message: "Введите email." })
  .refine((value) => isLogin(value), {
    message: "В поле email допущена ошибка",
  });

export const passwordValidation = z
  .string({ message: "Введите пароль" })
  .refine((value) => isPassword(value), {
    message: "Используйте символы abcABC123$ в пароле.",
  })
  .min(6, { message: "Не менее 6-ти символов." });
