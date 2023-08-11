import { Box, Stack } from '@mui/material';
import { useSelector } from 'react-redux';

import MovieCard from '../components/MovieCard';

const MoviesPage = () => {
  const { cardItems } = useSelector((store) => store.card);

  return (
    <Stack>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          backgroundImage: 'linear-gradient(to top right, #a31b1f, #7442C8)',
        }}
      >
        <MovieCard
          title={cardItems[0].title}
          releaseDate={cardItems[0].release_date}
          duration={cardItems[0].duration}
          directedBy={cardItems[0].directed_by}
          phase={cardItems[0].phase}
          image={cardItems[0].cover_url}
          postCredit={cardItems[0].post_credit_scenes}
        />
      </Box>
    </Stack>
  );
};

export default MoviesPage;
