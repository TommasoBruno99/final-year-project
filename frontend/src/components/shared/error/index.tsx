import React from "react";
import { ErrorContainer, ErrorMessage } from "./error.styled";
import { useAuth } from "../../../hooks";

const Error = () => {
  const { state } = useAuth();

  return (
    <ErrorContainer isToggled={state.error}>
      <ErrorMessage> {state.error} </ErrorMessage>
    </ErrorContainer>
  );
};

export default Error;
