import {Typography,Card, CardContent, CardActionArea } from '@mui/material';



const GenreCard = ({name, image, link}:any) => {
  return (
    
      <Card sx={{textAlign:"center", display:"flex", justifyContent:"center", alignContent:"center", flexWrap:"wrap", margin:"2rem", "&:hover": {
          cursor:"pointer", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.6)"
        },}} >
          <CardActionArea href={link}>
            <CardContent >
                <img width="50%" height="50%" src={image} />
                <Typography>{name}</Typography>
          </CardContent>
         </CardActionArea>
      </Card>
   
  );
}

export default GenreCard;
