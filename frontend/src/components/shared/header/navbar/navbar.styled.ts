import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4em;
  background-color: black;
  font-family: "Ubuntu" sans-serif;
`;

export const NavBarInner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
`;

export const NavBarLogo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

export const NavBarFa = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    color: lightgray;
  }

  @media screen and (min-width: 780px) {
    display: none;
  }
`;

export const NavBarElementsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 100%;
  justify-content: space-between;
`;

export const NavBarElement = styled(Link)`
  display: none;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;

  &:active {
    border-bottom-color: red;
  }

  @media screen and (min-width: 780px) {
    display: block;
  }
`;
