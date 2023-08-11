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
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          justifyItems: 'center',
          gap: '1.5rem',
          padding: '2.5rem 1rem',
          backgroundImage: 'linear-gradient(to top right, #a31b1f, #7442C8)',
        }}
      >
        {cardItems.map((card) => (
          <MovieCard
            key={card.id}
            title={card.title}
            releaseDate={card.release_date}
            duration={card.duration}
            directedBy={card.directed_by}
            phase={card.phase}
            image={card.cover_url}
            postCredit={card.post_credit_scenes}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default MoviesPage;
