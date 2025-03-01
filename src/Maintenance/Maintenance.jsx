import React from "react";

export default function Maintenance() {
  return (
    <section className="bg-gray-100 flex justify-center items-center p-10 border">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg mb-6 shadow-md">
        <h2 className="text-4xl text-blue-500 font-bold text-center mb-6">
          Submit a Maintenance Request
        </h2>
        <form action="" className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <label>Name</label>
              <input type="text" required/>
            </div>
            <div className="flex-1">
              <label>Tenant Reference</label>
              <input type="text" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <label>Phone</label>
              <input type="number" required/>
            </div>
            <div className="flex-1">
              <label>Email</label>
              <input type="email" required/>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <label>House Number</label>
              <input type="number" required/>
            </div>
            <div className="flex-1">
              <label>Street</label>
              <input type="text" />
            </div>
            <div className="flex-1">
              <label>Postcode</label>
              <input type="text" />
            </div>
            <div className="flex-1">
              <label>Date Issue Occurred</label>
              <input type="date" />
            </div>
          </div>

          <div className="flex-1">
            <label>Message</label>
            <textarea name="message" rows="4"></textarea>
          </div>

          <div className="flex-1">
            <label>Photos/Video</label>
            <input type="file" />
          </div>

          <div className="flex justify-start gap-2">
            <div>
              <input type="checkbox" className="cursor-pointer" />
            </div>
            <div>
              <label className="text-sm">
                I agree to use my personal data.
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-orange-500 text-white w-32 px-6 py-3 font-bold rounded-md transition-all duration-300 ease-in-out hover:bg-orange-600"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
