import styled from "styled-components/macro";

export const OptionsContainer = styled.div`
  max-width: 1100px;
  width: 90%;
  padding: 2em;
  margin-top: 1.5em;
  margin-right: auto;
  margin-left: auto;
`;

export const OptionsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const OptionColumn = styled.div`
  width: 90%;
  border-radius: 10px;
  max-height: 300px;
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f24;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 1em;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Option = styled.img`
  display: block;
  max-width: 100%;
  max-height: 80%;
  line-height: 1.1;
`;

export const OptionDescription = styled.h3`
  margin-right: 0.5em;
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
`;
