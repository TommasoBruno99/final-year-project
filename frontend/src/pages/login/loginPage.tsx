import React, { useEffect } from "react";
import FormContainer from "../../containers/form/form.container";

const LoginPage: React.FC = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  return <FormContainer />;
};

export default LoginPage;
