import { Box } from "@chakra-ui/react";
import React from "react";
import FileModal from "../Components/FileModal";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import UsersFiles from "../Components/UsersFiles";

const Storage = () => {
  return (
    <Box w="100%">
      <Navbar />
      <Box display="flex">
        <SideBar />
        <UsersFiles />
      </Box>
    </Box>
  );
};

export default Storage;
