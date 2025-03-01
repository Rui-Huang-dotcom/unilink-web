import React from "react";
import { Link } from "react-router-dom";

export default function PropertyCard({ id, image, price, bedrooms, address }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all">
      <div>
        <Link to={`/property/${id}`} target="_blank" className="block relative">
          <img
            src={image}
            alt="Property"
            className="w-full h-[180px] object-cover"
          />{" "}
          <div className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded-lg font-bold bg-opacity-60">
            To Let
          </div>
          <div className="bg-white p-4 text-orange-500">
            <p className="text-lg font-bold">£{price} pppw</p>
            <p className="text-base font-medium">{bedrooms} bedrooms</p>
            <p className="text-sm">{address}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
