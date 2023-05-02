import { createTheme } from '@mui/material';

const marvelTheme = createTheme({
  palette: {
    primary: {
      main: '#a31b1f',
      // dark: '',
      // light: '',
    },
    secondary: {
      main: '#701316',
      // dark: '',
      // light: '',
    },
    complementary: {
      main: '#1ba39e',
      // dark: '',
      // light: '',
    },
    gradient: {
      main: 'linear-gradient(127deg, rgba(105,19,20,1) 5%, rgba(156,29,30,1) 43%, rgba(232,43,44,1) 57%, rgba(194,36,37,1) 95%)',
    },
    white: {
      main: '#fff',
    },
    black: {
      main: '#000',
    },
  },
});

export default marvelTheme;
