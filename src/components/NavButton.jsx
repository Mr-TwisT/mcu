import { Button } from '@mui/material';

// eslint-disable-next-line react/prop-types
const NavButton = ({ text }) => {
  return (
    <Button
      variant="text"
      color="white"
      onClick={() => {
        console.log('click');
      }}
      sx={{
        fontSize: '1rem',
        height: '50%',
        margin: 'auto 0',
        padding: '0 8px',
      }}
    >
      {text}
    </Button>
  );
};

export default NavButton;
