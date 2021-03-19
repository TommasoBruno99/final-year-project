import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const SideBarContainer = styled.div<{ isToggled: boolean }>`
  position: absolute;
  display: flex;
  top: ${(props) => (props.isToggled ? "0" : "-100%")};
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  background-color: #000;
`;

export const SideBarInner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SideBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const SideBarElement = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1em;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export const SideBarClose = styled.div`
  position: absolute;
  font-size: 2rem;
  top: 0.5em;
  right: 0.5em;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: lightgray;
  }
`;
