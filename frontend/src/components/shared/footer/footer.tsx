import React from "react";
import { IFooterLink } from "./footer.interfaces";
import { Container, Inner, SocialBox, Link } from "./footer.styled";

export const Footer: React.FC = ({ children }) => {
  return <Container> {children} </Container>;
};

export const FooterInner: React.FC = ({ children }) => {
  return <Inner> {children} </Inner>;
};

export const FooterSocialBox: React.FC = ({ children }) => {
  return <SocialBox> {children} </SocialBox>;
};

export const FooterLink = ({ children, href }: IFooterLink) => {
  return <Link href={href}> {children} </Link>;
};
