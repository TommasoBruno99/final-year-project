import styled from "styled-components/macro";

export const FormContainer = styled.form`
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10em;
`;

export const FormInner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  justify-items: center;
`;

export const FormInputsInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const FormInnerBox = styled.div<{ marginBottom?: string }>`
  width: 100%;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
`;

export const FormLabel = styled.label`
  color: var(--white-bg);
  font-weight: 400;
`;

export const FormInput = styled.input`
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

export const FormButton = styled.button`
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
