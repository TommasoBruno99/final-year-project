import authActions from "../../actions/auth/types";

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  last_login: Date | null;
}

export interface IState {
  user: IUser | null;
  isLoggedIn: boolean;
  error: string;
  access_token: string;
  isLoading: boolean;
}

export interface IAuthContext {
  state: IState;
  dispatch: React.Dispatch<authActions>;
}
