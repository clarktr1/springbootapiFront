import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarV2 from "../NavBar/NavBarV2";
import { Button, Container, Divider, Grid, Paper, Typography, Rating } from "@mui/material";
import FilterBar from "./FilterBar";
import ChatIcon from '@mui/icons-material/Chat';
import Footer from "../Footer/Footer";

function GenreLongCard({id, name, image, overallScore, index, peanutScore, dairyScore, eggScore}:any) {

    const [review, setReview] = useState([]);
    async function getReview(){
        const response = await fetch(`https://springbootback-production.up.railway.app/review/approved/restaurant_${id}`);
        const data = await response.json();
        console.log(data);
        setReview(data);
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
        <Paper elevation={3} style={{width:"100%", height:"18%", display:"flex", flexDirection:"row", marginBottom:"4vh", }}>
            <img src={image} alt={name} style={{width:240, maxHeight:"100%",  borderRadius:"3px"}}/>
            <Container style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
                <Typography variant="h5" fontWeight="bold" >{index}. {name}</Typography>
                <Container style={{display:"flex", width:"70%", flexDirection:"row", alignItems:"center", padding:"0", margin:0}}>
                    <Rating size='large' name="read-only" precision={0.5} value={overallScore} readOnly></Rating>
                    <Typography fontSize={".9rem"}>{overallScore} / 5 ({review.length} reviews)</Typography>
                </Container>
                <Container style={{display:"flex", padding:"0"}}>    
                    <ChatIcon /> <Typography sx={{width:"70%", color:"gray"}}>{(review as any[]).length > 0 ? (review as any[])[0].commentary : "No review yet. Be the first!"}</Typography>
                </Container>
                <Container style={{display:"flex", flexDirection:"row", padding:'0'}}>
                    <Typography>{peanutScore >= 4 ? "✅":"❌"} Peanut-friendly  </Typography>
                    <Typography>{dairyScore >= 4 ? "✅":"❌"} Dairy-friendly  </Typography>
                    <Typography>{eggScore >= 4 ? "✅":"❌"} Egg-friendly  </Typography>
                </Container>
            </Container>
            <Container style={{ width:"20%", display:"flex", flexDirection:"column", justifyContent:"space-evenly", padding:'0'}}>
                    <Button href={`/restaurant/${name}`} variant="contained" color="primary" sx={{backgroundColor:"red",width:"30%", margin:"0 auto", "&:hover":{backgroundColor:"#E9664A"}}}>View</Button>
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
    const formattedGenre = formatGenre(genre); 
    
    async function getRestaurants(){
        const response = await fetch(`https://springbootback-production.up.railway.app/restaurants/genre/${genre}`);
        const data = await response.json();
        console.log(data);
        setRestaurants(data);
    }


    function formatGenre(genre:any){
        if(genre.endsWith("s"))
        return genre.slice(0,genre.length-1).charAt(0).toUpperCase() + genre.slice(1,genre.length-1);
        else
        return genre.charAt(0).toUpperCase() + genre.slice(1,genre.length);
    }

    useEffect(() => {
        getRestaurants();
    }, [genre]);

    return (
        <>
            <NavBarV2 />
            <Divider sx={{marginBottom:"8vh"}}/>
            <Typography variant="h3" fontWeight="bold" sx={{textAlign:"center", marginBottom:"4vh"}}>{formattedGenre} Restaurants Near You</Typography>
            <Container sx={{minWidth:"100%", display:"flex",  borderRadius:"16px", marginBottom:"20vh"}}>
             
                <FilterBar />
                <Grid item lg={12} >
                    {restaurants.map((restaurant, index) => {
                        return <GenreLongCard key={index} index={++index} {...restaurant} />
                    })}
                </Grid>
                <div style={{flex: "0 0 25%"}}></div> {/* Empty space */}
            </Container>
            <Footer />
        </>
    );
}
