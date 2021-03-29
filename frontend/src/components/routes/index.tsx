import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Error from "../shared/error";

import { LoginPage, HomePage, ProfilePage } from "../../pages";
import { useAuth } from "../../hooks";

export const Routes = () => {
  const {
    state: { error, isLoggedIn },
  } = useAuth();
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={{ pathname: "/login" }} />
      </Route>
      <PublicRoute exact path="/login" isLoggedIn={isLoggedIn}>
        <LoginPage />
      </PublicRoute>
      <PrivateRoute exact path="/home" isLoggedIn={isLoggedIn}>
        <HomePage />
      </PrivateRoute>
      <PrivateRoute exact path="/profile" isLoggedIn={isLoggedIn}>
        <ProfilePage />
      </PrivateRoute>
      <Error error={error} />
    </Switch>
  );
};
