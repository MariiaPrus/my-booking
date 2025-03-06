import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Button color="inherit" href="/">Main</Button>
      <Button color="inherit" href="/about">About</Button>
      <Button color="inherit" href="/hotels">Hotels</Button>
    </Toolbar>
  </AppBar>
);

export default Header;