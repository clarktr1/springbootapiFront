
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../../assets/logo.png"


const buttonStlye ={
    backgroundColor: '#E72A01',
    color: 'white',
    '&:hover': {
        backgroundColor: '#E9664A',
    },
    margin: '0 5px'
}

const loginStyle = {
  color:"white", 
  borderColor:"white", 
  fontWeight:"bold",
  '&:hover':{
    backgroundColor:"#ffffff50",
    borderColor:"#ffffff"
  }
}

const NavBar = () => {
  return (
    <AppBar position='absolute' style={{ backgroundColor: 'transparent', boxShadow: 'none', }}>
      <Toolbar>
        {/* Logo on the left */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          <img width="100" height="100" src={logo} alt="logo" />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        </Typography>
        {/* Search bar */}
        <div style={{ position: 'relative', borderRadius: '4px', backgroundColor: '#ffffff', marginRight: '10px' }}>
          <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', pointerEvents: 'none', padding: '0 8px' }}>
            
          </div>
          <InputBase placeholder="Search..." style={{ color: 'black', paddingLeft: '20px' }} />
          <Button variant="contained" sx={{backgroundColor:"red", "&:hover":{backgroundColor:"#E9664A"}}}><SearchIcon sx={{color:"white"}}/></Button>
  
        </div>
        {/* Buttons on the right */}
        <Button sx={buttonStlye} color="inherit">Write a Review</Button>
        <Button sx={loginStyle} variant="outlined" >Login</Button>
        <Button sx={buttonStlye}  color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
