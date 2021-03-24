import { authActions } from "./types";

export const logout = async (dispatch: React.Dispatch<authActions>) => {
  window.localStorage.removeItem("access_token");
  dispatch({
    type: "logout",
  });
};
