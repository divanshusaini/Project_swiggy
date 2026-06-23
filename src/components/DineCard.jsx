export default function DineCard({ rest }) {
  return (

    <div className="max-w-sm  flex-none ">
      <a target ="_blank" href={rest?.cta?.link}>
        
        <div className=" relative">
            <img className="w-80 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+rest?.info?.mediaFiles[0]?.url} alt="" />
            <p className="absolute bottom-2 left-2 text-[18] text-white z-10">{rest?.info?.name}</p>
            <p className="absolute bottom-2 right-2 text-xl text-white z-10">{rest?.info?.rating?.value}</p>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent  "></div>
        </div>
      </a>
    </div>
  );
}
