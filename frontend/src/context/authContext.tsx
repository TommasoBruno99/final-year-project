import React, { useContext, useEffect, useState } from "react";
import { verifyAuth } from "../utils/auth";

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  last_login: Date;
  access_token: string;
}

interface IAuthContext {
  user: IUser | null;
  setAuthUser: any;
}

const authContext = React.createContext<IAuthContext>({
  user: null,
  setAuthUser: null,
});

export const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const setAuthUser = (data: IUser) => {
    setUser(data);
  };

  useEffect(() => {
    const tokenUser = (localStorage.getItem("log_user") as unknown) as IUser;
    console.log(tokenUser);
    if (tokenUser) {
      verifyAuth(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkzMzcwNTk3LWY4ZjQtNDViMC1hNmY4LThlNDk3MWJmZWNhMCIsImZpcnN0X25hbWUiOiJ0b21tYXNvIiwibGFzdF9uYW1lIjoiYnJ1bm8iLCJpc19hZG1pbiI6Im5vIiwibGFzdF9sb2dpbiI6IjIwMjEtMDEtMjRUMDA6MDA6MDAuMDAwWiIsImlhdCI6MTYxMTk3OTE3NiwiZXhwIjoxNjExOTg5OTc2fQ.nF-JvYs_fAS1h1d_UGbMyBRCMZleUw3MWT3nI6VEHfc",
        setUser
      );
    } else setUser(null);
  }, []);

  useEffect(() => {
    localStorage.setItem("log_user", JSON.stringify(user));
  }, [user]);

  return (
    <authContext.Provider value={{ user, setAuthUser }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(authContext);
};
