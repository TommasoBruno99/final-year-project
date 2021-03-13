import React from "react";
import { Error, ErrorMessage } from "../../components";
import { useAuth } from "../../hooks";

const ErrorContainer: React.FC = () => {
  const { state } = useAuth();

  return (
    <Error isToggled={state.error}>
      <ErrorMessage message={state.error} />
    </Error>
  );
};

export default ErrorContainer;
