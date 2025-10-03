export type IUserInfo = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};

export interface ISignInRequest {
  login: string;
  password: string;
}

export interface ISignUpRequest {
  login: string;
  password: string;
}
