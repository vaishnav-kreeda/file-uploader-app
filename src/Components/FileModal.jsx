import React, { useContext, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
import {
  arrayUnion,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { AuthContext } from "../Context/AuthContext";
import { async } from "@firebase/util";
const FileModal = () => {
  const { currentUser } = useContext(AuthContext);
  const [fileUrl, setFileUrl] = useState();
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [file, setFile] = useState();
  const fileHandler = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFileHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    const storageRef = ref(storage, file.name);

    uploadBytesResumable(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        console.log("File available at", downloadURL);
        setFileUrl(downloadURL);
        console.log(currentUser.uid);

        try {
          const res = await getDoc(doc(db, "usersFile", currentUser.uid));
          console.log(res);
          console.log(res.exists());
          if (!res.exists()) {
            console.log("not exist");
            await setDoc(doc(db, "usersFile", currentUser.uid), {
              Files: arrayUnion({
                id: uuid(),
                name: file.name,
                file: downloadURL,
                date: Timestamp.now(),
              }),
            });
            setLoading(false);
            onClose();
          } else {
            console.log(" exist");

            await updateDoc(doc(db, "usersFile", currentUser.uid), {
              Files: arrayUnion({
                id: uuid(),
                name: file.name,
                file: downloadURL,
                date: Timestamp.now(),
              }),
            });
            setLoading(false);
            onClose();
          }
        } catch (error) {
          console.log(error);
        }
      });
    });
  };
  return (
    <>
      <Button
        bgColor="#FFFFFF"
        fontSize="18px"
        fontWeight="600"
        color="#4284F3"
        ml={2}
        mt={1}
        onClick={onOpen}
      >
        Add File
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add File To Cloud</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input
              type="file"
              fontSize="14px"
              fontWeight="600"
              position="absolute"
              w="250px"
              pt="4px"
              ml={2}
              mt={1}
              onChange={fileHandler}
            ></Input>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={loading}
              //   spinner={<BeatLoader size={8} color="white" />}
              mr={3}
              onClick={uploadFileHandler}
            >
              Upload
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FileModal;
