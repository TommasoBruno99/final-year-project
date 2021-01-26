import React, { useState } from "react";
import {
  Form,
  FormInner,
  FormTitle,
  FormInput,
  FormSubmit,
  FormDescription,
  FormLink,
  FormError,
} from "../components";
import { logAuth } from "../utils/auth";

const LoginFormContainer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const disabled = email === "" || password === "";

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    logAuth(user, setError, setEmail, setPassword);
  };

  return (
    <Form>
      <FormInner method="POST" onSubmit={(e) => handleSignIn(e)}>
        <FormTitle> Login </FormTitle>
        <FormInput
          type="text"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormSubmit disable={disabled}> Sign in </FormSubmit>
        <FormDescription>
          Do not have an account?
          <FormLink to="register"> Register </FormLink>
        </FormDescription>
        {error ? <FormError>{error}</FormError> : null}
      </FormInner>
    </Form>
  );
};

export default LoginFormContainer;
