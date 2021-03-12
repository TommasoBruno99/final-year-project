import React from "react";
import FormContainer from "../../containers/form/form.container";
import { useTitle } from "../../hooks/";

const LoginPage: React.FC = () => {
  useTitle("Login");
  return <FormContainer />;
};

export default LoginPage;
