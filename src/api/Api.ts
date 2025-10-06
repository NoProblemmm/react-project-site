import { useSessionStore } from "../store/session/Session.store";
import { ApiTokenProvider, useApiTokenProvider } from "./ApiToken.provider";
import { ISignInRequest } from "./data-details";
import { useApi } from "./hooks/useApi";

const useApiCopy = new useApi("https://dummyjson.com/user/");

export const Api = () => {
  const refreshToken = useApiTokenProvider.refreshToken;
  const { POST, GET } = useApiCopy;

  // Авторизация
  const signIn = async (data: ISignInRequest) => {
    const response = await POST("login", {
      username: data.login,
      password: data.password,
    });
    return response;
  };

  // Получение профиля текущего авторизованного пользователя.
  const getMyProfile = async () => {
    if (!refreshToken) {
      return null;
    }
    try {
      const response = await GET("me", {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
        credentials: "include",
      });
      return response;
    } catch (error) {
      console.error("Ошибка получения профиля:", error);
      return null;
    } finally {
    }
  };

  return { signIn, getMyProfile };
};
