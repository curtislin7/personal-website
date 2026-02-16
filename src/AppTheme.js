import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fffdd0',
    },
    secondary: green,
    gradient: 'linear-gradient(45deg, #5b5a69 30%, #7fffd4 90%)',
  },
  typography: {
    fontFamily: [
      '"DM Sans"',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});
