import React from "react";
import {
  Footer,
  FooterInner,
  FooterSocialBox,
  FooterLink,
} from "../../components";

const FooterContainer: React.FC = () => {
  return (
    <Footer>
      <FooterInner>
        <FooterSocialBox>
          <FooterLink href="www.google.com"> Linkedin </FooterLink>
          <FooterLink href="www.google.com"> Linkedin </FooterLink>
        </FooterSocialBox>

        <FooterSocialBox>
          <FooterLink href="www.google.com"> Linkedin </FooterLink>
          <FooterLink href="www.google.com"> Linkedin </FooterLink>
        </FooterSocialBox>
      </FooterInner>
    </Footer>
  );
};

export default FooterContainer;
