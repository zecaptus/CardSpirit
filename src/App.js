import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from './components/AppBar';
import { Box, Stack } from '@mui/material';
import wip from './assets/wip.png';
import Card from './components/Card';
import img from './assets/coffret-dresseur-d-elite-ecarlate-et-violet-evolutions-a-paldea-fr.jpg';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className="App">
        <header className="App-header">
          <AppBar />
          <Box
            sx={{
              backgroundColor: 'gasMoneyBlack.main',
              width: 'calc(100% - 48px)',
              height: '30vh',
              mt: 4,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 0,
              position: 'relative',
              padding: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              '&:before': {
                content: '""',
                background: theme.palette.gradient.primary90,
                position: 'absolute',
                top: '-1px',
                left: '-1px',
                width: 'calc(100% + 2px)',
                height: 'calc(100% + 2px)',
                zIndex: -1,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 0,
              },
            }}
          >
            <img src={wip} alt="wip" />
            <code>En cours de développement...</code>
            <p>
              En attendant, retrouvez nous sur &nbsp;
              <a className="App-link" href="https://app.voggt.com/fr/Lavirle">
                Voggt
              </a>
            </p>
          </Box>
          <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
            <Card imgSrc={img} />
            <Card imgSrc={img} />
            <Card imgSrc={img} />
            <Card imgSrc={img} />
          </Stack>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
