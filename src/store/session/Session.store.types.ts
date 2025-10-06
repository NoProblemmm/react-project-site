import { ISignInRequest } from "../../api/data-details";

export interface ISessionStore {
  isLoading: boolean;

  isAutentificate: boolean;
  signInStore(params: ISignInRequest): Promise<void>;
  isLogout(): void;
}
