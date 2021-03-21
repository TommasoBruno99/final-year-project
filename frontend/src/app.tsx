import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./store/context/auth/authContext";
import { Routes } from "./components/";
import { GlobalStyles } from "./global_styles";
import Header from "./components/shared/header";
import Error from "./components/shared/error";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes />
        <Error />
      </Router>
    </AuthContextProvider>
  );
};

export default App;
