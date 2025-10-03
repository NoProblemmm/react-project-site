import { useForm, Controller } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpFormValidation } from "./validations";
import { TSignUpSchema } from "./validations";
import { useSignUpN } from "./hooks/useSignUpN";
import { Input } from "../../components/ui/input/Inpit";
import { Typography } from "antd";
import { Button } from "../../components/ui/button/Button";
import "./auth.css";

export const SignUp = observer(() => {
  const { handleNavigateSignInForm, onSubmit } = useSignUpN();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpFormValidation),
  });

  return (
    <div className="justify-items-center mt-60  ">
      <div className=" flex text-center m-2 max-w-114 p-9 rounded-2xl shadow-neutral-400 shadow-2xl">
        <div className="flex flex-col gap-4">
          <Typography>
            <h2>Регистрация</h2>
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="justify-items-start"
          >
            <Controller
              name="login"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Email" />}
            />
            {errors.login && (
              <p className="text-red-500">{errors.login.message}</p>
            )}
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input.Password
                  className="mt-3"
                  placeholder="Password"
                  {...field}
                />
              )}
            />

            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Input.Password
                  className="mt-3"
                  placeholder="Confirm Password"
                  {...field}
                />
              )}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}

            <Button
              type="primary"
              htmlType="submit"
              className="mt-[1rem] w-full "
            >
              Регистрация
            </Button>
            <Button
              type="link"
              className=" w-full "
              onClick={handleNavigateSignInForm}
            >
              Войти
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
});
