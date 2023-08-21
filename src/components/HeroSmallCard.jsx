/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';

import MainButton from './MainButton';

const HeroSmallCard = ({ name, image, desc }) => {
  return (
    <Box
      className="card"
      sx={{
        borderRadius: '25px',
        backgroundColor: '#fff',
      }}
    >
      <Box
        className="image-content"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          padding: '2.19rem 0.88rem',
        }}
      >
        <Box
          className="overlay"
          sx={{
            position: 'absolute',
            left: '0',
            top: '0',
            height: '100%',
            width: '100%',
            backgroundColor: '#7442C8',
            borderRadius: '25px 25px 0 25px',

            '::before, ::after': {
              content: '""',
              position: 'absolute',
              right: '0',
              bottom: '-40px',
              width: '40px',
              height: '40px',
              backgroundColor: '#7442C8',
            },

            '::after': {
              width: '41px',
              borderRadius: '0 25px 0 0',
              backgroundColor: '#fff',
            },
          }}
        />
        <Box
          className="card-image"
          sx={{
            position: 'relative',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            padding: '3px',
          }}
        >
          <img
            src={image}
            alt={name}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
              border: '4px solid #7442C8',
            }}
          />
        </Box>
      </Box>
      <Box
        className="text-content"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0.625rem 0.875rem',
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontSize: '1.5rem', color: '#333', padding: '1rem 0' }}
        >
          {name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '0.875rem',
            color: '#707070',
            textAlign: 'center',
          }}
        >
          {desc}
        </Typography>
        <MainButton
          text="More"
          link="/"
          style={{ margin: '2rem 0 0.5rem 0', backgroundColor: '#7442C8' }}
        />
      </Box>
    </Box>
  );
};

export default HeroSmallCard;
