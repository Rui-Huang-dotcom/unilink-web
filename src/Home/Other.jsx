import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Other() {
  return (
    <section className="flex flex-col bg-white h-full w-full">
      <div className="p-6 bg-gray-500 min-h-min">
        <div className="text-center text-3xl text-white md:px-24 m-4">
          Welcome to Unilink, your trusted partner in property letting and
          management since February 2018. Our team is committed to providing
          rapid, efficient, and professional services tailored to your needs.
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/about"
            className="bg-orange-500 text-white w-32 px-6 py-3 font-bold rounded-md transition-all duration-300 ease-in-out hover:bg-orange-600"
          >
            About us
          </Link>
        </div>
      </div>
      <div className="bg-[url('/blog-post-1.jpg')] bg-no-repeat py-6 bg-cover h-full ">
        <div className="text-4xl font-bold text-white text-center my-10 py-6 mx-6 md:mx-4 bg-gray-500 bg-opacity-60 rounded-lg">
          “Unilink – Connecting Landlords And Tenants With Seamless Service,
          Expert Solutions, And A Hassle-Free Rental Experience.”
        </div>
      </div>
      <div className="flex flex-col px-6 py-4 min-h-fit w-full bg-gray-400">
        <a href="">
          <img
            src="/myDeposits.jpeg"
            alt=""
            className="w-52 h-auto rounded-lg" // Or w-auto h-52 if you want to use tailwind sizing units
          />
        </a>
      </div>
    </section>
  );
}
