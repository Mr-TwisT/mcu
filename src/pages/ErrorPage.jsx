import { Box, Typography } from '@mui/material';

import MainButton from '../components/MainButton';
import hulk from '../assets/images/mad-hulk.gif';

const ErrorPage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem 3rem',
        backgroundColor: '#5D04D9',
        color: '#fff',
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontFamily: 'Space Mono', padding: '6px' }}
      >
        Error 404
      </Typography>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10rem',
        }}
      >
        <img src={hulk} alt="mad-hulk" style={{ width: '200px' }} />
        <Box
          sx={{
            maxWidth: '35%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Space Mono',
              fontSize: '4rem',
              lineHeight: 'normal',
              letterSpacing: '0.1rem',
            }}
          >
            I have bad news for you...
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Space Mono',
              fontSize: '1.5rem',
              lineHeight: 'normal',
            }}
          >
            The page you are looking for isn&apos;t exist
          </Typography>
          <MainButton
            text="Back to Homepage"
            link="/"
            style={{
              padding: '0.8rem',
              marginTop: '1rem',
              letterSpacing: '0.15rem',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ErrorPage;
