import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  TextField,
  Tooltip,
  Stack,
} from '@mui/material';

import { Link } from 'react-router-dom';

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
      <Stack
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        <Box
          sx={{
            flex: 1.25,
            // width: '15%',
            padding: '5px 1rem',
            marginRight: '2rem',
            marginTop: '4px',
          }}
        >
          <Link to="/" style={{ marginLeft: '20%' }}>
            <img style={{ width: '60%' }} src={logo} alt="Marvel-logo" />
          </Link>
        </Box>
        <Box
          sx={{
            flex: 4,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '0',
          }}
        >
          <Link to="/">
            <NavButton text="Home" divider={true} />
          </Link>
          <Link to="/heroes">
            <NavButton text="Heroes" divider={true} />
          </Link>
          <Link to="/movies">
            <NavButton text="Movies" divider={true} />
          </Link>
          <Link to="/series">
            <NavButton text="Series" divider={true} />
          </Link>
          <Link to="/about">
            <NavButton text="About us" />
          </Link>
        </Box>
        <Box
          component="form"
          autoComplete="off"
          noValidate
          sx={{
            flex: 3,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '5rem',
            marginLeft: '8rem',
            marginRight: '2rem',
            padding: '0 1rem',
          }}
        >
          <TextField
            id="outlined-basic"
            label="Search something cool..."
            variant="outlined"
            fullWidth
            sx={{
              color: '#000',
              borderRadius: '5px',
              fontSize: '1em',
              outline: 'none',
            }}
          />
          <Tooltip title="Profile">
            <IconButton sx={{ p: 0 }}>
              <Avatar
                variant="rounded"
                sx={{
                  padding: 0,
                  bgcolor: 'secondary.main',
                }}
              >
                P
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
