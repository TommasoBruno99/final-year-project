import styled from "styled-components/macro";

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 2em;
  width: 100%;
  max-width: 1100px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1em 0;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Name = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--orange-bg);
  margin: 0;
  margin-left: 1em;
`;
