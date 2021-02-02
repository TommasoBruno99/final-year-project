import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { LoginPage, HomePage, ProfilePage } from "./pages";
import HeaderContainer from "./containers/header.container";
import { PrivateRoute, PublicRoute } from "./components";
import { AuthContextProvider } from "./store/context/auth/authContext";

const App: React.FC = () => {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <HeaderContainer />
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
        </Router>
      </AuthContextProvider>
    </>
  );
};

export default App;
