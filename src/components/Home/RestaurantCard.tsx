import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card, CardContent, Typography } from '@mui/material';


type Restaurant = {
  image:string,
  name:string,
  overallScore:number,
  genre:string
}


export default function RestaurantCard({image, name, overallScore, genre} : Restaurant) {

  let stars = "";
  (function popStars(){
    for(let i = 0; i < Math.floor(overallScore); i++){
      stars += "⭐";
    }
  })();

  return (
    <Card sx={{width:"20%", backgroundColor:"beige", display: "flex", justifyContent:"center", alignItems:"center", borderRadius:"8px", border:"1px solid #0111ff50"}}>
      <CardContent>
        <img width={200} height={150} src={image} alt={name}></img>
        <Typography variant='h4'>{name}</Typography>
        <Typography>{genre}</Typography>
        <Typography>{stars}  {overallScore +" / 5"} </Typography>
      </CardContent>
    </Card>
  );
}

