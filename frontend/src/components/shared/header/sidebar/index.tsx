import React from "react";
import { FaTimes } from "react-icons/fa";
import { useAuth } from "../../../../hooks";
import { logout } from "../../../../store/actions";
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
};

const SideBar = ({ isToggled, toggle }: props) => {
  const { state, dispatch } = useAuth();

  const logUserOut = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    logout(dispatch);
    toggle(e);
  };

  return (
    <SideBarContainer isToggled={isToggled} data-testid="sidebar-container">
      <SideBarClose onClick={toggle} data-testid="sidebar-icon">
        <FaTimes />
      </SideBarClose>
      <SideBarInner>
        <SideBarWrapper>
          {!state.isLoggedIn ? (
            <SideBarElement to="/login"> Login </SideBarElement>
          ) : (
            <SideBarElementClick onClick={logUserOut}>
              Logout
            </SideBarElementClick>
          )}
        </SideBarWrapper>
      </SideBarInner>
    </SideBarContainer>
  );
};

export default SideBar;
