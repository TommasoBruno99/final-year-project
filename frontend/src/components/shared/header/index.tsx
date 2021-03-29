import React, { useState } from "react";
import { useAuth } from "../../../hooks";
import { logout } from "../../../store/actions";
import NavBar from "./navbar";
import SideBar from "./sidebar";

const Header: React.FC = () => {
  const [isToggled, setToggle] = useState(false);
  const { state, dispatch } = useAuth();

  const toggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setToggle((isToggled) => !isToggled);
  };

  const logUserOut = (
    e: React.MouseEvent<HTMLElement>,
    isSidebar?: boolean
  ) => {
    e.preventDefault();
    logout(dispatch);
    if (isSidebar) toggle(e);
  };

  return (
    <>
      <SideBar
        toggle={toggle}
        isToggled={isToggled}
        isLoggedIn={state.isLoggedIn}
        logout={(e: React.MouseEvent<HTMLElement>, isSideBar = true) =>
          logUserOut(e, isSideBar)
        }
      />
      <NavBar
        toggle={toggle}
        isLoggedIn={state.isLoggedIn}
        logout={logUserOut}
      />
    </>
  );
};

export default Header;
