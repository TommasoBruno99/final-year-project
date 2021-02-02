import React, { useContext, useEffect, useReducer } from "react";
import { verifyAuth } from "../../actions/auth/verify";
import authReducer from "../../reducers/auth.reducer";
import { IAuthContext, IState } from "./auth.context.interfaces";

const initialState: IState = {
  user: {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    last_login: null,
  },
  isLoggedIn: false,
  error: "",
  access_token: "",
  isLoading: false,
};

const authContext = React.createContext<IAuthContext>({
  state: initialState,
  dispatch: () => null,
});

export const AuthContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    if (token) verifyAuth(token, dispatch);
  }, []);

  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(authContext);
};
