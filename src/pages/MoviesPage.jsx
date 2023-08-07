import { Box, Stack } from '@mui/material';
import { useSelector } from 'react-redux';

const MoviesPage = () => {
  const { cardItems } = useSelector((store) => store.card);

  return (
    <Stack>
      <Box>
        <p>{cardItems[0].title}</p>
      </Box>
    </Stack>
  );
};

export default MoviesPage;
