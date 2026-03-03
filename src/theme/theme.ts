import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '12px'
    }
  },
  spacing: 4,
  components: {
    MuiButton: {
      styleOverrides: {
        root: [({theme})=> ({
          padding: theme.spacing(1),
          fontSize: theme.typography.body1.fontSize,
          fontWeight: 400,
          border: `2px solid ${theme.palette.secondary.main}`
        })],
      },
    },
  },
});
