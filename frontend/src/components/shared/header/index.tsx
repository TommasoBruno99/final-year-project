import React, { useState } from "react";
import NavBar from "./navbar";
import SideBar from "./sidebar";

const Header: React.FC = () => {
  const [isToggled, setToggle] = useState(false);

  const toggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setToggle((isToggled) => !isToggled);
  };

  return (
    <>
      <SideBar toggle={toggle} isToggled={isToggled} />
      <NavBar toggle={toggle} />
    </>
  );
};

export default Header;
