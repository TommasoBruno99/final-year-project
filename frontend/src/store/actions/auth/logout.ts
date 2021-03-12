import authActions from "./types";

export const logout = async (dispatch: React.Dispatch<authActions>) => {
  dispatch({
    type: "logout",
  });
};
