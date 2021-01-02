import React from 'react';
import { Grid, Box } from '@chakra-ui/core';
import SignUp from './Form/SignUp';
import CreateUserBackground from './BackgroundImg/Image';

// Component
const ContainSignUp = () => {
  // Render
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={1}>
        {/* Form Left */}
        <SignUp />
        {/* Image Rigth */}
        <Box w="100%" h="100vh" bg="tomato">
          <CreateUserBackground />
        </Box>
      </Grid>
    </>
  );
};
export default ContainSignUp;
