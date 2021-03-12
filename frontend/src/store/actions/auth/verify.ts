import { VERIFY_API } from "../../../constants/api";
import { IUser } from "../../context/auth/auth.context.interfaces";
import authActions from "./types";

export const verifyAuth = async (
  token: string,
  dispatch: React.Dispatch<authActions>
) => {
  await fetch(VERIFY_API, {
    method: "POST",
    headers: {
      Authentication: token,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.data.error) throw new Error("Unable to verify");
      const user = result.data.user as IUser;
      dispatch({
        type: "verify",
        payload: {
          user,
          access_token: token,
        },
      });
    })
    .catch((e) => {
      dispatch({ type: "error", payload: "Error during verification" });
      window.localStorage.removeItem("access_token");
    });
};
