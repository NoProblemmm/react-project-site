import SocketApi from "../socket-api";
import { useEffect } from "react";

export const useConnectSocket = () => {
  const connectSocket = () => {
    SocketApi.createConnection();
  };

  useEffect(() => {
    connectSocket();
  }, []);
};
