import React from "react";
import { Container, Inner, Title, Name, FlexText } from "./dashboard.styled";

export const Dashboard: React.FC = ({ children }) => {
  return <Container> {children} </Container>;
};

export const DashboardInner: React.FC = ({ children }) => {
  return <Inner> {children} </Inner>;
};

export const DashboardTextFlex: React.FC = ({ children }) => {
  return <FlexText> {children} </FlexText>;
};

export const DashboardTitle: React.FC = ({ children }) => {
  return <Title> {children} </Title>;
};

export const DashboardName: React.FC = ({ children }) => {
  return <Name> {children} </Name>;
};
