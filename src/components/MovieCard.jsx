/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import '../styles/MovieCard.css';

import { useDispatch } from 'react-redux';
import { openModal } from '../data/features/movie/movieSlice';

const MovieCard = ({
  id,
  title,
  releaseDate,
  duration,
  directedBy,
  phase,
  image,
  postCredit,
}) => {
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        width: '22vw',
        borderRadius: '30px',
        padding: '0.5rem',
        paddingBottom: '0',
        backgroundColor: '#f5f5f566',
        backdropFilter: 'blur(10px)',

        '&:hover .cardImage img': {
          cursor: 'pointer',
          transform: 'scale(1.05) rotate(-2deg) translate(5px, -10px)',
        },

        '&:hover .cardImage::after': {
          width: '70%',
          opacity: '0.5',
          transform: 'scale(1.05) rotate(-2deg)',
        },

        '&:hover .seeMore': {
          cursor: 'pointer',
          opacity: '1',
          transform: 'translate(0, -15px)',
        },
      }}
    >
      <CardContent sx={{ paddingBottom: '0 !important' }}>
        <Stack
          className="basicInfo"
          direction="column"
          spacing={3}
          borderRadius="30px"
        >
          <Box className="title" margin="0 auto">
            {title.length < 24 ? (
              <Typography variant="h4" m="1.3rem 0" textAlign="center">
                {title}
              </Typography>
            ) : (
              <Typography variant="h4" m={0} textAlign="center">
                {title}
              </Typography>
            )}
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
                marginBottom: '1rem',

                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '60%',
                  height: '70px',
                  borderRadius: '50%',
                  backgroundColor: '#000',
                  bottom: '15%',
                  left: '0',
                  zIndex: '-1',
                  opacity: '0.4',
                  filter: 'blur(10px)',
                  transition: '0.5s',
                },
              }}
            >
              <img src={image} alt={`"${title}" movie`} />
            </Box>
            <Box
              className="info"
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                paddingLeft: '12px',
                gap: '1rem',
              }}
            >
              <Box className="releaseDate">
                <Typography sx={{ fontWeight: 'bold' }}>
                  Release date:{' '}
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
          <Divider variant="middle" />
          <Box
            className="seeMore"
            sx={{
              width: 'max-content',
              display: 'flex',
              justifySelf: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              borderRadius: '50%',
              backgroundColor: '#ffffff55',
              transition: '0.5s',
              transform: 'translate(0, 15px)',
              opacity: '0',
            }}
          >
            <IconButton
              aria-label="see more info"
              size="large"
              onClick={() => dispatch(openModal(id))}
            >
              <i className="fa-solid fa-ellipsis"></i>
            </IconButton>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
