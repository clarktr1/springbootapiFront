import GenreCard from "./GenreCard";
import { Typography, Container, Grid } from "@mui/material";
import burger from "../../assets/foods/burger.png";
import american from "../../assets/foods/steak.png";
import fastfood from "../../assets/foods/fries.png";
import breakfast from "../../assets/foods/eggs.png";
import chinese from "../../assets/foods/ramen.png";
import sandwich from "../../assets/foods/sandwich.png";
import pizza from "../../assets/foods/pizza.png";


const categories = [
    { name: 'Burgers', image: burger, link: '/' },
    { name: 'American', image: american, link: '/' },
    { name: 'Fast Food', image: fastfood, link: '/' },
    { name: 'Breakfast', image: breakfast, link: '/' },
    { name: 'Chinese', image: chinese, link: '/' },
    { name: 'Sandwhich', image: sandwich, link: '/' },
    { name: 'Pizza', image: pizza, link: '/x  '},
  ];

export default function GenreContainer(){
    return(
        <Container maxWidth="lg" sx={{ marginTop: "10vh" }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ margin: "8vh" }}>
          Genres
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {categories.map((category, index) => (
            <Grid item key={index} xs={6} sm={3} md={3} lg={3}>
              <GenreCard {...category} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
}