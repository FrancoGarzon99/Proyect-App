import React from 'react';
import { Box, Button } from '@chakra-ui/core';
// import { AddIcon } from '@chakra-ui/icons';

const ButtonSubmit = () => {
  return (
    <>
      <Box>
        <Button w="100%" mt={10} bg="tomato" color="white" type="submit" _hover={{ bg: '#FF4F5A' }}>
          Registrarme
        </Button>
      </Box>
    </>
  );
};

export default ButtonSubmit;
