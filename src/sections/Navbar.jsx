import {
  AppBar,
  Avatar,
  Box,
  Container,
  // Divider,
  InputBase,
  Link,
  IconButton,
  Tooltip,
} from '@mui/material';

import logo from '../assets/images/logo2.png';
import NavButton from '../components/NavButton';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background:
          'linear-gradient(127deg, rgba(105,19,20,1) 5%, rgba(156,29,30,1) 43%, rgba(232,43,44,1) 57%, rgba(194,36,37,1) 95%)',
      }}
    >
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
            width: '15%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5px',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            marginRight: '2rem',
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
            <img style={{ width: '75%' }} src={logo} alt="Marvel_logo" />
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
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '4rem',
            marginLeft: '3rem',
            padding: '0 1rem',
          }}
        >
          <InputBase
            placeholder="Search..."
            fullWidth
            sx={{
              height: '55%',
              borderRadius: '1rem',
              paddingLeft: '20px',
              paddingRight: '10px',
              backgroundColor: '#fff',
              color: '#000',
            }}
          />
          <Tooltip title="Profile">
            <IconButton sx={{ p: 0 }}>
              <Avatar
                variant="rounded"
                sx={{
                  padding: 0,
                }}
              >
                P
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
