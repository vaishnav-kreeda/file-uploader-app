import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const UsersFiles = () => {
  return (
    <Box bgColor="#F9F9F9" w="full" h="89vh">
      <Box display="flex" justifyContent="center" mt={2}>
        <Text fontWeight="600" fontSize="23px">
          Easy and secure access to your content
        </Text>
      </Box>
      <Box mx={10} mt={10} display="flex" justifyContent="space-between">
        <Text>Files Name</Text>
        <Text>Upload Date</Text>
        <Text>Download</Text>
      </Box>
      <Box mx={5} mt={2}>
        <Box
          h="50px"
          border="1px"
          borderRadius="10px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={10}
        >
          <Text>File Name</Text>
          <Text>29 Nov 2022</Text>
          <Image
            w={12}
            src="https://img.icons8.com/color/480/null/download-from-cloud.png"
          ></Image>
        </Box>
      </Box>
    </Box>
  );
};

export default UsersFiles;
