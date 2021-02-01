import styled from "styled-components/macro";

export const Container = styled.form`
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 5em;
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
  margin-bottom: 0.5em;
  width: 100%;
  color: #3a2234;
  font-weight: 600;
`;

export const Input = styled.input`
  box-sizing: border-box;
  outline: none;
  color: black;
  background-color: transparent;
  width: 100%;
  padding: 5px;
  border: 1px solid #3a2234;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid #3a2234;
  background: transparent;
  padding: 5px;
  width: 100%;
  :disabled {
    opacity: "0.5";
  }
  :hover {
    background-color: #3a2234;
    color: white;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
