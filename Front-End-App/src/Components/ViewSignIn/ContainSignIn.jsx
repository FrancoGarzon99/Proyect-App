import React from 'react';
import { Grid, Box } from '@chakra-ui/core';
import SignIn from './Form/SignIn';
import WelcomeBackground from './BackgroundImg/Image';

// Component
const ContainSignIn = () => {
  // Render
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        {/* Form Left */}
        <SignIn />
        {/* Image Right */}
        <Box w="100%" h="100vh" bg="purple.500">
          <WelcomeBackground />
        </Box>
      </Grid>
    </>
  );
};
export default ContainSignIn;
