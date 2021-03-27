import React from "react";
import { ErrorContainer, ErrorMessage } from "./error.styled";
import { useAuth } from "../../../hooks";

const Error = () => {
  const { state } = useAuth();

  return state.error ? (
    <ErrorContainer data-testid="error" isToggled={state.error}>
      <ErrorMessage> {state.error} </ErrorMessage>
    </ErrorContainer>
  ) : null;
};

export default Error;
