import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import marvelTheme from './styles/theme';

import Navbar from './sections/Navbar';

import LandingPage from './pages/LandingPage';
import HeroesPage from './pages/HeroesPage';
import MoviesPage from './pages/MoviesPage';
import ErrorPage from './pages/ErrorPage';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={marvelTheme}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
            </>
          }
        />
        <Route
          path="heroes"
          element={
            <>
              <Navbar />
              <HeroesPage />
            </>
          }
        />
        <Route
          path="movies"
          element={
            <>
              <Navbar />
              <MoviesPage />
            </>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
