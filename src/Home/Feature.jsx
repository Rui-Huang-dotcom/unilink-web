import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ContactForm from "../ContactForm";
import { fetchData } from "../data/fetchproperties";

export default function Feature() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      const data = await fetchData();
      setProperties(data);
    };

    getProperties();
  }, []);
  return (
    <section className="p-10 z-100">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="text-2xl mb-4 md:text-4xl font-bold">
          <p>Featured properties</p>
        </div>
        <div className="mb-3 md:mb-0">
          <ContactForm />
        </div>
        <Link
          to="/rent"
          className="bg-blue-500 text-white border px-4 py-2 md:px-6 md:py-3 rounded-lg text-nowrap transition-all duration-300 ease-in-out hover:bg-blue-600 inline-block"
        >
          Browse all properties
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-6">
        {properties.slice(0, 4).map((property, index) => (
          <PropertyCard
            key={index}
            image={
              property.images.length > 1 ? property.images[0] : property.images
            }
            {...property}
          />
        ))}
      </div>
    </section>
  );
}
