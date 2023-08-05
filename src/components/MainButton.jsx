import { Button } from '@mui/material';

// eslint-disable-next-line react/prop-types
const MainButton = ({ text, click }) => {
  return (
    <Button
      variant="contained"
      onClick={click}
      sx={{
        fontSize: '1rem',
        color: 'primary.contrastText',
      }}
    >
      {text}
    </Button>
  );
};

export default MainButton;
