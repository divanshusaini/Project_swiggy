import { useEffect, useState } from "react"
import RestCard from "./RestCard";

export default function Restaurant(){
    const [RestData,setRestData] = useState([]);
    useEffect(()=>{
        async function fetchdata() {
        
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
            const swiggyApi="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true"

        const response = await fetch(proxyServer+swiggyApi)
        const data = await response.json();
        setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        }
        fetchdata();
    },[])

    // console.log(RestData);
    return (
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            {
                RestData.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
            }

        </div>
    )
}