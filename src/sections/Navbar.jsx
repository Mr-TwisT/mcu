import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  InputBase,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import '../styles/navbar.css';
import marvelTheme from '../styles/theme';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const theme = useTheme(marvelTheme);

  return (
    <AppBar className="navbar" position="static">
      <Container maxWidth="xl" className="navbar__container">
        <Box className="navbar__logoBox">
          <img
            className="navbar__logoBox__image"
            src={logo}
            alt="Marvel_logo"
          />
        </Box>
        <Box
          className="navbar__buttonsBox"
          bgcolor={theme.palette.primary.main}
        >
          <Button variant="text">Home</Button>
          <Button variant="text">Movies</Button>
          <Button variant="text">Series</Button>
          <Button variant="text">About us</Button>
        </Box>
        <Box className="navbar__searchBox">
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
