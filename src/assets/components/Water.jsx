import { Link } from "react-router-dom";

const landVehicles = [
  { name: "Boat", key: "boat" },
  { name: "Ferry", key: "ferry" },
  { name: "Ship", key: "ship" },
   { name: "Submarine", key: "submarine" },

];

const Water = () => {
  return (
    <div className="min-h-screen bg-[#fbe5d5] flex flex-col items-center justify-center px-6 py-10">

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
        Vehicles That Travel on Land
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-gray-700 mt-3 mb-8 text-center">
        Tap a vehicle to learn more about it
      </p>

      {/* Buttons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-xl">
        {landVehicles.map((vehicle) => (
          <Link
            key={vehicle.key}
            to={`/vehicle/${vehicle.key}`}
            className="
              bg-[#d9d9d9] rounded-2xl p-6
              flex flex-col items-center
              shadow-md
              hover:scale-105 hover:shadow-lg
              transition-all duration-300
              active:scale-95
            "
          >
            <span className="mt-2 text-lg font-semibold text-gray-800">
              {vehicle.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Water;
