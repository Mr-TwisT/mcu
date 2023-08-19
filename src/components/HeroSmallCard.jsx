/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';

import MainButton from './MainButton';

const HeroSmallCard = ({ name, image, desc }) => {
  return (
    <Box
      className="slide-container"
      sx={{
        background: 'pink',
      }}
    >
      <Box
        className="slide-content"
        sx={{
          margin: '0 40px',
          background: 'blue',
        }}
      >
        <Box className="card-wrapper">
          <Box
            className="card"
            sx={{
              borderRadius: '25px',
              backgroundColor: '#fff',
              padding: '10px 14px',
            }}
          >
            <Box
              className="image-content"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span className="overlay"></span>

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
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontSize: '18px', fontWeight: '500', color: '#333' }}
              >
                {name}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: '14px', color: '#707070', textAlign: 'center' }}
              >
                {desc}
              </Typography>
              <MainButton text="more" link={''} style={''} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSmallCard;
