
import { AppBar, Toolbar, Typography, Button, IconButton} from '@mui/material';
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
  color:"black", 
  borderColor:"grey", 
  fontWeight:"bold",
  '&:hover':{
    backgroundColor:"#00000020",
    borderColor:"black"
  }
}

const NavBarV2 = () => {
  return (
    <AppBar position='relative' style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        {/* Logo on the left */}
        <IconButton href='/' edge="start" color="inherit" aria-label="menu">
          <img width="100" height="100" src={logo} alt="logo" />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        </Typography>
        {/* Search bar */}
  
        {/* Buttons on the right */}
        <Button sx={loginStyle} variant="outlined" >Login</Button>
        <Button sx={buttonStlye}  color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarV2;
