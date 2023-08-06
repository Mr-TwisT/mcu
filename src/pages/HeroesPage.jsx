import { Box, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const HeroesPage = () => {
  const { someItems } = useSelector((store) => store.card);

  return (
    <Stack>
      <Box>
        <p>{someItems[0].bio}</p>
      </Box>
    </Stack>
  );
};

export default HeroesPage;
