import React from "react";
import { Header, HeaderInner, HeaderFlex, HeaderTitle } from "../components";
import { HeaderLink } from "../components/header/header";
import { useAuthContext } from "../store/context/auth/authContext";

const HeaderContainer: React.FC = () => {
  const { state } = useAuthContext();

  return (
    <Header>
      <HeaderInner>
        <HeaderFlex>
          <HeaderTitle> SCHEDULING SOFTWARE </HeaderTitle>
          <HeaderLink to="/login">
            {!state.isLoggedIn ? "LOGIN" : "LOGOUT"}
          </HeaderLink>
        </HeaderFlex>
      </HeaderInner>
    </Header>
  );
};

export default HeaderContainer;
