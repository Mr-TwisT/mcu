import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const MainButton = ({ text, link, click, style }) => {
  return (
    <Box>
      <Link to={link}>
        <Button
          variant="contained"
          onClick={click}
          sx={{
            fontSize: '1rem',
            color: 'primary.contrastText',
            ...style,
          }}
        >
          {text}
        </Button>
      </Link>
    </Box>
  );
};

export default MainButton;
