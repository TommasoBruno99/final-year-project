import styled from "styled-components/macro";

export const ErrorContainer = styled.div<{ isToggled: string }>`
  position: absolute;
  display: ${({ isToggled }) => (isToggled ? "flex" : "none")};
  z-index: 2;
  left: 10%;
  bottom: -15%;
  width: 80%;
  background-color: var(--white-bg);
  border: 1px solid var(--dark-bg);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 1em 2em;
  transition: bottom 1s ease-in;
  animation: popup 3s;

  @keyframes popup {
    0% {
      bottom: -15%;
    }
    50% {
      bottom: 15%;
    }

    100% {
      bottom: -15%;
    }
  }
`;

export const ErrorMessage = styled.h2`
  font-size: 1.5rem;
  color: var(--dark-bg);
  text-align: center;
`;
