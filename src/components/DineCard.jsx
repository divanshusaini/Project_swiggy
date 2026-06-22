export default function DineCard({ rest }) {
  return (

    <div className="max-w-sm  flex-none ">
        
        <div className=" relative">
            <img className="w-80 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+rest?.info?.mediaFiles[0]?.url} alt="" />
            <p className="absolute bottom-2 left-4 text-2xl text-white">{rest?.info?.name}</p>
            <p className="absolute bottom-2 right-4 text-2xl text-white">{rest?.info?.rating?.value}</p>
        </div>
    </div>
  );
}
