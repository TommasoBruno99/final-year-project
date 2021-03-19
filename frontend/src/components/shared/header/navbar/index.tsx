import React from "react";
import {
  NavBarContainer,
  NavBarElementsWrapper,
  NavBarElement,
  NavBarInner,
  NavBarLogo,
  NavBarFa,
} from "./navbar.styled";
import { FaBars } from "react-icons/fa";

type props = {
  toggle: (e: React.MouseEvent<HTMLElement>) => void;
};

const NavBar = ({ toggle }: props) => {
  return (
    <NavBarContainer>
      <NavBarInner>
        <NavBarElementsWrapper>
          <NavBarLogo> HOLIDAY-NOW </NavBarLogo>
        </NavBarElementsWrapper>
        <NavBarElementsWrapper>
          <NavBarElement to="/"> LOGIN </NavBarElement>
        </NavBarElementsWrapper>
        <NavBarFa onClick={toggle}>
          <FaBars />
        </NavBarFa>
      </NavBarInner>
    </NavBarContainer>
  );
};

export default NavBar;
