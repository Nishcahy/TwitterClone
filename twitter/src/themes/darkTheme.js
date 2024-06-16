// src/themes/darkTheme.js
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFFFFF', // white
    },
    secondary: {
      main: '#000000', // black
    },
    background: {
      default: '#121212', // dark grey for background
      paper: '#1E1E1E', // darker grey for paper background
    },
    text: {
      primary: '#FFFFFF', // white
      secondary: '#BDBDBD', // light grey for secondary text
    },
  },
});

export default darkTheme;
