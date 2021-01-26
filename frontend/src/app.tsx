import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "normalize.css";
import "./global.css";
import LoginPage from "./pages/loginPage";
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoutes";
import HomePage from "./pages/homePage";
import { useAuth } from "./hooks/useAuth";

const App: React.FC = () => {
  const user = useAuth();
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/login" user={user}>
          <LoginPage />
        </PublicRoute>
        <PrivateRoute exact path="/home" user={user}>
          <HomePage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;
