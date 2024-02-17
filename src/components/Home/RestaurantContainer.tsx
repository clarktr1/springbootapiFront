import { Container, Typography } from "@mui/material";
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
      console.log(data);
      setRests(data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <Container sx={{ marginTop: "10dvh"}}>
      <Typography variant="h3" align="center" gutterBottom sx={{ margin: "8dvh"}}>
        Find a new restaurant
      </Typography>
      <Container sx={{ padding: "12px", display: "flex", justifyContent: "space-evenly" }}>
        {rests.map((rest: Restaurant, index: number) => (
          <RestaurantCard key={index} {...rest} />
        ))}
      </Container>
    </Container>
  );
}
