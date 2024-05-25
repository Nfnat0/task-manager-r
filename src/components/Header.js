import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Task Manager R
        </Typography>
        <Button color="inherit" component={Link} to="/">Task List</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
