import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [location, setLocation] = useState("all");
  const [minPrice, setMinPrice] = useState("noMin");
  const [maxPrice, setMaxPrice] = useState("noMax");
  const [minBedrooms, setMinBedrooms] = useState("noMin");
  const [maxBedrooms, setMaxBedrooms] = useState("noMax");

  const [isHomeSearchTriggered, setIsHomeSearchTriggered] = useState(false);

  const navigate = useNavigate();

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
    setIsHomeSearchTriggered(!isHomeSearchTriggered);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    navigate(
      `/rent?location=${location}&minPrice=${minPrice}&maxPrice=${maxPrice}&minBedrooms=${minBedrooms}&maxBedrooms=${maxBedrooms}`
    );
  };

  return (
    <section className="flex justify-center items-center bg-[url('/bg-image.jpg')] bg-no-repeat py-6 bg-cover md:max-h-min relative bg-white">
      <div
        className={`p-10 m-6 bg-black rounded-xl bg-opacity-20 text-center ${
          isFormVisible ? "h-auto min-h-[20rem]" : "max-w-full h-auto"
        } w-full sm:w-auto`}
      >
        <h1 className="text-4xl md:text-5xl mb-4 font-bold text-white">
          Welcome to <span className="text-orange-500">U</span>ni
          <span className="text-blue-500">L</span>ink Property Services
        </h1>
        <p className="text-white text-lg mb-6">
          Explore the best properties with us.
        </p>

        <div className="mt-6">
          {/* <button
            className="bg-blue-500 text-white w-32 px-6 py-3 rounded-lg text-nowrap cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-600"
            onClick={toggleFormVisibility}
          >
            Get Started
          </button> */}

          <button
            onClick={toggleFormVisibility}
            className="relative rounded-lg w-40 h-14 bg-gradient-to-l from-blue-600 to-orange-600 text-white text-lg tracking-wide font-semibold uppercase overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-110 hover:rotate-[-3deg] hover:shadow-lg"
          >
            Get Started!
            <span className="absolute top-0 left-[-100%] w-full h-[3px] bg-gradient-to-r from-transparent to-[#f6e58d] animate-moveLeft"></span>
            <span className="absolute right-0 top-[-100%] w-[3px] h-full bg-gradient-to-b from-transparent to-[#f6e58d] animate-moveDown"></span>
            <span className="absolute bottom-0 right-[-100%] w-full h-[3px] bg-gradient-to-l from-transparent to-[#f6e58d] animate-moveRight"></span>
            <span className="absolute left-0 bottom-[-100%] w-[3px] h-full bg-gradient-to-t from-transparent to-[#f6e58d] animate-moveUp"></span>
          </button>

          <div
            className={`w-full max-w-4xl mx-auto transition-all duration-300 ease-in-out 
          ${isFormVisible ? "opacity-100 visible" : "hidden"}`}
          >
            <form onSubmit={handleSearchSubmit}>
              <div className="flex flex-col md:flex-row flex-wrap bg-white p-5 mt-4 rounded-md shadow-md max-w-4xl w-full gap-5">
                <div className="flex-1">
                  <label>Location</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option value="all">All location</option>
                    <option value="Wollaton">Wollaton</option>
                    <option value="Beeston">Beeston</option>
                    <option value="Dunkirk">Dunkirk</option>
                    <option value="Lenton">Lenton</option>
                    <option value="City Center">City Center</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label>Price Range</label>
                  <select
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  >
                    <option value="noMin">No Min</option>
                    <option value="150">150 pppw</option>
                    <option value="200">200 pppw</option>
                    <option value="250">250 pppw</option>
                    <option value="300">300 pppw</option>
                    <option value="350">350 pppw</option>
                    <option value="400">400 pppw</option>
                    <option value="450">450 pppw</option>
                    <option value="500">500 pppw</option>
                    <option value="550">550 pppw</option>
                    <option value="600">600 pppw</option>
                  </select>

                  <select
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  >
                    <option value="noMax">No Max</option>
                    <option value="150">150 pppw</option>
                    <option value="200">200 pppw</option>
                    <option value="250">250 pppw</option>
                    <option value="300">300 pppw</option>
                    <option value="350">350 pppw</option>
                    <option value="400">400 pppw</option>
                    <option value="450">450 pppw</option>
                    <option value="500">500 pppw</option>
                    <option value="550">550 pppw</option>
                    <option value="600">600 pppw</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label>Bedrooms</label>
                  <select
                    value={minBedrooms}
                    onChange={(e) => setMinBedrooms(e.target.value)}
                  >
                    <option value="noMin">No Min</option>
                    <option value="0">Studio</option>
                    <option value="1">1 Bed</option>
                    <option value="2">2 Bed</option>
                    <option value="3">3 Bed</option>
                    <option value="4">4 Bed</option>
                    <option value="5">5 Bed</option>
                    <option value="6">6 Bed</option>
                  </select>
                  <select
                    value={maxBedrooms}
                    onChange={(e) => setMaxBedrooms(e.target.value)}
                  >
                    <option value="noMax">No Max</option>
                    <option value="0">Studio</option>
                    <option value="1">1 Bed</option>
                    <option value="2">2 Bed</option>
                    <option value="3">3 Bed</option>
                    <option value="4">4 Bed</option>
                    <option value="5">5 Bed</option>
                    <option value="6">6 Bed</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className="bg-orange-500 text-white w-32 px-6 py-3 font-bold rounded-md transition-all duration-300 ease-in-out hover:bg-orange-600"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
