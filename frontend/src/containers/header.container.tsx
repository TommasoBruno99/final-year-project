import React from "react";
import { Header, HeaderInner, HeaderFlex, HeaderTitle } from "../components";
import { HeaderLink } from "../components/header/header";

const HeaderContainer: React.FC = () => {
  return (
    <Header>
      <HeaderInner>
        <HeaderFlex>
          <HeaderTitle> SCHEDULING SOFTWARE </HeaderTitle>
          <HeaderLink to="/login"> LOGIN </HeaderLink>
        </HeaderFlex>
      </HeaderInner>
    </Header>
  );
};

export default HeaderContainer;
