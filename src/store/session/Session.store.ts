import { makeAutoObservable } from "mobx";
import { ISessionStore } from "./Session.store.types";
import { ISignInRequest, ISignInResponse } from "../../api/data-details";
import { DataHolder } from "@force-dev/utils";
import { Api } from "../../api/Api";
import { ApiTokenProvider } from "../../api/ApiToken.provider";

class SessionStore implements ISessionStore {
  public dataHolder = new DataHolder<string | null>(null);

  constructor(private _tokenProvider: ApiTokenProvider) {
    makeAutoObservable(this);
  }

  get isLoading() {
    return this.dataHolder.isLoading;
  }

  get isAutentificate() {
    return this.dataHolder.isFilled;
  }

  public signInStore = async (data: ISignInRequest) => {
    if (!data) {
      return console.log("Неверные данные");
    }
    const response = await Api().signIn(data);
    this._dataResponse(response);
    return response;
  };

  isLogout = () => {
    this.clear();
  };

  public clear() {
    this.dataHolder.clear();

    localStorage.removeItem("refresh_token");
    this._tokenProvider.clear();
  }

  private _dataResponse(data: ISignInResponse): void {
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
