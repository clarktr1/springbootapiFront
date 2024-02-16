
import { Container, Typography, Button, Grid } from '@mui/material';
import backgroundImage from '../../assets/foodhero.jpg'; // Import your background image

const containerStyle = {
  position: 'relative',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '50vh', // Corrected from '50dvh' to '50vh'
  padding: '8rem 0 6rem',
};

const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3))', // Linear gradient from top to bottom
  };
  

const textPrimaryStyle = {
  color: 'white', // Set text color to white
  position: 'relative', // Ensure text appears above the overlay
  zIndex: 1, // Set a higher z-index to ensure text appears above the overlay
};

const textSecondaryStyle = {
  color: 'white', // Set text color to white
  position: 'relative', // Ensure text appears above the overlay
  zIndex: 1, // Set a higher z-index to ensure text appears above the overlay
};

const HeroContainer = () => {
  return (
    <div style={containerStyle}>
      <div style={overlayStyle} />
      <Container maxWidth="sm">
        {/* Text elements placed after the overlay */}
        <Typography variant="h2" align="center" style={textPrimaryStyle} gutterBottom>
          Welcome to My Website
        </Typography>
        <Typography variant="h5" align="center" style={textSecondaryStyle} paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
          Sed nisi.
        </Typography>
        <div style={{ marginTop: '4rem' }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Contact Us
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default HeroContainer;
