import { useEffect, useState } from "react";
import { verifyAuth } from "../utils/auth";

export const useAuth = (): Object | null => {
  const [user, setUser] = useState<Object | null>(null);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) setUser(null);
    else {
      const token = localStorage.getItem("access_token");
      verifyAuth(token as string, setUser);
    }
  }, []);

  return user;
};
