
import HeroContainer from "../Hero/HeroContainer";

// type Restaurant = {
//     image:string,
//     name:string,
//     overallScore:number,
//     genre:string
//   }

export default function Home(){


    // const [rests, setRests] = useState([]);
    
    // async function getRestaurants(){
    //     try{
    //         const response = await fetch('http://127.0.0.1:8080/restaurants/all');
    //         const data = await response.json();
    //         console.log(data);
    //         setRests(data)
    //     }
    //     catch(e){
    //         console.error(e);
    //     }
    // }

    

    return (
        <>
         <HeroContainer />
        </>
    );
    //     <Paper sx={{ padding: "12px", display: "flex", justifyConent: "space-evenly" }}>
    //         {rests.map((rest: Restaurant, index: number) => (
    //             <RestaurantCard key={index} {...rest} />
    //         ))}
    //     </Paper>
    // );
}