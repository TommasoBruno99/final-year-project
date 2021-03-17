import React from "react";
import { Container } from "./button.styled";

export const Button: React.FC = ({ children }) => {
  return <Container> {children} </Container>;
};
