import { makeAutoObservable } from "mobx";

interface IApiTokenProvider {
  accessToken: string;
  refreshToken: string;

  setToken(accessToken: string, refreshToken: string): void;

  clear(): void;
}

export class ApiTokenProvider implements IApiTokenProvider {
  public accessToken = "";
  public refreshToken = "";

  constructor() {
    makeAutoObservable(this);
  }

  setToken(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;

    if (refreshToken) {
      localStorage.setItem("refresh_token", refreshToken);
    } else {
      this.clear();
    }
    this.refreshToken = refreshToken;
  }

  clear() {
    this.accessToken = "";
    localStorage.removeItem("refresh_token");
    this.refreshToken = "";
  }
}
