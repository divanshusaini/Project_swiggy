export default function RestCard({ restInfo }) {
  return (
    <img className="h-45 w-70 object-cover"
      src={
        "https://media-assets.swiggy.com/swiggy/image/upload/" +
        restInfo.info.cloudinaryImageId
      }
      alt=""
    />
  );
}
