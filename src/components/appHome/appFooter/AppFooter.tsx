import React, { FC, useEffect, useState } from "react";
import { Layout, Typography } from "antd";

const { Footer } = Layout;

export const AppFooter: FC = () => {
  let [timer, setTimer] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <Footer className="footer-custom ">
      <Typography className="footer-custom text-center">TaskBook</Typography>
      <Typography className="footer-custom text-center">
        Текущее время: {timer.toLocaleTimeString()}
      </Typography>
    </Footer>
  );
};
