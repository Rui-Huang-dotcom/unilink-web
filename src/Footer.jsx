import React from "react";
import { Link } from "react-router-dom";
import { AiFillWechat } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneAlt, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-800 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        {/* Left Section */}

        <div className="flex text-center md:text-start justify-self-center">
          <ul className="space-y-2">
            <li className="text-2xl font-bold">
              <span className="text-orange-500">U</span>ni
              <span className="text-blue-500">L</span>ink
            </li>

            <li>
              <FaPhoneAlt className="text-xl inline-block mr-2" />
              +44 (0)1159 800 895
            </li>
            <li>
              <MdEmail className="text-xl inline-block mr-2" />
              info@unilinkletting.co.uk
            </li>
            <li>
              <AiFillWechat className="text-xl inline-block mr-2" />
              Unilinknotts
            </li>
            <li>
              <IoLogoWhatsapp className="text-xl inline-block mr-2" />
              Unilinknotts
            </li>
            <li>
              <FaHome className="text-xl inline-block mr-2" />
              245 Ilkeston Road
            </li>
            <li className="ml-7">Nottingham NG7 3FX</li>
            <li className="ml-7">United Kingdom</li>
          </ul>
        </div>

        {/* Middle Section */}
        <div className="flex justify-center">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2403.614528282052!2d-1.1794949!3d52.9553587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c1f5966745bd%3A0xd4e6803280ec79c1!2s245%20Ilkeston%20Rd%2C%20Lenton%2C%20Nottingham%20NG7%203FX!5e0!3m2!1sen!2suk!4v1736725304218!5m2!1sen!2suk"
            className="w-full h-48 md:w-80 md:h-56 border-0 rounded"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right Section */}
        <div className="flex text-center md:text-start justify-self-center">
          <ul className="space-y-2">
            <li className="font-bold text-2xl">Sitemap</li>
            <li>
              <Link
                to="/"
                className="text-blue-500 font-semibold hover:text-orange-500 hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/rent"
                className="text-blue-500 font-semibold hover:text-orange-500 hover:underline"
              >
                Rent
              </Link>
            </li>
            <li>
              <Link
                to="/maintenance"
                className="text-blue-500 font-semibold hover:text-orange-500 hover:underline"
              >
                Maintenance
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-blue-500 font-semibold hover:text-orange-500 hover:underline"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-blue-500 font-semibold hover:text-orange-500 hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
