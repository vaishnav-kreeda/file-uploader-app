import { Box, Image, Text } from "@chakra-ui/react";
import { async } from "@firebase/util";
import React from "react";
var fileDownload = require("js-file-download");
const File = ({ name, file, date }) => {
  console.log(file, name);
  const downloadFile = async (url) => {
    await fetch(url)
      .then((res) => res.blob())
      .then((res) => {
        fileDownload(res, name);
      });
  };
  return (
    <>
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
          <Text
            // textAlign="center"
            // alignItems="center"
            justifyContent="center"
            mt={2}
            w="70%"
            h="50px"
            overflow="hidden"
          >
            {name}
          </Text>
          {/* <Text ml="-150px">{date.toDate()}</Text> */}
          <Image
            cursor="pointer"
            w={12}
            onClick={() => downloadFile(file, name)}
            src="https://img.icons8.com/color/480/null/download-from-cloud.png"
          ></Image>
        </Box>
      </Box>
    </>
  );
};

export default File;
