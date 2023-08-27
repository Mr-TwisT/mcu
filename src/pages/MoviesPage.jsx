import { Box, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import MovieCard from '../components/MovieCard';

const MoviesPage = () => {
  const { movieCardItems } = useSelector((store) => store.movieCard);

  return (
    <Stack
      sx={{
        width: '100%',
        padding: '1rem 2rem',
        backgroundImage: 'linear-gradient(to top right, #a31b1f, #7442C8)',
      }}
    >
      <Box sx={{ padding: '2rem 1rem' }}>
        <Typography variant="h4" textAlign="center">
          Experience the thrill of iconic heroes and epic tales in the
          captivating world of Marvel movies
          <i
            className="fa-solid fa-hand-point-down"
            style={{
              color: '#e22a2b',
              marginLeft: '1.2rem',
              transform: 'rotate(25deg) translateY(5px)',
            }}
          ></i>{' '}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          justifyItems: 'center',
          gap: '1.5rem',
          paddingBottom: '3rem',
        }}
      >
        {movieCardItems.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            duration={movie.duration}
            directedBy={movie.directed_by}
            phase={movie.phase}
            image={movie.cover_url}
            postCredit={movie.post_credit_scenes}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default MoviesPage;
