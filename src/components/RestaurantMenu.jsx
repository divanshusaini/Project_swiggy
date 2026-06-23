import { useState ,useEffect} from "react";
import { useParams } from "react-router"

export default function RestaurantMenu(){
    let {id} = useParams();

    const [restData,setRestData]= useState(null);

     useEffect(()=>{
            async function fetchdata() {
            
                const proxyServer = "https://cors-anywhere.herokuapp.com/"
                const swiggyApi=`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
    
            const response = await fetch(proxyServer+swiggyApi)
            const data = await response.json();
            setRestData(data);
            }
            fetchdata();
        },[])
    
        console.log(restData);
    return (
        <>
        </>
    )
}