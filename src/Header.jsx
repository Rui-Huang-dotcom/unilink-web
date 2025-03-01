import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flex p-6 justify-between h-24 md:items-center bg-gradient-to-r from-white to-orange-300 from-40%">
      <img
        src="/image/logo.jpg"
        alt="logo"
        className="w-32 h-12 md:w-40 md:h-20"
      />

      <button
        className="md:hidden text-2xl z-50 transition-all duration-500 ease-in-out"
        onClick={toggleMenu}
        aria-label="Toggle Navigation"
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      <ul
        className={`${
          isMenuOpen
            ? "absolute border-t-2 border-t-orange-300 felx text-center space-y-2 w-full z-50 top-24 left-0 pb-4 bg-white flex-col bg-gradient-to-r from-white to-orange-300 from-40% transition-all duration-300 ease-in-out shadow-lg"
            : "md:flex md:space-x-6 hidden md:w-auto md:bg-transparent md:flex-row "
        }`}
      >
        <li className="text-blue-500 font-bold hover:text-blue-600 active:text-blue-700 transition-colors duration-300">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="block pb-2"
          >
            Home
          </Link>
        </li>
        <li className=" text-blue-500 font-bold hover:text-blue-600 active:text-blue-700">
          <button
            onClick={() =>
              navigate(
                "/rent?location=all&minPrice=noMin&maxPrice=noMax&minBedrooms=noMin&maxBedrooms=noMax"
              )
              
            }
          >
            Rent
          </button>
          {/* <Link
            to="/rent"
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className="block pb-2"
          >
            Rent
          </Link> */}
        </li>
        <li className=" text-blue-500 font-bold hover:text-blue-600 active:text-blue-700">
          <Link
            to="maintenance"
            onClick={() => setIsMenuOpen(false)}
            className="block pb-2"
          >
            Maintenance
          </Link>
        </li>
        <li className=" text-blue-500 font-bold hover:text-blue-600 active:text-blue-700">
          <Link
            to="about"
            onClick={() => setIsMenuOpen(false)}
            className="block pb-2"
          >
            About us
          </Link>
        </li>
        <li className=" text-blue-500 font-bold hover:text-blue-600 active:text-blue-700">
          <Link
            to="contact"
            onClick={() => setIsMenuOpen(false)}
            className="block pb-2"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
