import React from "react";
import {
  Column,
  Container,
  Inner,
  Label,
  Row,
  Title,
} from "./profile_card.styled";

export const ProfileCard: React.FC = ({ children }) => {
  return <Container> {children} </Container>;
};

export const ProfileCardInner: React.FC = ({ children }) => {
  return <Inner> {children} </Inner>;
};

export const ProfileCardColumn: React.FC = ({ children }) => {
  return <Column> {children} </Column>;
};

export const ProfileCardRow: React.FC = ({ children }) => {
  return <Row> {children} </Row>;
};

export const ProfileCardLabel: React.FC = ({ children }) => {
  return <Label> {children} </Label>;
};

export const ProfileCardTitle: React.FC = ({ children }) => {
  return <Title> {children} </Title>;
};
