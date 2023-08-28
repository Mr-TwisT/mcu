/* eslint-disable react/prop-types */
import { Box, Link, Typography } from '@mui/material';

const MovieCardInfo = ({ header, text, style }) => (
  <Box>
    <Typography sx={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
      {header}:
    </Typography>
    {header !== 'Trailer' ? (
      <Typography fontSize="1.15rem" sx={style}>
        {text !== '' && text !== null ? text : 'TBA'}
      </Typography>
    ) : (
      <Link href={text} underline="hover" color="#000">
        <Typography fontSize="1.15rem">
          {text !== '' && text !== null ? 'Watch Now' : 'TBA'}
        </Typography>
      </Link>
    )}
  </Box>
);

export default MovieCardInfo;
