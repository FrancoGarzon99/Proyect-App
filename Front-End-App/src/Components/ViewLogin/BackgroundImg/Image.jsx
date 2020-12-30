import React from 'react';
import { Stack, Center } from '@chakra-ui/core';
// import Welcome from '../../../static/undraw_welcome_cats_thqn.svg';
// import Welcome2 from '../../../static/undraw_mobile_login_ikmv.svg';
// import Welcome3 from '../../../static/undraw_Access_account_re_8spm.svg';
// import Welcome4 from '../../../static/undraw_secure_login_pdn4.svg';
// import Welcome5 from '../../../static/undraw_develop_app_kvt2.svg';
// import Welcome6 from '../../../static/undraw_portfolio_feedback_exfk.svg';
import Welcome7 from '../../../static/undraw_online_cv_qy9w.svg';
// import Welcome8 from '../../../static/undraw_personal_info_0okl.svg';

const WelcomeBackground = () => {
  return (
    <Center>
      <Stack w="450px" h="100vh" d="flex" justify="center" alignItems="center">
        <img src={Welcome7} alt="Main Background" />
      </Stack>
    </Center>
  );
};

export default WelcomeBackground;
