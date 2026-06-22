export default function FoodCard({ foodData }) {
  return (
    <div className="flex flex-col">
      <a href={foodData?.action.link}>
        <img
          className="h-40 w-30 object-cover  "
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
            foodData?.imageId
          }
          alt=""
        />
      </a>
      <h2>{foodData?.action.text}</h2>
    </div>
  );
}
