import styled from "styled-components/macro";

export const ProfileCardContainer = styled.div`
  max-width: 800px;
  width: 90%;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 10px;
`;

export const ProfileCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const ProfileCardDescription = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--dark-bg);
`;

export const ProfileCardDays = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: var(--dark-bg);
`;
