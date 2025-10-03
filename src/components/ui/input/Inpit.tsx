import { ComponentProps, forwardRef, ElementRef } from "react";
import { Input as InputAnt } from "antd";

const _Input = forwardRef<
  ElementRef<typeof InputAnt>,
  ComponentProps<typeof InputAnt>
>((props, ref) => {
  return <InputAnt ref={ref} {...props} />;
});

const _Password = forwardRef<
  ElementRef<typeof InputAnt>,
  ComponentProps<typeof InputAnt>
>((props, ref) => {
  return <InputAnt.Password ref={ref} {...props} />;
});

export const Input = _Input as typeof InputAnt;
Input.Password = _Password;
