/* eslint-disable react/prop-types */
import { Box, Button, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NavButton = ({ text, link, divider = false }) => (
  <Box sx={{ display: 'flex' }}>
    <Link to={link} style={{ textDecoration: 'none' }}>
      <Button
        variant="text"
        fullWidth
        sx={{
          margin: 'auto 0',
          color: 'primary.contrastText',

          ':hover': {
            bgcolor: 'secondary.main',
          },
        }}
      >
        <Typography variant="h6" padding="0 1rem">
          {text}
        </Typography>
      </Button>
    </Link>
    {divider ? (
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{
          borderColor: 'primary.contrastText',
          padding: '3px',
          marginRight: '6px',
        }}
      />
    ) : null}
  </Box>
);

export default NavButton;
