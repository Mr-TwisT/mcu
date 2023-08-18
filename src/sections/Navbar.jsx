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
            padding: '0.3rem 0',
            margin: '0.2rem 2rem 0.1rem 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link to="/" style={{ marginLeft: '20%' }}>
            <img src={logo} alt="Marvel-logo" />
          </Link>
        </Box>
        <Box
          sx={{
            flex: 4,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            padding: '0',
          }}
        >
          <NavButton text="Home" link="/" divider={true} />
          <NavButton text="Heroes" link="/heroes" divider={true} />
          <NavButton text="Movies" link="/movies" divider={true} />
          <NavButton text="Series" link="/series" divider={true} />
          <NavButton text="About us" link="/about" />
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
