/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';

import '../styles/MovieCard.css';

const MovieCard = ({
  title,
  releaseDate,
  duration,
  directedBy,
  phase,
  image,
}) => {
  return (
    <Card
      sx={{
        width: '500px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '30px',
        padding: '1rem',
        backgroundColor: '#f5f5f566',
        backdropFilter: 'blur(10px)',
      }}
    >
      <CardContent>
        <Stack
          className="basicInfo"
          direction="row"
          spacing={1}
          borderRadius="30px"
        >
          <Box
            className="title"
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h4"
              m={0}
              p={0}
              sx={{
                width: 'max-content',
              }}
            >
              {title}
            </Typography>
            <img src={image} alt={`${title} movie`} />
          </Box>
          <Box
            className="info"
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Box className="releaseDate">{releaseDate}</Box>
            <Box className="duration">{duration}</Box>
            <Box className="directedBy">{directedBy}</Box>
            <Box className="phase">{phase}</Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
