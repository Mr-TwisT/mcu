import { Box, Stack } from '@mui/material';
import { useSelector } from 'react-redux';

import HeroSmallCard from '../components/HeroSmallCard';

const HeroesPage = () => {
  const { cardItems } = useSelector((store) => store.card);

  return (
    <Stack sx={{ height: '100vh', padding: '1rem' }}>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <HeroSmallCard
          name={cardItems[34].title}
          image={cardItems[34].cover_url}
          desc={cardItems[34].overview}
        />
      </Box>
    </Stack>
  );
};

export default HeroesPage;
