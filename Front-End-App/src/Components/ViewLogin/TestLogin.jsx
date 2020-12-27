import React from 'react';
import {
  Container,
  Center,
  Grid,
  Text,
  Box,
  Avatar,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/core';

// Component
const ViewLogin = () => {
  // Render
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        <Box w="100%" h="100vh">
          <Text>Bienvenido!</Text>
          <Box w="200px">
            <form>
              <FormControl>
                <Input name="email" type="email" placeholder="Email" />
              </FormControl>
              <FormControl>
                <Input name="password" type="password" placeholder="Password" />
              </FormControl>
              <Button mt={4} colorScheme="teal" type="submit">
                Entrar
              </Button>
            </form>
          </Box>
        </Box>
        <Box w="100%" bg="blue.500" h="100vh">
          <Center>IMAGEN</Center>
        </Box>
      </Grid>
    </>
  );
};
export default ViewLogin;
