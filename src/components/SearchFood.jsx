import React , { useState ,useEffect } from "react";
import { useParams } from "react-router"
import RestInfo from "./RestInfo";

export default function SearchFood(){
    const {id} = useParams();

    const [food,setFood]=useState("");
      const [restData,setRestData]= useState([]);
      const searchText = food.toLowerCase();

     useEffect(()=>{
                async function fetchdata() {
                
                    const proxyServer = "https://cors-anywhere.herokuapp.com/"
                    const swiggyApi=`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
                const response = await fetch(proxyServer+swiggyApi);
                const data = await response.json();                                
                const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;       
                const filterData = tempData?.filter((items) => items?.card?.card && 'title' in items?.card?.card);
                const uniqueItems = new Map();

                filterData?.forEach((items) => {
                    const menuCard = items?.card?.card;
                    const itemCards = menuCard?.itemCards || menuCard?.categories?.flatMap((category) => category?.itemCards || []) || [];

                    itemCards.forEach((item) => {
                        const info = item?.card?.info;
                        const itemKey = info?.id || info?.name;

                        if (itemKey && !uniqueItems.has(itemKey)) {
                            uniqueItems.set(itemKey, info);
                        }
                    });
                });
                
                setRestData(Array.from(uniqueItems.values()));
                }
               
                fetchdata();
                
            },[id])

    const searchedFood = restData.filter((items) => items?.name?.toLowerCase().includes(searchText));

    return (
      <div className="w-[80%] mx-auto mt-20">
        <input className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border"  placeholder="Search Here " onChange={(e)=>setFood(e.target.value)}></input>
        <div className="mt-10">
            {
                searchedFood.map((items)=><RestInfo key={items?.id || items?.name} restData={items}/>)
            }
        </div>
      </div>
    )
}
