import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, useScrollTrigger } from '@mui/material';
import Logo from '../Logo';
import Search from '../Search';

const AppBar = () => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  console.log(trigger);
  return (
    <>
      <MuiAppBar
        elevation={trigger ? 4 : 0}
        sx={{
          background: 'none',
          backdropFilter: trigger ? 'blur(4px)' : 'none',
        }}
      >
        <Toolbar>
          <Logo />
          <div style={{ flex: 1 }} />
          <Search sx={{ mr: 2 }} />
          <Button variant="contained">Se connecter</Button>
        </Toolbar>
      </MuiAppBar>
      <Toolbar />
    </>
  );
};

export default AppBar;
