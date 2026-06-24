import { useState ,useEffect} from "react";
import { useParams } from "react-router"
import MenuCard from "./MenuCard";

export default function RestaurantMenu(){
    let {id} = useParams();

    const [restData,setRestData]= useState([]);
    const [selected,setSelected]=useState(null);

     useEffect(()=>{
            async function fetchdata() {
            
                const proxyServer = "https://cors-anywhere.herokuapp.com/"
                const swiggyApi=`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
                // const swiggyApi=`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=${id}`
            const response = await fetch(proxyServer+swiggyApi)
            const data = await response.json();
            // console.log(data);
            
            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;            
            // const filterData = tempData?.filter((items)=> 'title' in items?.card?.card );
            const filterData = tempData?.filter((items) => 'title' in items?.card?.card).slice(1);
            console.log(filterData);
            setRestData(filterData);
            }
            fetchdata();
        },[])
    


        // console.log(filterData);
    return (
        <div>
             <div className="w-[80%] mx-auto mt-20 mb-20"> 
                <button className={`text-2xl py-2 px-8 mr-4 border rounded-2xl ${selected==="veg"?"bg-green-600":"bg-gray-300"} `} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
                <button className={`text-2xl py-2 px-4 border rounded-2xl ${selected==="nonveg"?"bg-red-500":"bg-gray-300"}`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non veg</button>
             </div>
        <div className="w-[80%] mx-auto  mt-20">
           {
            restData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodselected={selected}/>)
           }
        </div>
        </div>
    )
}