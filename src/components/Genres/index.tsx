import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarV2 from "../NavBar/NavBarV2";
import { Container, Divider, Grid, Paper, Typography } from "@mui/material";
import FilterBar from "./FilterBar";
import ChatIcon from '@mui/icons-material/Chat';

function GenreLongCard({id, name, image, overallScore, index, peanutScore, dairyScore, eggScore}:any) {

    const [review, setReview] = useState("");
    async function getReview(){
        const response = await fetch(`http://springbootback-production.up.railway.app/review/approved/restaurant_${id}`);
        const data = await response.json();
        console.log(data);
        setReview(data[0].commentary);
    }

    let stars = "";
    (function popStars(){
      for(let i = 0; i < Math.floor(overallScore); i++){
        stars += "⭐";
      }
    })();

    useEffect(() => {
        getReview();
    }, []);

    return (
        <Paper elevation={3} style={{width:"100%", maxHeight:"25%", display:"flex", flexDirection:"row", marginBottom:"4vh"}}>
            <img src={image} alt={name} style={{width:250, height:"auto"}}/>
            <Container style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
                <Typography variant="h5" fontWeight="bold" >{index}. {name}</Typography>
                <Typography>{stars} {overallScore} / 5</Typography>
                <Container style={{display:"flex", padding:"0"}}>    
                    <ChatIcon /> <Typography sx={{width:"70%", color:"gray"}}>{review ? review : "No review yet. Be the first!"}</Typography>
                </Container>
                <Container style={{display:"flex", flexDirection:"row", justifyContent:"flex-start"}}>
                    <Typography>{peanutScore >= 4 ? "✅":"❌"} Peanut-friendly  </Typography>
                    <Typography>{dairyScore >= 4 ? "✅":"❌"} Dairy-friendly  </Typography>
                    <Typography>{eggScore >= 4 ? "✅":"❌"} Egg-friendly  </Typography>
                </Container>
            </Container>
        </Paper>
    );
}

type Restaurant = {
    id:number,
    image:string,
    name:string,
    overallScore:number,
    genre:string
}

export default function GenreSearch(){

    const [restaurants, setRestaurants] = useState([] as Restaurant[]);
    const { genre } = useParams<{genre: string}>();
    
    async function getRestaurants(){
        const response = await fetch(`https://springbootback-production.up.railway.app/restaurants/genre/${genre}`);
        const data = await response.json();
        console.log(data);
        setRestaurants(data);
    }

    // function formatGenre(genre:any){
    //     if(genre.endsWith("s"))
    //     return genre.slice(0,genre.length-1).charAt(0).toUpperCase() + genre.slice(1,genre.length-1);
    // }

    useEffect(() => {
        getRestaurants();
    }, [genre]);

    return (
        <>
            <NavBarV2 />
            <Divider sx={{marginBottom:"8vh"}}/>
            
            <Container sx={{minWidth:"100%", display:"flex"}}>
                <FilterBar />
                <Grid item lg={12} >
                    {restaurants.map((restaurant, index) => {
                        return <GenreLongCard key={index} index={++index} {...restaurant} />
                    })}
                </Grid>
                <div style={{flex: "0 0 25%"}}></div> {/* Empty space */}
            </Container>
        </>
    );
}
