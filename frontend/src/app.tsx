import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./store/context/auth/authContext";
import { Routes } from "./components/";
import { GlobalStyles } from "./global_styles";
import Header from "./components/shared/header";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { FooterContainer } from "./containers";

export const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <GlobalStyles />
        <Router>
          <Header />
          <Routes />
          <FooterContainer />
        </Router>
      </AuthContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
