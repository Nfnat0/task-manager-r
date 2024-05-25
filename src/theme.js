import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h3: {
      fontWeight: 700, // Bold project titles
    },
    h4: {
      fontWeight: 700, // Bold project titles
    },
    h5: {
      fontWeight: 700, // Bold header items
    },
  },
  palette: {
    primary: {
      main: '#1976D2', // Customize primary color if needed
    },
    secondary: {
      main: '#9C27B0', // Customize secondary color if needed
    },
  },
});

export default theme;
