import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import "./auth.css";
import { Input } from "../../components/ui/input/Inpit";
import { Typography } from "antd";
import { Button } from "../../components/ui/button/Button";
import { signInFormValidation, TSignInSchema } from "./validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignInN } from "./hooks/useSignInN";

export const SignIn = () => {
  const { handleNavigateSignUpForm } = useSignInN();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<TSignInSchema>({ resolver: zodResolver(signInFormValidation) });

  const onSubmit = () => {
    console.log("Вход");
  };
  const hendleChangePassword = () => {
    console.log("Забыл пароль");
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="book-form-container  w-[70%] h-[55rem] mt-5 ">
        <div className="flex">
          <div className="w-[29%] h-136 xl:ml-[13rem] mt-[10rem] ">
            <Typography className="justify-items-center mt-20">
              <h2>Вход</h2>
            </Typography>
            <form
              className="flex flex-col gap-y-2 m-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <Input
                    {...field}
                    className=""
                    type="text"
                    placeholder="Login"
                    name=""
                    id=""
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    className="mt-3"
                    type="text"
                    placeholder="Password"
                    name=""
                    id=""
                  />
                )}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              <a
                className=" cursor-pointer text-blue-700 flex"
                onClick={hendleChangePassword}
              >
                Забыли пароль?
              </a>
              <Button
                className="mt-[1rem] w-full "
                type="primary"
                htmlType="submit"
              >
                Вход
              </Button>
              <Button
                className=" w-full "
                type="link"
                onClick={handleNavigateSignUpForm}
              >
                Регистрация
              </Button>
            </form>
          </div>
          <div className="w-[27%] h-136  ml-[9rem]  mt-[10rem]">
            <li>
              TaskBook - инструмент для управления проектами и задачами.
              Обеспечивает единое пространство для общения и эффективной
              организации задач.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
