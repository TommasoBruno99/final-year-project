import { LOGIN_API } from "../../../constants/api";
import { authActions } from "./types";

export const logAuth = async (
  user: Object,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  dispatch: React.Dispatch<authActions>
) => {
  dispatch({ type: "loading", payload: true });
  await fetch(LOGIN_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.data.error) throw new Error(result.data.error.message);
      window.localStorage.setItem(
        "access_token",
        result.data.result.access_token
      );
      dispatch({
        type: "login",
        payload: {
          access_token: result.data.access_token,
          user: result.data.result.user,
        },
      });
    })
    .catch((err) => {
      dispatch({ type: "error", payload: err.message });
      setTimeout(() => {
        dispatch({ type: "clear_error" });
      }, 4000);
      setEmail("");
      setPassword("");
    });
};
