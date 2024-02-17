
import { Container, Divider } from "@mui/material";
import Footer from "../Footer/Footer";
import GenreContainer from "../Genres/GenreContainer";
import HeroContainer from "../Hero/HeroContainer";
import RestaurantContainer from "./RestaurantContainer";


export default function Home(){


    return (
        <>
         <HeroContainer />
         <RestaurantContainer />
         <Divider sx={{marginTop:"4rem"}}/>
         <GenreContainer />
        <Footer />
        </>
    );
  
}