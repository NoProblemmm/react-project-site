import { useEffect, useState } from "react";
import { makeAutoObservable } from "mobx";
import axios from "axios";
import { ISessionStore } from "./Session.store.types";
import { ISignInRequest } from "../../api/data-details";
import { DataHolder } from "@force-dev/utils";
import { Api } from "../../api/Api";
import { ApiTokenProvider } from "../../api/ApiToken.provider";

class SessionStore implements ISessionStore {
  private dataHolder = new DataHolder<string | null>(null);

  constructor(private _tokenProvider: ApiTokenProvider) {
    makeAutoObservable(this);
  }

  get isLoading() {
    return this.dataHolder.isLoading;
  }

  get isAutentificate() {
    return this.dataHolder.isFilled;
  }

  public signInStore = async (data: any) => {
    this._dataResponse(data);
  };

  isLogout = () => {
    this.clear();
  };

  public clear() {
    this.dataHolder.clear();

    localStorage.removeItem("refresh_token");
    this._tokenProvider.clear();
  }

  setAuthToken = (token: string | null) => {
    token
      ? (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`)
      : axios.defaults.headers.common["Authorization"];
  };

  private _dataResponse(data: any) {
    if (data === null) {
      this._tokenProvider.clear();
      this.dataHolder.setError("Нет данных");
    } else if (data) {
      this._tokenProvider.setToken(data.accessToken, data.refreshToken);
      this.dataHolder.setData(this._tokenProvider.accessToken);
    }
  }
}
const tokenProviderInstance = new ApiTokenProvider();
export const useSessionStore = new SessionStore(tokenProviderInstance);
