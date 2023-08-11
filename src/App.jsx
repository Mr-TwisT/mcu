import { ThemeProvider } from '@emotion/react';
import marvelTheme from './styles/theme';

import Navbar from './sections/Navbar';

import LandingPage from './pages/LandingPage';
import HeroesPage from './pages/HeroesPage';
import MoviesPage from './pages/MoviesPage';

const App = () => (
  <>
    <ThemeProvider theme={marvelTheme}>
      <Navbar />
      <MoviesPage />
    </ThemeProvider>
  </>
);

export default App;
