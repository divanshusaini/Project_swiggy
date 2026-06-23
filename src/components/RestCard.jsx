import { Link } from "react-router";

export default function RestCard({ restInfo }) {
  return (
    <Link to={"/city/delhi/"+restInfo?.info?.id}>
    <div className="max-w-[280px] mb-2  transform transition duration-200 hover:scale-95">
      <img
        className="h-45 w-70 object-cover rounded-xl"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          restInfo?.info?.cloudinaryImageId
        }
        alt=""
      />
      <div className="w-[95%] mx-auto mt-3">
        <div className="font-bold text-xl ">{restInfo?.info?.name}</div>
        <div className=" flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-green-600"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
          </svg>

          <span className="text-lg">{restInfo?.info?.avgRating}</span>
          <span className="text-lg font-bold">
            {restInfo?.info?.sla?.slaString}
          </span>
        </div>
        <div className="text-gray-600 text-xl mt-1 h-7 overflow-hidden">{restInfo?.info?.cuisines.join(" ,")}</div>
        <div className="text-gray-500 text-base mt-1 h-7 overflow-hidden">{restInfo?.info?.areaName}</div>
      </div>
    </div>
    </Link>
  );
}
