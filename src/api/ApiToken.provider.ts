import { makeAutoObservable } from "mobx";
import axios from "axios";

interface IApiTokenProvider {
  accessToken: string;
  refreshToken: string;

  setToken(accessToken: string, refreshToken: string): void;
  setAuthToken(token: string): void;
  clear(): void;
}

export class ApiTokenProvider implements IApiTokenProvider {
  public accessToken = "";
  public refreshToken = "";

  constructor() {
    makeAutoObservable(this);

    const storedRefreshToken = localStorage.getItem("refresh_token");
    if (storedRefreshToken) {
      this.refreshToken = storedRefreshToken;
    }
  }

  setAuthToken = (token: string | null) => {
    token
      ? (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`)
      : axios.defaults.headers.common["Authorization"];
  };

  setToken(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;

    if (refreshToken !== undefined && refreshToken !== "") {
      localStorage.setItem("refresh_token", refreshToken);
      this.refreshToken = refreshToken;
    }
  }

  clear() {
    this.accessToken = "";
    localStorage.removeItem("refresh_token");
    this.refreshToken = "";
  }
}
export const useApiTokenProvider = new ApiTokenProvider();
