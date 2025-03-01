import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaBed,
  FaBath,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaPhoneAlt,
} from "react-icons/fa";
import { RiSofaFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { fetchData } from "./data/fetchproperties";
import ContactForm from "./ContactForm";

export default function PropertyDetail() {
  const { id } = useParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("photos");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch the data and store it in the state
    const getProperties = async () => {
      const data = await fetchData();
      setProperties(data); // Store the properties in the state
      setLoading(false);
    };

    getProperties(); // Fetch properties when the component mounts
  }, []);

  if (loading) return <p></p>;

  // Find the property with the matching id
  const property = properties.find((prop) => prop.id === id);

  // if (!property) return <p>Property not found.</p>;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <section className="bg-gray-100 lg:grid grid-cols-4 gap-6 xl:px-40 p-10 py-6 overflow-visible min-h-screen">
      <div className="shadow-lg p-6 rounded-lg  col-span-3">
        <div className="text-3xl text-orange-500 font-bold mb-6">
          <h1>
            {property.address}, Nottingham, {property.postcode}
          </h1>

          <div className="flex flex-col md:flex-row md:items-center text-2xl md:justify-between my-6 w-3/5">
            <div className=" text-orange-500">
              <p>£{property.price}pppw</p>
            </div>
            <div className="mt-2 md:mt-0">
              <ul className="flex flex-row space-x-6">
                <li>
                  <div className="flex items-center gap-2">
                    <div className="svg">
                      <FaBed />
                    </div>
                    <div>{property.bedrooms}</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <div className="svg">
                      <FaBath />
                    </div>
                    <div>{property.bathrooms}</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <div className="svg">
                      <RiSofaFill />
                    </div>
                    <div>{property.livingrooms}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row space-x-0 md:space-x-4 md: justify-start text-wrap text-base max-w-fit md:text-nowrap md:text-xl w-auto border-b mb-6">
            <button
              className={` ${
                activeTab === "photos"
                  ? "text-blue-600 border-b-2 border-b-blue-600"
                  : "text-gray-500 hover:text-blue-500 transition-all"
              }`}
              onClick={() => setActiveTab("photos")}
            >
              Photos
            </button>

            <button
              className={`p-2 ${
                activeTab === "map"
                  ? "text-blue-600 border-b-2 border-b-blue-600"
                  : "text-gray-500 hover:text-blue-500 transition-all"
              }`}
              onClick={() => setActiveTab("map")}
            >
              Map
            </button>

            <button
              className={`p-2 ${
                activeTab === "video"
                  ? "text-blue-600 border-b-2 border-b-blue-600"
                  : "text-gray-500 hover:text-blue-500 transition-all"
              }`}
              onClick={() => setActiveTab("video")}
            >
              Video
            </button>

            <button
              className={`p-2 ${
                activeTab === "floor"
                  ? "text-blue-600 border-b-2 border-b-blue-600"
                  : "text-gray-500 hover:text-blue-500 transition-all"
              }`}
              onClick={() => setActiveTab("floor")}
            >
              Floor Plan
            </button>

            <button
              className={`p-2 ${
                activeTab === "epc"
                  ? "text-blue-600 border-b-2 border-b-blue-600"
                  : "text-gray-500 hover:text-blue-500 transition-all"
              }`}
              onClick={() => setActiveTab("epc")}
            >
              EPC
            </button>
          </div>
        </div>
        <div className="md:w-3/4 mb-6">
          {activeTab === "photos" && (
            <div className="flex gap-4 relative">
              <div
                onClick={handlePrevImage}
                className="text-blue-500 animate-bounceLeftRight text-4xl rounded-lg absolute left-2 top-1/2 cursor-pointer opacity-70"
              >
                <FaArrowAltCircleLeft />
              </div>
              <div className="gap-x-2 flex w-fit box-content">
                <div className="md:w-1/2">
                  <img
                    src={property.images[currentImageIndex]}
                    alt="Property"
                    className="w-fit h-[300px] object-center rounded-lg"
                  />
                </div>
                <div className="hidden md:block md:w-1/2">
                  <img
                    src={
                      property.images[
                        (currentImageIndex + 1) % property.images.length
                      ]
                    }
                    alt="Property"
                    className="w-fit h-[300px] object-center rounded-lg"
                  />
                </div>
              </div>

              <div
                onClick={handleNextImage}
                className="text-blue-500 animate-bounceLeftRight text-4xl rounded-lg absolute right-2 top-1/2 cursor-pointer opacity-70"
              >
                <FaArrowAltCircleRight />
              </div>
            </div>
          )}

          {/* Add the other tab content (Map, Video, etc.) here */}
          {activeTab === "map" && (
            <div className="object-cover">
              <iframe
                title="Google Map"
                src={property.map}
                className="w-full h-[300px] border-0 rounded"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          )}
          {activeTab === "video" && (
            <div className="object-cover">
              <video
                controls
                className="rounded-lg h-[300px]"
                src={property.video}
              ></video>
            </div>
          )}
          {activeTab === "floor" && (
            <div className="object-cover">
              <div>
                <img
                  src={property.floor}
                  alt="Floor Plan"
                  className="w-full h-[300px] border-0 rounded"
                />
              </div>
            </div>
          )}
          {activeTab === "epc" && (
            <div className="object-cover">
              <div>
                <img
                  src={property.epc}
                  alt="Floor Plan"
                  className="w-full h-[300px]  border-0 rounded"
                />
              </div>
            </div>
          )}
        </div>
        {property.id === "1" && (
          <div>
            <p>
              Fully furnished 4 bedroom house with 2 bathrooms, open plan
              kitchen and living room, Perfect location for Nottingham and Trent
              University students and also 5 mins walk to QMC, close to
              transport links to the City Centre, Beeston, train station.
            </p>
            <br />
            <p>
              £110 per person per week (excluding bills) on a 50-52 week tenancy
              from August or August 2025. ***All inclusive bills package is
              available.***
            </p>
            <br />
            <p>Furnished double bedrooms with:</p>
            <ul className="detail-ul">
              <li className="detail-li">Wardrobe</li>
              <li>chest of draws</li>
              <li>Wardrobe</li>
              <li>bedside cabinet</li>
              <li>desk & chair</li>
            </ul>
            <p>Open kitchen equipped with:</p>

            <ul className="detail-ul">
              <li className="detail-li">4 rings gas hob</li>
              <li>Electric fan oven</li>
              <li>Extractor fan</li>
              <li>Fridge freezer</li>
              <li>Microwave</li>
              <li>Washer machine</li>
              <li>Condenser dryer</li>
              <li>Dining table & chairs</li>
            </ul>
            <p>Furnished lounge with:</p>
            <ul className="detail-ul">
              <li className="detail-li">2 sofas</li>
              <li>coffee table & TV stand</li>
            </ul>
          </div>
        )}
      </div>
      <div className="mt-6 md:col-span-1">
        <div className="md:sticky flex flex-col justify-self-center space-y-3 top-14 border-2 border-orange-500 p-6 rounded-lg shadow-lg max-w-fit">
          <ContactForm />
          <div className="flex flex-row items-center space-x-3">
            <div className="svg">
              <MdEmail />
            </div>
            <div className="text-wrap max-w-full">
              info@unilinkletting.co.uk
            </div>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <div className="svg">
              <FaPhoneAlt />
            </div>
            <div>+44 (0)1159 800 895</div>
          </div>
        </div>
      </div>
    </section>
  );
}
