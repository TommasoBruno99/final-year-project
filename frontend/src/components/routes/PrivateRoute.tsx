import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

interface IPrivateRoute {
  children: React.ReactNode;
  path: string;
  exact: boolean;
  render?: () => React.ReactNode;
}

const PrivateRoute: React.FC<IPrivateRoute> = ({ children, path, exact }) => {
  const { user } = useAuthContext();
  const render = () => {
    if (user) {
      return children;
    } else {
      return <Redirect to={{ pathname: "/login" }} />;
    }
  };

  return <Route path={path} exact={exact} render={render}></Route>;
};

export default PrivateRoute;
