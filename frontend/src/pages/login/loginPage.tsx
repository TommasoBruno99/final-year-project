import React from "react";
import { FormContainer } from "../../containers/";
import { useTitle } from "../../hooks/";

const LoginPage: React.FC = () => {
  useTitle("Login");
  return <FormContainer />;
};

export default LoginPage;
