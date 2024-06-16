// src/themes/lightTheme.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000', // black
    },
    secondary: {
      main: '#FFFFFF', // white
    },
    background: {
      default: '#FFFFFF', // white
      paper: '#F5F5F5', // light grey for paper background
    },
    text: {
      primary: '#000000', // black
      secondary: '#666666', // grey for secondary text
    },
  },
});

export default lightTheme;
