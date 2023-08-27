/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';

const MovieCardInfo = ({ header, text }) => (
  <Box>
    <Typography sx={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
      {header}:
    </Typography>
    <Typography fontSize="1.15rem">{text}</Typography>
  </Box>
);

export default MovieCardInfo;
