import { Box, Stack, Typography } from '@mui/material';

import '../styles/LandingPage.css';

import MainButton from '../components/MainButton';

const LandingPage = () => {
  return (
    <Stack>
      <Stack className="landingPageContainer">
        <Box
          p={4}
          className="landingPageBox"
          sx={{
            maxWidth: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              flex: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h5"
              color={'primary.contrastText'}
              align="left"
            >
              {`Welcome to the Marvel Cinematic Universe Hub! Enter a world where
            superheroes rule and thrilling adventures await. Whether you're a
            devoted fan or new to Marvel movies, this is your go-to destination
            to explore the captivating cinematic marvels that have enthralled
            audiences worldwide.`}
            </Typography>
            <Typography
              variant="h5"
              color={'primary.contrastText'}
              align="right"
              mt={3}
            >
              {`Discover plot summaries, character stories, and
            hidden surprises in each film. Engage in polls, quizzes, and connect
            with fellow enthusiasts in our vibrant fan forums. Get ready for an
            extraordinary journey through the MCU, where imagination knows no
            limits and heroes become legends. Suit up and let the Marvel magic
            begin!`}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <Typography
              variant="h4"
              color={'primary.contrastText'}
              align="center"
            >
              Join the Marvel-ous journey and explore the epic universe of the
              MCU!
            </Typography>
            <Stack direction="row" spacing={2}>
              <MainButton text={'Sign up'} click={() => console.log('click')} />
              <MainButton text="Log in" click={() => console.log('click')} />
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default LandingPage;
