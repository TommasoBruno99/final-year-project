import React from "react";
import { useAuth } from "../../../hooks";
import { ErrorContainer, ErrorMessage } from "./error.styled";

const Error = () => {
  const {
    state: { error },
  } = useAuth();
  return error ? (
    <ErrorContainer data-testid="error" isToggled={error}>
      <ErrorMessage> {error} </ErrorMessage>
    </ErrorContainer>
  ) : null;
};

export default Error;
