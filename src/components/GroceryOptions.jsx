import {GroceryGridCards} from "../utils/Grocery"
import GroceryCard from "./GroceryCard"
export default function GroceryOptions() {
  return (
    <div className=" w-[80%]  container mx-auto mt-20 ">
      <h1 className="text-2xl font-bold">Shop groceries on Instamart</h1>
      <div className="   container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-3 mb-20">
        {GroceryGridCards.map((foodData) => (
          <GroceryCard key={foodData.id} foodData={foodData} />
        ))}
      </div>
    </div>
  )
}
