import styled from "styled-components/macro";

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  background-color: var(--dark-bg);
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
  margin: auto;
`;

export const SocialBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 1rem;
  margin: 0 0.5em;
  color: var(--white-bg);
`;
