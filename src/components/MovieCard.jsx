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
  postCredit,
}) => {
  return (
    <Card
      sx={{
        width: '22vw',
        borderRadius: '30px',
        padding: '0.5rem', //?
        backgroundColor: '#f5f5f566',
        backdropFilter: 'blur(10px)',

        '&:hover .cardImage img': {
          transform: 'scale(1.1) rotate(5deg) translate(5px, -10px)',
        },
      }}
    >
      <CardContent>
        <Stack
          className="basicInfo"
          direction="column"
          spacing={3}
          borderRadius="30px"
        >
          <Box className="title" margin="0 auto">
            <Typography variant="h4" m={0} textAlign="center">
              {title}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <Box
              className="cardImage"
              sx={{
                flex: 1.5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={image} alt={`${title} movie`} />
            </Box>
            <Box
              className="info"
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                // paddingTop: '10px',
                paddingLeft: '12px',
                gap: '1rem',
              }}
            >
              <Box className="releaseDate">
                <Typography sx={{ fontWeight: 'bold' }}>
                  Release data:{' '}
                </Typography>
                <Typography>{releaseDate}</Typography>
              </Box>
              <Box className="duration">
                <Typography sx={{ fontWeight: 'bold' }}>Duration: </Typography>
                <Typography>{duration} min</Typography>
              </Box>
              <Box className="directedBy">
                <Typography sx={{ fontWeight: 'bold' }}>
                  Directed by:{' '}
                </Typography>
                <Typography>{directedBy}</Typography>
              </Box>
              <Box className="phase">
                <Typography sx={{ fontWeight: 'bold' }}>MCU Phase: </Typography>
                <Typography>{phase}</Typography>
              </Box>
              <Box className="postCredit">
                <Typography sx={{ fontWeight: 'bold' }}>
                  Post credit scenes:{' '}
                </Typography>
                <Typography>{postCredit}</Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
