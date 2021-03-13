import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../hooks";
import { IRoute } from "./routes.interfaces";

const PrivateRoute: React.FC<IRoute> = ({ children, path, exact }) => {
  const { state } = useAuth();
  const render = () => {
    if (state.isLoggedIn) {
      return children;
    } else {
      return <Redirect to={{ pathname: "/login" }} />;
    }
  };

  return <Route path={path} exact={exact} render={render}></Route>;
};

export default PrivateRoute;
