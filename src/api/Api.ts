import { useSessionStore } from "../store/session/Session.store";
import { ISignInRequest } from "./data-details";
import useApi from "./hooks/useApi";

export const Api = () => {
  const { POST, GET } = useApi({ baseUrl: "https://dummyjson.com/user/" });
  const token = localStorage.getItem("refresh_token");
  const { signInStore } = useSessionStore;

  // Авторизация
  const signIn = async (data: ISignInRequest) => {
    try {
      const response = await POST("login", {
        username: data.login,
        password: data.password,
      });
      signInStore(response);
      return response;
    } catch (error) {
      console.log("Ошибка авторизации:", error);
    } finally {
    }
  };

  // Получение профиля текущего авторизованного пользователя.
  const getMyProfile = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await GET("me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });
      signInStore(response);
      return response;
    } catch (error) {
      console.error("Ошибка получения профиля:", error);
      return null;
    } finally {
    }
  };

  return { signIn, getMyProfile };
};
