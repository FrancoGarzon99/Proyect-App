import React from 'react';
import { Center, Text, Box, Stack } from '@chakra-ui/core';
import Inputs from './Inputs';
import ButtonSubmit from './ButtonSubmit';

// Component
const SignUp = () => {
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
        <Text fontSize="3xl">Se parte de nuestro equipo! </Text>
        <Box w="100%">
          <form>
            {/* Inputs Form */}
            <Stack spacing={5}>
              <Inputs />
            </Stack>
            {/* Submit Button */}
            <ButtonSubmit />
          </form>
        </Box>
      </Stack>
    </Center>
  );
};

export default SignUp;
