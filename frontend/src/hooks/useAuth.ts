import { useEffect, useState } from "react";
import { IUser } from "../context/authContext";
import { verifyAuth } from "../utils/auth";

export const useAuth = (): IUser | null => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) setUser(null);
    else {
      const token = localStorage.getItem("access_token");
      verifyAuth(token as string, setUser);
    }
  }, []);

  return user;
};
