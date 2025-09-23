import { useForm } from "react-hook-form";
import { useEffect } from "react";
import "./auth.css";
import { Input } from "../../components/ui/input/Inpit";
import { Typography } from "antd";
import { Button } from "../../components/ui/button/Button";

export const SignIn = () => {
  const handleClick = () => {
    console.log("Вход");
  };
  const hendleChangePassword = () => {
    console.log("Забыл пароль");
  };
  return (
    <div className="  w-full h-full justify-items-center">
      <div className="book-form-container fixed w-[70%] h-[55rem] mt-5">
        <div className="flex">
          <div className="w-[29%] h-136 ml-[12rem] mt-[10rem]">
            <Typography className="justify-items-center mt-20">
              <h2>Вход</h2>
            </Typography>
            <form className=" m-5">
              <Input
                className=""
                type="text"
                placeholder="Login"
                name=""
                id=""
              />
              <Input.Password
                className="mt-3"
                type="text"
                placeholder="Password"
                name=""
                id=""
              />
              <a
                className=" cursor-pointer text-blue-700 flex"
                onClick={hendleChangePassword}
              >
                Забыли пароль?
              </a>
              <Button className="mt-[1rem] w-full " onClick={handleClick}>
                Вход
              </Button>
            </form>
          </div>
          <div className="w-[27%] h-136 bg-amber-800 ml-[85px] mt-[10rem]"></div>
        </div>
      </div>
    </div>
  );
};
