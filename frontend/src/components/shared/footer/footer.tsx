import React from "react";
import { Container, Inner, SocialBox } from "./footer.styled";

export const Footer: React.FC = ({ children }) => {
  return <Container> {children} </Container>;
};

export const FooterInner: React.FC = ({ children }) => {
  return <Inner> {children} </Inner>;
};

export const FooterSocialBox: React.FC = ({ children }) => {
  return <SocialBox> {children} </SocialBox>;
};
