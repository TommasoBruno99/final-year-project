import { useContext } from "react";
import { authContext } from "../store/context/";

export const useAuth = () => {
  return useContext(authContext);
};
