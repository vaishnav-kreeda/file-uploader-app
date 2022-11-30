import {
  Box,
  Button,
  Image,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import FileModal from "./FileModal";

const Sections = ({ name, src }) => {
  return (
    <Box
      display="flex"
      border="1px"
      cursor="pointer"
      borderColor="#718096"
      color="#718096"
      borderRadius="10px"
      p={1}
      mt={3}
    >
      <Image w={6} src={src}></Image>
      <Text fontWeight="500" fontSize="15px" ml={2}>
        {name}
      </Text>
    </Box>
  );
};

const SideBar = () => {
  const [file, setFile] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [uploading, setUploading] = useState();
  const handleFile = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };
  return (
    <Box
      w="22vw"
      h="89vh"
      borderRight="1px"
      borderColor="gray.400"
      display="flex"
      flexDir="column"
      alignItems="center"
      pl={5}
      pt={7}
      pr={3}
    >
      <Box
        w="120px"
        border="1px"
        px={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="10px"
        cursor="pointer"
      >
        <Box fontSize="30px" color="#4284F3">
          +
        </Box>

        {/* <Button
          bgColor="#FFFFFF"
          fontSize="18px"
          fontWeight="600"
          color="#4284F3"
          ml={2}
          mt={1}
          onClick={onOpen}
        > */}
        {/* Add File
        </Button> */}
        <FileModal></FileModal>
      </Box>
      <Box w="full">
        <Box
          display="flex"
          border="1px"
          cursor="pointer"
          borderColor="skyblue"
          borderRadius="10px"
          p={1}
          mt={5}
        >
          <Image
            w={6}
            src="https://img.icons8.com/color/480/null/file.png"
          ></Image>
          <Text fontWeight="500" fontSize="15px" ml={2}>
            My Files
          </Text>
        </Box>
        <Sections
          name="Shared Files"
          src="https://img.icons8.com/color/480/null/send-file.png"
        ></Sections>

        <Sections
          name="Favorite"
          src="https://img.icons8.com/color/96/null/mark-as-favorite.png"
        ></Sections>

        <Sections
          name="Deleted File"
          src="https://img.icons8.com/color/96/null/delete-file.png"
        ></Sections>

        <Sections
          name="settings"
          src="https://img.icons8.com/color/96/null/project-setup.png"
        ></Sections>
      </Box>
    </Box>
  );
};

export default SideBar;
