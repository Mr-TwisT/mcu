import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import marvelTheme from './styles/theme';

import SharedLayout from './layout/SharedLayout';

import LandingPage from './pages/LandingPage';
import HeroesPage from './pages/HeroesPage';
import MoviesPage from './pages/MoviesPage';
import ErrorPage from './pages/ErrorPage';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={marvelTheme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="heroes" element={<HeroesPage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
