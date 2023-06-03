import { createTheme } from '@mui/material';

const marvelTheme = createTheme({
  palette: {
    primary: {
      main: '#a31b1f',
    },
    secondary: {
      main: '#14A38B',
    },
    gradient: {
      main: 'linear-gradient(127deg, rgba(105,19,20,1) 5%, rgba(156,29,30,1) 43%, rgba(232,43,44,1) 57%, rgba(194,36,37,1) 95%)',
    },
  },
  typography: {
    fontFamily: 'Lato',
  },
});

export default marvelTheme;
