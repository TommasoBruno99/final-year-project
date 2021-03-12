import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 5em;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 1em;
`;

export const Label = styled.p`
  color: gray;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Title = styled.p`
  color: black;
  font-weight: 600;
  text-transform: uppercase;
`;
