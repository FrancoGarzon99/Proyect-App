import React from 'react';
import { Stack, Center } from '@chakra-ui/core';
// import CreateUser from '../../../static/AddUser/undraw_Add_user_re_5oib.svg';
// import CreateUser2 from '../../../static/AddUser/undraw_Add_friends_wa2a.svg';
import CreateUser3 from '../../../static/AddUser/Mobile-login.svg';

const CreateUserBackground = () => {
  return (
    <Center>
      <Stack w="500px" h="100vh" d="flex" justify="center" alignItems="center">
        <img src={CreateUser3} alt="Main Background" />
      </Stack>
    </Center>
  );
};

export default CreateUserBackground;
