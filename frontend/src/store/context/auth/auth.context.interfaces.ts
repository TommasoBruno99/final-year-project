import { authActions } from "../../actions/";

enum Seniority {
  JUNIOR = "JUNIOR",
  SENIOR = "SENIOR",
}
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  team_id: number;
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
