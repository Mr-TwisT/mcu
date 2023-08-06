import { ThemeProvider } from '@emotion/react';
import marvelTheme from './styles/theme';

import Navbar from './sections/Navbar';

import LandingPage from './pages/LandingPage';
import HeroesPage from './pages/HeroesPage';

const App = () => (
  <>
    <ThemeProvider theme={marvelTheme}>
      <Navbar />
      <LandingPage />
    </ThemeProvider>
  </>
);

export default App;
