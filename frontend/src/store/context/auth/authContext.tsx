import React, { useEffect, useReducer } from "react";
import { verifyAuth } from "../../actions/auth/verify";
import authReducer from "../../reducers/auth.reducer";
import { IAuthContext, IState } from "./auth.context.interfaces";

const initialState: IState = {
  user: null,
  isLoggedIn: false,
  error: "",
  access_token: "",
  isLoading: false,
};

export const authContext = React.createContext<IAuthContext>({
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
