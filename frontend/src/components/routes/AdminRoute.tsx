import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IAdminRoute } from "./routes.interfaces";

const AdminRoute: React.FC<IAdminRoute> = ({
  children,
  path,
  exact,
  isLoggedIn,
  role,
}) => {
  const render = () => {
    if (isLoggedIn && role === "ADMIN") {
      return children;
    } else {
      return <Redirect to={{ pathname: "/login" }} />;
    }
  };

  return <Route path={path} exact={exact} render={render}></Route>;
};

export default AdminRoute;
