import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FooterContainer, HeaderContainer } from "./containers/";
import { AuthContextProvider } from "./store/context/auth/authContext";
import { Routes } from "./components/";
import { GlobalStyles } from "./global_styles";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <GlobalStyles />
      <Router>
        <HeaderContainer />
        <Routes />
        <FooterContainer />
      </Router>
    </AuthContextProvider>
  );
};

export default App;
