import React from "react";
import { FaTimes } from "react-icons/fa";
import { useAuth } from "../../../../hooks";
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
  const { state } = useAuth();
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
                My Schedules
              </SideBarElement>
              {state.user?.role === "ADMIN" ? (
                <SideBarElement to="/requested-schedules" onClick={toggle}>
                  Employee Schedules
                </SideBarElement>
              ) : null}
            </>
          )}
        </SideBarWrapper>
      </SideBarInner>
    </SideBarContainer>
  );
};

export default SideBar;
