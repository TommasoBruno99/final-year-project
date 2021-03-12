import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  background-color: var(--dark-bg);
  color: white;
  width: 100%;
`;

export const Inner = styled.div`
  display: flex;
  max-width: 1100px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
  padding: 1em;
`;

export const Title = styled.p`
  color: var(--orange-bg);
  font-weight: 600;
  font-size: 1.5rem;
`;

export const LinkButton = styled(Link)`
  color: var(--white-bg);
  font-weight: 600;
  padding: 0.6em 1em;
  border: 2px solid var(--blue-bg);
  border-radius: 10px;
  text-decoration: none;
  text-align: center;

  :last-child {
    margin-left: 1em;
  }

  :hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  background: none;
  color: var(--white-bg);
  font-weight: 600;
  padding: 0.6em 1em;
  border: 2px solid var(--blue-bg);
  border-radius: 10px;
  text-decoration: none;
  text-align: center;

  :last-child {
    margin-left: 1em;
  }

  :hover {
    cursor: pointer;
  }
`;
