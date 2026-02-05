import { Link } from "react-router-dom";
import FeedbackPage from "./Game";

const Home = () => {
  return (
    <div className="h-screen w-full bg-[#fbe5d5] grid md:grid-cols-2">
      
      <div className="flex items-end order-2 md:order-1">
        <img
          src="/home.png"
          alt="vector image of vehicle"
          className="w-full"
        />
      </div>

      <div className="flex flex-col items-center justify-end md:justify-center w-full gap-20 order-1 md:order-2">

        <div className="w-2/3 text-center">
          <h1 className="text-xl md:text-2xl">
            Vehicle: A vehicle is something that moves people and things from one place to another.
          </h1>
        </div>

        <div className="flex flex-col w-full items-center gap-8 md:gap-12 text-xl md:text-2xl">

          {/* Discover Button */}
          <Link
            to="/discover"
            className="shadow-xl hover:scale-110 w-1/2 h-12 md:h-16 bg-[#a8cad8] rounded-full flex items-center justify-center transition"
          >
            Discover
          </Link>

          {/* About Button */}
          <Link
          to="/about"
            className="shadow-xl hover:scale-110 w-1/2 h-12 md:h-16 bg-[#8e96c7] rounded-full flex items-center justify-center transition"
          >
            About
          </Link>

          <Link
          to="/game"
            className="shadow-xl hover:scale-110 w-1/2 h-12 md:h-16 bg-[#92d2b1] rounded-full flex items-center justify-center transition"
          >
            Game
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Home;
