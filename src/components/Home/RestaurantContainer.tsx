import { Grid, Typography } from "@mui/material";
import{ useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

type Restaurant = {
  image: string;
  name: string;
  overallScore: number;
  genre: string;
};

export default function RestaurantContainer() {
  const [rests, setRests] = useState<Restaurant[]>([]);

  async function getRestaurants() {
    try {
      const response = await fetch("https://springbootback-production.up.railway.app/restaurants/all");
      const data = await response.json();
      const selectedIndices = new Set();
      const newArr = [];
      
      while (selectedIndices.size < 4) {
        const randomIndex = Math.floor(Math.random() * data.length);
        if (!selectedIndices.has(randomIndex)) {
          selectedIndices.add(randomIndex);
          newArr.push(data[randomIndex]);
        }
      }
      console.log(newArr);
      setRests(newArr);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <Grid container sx={{ marginTop: "10dvh" }} justifyContent="center">
    <Typography variant="h3" align="center" gutterBottom sx={{ margin: "8dvh" }}>
      Find a new restaurant
    </Typography>
    <Grid container spacing={2} justifyContent="space-around" lg={12} md={12} xl={12}>
      {rests.map((rest: Restaurant, index: number) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <RestaurantCard {...rest} />
        </Grid>
      ))}
    </Grid>
  </Grid>
  
  );
}
