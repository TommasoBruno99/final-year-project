import React from "react";
import Form from "../../components/form";
import { useTitle } from "../../hooks/";

const LoginPage: React.FC = () => {
  useTitle("Login");
  return <Form />;
};

export default LoginPage;
