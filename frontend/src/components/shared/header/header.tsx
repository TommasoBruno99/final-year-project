import React, { FC } from "react";
import { IHeaderButton, IHeaderLink } from "./header.interfaces";
import { Button, Container, Inner, LinkButton, Title } from "./header.styled";

export const Header: FC = ({ children }) => {
  return <Container> {children} </Container>;
};

export const HeaderInner: FC = ({ children }) => {
  return <Inner> {children} </Inner>;
};

export const HeaderTitle: FC = ({ children }) => {
  return <Title> {children} </Title>;
};

export const HeaderLink = ({ children, to }: IHeaderLink) => {
  return <LinkButton to={to}> {children} </LinkButton>;
};

export const HeaderButton = ({ children, onClick }: IHeaderButton) => {
  return <Button onClick={onClick}> {children} </Button>;
};
