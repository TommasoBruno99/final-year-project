import React from "react";
import { Container } from "./badge.styled";

export const Badge: React.FC = ({ children }) => {
  return <Container> {children} </Container>;
};
