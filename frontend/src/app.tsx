import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'normalize.css';
import './global.css';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
