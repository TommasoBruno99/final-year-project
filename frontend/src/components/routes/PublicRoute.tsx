import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IRoute } from "./routes.interfaces";

const PublicRoute: React.FC<IRoute> = ({
  children,
  path,
  exact,
  isLoggedIn,
}) => {
  const render = () => {
    if (!isLoggedIn) {
      return children;
    } else {
      return <Redirect to={{ pathname: "/home" }} />;
    }
  };
  return <Route path={path} exact={exact} render={render}></Route>;
};

export default PublicRoute;
