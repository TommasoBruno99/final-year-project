import styled from "styled-components/macro";

export const Container = styled.div<{ isToggled: string }>`
  position: absolute;
  display: ${({ isToggled }) => (isToggled ? "flex" : "none")};
  z-index: 2;
  left: 5%;
  bottom: ${({ isToggled }) => (isToggled ? "13%" : "-5%")};
  width: 20%;
  background-color: var(--white-bg);
  border: 1px solid var(--dark-bg);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 1.5em;
  transition: bottom 1s ease-in;
  animation: popup 1s;

  @keyframes popup {
    from {
      bottom: -2%;
    }
    to {
      bottom: 13%;
    }
  }
`;

export const Message = styled.h2`
  font-size: 1.5rem;
  color: var(--dark-bg);
  text-align: center;
`;
