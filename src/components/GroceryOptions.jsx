import {GroceryGridCards} from "../utils/Grocery"
import GroceryCard from "./GroceryCard"
export default function GroceryOptions() {
  return (
    <div className=" mt-20 w-[80%]  container mx-auto">
      <h1>Shop groceries on Instamart</h1>
      <div className="w-[80%]  container mx-auto flex flex-wrap mt-20 gap-3">
        {GroceryGridCards.map((foodData) => (
          <GroceryCard key={foodData.id} foodData={foodData} />
        ))}
      </div>
    </div>
  )
}
