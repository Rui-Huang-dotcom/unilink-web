import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Navigate } from "react-router-dom";
import PropertyCard from "../Home/PropertyCard";
// import { properties } from "../data/properties";
import ContactForm from "../ContactForm";
import { fetchData } from "../data/fetchproperties";

export default function Rent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  const location = searchParams.get("location") || "all";
  const minPrice = searchParams.get("minPrice") || "noMin";
  const maxPrice = searchParams.get("maxPrice") || "noMax";
  const minBedrooms = searchParams.get("minBedrooms") || "noMin";
  const maxBedrooms = searchParams.get("maxBedrooms") || "noMax";

  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchLocation, setSearchLocation] = useState(location);
  const [searchMinPrice, setSearchMinPrice] = useState(minPrice);
  const [searchMaxPrice, setSearchMaxPrice] = useState(maxPrice);
  const [searchMinBedrooms, setSearchMinBedrooms] = useState(minBedrooms);
  const [searchMaxBedrooms, setSearchMaxBedrooms] = useState(maxBedrooms);

  const navigateToPage = (pageNumber, filters) => {
    const { location, minPrice, maxPrice, minBedrooms, maxBedrooms } = filters;

    let url = `/rent?page=${pageNumber}&location=${location}&minPrice=${minPrice}&maxPrice=${maxPrice}&minBedrooms=${minBedrooms}&maxBedrooms=${maxBedrooms}`;
    if (pageNumber <= 1) {
      url = `/rent?location=${location}&minPrice=${minPrice}&maxPrice=${maxPrice}&minBedrooms=${minBedrooms}&maxBedrooms=${maxBedrooms}`;
    }

    navigate(url);
  };

  const pageNumber = parseInt(searchParams.get("page")) || 1;
  const [propertiesPerPage] = useState(8);

  const indexOfLastProperty = propertiesPerPage * pageNumber;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const pagninate = (NewPageNumber) => {
    navigateToPage(NewPageNumber, {
      location,
      minPrice,
      maxPrice,
      minBedrooms,
      maxBedrooms,
    });
  };

  useEffect(() => {
    // Fetch the data and store it in the state
    const getProperties = async () => {
      const data = await fetchData();
      setProperties(data); // Store the properties in the state
    };

    getProperties(); // Fetch properties when the component mounts
  }, []);

  useEffect(() => {
    if (properties.length === 0) return;

    const filterProperties = () => {
      return properties.filter((property) => {
        const locationMatch =
          searchLocation === "all" ||
          property.location.includes(searchLocation);

        const priceMatch =
          (searchMinPrice === "noMin" || property.price >= searchMinPrice) &&
          (searchMaxPrice === "noMax" || property.price <= searchMaxPrice);

        const bedroomsMatch =
          (searchMinBedrooms === "noMin" ||
            property.bedrooms >= searchMinBedrooms) &&
          (searchMaxBedrooms === "noMax" ||
            property.bedrooms <= searchMaxBedrooms);

        return locationMatch && priceMatch && bedroomsMatch;
      });
    };
    setFilteredProperties(filterProperties());

    setSearchParams({
      location: searchLocation,
      minPrice: searchMinPrice,
      maxPrice: searchMaxPrice,
      minBedrooms: searchMinBedrooms,
      maxBedrooms: searchMaxBedrooms,
    });
  }, [
    searchLocation,
    searchMinPrice,
    searchMaxPrice,
    searchMinBedrooms,
    searchMaxBedrooms,
    properties,
  ]);

  useEffect(() => {
    setSearchLocation(location);
    setSearchMinPrice(minPrice);
    setSearchMaxPrice(maxPrice);
    setSearchMinBedrooms(minBedrooms);
    setSearchMaxBedrooms(maxBedrooms);
  }, [searchParams]);

  const nonFilteredProperties =
    filteredProperties.length >= 0
      ? properties.filter((property) => !filteredProperties.includes(property))
      : [];
  const number = filteredProperties.length;
  console.log(filteredProperties);
  return (
    <section className="flex flex-row justify-center items-center border space-y-3 bg-gray-100">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <form>
            <div className="flex flex-col md:flex-row flex-wrap bg-white p-5 mt-6 rounded-md shadow-md max-w-4xl w-full gap-5">
              <div className="flex-1">
                <label>Location</label>
                <select
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
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
                  value={searchMinPrice}
                  onChange={(e) => setSearchMinPrice(e.target.value)}
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
                  value={searchMaxPrice}
                  onChange={(e) => setSearchMaxPrice(e.target.value)}
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
                  value={searchMinBedrooms}
                  onChange={(e) => setSearchMinBedrooms(e.target.value)}
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
                  value={searchMaxBedrooms}
                  onChange={(e) => setSearchMaxBedrooms(e.target.value)}
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
            {/* <div className="flex justify-center mt-4">
                <button
                  className="bg-orange-500 text-white w-32 px-6 py-3 font-bold rounded-md transition-all duration-300 ease-in-out hover:bg-orange-600"
                  type="submit"
                >
                  Search
                </button>
              </div> */}
          </form>
        </div>
        <div className="max-w-fit self-center mt-6">
          <ContactForm />
        </div>
        <div className="mt-3 px-10">
          <p className="text-left w-full">
            <span className="font-bold text-xl">{number}</span> properties found
          </p>
        </div>
        <div className="p-10 grid grid-cols-2 md:grid-cols-4 justify-center gap-6">
          {currentProperties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
              image={
                property.images.length > 1
                  ? property.images[0]
                  : property.images
              }
            />
          ))}
        </div>
        {nonFilteredProperties.length > 0 && (
          <div>
            <div className="mt-6">
              <h2 className="text-center font-bold text-blue-500 text-2xl">
                You may also be interested in...
              </h2>
            </div>
            <div className="p-10 grid grid-cols-2 md:grid-cols-4 justify-center gap-6">
              {nonFilteredProperties.slice(0, 4).map((property) => (
                <PropertyCard
                  key={property.id}
                  {...property}
                  image={
                    property.images.length > 1
                      ? property.images[0]
                      : property.images
                  }
                />
              ))}
            </div>
          </div>
        )}
        {filteredProperties.length > propertiesPerPage && (
          <div className="flex justify-center mt-3">
            {Array.from({
              length: Math.ceil(filteredProperties.length / propertiesPerPage),
            }).map((_, index) => (
              <button key={index + 1} onClick={() => pagninate(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
