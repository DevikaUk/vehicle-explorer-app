import { Link } from "react-router-dom";

const Discover = () => {
    return(
        <div className="bg-[#fbe5d5] h-screen w-full flex flex-col items-center justify-center gap-20">
            <div>
                <h1 className="text-2xl">
                    Vehicles can travel on land, water and air
                </h1>
            </div>

            <div className="grid place-items-center gap-7">
                <h1 className="text-xl">Choose a category to explore</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7  place-items-center">
                    <Link  
                    to="/water"
                    className="bg-[#d9d9d9] hover:scale-105 font-bold shadow-blue-300 shadow-lg h-52 w-60 rounded-4xl flex flex-col items-center justify-between">
                        <img src="boat.png" alt="boat image" className="w-44"></img>
                        Water
                    </Link>
                    <Link 
                    to="/land"
                    className="bg-[#d9d9d9] hover:scale-105 font-bold shadow-amber-400 shadow-lg h-52 w-60 rounded-4xl flex flex-col items-center justify-between">
                        
                        <img src="car.png" alt="car image" className="w-44"></img>
                        Land
                    </Link>
                    <Link 
                    to="/air"
                    className="bg-[#d9d9d9] hover:scale-105 font-bold shadow-gray-500 shadow-lg h-52 w-60 rounded-4xl flex flex-col items-center justify-between">
                        <img src="airplane.png" alt="aeroplane image" className="w-52"></img>
                        Air
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Discover;