import React from "react";
import { FaTimes } from "react-icons/fa";
import {
  SideBarContainer,
  SideBarInner,
  SideBarWrapper,
  SideBarElement,
  SideBarClose,
} from "./sidebar.styled";

type props = {
  isToggled: boolean;
  toggle: (e: React.MouseEvent<HTMLElement>) => void;
};

const SideBar = ({ isToggled, toggle }: props) => {
  return (
    <SideBarContainer isToggled={isToggled}>
      <SideBarClose onClick={toggle}>
        <FaTimes />
      </SideBarClose>
      <SideBarInner>
        <SideBarWrapper>
          <SideBarElement to="/login"> Login </SideBarElement>
        </SideBarWrapper>
      </SideBarInner>
    </SideBarContainer>
  );
};

export default SideBar;
