import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#CBFC01',
    },
    gasMoneyBlack: {
      light: '#161334',
      main: '#161334',
      dark: '#161334',
      contrastText: '#ffffff',
    },
    alphaBlue: {
      light: '#7A93D3',
      main: '#7A93D3',
      dark: '#7A93D3',
      contrastText: '#ffffff',
    },
    stakeRed: {
      light: '#FC304A',
      main: '#FC304A',
      dark: '#FC304A',
      contrastText: '#ffffff',
    },
    moonPink: {
      light: '#E87A88',
      main: '#E87A88',
      dark: '#E87A88',
      contrastText: '#ffffff',
    },
    wenMinty: {
      light: '#CBFC01',
      main: '#CBFC01',
      dark: '#CBFC01',
      contrastText: '#000000',
    },
    airdropWhite: {
      light: '#EAF1FD',
      main: '#EAF1FD',
      dark: '#EAF1FD',
      contrastText: '#000000',
    },
    gradient: {
      primary:
        'linear-gradient(90deg, rgba(24,22,52,1) 0%, rgba(134,45,165,1) 50%, rgba(61,101,137,1) 87.5%)',
      secondary:
        'linear-gradient(90deg, rgba(4,255,255,1) 0%, rgba(134,45,165,1) 40%, rgba(255,65,156,1) 80%)',
      primary90:
        'linear-gradient(0deg, rgba(24,22,52,1) 0%, rgba(134,45,165,1) 50%, rgba(61,101,137,1) 87.5%)',
      secondary90:
        'linear-gradient(0deg, rgba(4,255,255,1) 0%, rgba(134,45,165,1) 40%, rgba(255,65,156,1) 80%)',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 0,
        },
      },
    },
  },
});

export default theme;
