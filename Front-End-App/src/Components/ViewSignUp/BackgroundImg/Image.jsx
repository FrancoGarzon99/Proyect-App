import React from 'react';
import { Stack, Center } from '@chakra-ui/core';
// import CreateUser from '../../../static/AddUser/undraw_Add_user_re_5oib.svg';
// import CreateUser2 from '../../../static/AddUser/undraw_Add_friends_wa2a.svg';
// import CreateUser3 from '../../../static/AddUser/Fondo1.svg'
// import CreateUser4 from '../../../static/AddUser/undraw_meet_the_team_e5b7.svg';
import CreateUser5 from '../../../static/AddUser/undraw_personal_email_t7nw.svg';

const CreateUserBackground = () => {
  return (
    <Center>
      <Stack w="350px" h="100vh" d="flex" justify="center" alignItems="center">
        <img src={CreateUser5} alt="Main Background" />
      </Stack>
    </Center>
  );
};

export default CreateUserBackground;
