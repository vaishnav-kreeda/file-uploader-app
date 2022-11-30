import { Box, Image, Text } from "@chakra-ui/react";
import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { db } from "../firebase";
import File from "./File";

const UsersFiles = () => {
  const [file, setFiles] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getFiles = () => {
      const unSub = onSnapshot(doc(db, "usersFile", currentUser.uid), (doc) => {
        doc.exists() && setFiles(doc.data().Files);
        // setFiles(doc.data().Files);
        console.log(doc.data().Files);
      });
      console.log(unSub);
      return () => {
        unSub();
      };
    };
    currentUser.uid && getFiles();
  }, [currentUser.uid]);

  return (
    <Box bgColor="#F9F9F9" w="full" h="89vh">
      <Box display="flex" justifyContent="center" mt={2}>
        <Text fontWeight="600" fontSize="23px">
          Easy and secure access to your content
        </Text>
      </Box>
      <Box mx={10} mt={10} display="flex" justifyContent="space-between">
        <Text>Files Name</Text>

        <Text>Download</Text>
      </Box>
      {file?.map((file) => (
        <File
          key={file.id}
          name={file.name}
          file={file.file}
          date={file.date}
        ></File>
      ))}
    </Box>
  );
};

export default UsersFiles;
