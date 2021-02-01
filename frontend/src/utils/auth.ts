import { LOGIN_API, VERIFY_API } from "../constants/api";
import { IUser } from "../context/authContext";

export const logAuth = async (
  user: Object,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
) => {
  setError(null);
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
      localStorage.setItem(
        "log_user",
        JSON.stringify({
          id: "adasd",
          first_name: "dsda",
          last_login: new Date(),
          last_name: "dassd",
          email: "",
          access_token: result.data.access_token,
        })
      );
      setUser({
        id: "adasd",
        first_name: "dsda",
        last_login: new Date(),
        last_name: "dassd",
        email: "",
        access_token: result.data.access_token,
      });
    })
    .catch((err) => {
      setError(err.message);
      setEmail("");
      setPassword("");
    });
};

export const verifyAuth = async (
  token: string,
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
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
      const user = result.data.user;
      setUser({
        id: user.id,
        first_name: user.first_name,
        last_login: user.last_login,
        email: "dadada",
        last_name: user.last_name,
        access_token: token,
      });
    })
    .catch((e) => {
      localStorage.removeItem("log_user");
      setUser(null);
    });
};

export const logoutAuth = () => {
  if (localStorage.getItem("log_user")) localStorage.removeItem("log_user");

  window.location.href = "/login";
};
