import { Button, Divider } from '@mui/material';

// eslint-disable-next-line react/prop-types
const NavButton = ({ text, divider = false }) => (
  <>
    <Button
      variant="text"
      fullWidth
      onClick={() => {
        console.log('click');
      }}
      sx={{
        fontSize: '1rem',
        margin: 'auto 0 auto 6px',
        color: 'primary.contrastText',

        ':hover': {
          bgcolor: 'secondary.main',
        },
      }}
    >
      {text}
    </Button>
    {divider ? (
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ borderColor: 'primary.contrastText', padding: '3px' }}
      />
    ) : null}
  </>
);

export default NavButton;
