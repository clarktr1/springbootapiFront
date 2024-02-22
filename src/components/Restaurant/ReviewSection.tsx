import { Typography, Container, Divider, Rating } from "@mui/material";
import { useEffect, useState } from "react";


function Review({author, commentary, overallScore, date_posted}:any){

    function formatDate(){
        const date = new Date(date_posted);

        const year = date.getFullYear();
        const monthIndex = date.getMonth();
        const day = date.getDate();

        // Array of month names
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return `${monthNames[monthIndex]} ${day}, ${year}`;
    }



    return(
        <Container>
            <Container sx={{display:"flex", flexDirection:"row", alignItems:"center",}}>
                <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="user avatar" style={{width:"50px", height:"50px", borderRadius:"50%", marginRight:"1rem"}} />
                <Container>
                    <Typography variant="h6">{author}</Typography>
                    <Typography component={"p"}>{formatDate()}</Typography>
                    <Rating precision={0.5} value={overallScore} readOnly size="medium"/>
                </Container>
            </Container>
            <Typography variant="h5">{commentary}</Typography>
        </Container>
    )
}

export default function ReviewSection(review:any){
    const [reviewsList, setReview] = useState([]);
    async function getReview()
    {
        const response = await fetch(`https://springbootback-production.up.railway.app/review/approved/restaurant_${review.id}`);
        const data = await response.json();
        setReview(data);
    }

    useEffect(() => {
        getReview();
    }, [review.id]);

    return(
        <Container sx={{width:"60vw", margin:"2rem auto"}}>
            <Typography variant="h3">Review Section</Typography>
            {reviewsList.length > 0 ? reviewsList.map((review:any) => <><Review key={review.id} {...review} /><Divider key={Math.floor(Math.random() * 100)} sx={{marginBottom:"10vh"}}/> </>) : <Typography key={review.id + 1000} variant="h5">No reviews yet</Typography>}
        </Container>
    )
}