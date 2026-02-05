import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/components/Home";
import Land from "./assets/components/Land";
import VehiclePage from "./assets/components/VehiclePage";
import { vehicleData } from "./assets/components/VehicleData";
import { useParams } from "react-router-dom";
import Discover from "./assets/components/Discover";
import { Link } from "react-router-dom";
import Air from "./assets/components/Air";
import Water from "./assets/components/Water";
import Navbar from "./assets/components/Navbar";
import Video from "./assets/components/Video";
import About from "./assets/components/About";
import VehicleGame from "./assets/components/Game";

const VehicleWrapper = () => {
  const { type } = useParams();
  return <VehiclePage data={vehicleData[type]} />;
};

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/water" element={<Water />} />
        <Route path="/land" element={<Land />} />
        <Route path="/air" element={<Air />} />
        <Route path="/about" element={<About />} />
        <Route path="/video/:type" element={<Video />} />

        <Route path="/vehicle/:type" element={<VehicleWrapper />} />
        <Route path="/game" element={<VehicleGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
