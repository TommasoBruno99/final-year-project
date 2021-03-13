import React from "react";
import { Container, Message } from "./error.styled";

export const Error: React.FC<{ isToggled: string }> = ({
  children,
  isToggled,
}) => {
  return <Container isToggled={isToggled}> {children} </Container>;
};

export const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return <Message> {message} </Message>;
};
