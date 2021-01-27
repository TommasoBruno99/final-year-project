import React from "react";
import { Link } from "react-router-dom";
import { Box as Container, Flex, Text } from "rebass/styled-components";
import { logoutAuth } from "../../utils/auth";
import { LinkButton, ButtonStyled } from "./header.styled";

interface IHeader {
  user: Object | null;
}

const Header: React.FC<IHeader> = ({ user }) => {
  return (
    <Flex justifyContent="center" bg="transparent" color="white">
      <Container
        sx={{ maxWidth: 1100, mx: "auto", width: "100%", padding: "15px" }}
      >
        <Flex px={2} width="100%" alignItems="center">
          <Text color="#3A2234" fontWeight="600" fontSize="25px">
            SCHEDULING SOFTWARE
          </Text>
          <Container mx="auto" />
          {!user ? (
            <Link component={LinkButton} to="/login">
              LOGIN
            </Link>
          ) : (
            <Flex justifyContent="space-evenly">
              <Link component={LinkButton} to="/profile">
                PROFILE
              </Link>
              <ButtonStyled onClick={logoutAuth}>LOGOUT</ButtonStyled>
            </Flex>
          )}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
