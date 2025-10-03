export interface ISessionStore {
  isLoading: boolean;

  isAutentificate: boolean;
  isLogout(): void;
}
