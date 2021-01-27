import React, { useState } from "react";
import { Box, Flex, Text, Image } from "rebass/styled-components";
import { Input, Label } from "@rebass/forms";
import { logAuth } from "../../utils/auth";
import planetImg from "../../images/image.png";

const Form: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const disabled = email === "" || password === "";

  const handleSignIn = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    logAuth(user, setError, setEmail, setPassword);
  };

  return (
    <Box
      as="form"
      method="post"
      maxWidth="900px"
      mx="auto"
      mt="5em"
      onSubmit={handleSignIn}
    >
      <Flex justifyItems="center" width="100%" justifyContent="center">
        <Flex flexDirection="column" width="50%">
          {error ? (
            <Box width="100%" mb="1.3em">
              <Text width="100%" color="red">
                {error}
              </Text>
            </Box>
          ) : null}
          <Box width="100%" mb="1.5em">
            <Label mb="0.5em"> EMAIL </Label>
            <Input
              type="text"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              sx={{ outline: "none" }}
            ></Input>
          </Box>
          <Box width="100%" mb="1.4em">
            <Label mb="0.5em"> PASSWORD </Label>
            <Input
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              sx={{ outline: "none" }}
            ></Input>
          </Box>
          <Box width="100%">
            <Input
              value="Sign In"
              type="submit"
              disabled={disabled}
              sx={{
                cursor: "pointer",
                ":disabled": {
                  opacity: "0.5",
                },
                ":hover": {
                  backgroundColor: "#3A2234",
                  color: "white",
                },
              }}
            />
          </Box>
          <Box width="100%">
            <Image src={planetImg} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Form;
