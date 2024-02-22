import {Box, Container, Input, Modal, TextField, Typography} from '@mui/material'
import backgroundImage from '../../assets/foodhero.jpg'
import NavBarV2 from '../NavBar/NavBarV2';
import React from 'react';
import { Avatar, Button, Rating } from '@mui/material';


const containerStyle = {
    position: 'relative',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minWidth: '100%', 
    minHeight: '60vh',
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
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
export default function RestaurantHero({name, genre, overallScore, image, id}:any){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(3);
  const [reviewName, setReviewName] = React.useState('');
  const [comments, setComments] = React.useState('');

  const rating = overallScore;

  async function submitReview(e:any) {
    e.preventDefault();

    const formData = {
      author: reviewName,
      restaurant_id: id,
      commentary: comments,
      overallScore: value,
      date_posted: new Date().toISOString()
   
    };

    console.log(formData)


  
    try {
      const response = await fetch('https://springbootback-production.up.railway.app/review/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit review');
      }
  
      const data = await response.json();
      console.log('Review submitted successfully:', data);
      // Optionally, provide feedback to the user
    } catch (error) {
      console.error('Error submitting review:', error);
      // Optionally, handle the error and provide feedback to the user
    }
  }
  

    return(
        <>
            <NavBarV2 />
            <Container sx={containerStyle}>
                <Container maxWidth="xl" sx={overlayStyle} />
                {/* a container with a white background that is located at the bottom of the parent container */}
                <Container maxWidth="xl" sx={{position: 'absolute', bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', padding:"3rem"}}>
                  <Avatar alt="Restaurant Logo" src={image} sx={{width: 150, height: 150, marginBottom: 2}} />
                    <Typography variant="h2" fontWeight="bold" color="white" gutterBottom>{name}</Typography>
                    <Typography variant="h5" color="white" gutterBottom>{genre}</Typography>
                    <Container sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1, marginBottom: 2}}>
                      {rating > 0 ? <Rating size='large' name="read-only" precision={0.2} value={rating} readOnly /> : <Typography variant="h6" color="white">No reviews yet</Typography>}
                      <Typography variant="h6" color="white">{rating} / 5 </Typography>
                    </Container>
                    <Button onClick={handleOpen} variant="contained" sx={buttonStlye}>Write a Review</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <form >
                            <Typography variant="h4" gutterBottom>Write a Review for </Typography>
                            <Typography variant="h5" gutterBottom>{name}</Typography>
                            <Input onChange={(e)=>{setReviewName(e.target.value)}} type="text" placeholder="Name" fullWidth />
                            <Typography variant="h6" gutterBottom>Comments</Typography>
                            <TextField onChange={(event) => {setComments(event.target.value)}} id="outlined-basic" variant="outlined" fullWidth margin="normal" rows={4} multiline />
                            <Box component="fieldset" mb={3} borderColor="transparent">
                              <Typography component="legend">Rating:</Typography>
                              <Rating
                                name="rating"
                                value={value}
                                onChange={(newValue) => {
                                  setValue(Number(newValue));
                                }}
                              />
                            </Box>
                            <Button onClick={(e: any) => {submitReview(e)}} type="submit" variant="contained" sx={buttonStlye}>Submit</Button>
                          </form>
                        </Box>
                      </Modal>
                </Container>
            </Container>
           
          </>
    )   
}