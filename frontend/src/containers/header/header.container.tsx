import React from "react";
import { logout } from "../../store/actions/auth/logout";
import { useAuth } from "../../hooks";
import {
  Header,
  HeaderInner,
  HeaderTitle,
  HeaderButton,
  HeaderLink,
} from "../../components";

const HeaderContainer: React.FC = () => {
  const {
    state: { isLoggedIn },
    dispatch,
  } = useAuth();

  const logUserOut = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    logout(dispatch);
  };

  return (
    <Header>
      <HeaderInner>
        <HeaderTitle> SCHEDULING SOFTWARE </HeaderTitle>
        {!isLoggedIn ? (
          <HeaderLink to="/login">LOGIN</HeaderLink>
        ) : (
          <HeaderButton onClick={(e) => logUserOut}> LOGOUT</HeaderButton>
        )}
      </HeaderInner>
    </Header>
  );
};

export default HeaderContainer;
