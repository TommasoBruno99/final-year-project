import React, { useState, useEffect } from "react";
import { Error, ErrorMessage } from "../../components";
import { useAuth } from "../../hooks";

const ErrorContainer: React.FC = () => {
  const {
    state: { error },
  } = useAuth();

  return (
    <Error isToggled={error}>
      <ErrorMessage message={error} />
    </Error>
  );
};

export default ErrorContainer;
