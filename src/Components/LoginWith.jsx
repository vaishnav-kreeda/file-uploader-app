import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const LoginWith = ({ src, name }) => {
  return (
    <>
      <Box
        w="110px"
        border="1px"
        h="33px"
        display="flex"
        alignItems="center"
        borderRadius="5px"
        borderColor="#718096"
        cursor="pointer"
        py={2}
      >
        <Image w={8} src={src}></Image>
        <Text color="#718096" fontSize="16px">
          {name}
        </Text>
      </Box>
    </>
  );
};

export default LoginWith;
