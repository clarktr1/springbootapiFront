import { useEffect, useState } from "react"
import RestaurantHero from "./RestaurantHero"
import ReviewSection from "./ReviewSection"
import { useParams } from "react-router-dom"
import Footer from "../Footer/Footer"

export default function RestaurantPage(){

    const [reviews, setReviews] = useState([])
    const {restaurant} = useParams<{restaurant:string}>()

    async function getRestaurant(){
        const response = await fetch(`https://springbootback-production.up.railway.app/restaurants/all`)
        const data = await response.json()

        for(let i = 0; i < data.length; i++){
            if(data[i].name === restaurant){
        
                setReviews(data[i])
            }
        }
    }

    useEffect(() => {
        getRestaurant()
    }, [restaurant])


    return(
        <>
            <RestaurantHero {...reviews}/>
            <ReviewSection {...reviews} />
            <Footer />
        </>
    )
}