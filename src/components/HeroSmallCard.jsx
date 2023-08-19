/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';

import MainButton from './MainButton';

const HeroSmallCard = ({ name, image, desc }) => {
  return (
    <Box
      className="slide-container"
      sx={{
        background: 'grey',
        maxWidth: '1320px',
        width: '100%',
        padding: '40px 0',
      }}
    >
      <Box className="slide-content" sx={{ margin: '0 40px' }}>
        <Box className="card-wrapper">
          <Box
            className="card"
            sx={{
              width: '25%',
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
                padding: '35px 14px',
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
                  backgroundColor: '#4070f4',
                  borderRadius: '25px 25px 0 25px',

                  '::before, ::after': {
                    content: '""',
                    position: 'absolute',
                    right: '0',
                    bottom: '-40px',
                    height: '40px',
                    width: '40px',
                    backgroundColor: '#4070f4',
                  },

                  '::after': {
                    borderRadius: '0 25px 0 0',
                    backgroundColor: '#fff',
                  },
                }}
              ></Box>

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
                  className="card-img"
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '4px solid #4070f4',
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
                sx={{ fontSize: '1.125rem', color: '#333' }}
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
              <MainButton text="More" link={''} style={''} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSmallCard;
