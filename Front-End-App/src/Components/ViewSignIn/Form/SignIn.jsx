import React from 'react';
import {
  Center,
  Text,
  Box,
  Button,
  Input,
  Stack,
  InputLeftElement,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/core';
import { ArrowForwardIcon, EmailIcon, UnlockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

// Component
const SignIn = () => {
  // FormData
  const [formData, setFormData] = React.useState({});
  const onForm = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // View Password
  const [showHiden, setShowHiden] = React.useState(false);
  const viewPass = () => {
    setShowHiden(!showHiden);
  };

  // Render
  return (
    <Center>
      <Stack
        spacing={10}
        w="450px"
        h="300px"
        d="flex"
        justify="center"
        flexDirection="column"
        alignItems="center"
      >
        <Text
          fontSize="3xl"
          style={{ fontFamily: 'poppins', fontWeight: '700', letterSpacing: '3px' }}
        >
          ¡BIENVENIDO!
        </Text>
        <Box w="100%">
          <form onSubmit={onForm}>
            <Stack spacing={5}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="gray.300" />}
                  p={6}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  size="lg"
                  boxShadow="base"
                  onChange={onForm}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<UnlockIcon color="gray.300" />}
                  p={6}
                />
                <Input
                  name="password"
                  type={showHiden ? 'text' : 'password'}
                  placeholder="Contraseña"
                  boxShadow="base"
                  size="lg"
                  onChange={onForm}
                />
                <InputRightElement p={6}>
                  <Button h="1.7rem" size="md" onClick={viewPass} variant="ghost">
                    {showHiden ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Stack>
            <Box>
              <Button
                w="100%"
                mt={10}
                colorScheme="purple"
                type="submit"
                rightIcon={<ArrowForwardIcon />}
                _hover={{ bg: '#6654FF' }}
              >
                Iniciar sesión
              </Button>
            </Box>
          </form>
        </Box>
      </Stack>
    </Center>
  );
};

export default SignIn;
