import React from "react";
import { Container, Inner, Name } from "./dashboard.styled";

export const Dashboard: React.FC = ({ children }) => {
  return <Container> {children} </Container>;
};

export const DashboardInner: React.FC = ({ children }) => {
  return <Inner> {children} </Inner>;
};

export const DashboardName: React.FC = ({ children }) => {
  return <Name> {children} </Name>;
};
