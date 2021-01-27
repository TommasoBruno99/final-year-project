import React from "react";
import { Redirect, Route } from "react-router-dom";

interface IPrivateRoute {
  children: React.ReactNode;
  path: string;
  exact: boolean;
  user: Object | null;
  render?: () => React.ReactNode;
}

const PrivateRoute: React.FC<IPrivateRoute> = ({
  children,
  path,
  exact,
  user,
}) => {
  console.log(user);
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
