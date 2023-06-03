import { Stack } from '@mui/material';

import bgc_image from '../assets/images/bgc_deadpool.png';
import Navbar from '../sections/Navbar';

const LandingPage = () => {
  return (
    <Stack>
      <Navbar></Navbar>
      <Stack
        sx={{
          height: '100vh',
          backgroundImage: `url("${bgc_image}")`,
          backgroundColor: '#000',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        assas
      </Stack>
    </Stack>
  );
};

export default LandingPage;
