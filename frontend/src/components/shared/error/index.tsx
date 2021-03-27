import React from "react";
import { ErrorContainer, ErrorMessage } from "./error.styled";

type props = {
  error: string;
};

const Error = ({ error }: props) => {
  return error ? (
    <ErrorContainer data-testid="error" isToggled={error}>
      <ErrorMessage> {error} </ErrorMessage>
    </ErrorContainer>
  ) : null;
};

export default Error;
