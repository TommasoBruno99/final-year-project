import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "normalize.css";
import "./global.css";
import LoginPage from "./pages/loginPage";
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoutes";
import HomePage from "./pages/homePage";
import { useAuth } from "./hooks/useAuth";
import Header from "./components/header";
import ProfilePage from "./pages/profilePage";

const App: React.FC = () => {
  const user = useAuth();
  return (
    <Router>
      <Header user={user} />
      <Switch>
        <Route path="/">
          <Route exact path="/">
            <Redirect to={{ pathname: "/login" }} />
            <PublicRoute exact path="/login" user={user}>
              <LoginPage />
            </PublicRoute>
            <PrivateRoute exact path="/home" user={user}>
              <HomePage />
            </PrivateRoute>
            <PrivateRoute exact path="/profile" user={user}>
              <ProfilePage />
            </PrivateRoute>
          </Route>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
