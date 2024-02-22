import { Button, Card, CardContent, Typography } from '@mui/material';


type Restaurant = {
  image:string,
  name:string,
  overallScore:number,
  genre:string
}


const buttonStlye ={
  backgroundColor: '#E72A01',
  color: 'white',
  '&:hover': {
      backgroundColor: '#E9664A',
  },
  margin: '0 5px'
}

export default function RestaurantCard({image, name, overallScore, genre} : Restaurant) {
  

  let stars = "";
  (function popStars(){
    for(let i = 0; i < Math.floor(overallScore); i++){
      stars += "⭐";
    }
  })();

  return (
<Card sx={{minWidth:"25%", height:"80%",backgroundColor:"white", display: "flex", justifyContent:"center", alignItems:"center", borderRadius:"8px", border:"1px solid #00000050", padding:"1rem"}}>
  <CardContent sx={{textAlign:"center"}}>
    <img width={200} height={150} src={image} alt={name}></img>
    <Typography sx={{marginTop:"2rem"}} variant={name.length > 20 ? 'h6' : 'h4'}>{name}</Typography>
    <Typography sx={{marginTop:"1rem"}}>{genre}</Typography>
    <Typography sx={{margin:"0.8rem"}}>{ stars}  {overallScore +" / 5"} </Typography>
    <Button href={`/restaurant/${name}`} variant='contained' sx={buttonStlye}>Visit Restaurant</Button>
  </CardContent>
</Card>

  );
}

