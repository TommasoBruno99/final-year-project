import React from "react";
import { FaTimes } from "react-icons/fa";
import {
  SideBarContainer,
  SideBarInner,
  SideBarWrapper,
  SideBarElement,
  SideBarClose,
  SideBarElementClick,
} from "./sidebar.styled";

type props = {
  isToggled: boolean;
  toggle: (e: React.MouseEvent<HTMLElement>) => void;
  isLoggedIn: boolean;
  logout: (e: React.MouseEvent<HTMLElement>) => void;
};

const SideBar = ({ isToggled, toggle, isLoggedIn, logout }: props) => {
  return (
    <SideBarContainer isToggled={isToggled} data-testid="sidebar-container">
      <SideBarClose onClick={toggle} data-testid="sidebar-icon">
        <FaTimes />
      </SideBarClose>
      <SideBarInner>
        <SideBarWrapper>
          {!isLoggedIn ? (
            <SideBarElement to="/login"> Login </SideBarElement>
          ) : (
            <>
              <SideBarElementClick onClick={logout}>Logout</SideBarElementClick>
              <SideBarElement to="/my-schedules" onClick={toggle}>
                {" "}
                My Schedules{" "}
              </SideBarElement>
            </>
          )}
        </SideBarWrapper>
      </SideBarInner>
    </SideBarContainer>
  );
};

export default SideBar;
