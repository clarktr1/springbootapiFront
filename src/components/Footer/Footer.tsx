import { AppBar, Toolbar, Typography, IconButton, Divider, Link } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

export default function Footer() {
  return (
    <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="subtitle1" color="inherit" component="div">
          <Link href="#" color="inherit" underline="hover">Contact Us</Link>
          <Link href="#" color="inherit" underline="hover" sx={{ marginLeft: 2 }}>Request a New Restaurant</Link>
          <Link href="#" color="inherit" underline="hover" sx={{ marginLeft: 2 }}>Terms and Conditions</Link>
        </Typography>
        <Divider orientation="vertical" flexItem sx={{ marginLeft: 2, marginRight: 2 }} />
        <div>
          <IconButton color="inherit" href="https://www.facebook.com">
            <Facebook />
          </IconButton>
          <IconButton color="inherit" href="https://www.twitter.com">
            <Twitter />
          </IconButton>
          <IconButton color="inherit" href="https://www.instagram.com">
            <Instagram />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
