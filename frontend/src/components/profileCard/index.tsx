import React from "react";
import { Flex, Box, Image } from "rebass/styled-components";

const ProfileCard: React.FC = () => {
  return (
    <Flex flexDirection="column" justifyContent="center">
      <Box width="100%">
        <Image />
      </Box>
      <Box width="100%"></Box>
      <Box width="100%"></Box>
    </Flex>
  );
};

export default ProfileCard;
