import { LOGIN_API, VERIFY_API } from "../constants/api";

export const logAuth = (
  user: Object,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>
) => {
  setError(null);
  fetch(LOGIN_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.data.error) throw new Error(result.data.error.message);
      localStorage.setItem("access_token", result.data.access_token);
      window.location.href = "/home";
    })
    .catch((err) => {
      setError(err.message);
      setEmail("");
      setPassword("");
    });
};

export const verifyAuth = (
  token: string,
  setUser: React.Dispatch<React.SetStateAction<Object | null>>
) => {
  fetch(VERIFY_API, {
    method: "POST",
    headers: {
      Authentication: token,
    },
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.data.error) throw new Error("Unable to verify");
      const user = result.data.user;
      setUser(user);
    })
    .catch((e) => {
      localStorage.removeItem("access_token");
      setUser(null);
    });
};
