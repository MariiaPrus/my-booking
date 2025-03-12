import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import '../components/Header.css';

const Header = () => (
  <AppBar position="static" className="AppBar">
    <Toolbar>
      <Button className="Button" href="/">Main</Button>
      <Button className="Button" href="/about">About</Button>
      <Button className="Button" href="/hotels">Hotels</Button>
    </Toolbar>
  </AppBar>
);

export default Header;