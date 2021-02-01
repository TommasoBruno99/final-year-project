import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
  color: white;
  width: 100%;
`;

export const Inner = styled.div`
  max-width: 1100px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 15px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const Title = styled.p`
  color: #3a2234;
  font-weight: 600;
  font-size: 25px;
`;

export const LinkButton = styled(Link)`
  color: #3a2234;
  font-weight: 600;
  padding: 7px 15px 7px 15px;
  border: 2px solid #3a2234;
  text-decoration: none;
  text-align: center;

  :last-child {
    margin-left: 1em;
  }

  :hover {
    cursor: pointer;
  }
`;
