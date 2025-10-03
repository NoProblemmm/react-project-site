import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignInN } from "./hooks/useSignInN";
import { signInFormValidation, TSignInSchema } from "./validations";
import { Button } from "../../components/ui/button/Button";
import { Input } from "../../components/ui/input/Inpit";
import { Typography } from "antd";
import "./auth.css";
import { useEffect } from "react";
import axios from "axios";

export const SignIn = () => {
  const {
    handleNavigateSignUpForm,
    handleLogin,
    handleNavigateChangePass,
    handleEnterAboutPage,
    isLoading,
  } = useSignInN();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TSignInSchema>({ resolver: zodResolver(signInFormValidation) });

  return (
    <div className="justify-items-center mt-60  ">
      <div className=" flex text-center m-2 p-9 rounded-2xl shadow-neutral-400 shadow-2xl">
        <div className="flex flex-col gap-4">
          <div className="flex items-center ">
            <div className="float-left mb-2">
              <img
                onClick={handleEnterAboutPage}
                className="w-7 cursor-pointer"
                src="/static/enter.svg"
              />
            </div>
            <Typography className="flex justify-center items-center flex-1 ">
              <h2 className="text-center mr-8">Вход</h2>
            </Typography>
          </div>
          <form
            className="justify-items-start"
            onSubmit={handleSubmit(handleLogin)}
          >
            <Controller
              control={control}
              name="login"
              render={({ field }) => (
                <Input {...field} type="text" placeholder="Login" />
              )}
            />
            {errors.login && (
              <p className="text-red-500 ">{errors.login.message}</p>
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
              onClick={handleNavigateChangePass}
            >
              Забыли пароль?
            </a>
            <Button
              className="mt-[1rem] w-full "
              type="primary"
              loading={isLoading}
              htmlType="submit"
              iconPosition="end"
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
