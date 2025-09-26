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
    <div className="justify-items-center mt-60  ">
      <div className=" flex text-center m-2 p-9 rounded-2xl shadow-neutral-400 shadow-2xl">
        <div className="flex flex-col gap-4">
          <Typography>
            <h2>Вход</h2>
          </Typography>
          <form
            className="justify-items-start"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input {...field} type="text" placeholder="Login" />
              )}
            />
            {errors.email && (
              <p className="text-red-500 ">{errors.email.message}</p>
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
      </div>
    </div>
  );
};
