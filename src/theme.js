// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0E2368',
    },
    secondary: {
      main: '#E23744', 
    },
    text: {
      primary: '#333333', 
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif', 
  },
});

export default theme;
