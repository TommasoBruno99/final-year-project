import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import { LoginPage, HomePage, ProfilePage } from "../../pages";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={{ pathname: "/login" }} />
      </Route>
      <PublicRoute exact path="/login">
        <LoginPage />
      </PublicRoute>
      <PrivateRoute exact path="/home">
        <HomePage />
      </PrivateRoute>
      <PrivateRoute exact path="/profile">
        <ProfilePage />
      </PrivateRoute>
    </Switch>
  );
};
