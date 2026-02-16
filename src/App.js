import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './AppTheme';
import HomePage from './Pages/Home/HomePage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
