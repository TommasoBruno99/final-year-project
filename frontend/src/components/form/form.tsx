import React from "react";
import {
  IForm,
  IFormImage,
  IFormInput,
  IFormInputsBox,
} from "./form.interfaces";
import {
  Button,
  Container,
  Image,
  Inner,
  InnerBox,
  Input,
  InputsInner,
  Label,
} from "./form.styled";

export const Form: React.FC<IForm> = ({ children, method, onSubmit }) => {
  return (
    <Container method={method} onSubmit={onSubmit}>
      {children}
    </Container>
  );
};

export const FormInner: React.FC = ({ children }) => {
  return <Inner> {children} </Inner>;
};

export const FormInputsInner: React.FC = ({ children }) => {
  return <InputsInner> {children} </InputsInner>;
};

export const FormInputBox: React.FC<IFormInputsBox> = ({
  children,
  marginBottom,
}) => {
  return <InnerBox marginBottom={marginBottom}> {children} </InnerBox>;
};

export const FormLabel: React.FC = ({ children }) => {
  return <Label> {children}</Label>;
};

export const FormInput: React.FC<IFormInput> = ({
  value,
  placeholder,
  type,
  name,
  onChange,
}) => {
  return (
    <Input
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export const FormButton: React.FC = ({ children }) => {
  return <Button> {children}</Button>;
};

export const FormImage: React.FC<IFormImage> = ({ src }) => {
  return <Image src={src} />;
};
