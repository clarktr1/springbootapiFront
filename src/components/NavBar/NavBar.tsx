
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const buttonStlye ={
    backgroundColor: '#E72A01',
    color: 'white',
    '&:hover': {
        backgroundColor: '#E9664A',
    },
    margin: '0 5px'
    
}

const NavBar = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        {/* Logo on the left */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          { /* Add your logo here */}
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Logo??
        </Typography>
        {/* Search bar */}
        <div style={{ position: 'relative', borderRadius: '4px', backgroundColor: '#ffffff', marginRight: '10px' }}>
          <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', pointerEvents: 'none', padding: '0 8px' }}>
            
          </div>
          <InputBase placeholder="Search..." style={{ color: 'black', paddingLeft: '20px' }} />
          <Button variant="contained" sx={{backgroundColor:"red"}}><SearchIcon sx={{color:"white"}}/></Button>
  
        </div>
        {/* Buttons on the right */}
        <Button sx={buttonStlye} color="inherit">Write a Review</Button>
        <Button sx={buttonStlye} color="inherit">Login</Button>
        <Button sx={buttonStlye} color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
