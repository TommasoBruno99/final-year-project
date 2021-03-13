import { IUser } from "../../context/auth/auth.context.interfaces";

interface authLogin {
  readonly type: "login";
  readonly payload: string; // token
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

type authActions =
  | authLogin
  | authVerify
  | authError
  | authLoading
  | authLogout;

export type { authActions };
