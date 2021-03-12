import styled from "styled-components/macro";

export const Container = styled.form`
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10em;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  justify-items: center;
`;

export const InputsInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

type InnerBoxProps = {
  marginBottom?: string;
};
export const InnerBox = styled.div<InnerBoxProps>`
  width: 100%;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
`;

export const Label = styled.label`
  color: var(--white-bg);
  font-weight: 400;
`;

export const Input = styled.input`
  margin-top: 1em;
  box-sizing: border-box;
  outline: none;
  color: var(--white-bg);
  background-color: transparent;
  width: 100%;
  padding: 1em;
  border: 2px solid var(--dark-bg);
  border-radius: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid var(--orange-bg);
  border-radius: 10px;
  background: var(--dark-bg);
  padding: 0.8em;
  width: 100%;
  color: var(--white-bg);
  font-weight: 600;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background-color: var(--orange-bg);
    color: var(--dark-bg);
    border-color: var(--dark-bg);
  }
`;
