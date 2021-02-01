import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

interface IPublicRoute {
  children: React.ReactNode;
  path: string;
  exact: boolean;
  render?: () => React.ReactNode;
}

const PublicRoute: React.FC<IPublicRoute> = ({ children, path, exact }) => {
  const { user } = useAuthContext();
  const render = () => {
    if (!user) {
      return children;
    } else {
      return <Redirect to={{ pathname: "/home" }} />;
    }
  };
  return <Route path={path} exact={exact} render={render}></Route>;
};

export default PublicRoute;
