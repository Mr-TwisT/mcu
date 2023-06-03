import { Button, Divider } from '@mui/material';

// eslint-disable-next-line react/prop-types
const NavButton = ({ text, divider = false }) => (
  <>
    <Button
      variant="text"
      onClick={() => {
        console.log('click');
      }}
      sx={{
        fontSize: '1rem',
        height: '50%',
        margin: 'auto 0',
        padding: '0 8px',
        color: 'primary.contrastText',
      }}
    >
      {text}
    </Button>
    {divider ? (
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ borderColor: 'primary.contrastText' }}
      />
    ) : null}
  </>
);

export default NavButton;
