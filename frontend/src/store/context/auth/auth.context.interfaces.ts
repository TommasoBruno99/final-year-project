import { authActions } from "../../actions/";

enum Seniority {
  JUNIOR = "JUNIOR",
  SENIOR = "SENIOR",
}

enum Role {
  USER = "USER",
  ADMIN = "AMDIN",
}
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  role: Role;
  email: string;
  seniority: Seniority;
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
