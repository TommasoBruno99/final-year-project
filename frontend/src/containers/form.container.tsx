import React, { useState } from "react";
import {
  Form,
  FormButton,
  FormImage,
  FormInner,
  FormInput,
  FormInputBox,
  FormInputsInner,
  FormLabel,
} from "../components";
import planetImg from "../images/image.png";
import { logAuth } from "../store/actions/auth/login";
import { useAuthContext } from "../store/context/auth/authContext";

const FormContainer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { state, dispatch } = useAuthContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logAuth({ email, password }, setEmail, setPassword, dispatch);
  };

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <FormInner>
        <FormInputsInner>
          {state.error ? state.error : null}
          <FormInputBox marginBottom="1.5em">
            <FormLabel> EMAIL </FormLabel>
            <FormInput
              name="email"
              type="text"
              value={email}
              placeholder="Insert email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormInputBox>
          <FormInputBox marginBottom="1.4em">
            <FormLabel> PASSWORD </FormLabel>
            <FormInput
              name="password"
              type="password"
              value={password}
              placeholder="Insert password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormInputBox>
          <FormInputBox>
            <FormButton disabled={state.isLoading}>
              {state.isLoading ? "LOADING" : "SIGN IN"}{" "}
            </FormButton>
          </FormInputBox>
          <FormInputBox>
            <FormImage src={planetImg} />
          </FormInputBox>
        </FormInputsInner>
      </FormInner>
    </Form>
  );
};

export default FormContainer;
