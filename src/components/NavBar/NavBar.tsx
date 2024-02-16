import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase, alpha } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        {/* Logo on the left */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          { /* Add your logo here */}
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Your Logo Here
        </Typography>
        {/* Search bar */}
        <div style={{ position: 'relative', borderRadius: '4px', backgroundColor: '#ffffff', marginRight: '10px' }}>
          <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', pointerEvents: 'none', padding: '0 8px' }}>
            
          </div>
          <InputBase placeholder="Search..." style={{ color: 'black', paddingLeft: '20px' }} />
          <Button sx={{backgroundColor:"red"}}><SearchIcon sx={{color:"white"}}/></Button>
  
        </div>
        {/* Buttons on the right */}
        <Button color="inherit">Write a Review</Button>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
