import { createTheme } from '@material-ui/core';

const BrewhubTheme = createTheme({
  palette: {
    primary: {
      main: '#ede0d4',
      contrastText: '#543926',
    },
    secondary: {
      main: '#543926',
    },
    background: {
      default: '#f6f6f6',
    },
    error: {
      main: '#457b9d',
    },
  },
  overrides: {
    MuiPaper: {
      outlined: {
        borderRadius: '0px',
        borderColor: '#e6ccb2',
      },
    },
    MuiButton: {
      outlined: {
        borderRadius: 0,
      },
      contained: {
        borderRadius: 0,
      },
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
    ],
    button: {
      fontSize: '1em',
      letterSpacing: '0.5px',
    },
    h5: {
      fontWeight: 700,
    },
  },
});

export default BrewhubTheme;
