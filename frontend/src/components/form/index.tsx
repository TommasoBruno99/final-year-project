import React, { useState } from "react";
import {
  FormContainer,
  FormTitle,
  FormInner,
  FormInnerBox,
  FormInputsInner,
  FormInput,
  FormButton,
  FormLabel,
} from "./form.styled";
import { useAuth } from "../../hooks";
import { logAuth } from "../../store/actions";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { state, dispatch } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logAuth({ email, password }, setEmail, setPassword, dispatch);
  };

  const erroStyle = {
    color: "red",
  };

  return (
    <FormContainer method="post" onSubmit={handleSubmit}>
      <FormInner>
        <FormInputsInner>
          <FormTitle> LOGIN </FormTitle>
          {state.error ? <p style={erroStyle}> {state.error}</p> : null}
          <FormInnerBox marginBottom="1.5em">
            <FormLabel> EMAIL </FormLabel>
            <FormInput
              name="email"
              type="text"
              value={email}
              placeholder="Insert email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </FormInnerBox>
          <FormInnerBox marginBottom="1.4em">
            <FormLabel> PASSWORD </FormLabel>
            <FormInput
              name="password"
              type="password"
              value={password}
              placeholder="Insert password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </FormInnerBox>
          <FormInnerBox>
            <FormButton disabled={state.isLoading}>
              {state.isLoading ? "LOADING" : "SIGN IN"}
            </FormButton>
          </FormInnerBox>
        </FormInputsInner>
      </FormInner>
    </FormContainer>
  );
};

export default Form;
