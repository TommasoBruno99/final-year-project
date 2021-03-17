import React from "react";
import { Container, Inner } from "./scheduleOptions.styled";

export const OptionsContainer: React.FC = ({ children }) => {
  return <Container> {children} </Container>;
};

export const OptionsContainerInner: React.FC = ({ children }) => {
  return <Inner> {children} </Inner>;
};
