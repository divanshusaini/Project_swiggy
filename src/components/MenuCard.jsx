import RestInfo from "./RestInfo"
export default  function MenuCard({menuItems}){

    return (
       <div className="w-full">
        <p>{menuItems.title}</p>
        <div>
            {
                menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}/>)
            }
        </div>
       </div>
    )
}