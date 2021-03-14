import { authActions } from "../../actions/";

export interface IUser {
  id: string;
  firstName: string;
  isAdmin: string;
  lastName: string;
  email: string;
  lastLogin: Date | null;
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
