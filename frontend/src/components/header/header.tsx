import React from "react";
import { IHeaderLink } from "./header.interfaces";
import {
  Container,
  FlexContainer,
  Inner,
  LinkButton,
  Title,
} from "./header.styled";

export const Header: React.FC = ({ children }) => {
  return <Container> {children} </Container>;
};

export const HeaderInner: React.FC = ({ children }) => {
  return <Inner> {children} </Inner>;
};

export const HeaderFlex: React.FC = ({ children }) => {
  return <FlexContainer> {children} </FlexContainer>;
};

export const HeaderTitle: React.FC = ({ children }) => {
  return <Title> {children} </Title>;
};

export const HeaderLink: React.FC<IHeaderLink> = ({ children, to }) => {
  return <LinkButton to={to}> {children} </LinkButton>;
};
