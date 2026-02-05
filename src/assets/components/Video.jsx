import { useParams } from "react-router-dom";
import { vehicleData } from "./VehicleData";


const Video = () => {
  const { type } = useParams();          // "car", "bus", etc
  const vehicle = vehicleData[type];     // fetch from data

  if (!vehicle) {
    return <p>Vehicle not found</p>;
  }

  return (
    <div className="p-6 h-screen w-full bg-[#fbe5d5]">
      <h1 className="text-xl font-bold mb-4">{vehicle.name}</h1>

      <video
        src={vehicle.video}
        controls
        autoPlay
        muted
        loop
        className="w-full rounded-xl h-1/2 w-1/2"
      />
    </div>
  );
};

export default Video;
