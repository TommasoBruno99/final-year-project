import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormError } from "../components/form";
import {
  Form,
  FormInner,
  FormTitle,
  FormInput,
  FormSubmit,
  FormDescription,
  FormLink,
} from "../components";
import { LOGIN_API } from "../constants/api";

const LoginFormContainer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const webHistory = useHistory<History>();

  const disabled = email === "" || password === "";

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    await fetch(LOGIN_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.data.error) throw new Error(result.data.error.message);
        localStorage.setItem("access_token", result.data.access_token);
        webHistory.push("/home");
      })
      .catch((err) => {
        setError(err.message);
        setEmail("");
        setPassword("");
      });
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
