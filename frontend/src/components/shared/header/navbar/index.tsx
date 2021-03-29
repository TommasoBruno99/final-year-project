import React from "react";
import {
  NavBarContainer,
  NavBarElementsWrapper,
  NavBarElement,
  NavBarInner,
  NavBarLogo,
  NavBarFa,
  NavBarElementClick,
} from "./navbar.styled";
import { FaBars } from "react-icons/fa";

type props = {
  toggle: (e: React.MouseEvent<HTMLElement>) => void;
  isLoggedIn: boolean;
  logout: (e: React.MouseEvent<HTMLElement>) => void;
};

const NavBar = ({ toggle, isLoggedIn, logout }: props) => {
  return (
    <NavBarContainer>
      <NavBarInner>
        <NavBarElementsWrapper>
          <NavBarLogo> HOLIDAY-NOW </NavBarLogo>
        </NavBarElementsWrapper>
        <NavBarElementsWrapper>
          {!isLoggedIn ? (
            <NavBarElement to="/"> LOGIN </NavBarElement>
          ) : (
            <NavBarElementClick onClick={logout}>LOGOUT</NavBarElementClick>
          )}
        </NavBarElementsWrapper>
        <NavBarFa onClick={toggle} data-testid="navbar-fa">
          <FaBars />
        </NavBarFa>
      </NavBarInner>
    </NavBarContainer>
  );
};

export default NavBar;
