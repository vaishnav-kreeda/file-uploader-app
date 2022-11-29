import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import { async } from "@firebase/util";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginWith from "../Components/LoginWith";
import { AuthContext } from "../Context/AuthContext";
import bg from "../Icons/bg.jpg";
import lsvg from "../Icons/loginsvg.svg";

const Login = () => {
  const { googleLogin, currentUser } = useContext(AuthContext);
  const handleLoginWithGoogle = async () => {
    try {
      await googleLogin();
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  return (
    <Box
      display="flex"
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      backgroundImage={bg}
      bgSize="cover"
      style={{ backgroundImage: "public/bg.jpg" }}
    >
      <Box
        display="flex"
        flexDir="row"
        justifyContent="center"
        w="80vw"
        backgroundColor="white"
        h="80vh"
        border="1px"
        borderRadius="20px"
        padding="20px"
      >
        <Box w="40vw" px={5}>
          <Text fontSize="25px" fontWeight="700" mt={10}>
            Wecome Back
          </Text>
          <Box mt={10}>
            <Input type="text" variant="outline" placeholder="Email" />

            <Input
              type="password"
              variant="outline"
              placeholder="Password"
              mt={5}
            />
            <Button w="full" mt={5}>
              Login
            </Button>
            <Text color="#718096" fontSize="14px" mt={2} ml={2}>
              Or Login With
            </Text>
          </Box>
          <Box display="flex" gap={5} mt={5} h="40px">
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
              onClick={handleLoginWithGoogle}
            >
              <Image
                w={8}
                src="https://img.icons8.com/color/90/null/google-logo.png"
              ></Image>
              <Text color="#718096" fontSize="18px">
                Google
              </Text>
            </Box>

            <LoginWith
              name="FaceBook"
              src="https://img.icons8.com/color/90/null/facebook-new.png"
            />
            <LoginWith
              name="GitHub"
              src="https://img.icons8.com/sf-regular-filled/48/null/github.png"
            />
          </Box>
        </Box>
        <Box>
          <Image src={lsvg} w="30vw" h="70vh" ml={5}></Image>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
