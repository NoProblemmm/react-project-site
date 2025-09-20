import { useForm } from "react-hook-form";
import "./auth.css";
import { Input } from "../../components/ui/input/Inpit";
import { Typography } from "antd";

export const Login = () => {
  return (
    <div className="  w-full h-full justify-items-center">
      <div className="book-form-container fixed w-[70%] h-[55rem] mt-5">
        <div className="flex">
          <div className="w-[29%] h-136 ml-[12rem] mt-[10rem]">
            <Typography className="justify-items-center mt-20">
              <h2>Вход</h2>
            </Typography>
            <form className="bloack gap-6 m-5">
              <label className="">Login</label>
              <Input className="" type="text" name="" id="" />
              <label className="">Password</label>
              <Input.Password className="" type="text" name="" id="" />
            </form>
          </div>
          <div className="w-[27%] h-136 bg-amber-800 ml-[85px] mt-[10rem]"></div>
        </div>
      </div>
    </div>
  );
};
