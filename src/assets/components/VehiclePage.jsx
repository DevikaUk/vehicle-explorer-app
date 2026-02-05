import { SquarePlay, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { vehicleData } from "./VehicleData";
import { Link } from "react-router-dom";


const VehiclePage = () => {
  const { type } = useParams(); // car, bus, train
  const data = vehicleData[type];

  const { name, bgColor, images, points } = data;
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center gap-6 px-4"
      style={{ backgroundColor: bgColor }}
    >
      {/* Slider */}
      <div className="flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="bg-white/70 p-2 rounded-full hover:bg-white"
        >
          <ChevronLeft />
        </button>

        <div className="w-64 h-40 sm:w-80 sm:h-52 md:w-96 md:h-60 overflow-hidden rounded-xl">
          <img
            src={images[current]}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <button
          onClick={nextSlide}
          className="bg-white/70 p-2 rounded-full hover:bg-white"
        >
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-bold text-2xl">{name}</h1>

      <ol className="list-decimal list-inside text-lg space-y-3 max-w-md">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ol>

      <Link to={`/video/${type}`}
      className="bg-[#feb176] p-5 rounded-full flex items-center gap-3 text-lg shadow-md hover:scale-120">
        <SquarePlay />
        Watch video
      </Link>
    </div>
  );
};

export default VehiclePage;
