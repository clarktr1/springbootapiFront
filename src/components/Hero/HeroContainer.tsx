
import { Container, Typography, Button, Grid, Divider } from '@mui/material';
import backgroundImage from '../../assets/foodhero.jpg'; // Import your background image
import NavBar from '../NavBar/NavBar';

const containerStyle = {
  position: 'relative',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minWidth: '100%', 
  minHeight: '84vh',
  padding: '8rem 0 6rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundImage: 'linear-gradient(to bottom, rgba(25,25,25,0.75), rgba(120,120,120,0.3))', 
  };

  const buttonStlye ={
    backgroundColor: '#E72A01',
    color: 'white',
    '&:hover': {
        backgroundColor: '#E9664A',
    },
    margin: '0 5px'
}
  

const textPrimaryStyle = {
  color: 'white', 
  position: 'relative', 
  zIndex: 1, 
};

const textSecondaryStyle = {
  color: 'white',
  position: 'relative',
  zIndex: 1, 
}

const HeroContainer = () => {
  return (
    <Container sx={containerStyle}>
       <NavBar/>
      <Divider />
      <Container maxWidth="xl" sx={overlayStyle} />
      <Container maxWidth="sm">
    
        <Typography variant="h2" align="center" sx={textPrimaryStyle} gutterBottom>
          Ready to Explore?
        </Typography>
        <Typography variant="h5" align="center" sx={textSecondaryStyle} paragraph>
          Share Your Flavorful Journey: Discover, Review, and Share Experiences with the world!
        </Typography>
        <div style={{ marginTop: '4rem' }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" sx={buttonStlye}>
                Learn More
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Container>
  );
};

export default HeroContainer;
