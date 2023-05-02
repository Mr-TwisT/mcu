import { ThemeProvider } from '@emotion/react';

import marvelTheme from './styles/theme';
import LandingPage from './pages/LandingPage';

const App = () => (
  <>
    <ThemeProvider theme={marvelTheme}>
      <LandingPage />
    </ThemeProvider>
  </>
);

export default App;
