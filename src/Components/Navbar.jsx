import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { currentUser, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <Box
      w="100vw"
      h="60px"
      border="1px"
      borderColor="gray.400"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={7}
    >
      <Box display="flex" alignItems="center">
        <Image
          h="45px"
          src="https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png"
        ></Image>
        <Text ml="-15px">File Storage App</Text>
      </Box>
      <Box>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input type="tel" placeholder="Search File" w="40vw" />
        </InputGroup>
      </Box>
      <Box display="flex" gap={3} alignItems="center">
        <Text> {currentUser?.displayName}</Text>
        <Image
          src={currentUser?.photoURL}
          alt=""
          borderRadius="full"
          w={10}
          h={10}
        ></Image>
        <Box
          color="#718096"
          cursor="pointer"
          fontSize="14px"
          border="1px"
          borderRadius="10px"
          padding="5px"
          borderColor="#718096"
          onClick={handleLogOut}
        >
          Sign Out
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
