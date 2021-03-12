import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "..";
import { LoginPage, HomePage, ProfilePage } from "../../pages";

const Routes = () => {
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

export default Routes;
