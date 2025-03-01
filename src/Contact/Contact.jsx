import React from "react";
import { FaPhoneAlt, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="flex flex-col gap-6  md:flex-row p-10 md:gap-12">
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <div>
              <h2 className="text-center text-wrap text-3xl font-bold text-blue-500 mb-6">
                OFFICE OPENING HOURS
              </h2>
              <div className="flex text-gray-700 flex-col gap-5">
                <div className="flex flex-row justify-between">
                  <div className="justify-self-start">Monday</div>
                  <div>10am – 5pm</div>
                </div>
                <div className="flex flex-row justify-between">
                  <div>Tuesday</div>
                  <div>10am – 5pm</div>
                </div>
                <div className="flex flex-row justify-between">
                  <div>Wednesday</div>
                  <div>10am – 5pm</div>
                </div>
                <div className="flex flex-row justify-between">
                  <div>Thursday</div>
                  <div>10am – 5pm</div>
                </div>
                <div className="flex flex-row justify-between">
                  <div>Friday</div>
                  <div>10am – 5pm</div>
                </div>
                <div className="flex flex-row justify-between">
                  <div>Saturday & Sunday</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <div>
              <h2 className="text-center text-nowrap text-3xl font-bold text-blue-500 mb-6">
                CONTACT US
              </h2>
              <div className="flex flex-col text-gray-700 gap-5">
                <div>
                  <FaPhoneAlt className="text-xl inline-block mr-2" /> +44 01159
                  800 895
                </div>
                <div>
                  <MdEmail className="text-xl inline-block mr-2" />
                  info@unilinkletting.co.uk
                </div>
                <div>
                  <FaHome className="text-xl inline-block mr-2" />
                  245 Ilkeston Road Nottingham NG7 3FX
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
