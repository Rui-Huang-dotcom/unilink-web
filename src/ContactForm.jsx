import { useState } from "react";
import React from "react";

export default function ContactForm() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const closeForm = (e) => {
    if (e.target.classList.contains("overlay")) {
      setIsFormVisible(false);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="flex flex-col justify-center space-y-3 top-14  border-orange-500  rounded-lg shadow-lg">
        <button
          onClick={toggleFormVisibility}
          className="bg-orange-500 text-white p-3 text-center rounded-md transition-all duration-300 ease-in-out hover:bg-orange-600"
        >
          Book a viewing
        </button>
      </div>

      {isFormVisible && (
        <div
          onClick={closeForm}
          className="overlay fixed inset-0 z-50 bg-gray-500 bg-opacity-50 flex justify-center items-center"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-white p-6 rounded-lg shadow-lg relative text-sm max-h-5/6 w-3/5 md:w-1/5"
          >
            <h2 className="text-xl text-center font-bold mb-4">
              Contact Agent
            </h2>
            <p className="text-wrap text-center my-3">
              Reach out directly to the agent for inquiries, viewings, or
              additional property information.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="2"
                ></textarea>
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
        </div>
      )}
    </div>
  );
}
