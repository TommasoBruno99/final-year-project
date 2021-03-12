import styled from "styled-components/macro";

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 2em;
  width: 100%;
  max-width: 1100px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1em;
`;

export const FlexText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Name = styled.h1`
  font-weight: 600;
  color: black;
  padding-left: 2em;
  margin: 0;
`;

export const Title = styled.h2`
  font-weight: 600;
  color: gray;
  margin: 0;
`;
