import {
  AppBar,
  Avatar,
  Box,
  Container,
  Button,
  // Divider,
  InputBase,
  Link,
} from '@mui/material';

import logo from '../assets/images/logo2.png';
import NavButton from '../components/NavButton';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            width: '20%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5px',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          }}
        >
          <Link
            href="#"
            align="center"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img style={{ width: '50%' }} src={logo} alt="Marvel_logo" />
          </Link>
        </Box>
        <Box
          sx={{
            flex: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '0 10px',
          }}
        >
          {/* <Divider orientation="vertical" variant="middle" flexItem sx={{
          }} /> */}
          <NavButton text="Home" />
          <NavButton text="Movies" />
          <NavButton text="Series" />
          <NavButton text="About us" />
        </Box>
        <Box
          sx={{
            flex: 3,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: '1rem',
          }}
        >
          <InputBase placeholder="Search..." />
          <Button>
            <Avatar>P</Avatar>
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
