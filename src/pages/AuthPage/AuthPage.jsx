import { Box, Center, Container, Flex, Image, VStack } from "@chakra-ui/react";
import React from "react";
import AuthForm from "../Components/AuthForm/AuthForm";



const AuthPage = () => {
  return (
    <div>
      <Flex
        minH={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        px={4}
      >
        <Container maxW={"container.md"} padding={0}>
          {/* left handside */}

         <Box display={{base:'none',md:'block'}}>
          <Image />
          {/* right side */}
          <VStack spacing={4} align={"stretch"}>
        <AuthForm/>

          </VStack>
         </Box>
        </Container>
      </Flex>
    </div>
  );
};

export default AuthPage;
