import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./store/context/auth/authContext";
import { Routes } from "./components/";
import { GlobalStyles } from "./global_styles";
import { FooterContainer, ErrorContainer } from "./containers/";
import Header from "./components/shared/header";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes />
        <ErrorContainer />
        <FooterContainer />
      </Router>
    </AuthContextProvider>
  );
};

export default App;
