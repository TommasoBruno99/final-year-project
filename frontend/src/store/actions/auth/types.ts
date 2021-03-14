import { IUser } from "../../context/auth/auth.context.interfaces";

interface authLogin {
  readonly type: "login";
  readonly payload: {
    access_token: string;
    user: {
      id: number;
      firstName: string;
      lastName: string;
      isAdmin: string;
      lastLogin: Date;
      email: string;
    };
  }; // token
}

interface authLogout {
  readonly type: "logout";
}

interface authVerify {
  readonly type: "verify";
  readonly payload: {
    user: IUser;
    access_token: string;
  };
}

interface authLoading {
  readonly type: "loading";
  readonly payload: boolean;
}

interface authError {
  readonly type: "error";
  readonly payload: string;
}

interface clearError {
  readonly type: "clear_error";
}

type authActions =
  | authLogin
  | authVerify
  | authError
  | authLoading
  | authLogout
  | clearError;

export type { authActions };
