import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./store/context/auth/authContext";
import { Routes } from "./components/";
import { GlobalStyles } from "./global_styles";
import {
  FooterContainer,
  HeaderContainer,
  ErrorContainer,
} from "./containers/";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <GlobalStyles />
      <Router>
        <HeaderContainer />
        <Routes />
        <ErrorContainer />
        <FooterContainer />
      </Router>
    </AuthContextProvider>
  );
};

export default App;
