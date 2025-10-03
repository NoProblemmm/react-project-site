import { ComponentProps, PropsWithChildren, memo, FC } from "react";
import { Button as ButtonAnt } from "antd";

type ButtonProps = ComponentProps<typeof ButtonAnt>;

export const Button: FC<PropsWithChildren<ButtonProps>> = memo((props) => {
  return <ButtonAnt {...props} />;
});
