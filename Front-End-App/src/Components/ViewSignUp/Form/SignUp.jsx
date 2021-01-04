import React from 'react';
import { Center, Text, Box, Stack } from '@chakra-ui/core';
import Inputs from './Inputs';
import ButtonSubmit from './ButtonSubmit';

// Component
const SignUp = () => {
  // Form Data
  const [formData, setFormData] = React.useState({});
  const onForm = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        {/* Title */}
        <Text
          fontSize="3xl"
          style={{
            fontFamily: 'poppins',
            fontWeight: '700',
            letterSpacing: '3px',
            textAlign: ' center',
          }}
        >
          Súmate a nuestro equipo
        </Text>
        <Box w="100%">
          <form onSubmit={onForm}>
            {/* Inputs Form */}
            <Stack spacing={5}>
              <Inputs onForm={onForm} />
            </Stack>
            {/* Submit Button */}
            <ButtonSubmit />
          </form>
          <p>{formData.usuario}</p>
          <p>{formData.email}</p>
          <p>{formData.password}</p>
          <p>{formData.passwordConfirm}</p>
        </Box>
      </Stack>
    </Center>
  );
};

export default SignUp;
