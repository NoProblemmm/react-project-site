import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./auth.css";
import { z } from "zod";
import { Input } from "../../components/ui/input/Inpit";
import { Typography } from "antd";
import { Button } from "../../components/ui/button/Button";
import { signUpFormValidation } from "./validations";
import { TSignUpSchema } from "./validations";
import { observer } from "mobx-react-lite";

export const SignUp = observer(() => {
  const onSubmit = async (data: TSignUpSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Форма отправлена");
  };

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
    <div className="w-full h-screen flex items-center justify-center">
      <div className="book-form-container  w-[70%] h-[55rem] mt-5 ">
        <div className="flex">
          <div className="w-[29%] h-136 ml-[13rem] mt-[10rem] ">
            <Typography className="justify-items-center mt-20">
              <h2>Регистрация</h2>
            </Typography>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-y-2 m-5"
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => <Input {...field} placeholder="Email" />}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input.Password placeholder="Password" {...field} />
                )}
              />

              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}

              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <Input.Password placeholder="Confirm Password" {...field} />
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
            </form>
          </div>
          <div className="w-[27%] h-136 bg-amber-800 ml-[10rem] mt-[10rem]"></div>
        </div>
      </div>
    </div>
  );
});
