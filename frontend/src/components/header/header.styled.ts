import styled from "styled-components/macro";
import { Link } from "rebass/styled-components";

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
