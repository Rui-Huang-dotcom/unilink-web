import React from "react";

export default function About() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-semibold text-center text-blue-600 mb-8">
          Welcome to Unilink Property Services
        </h2>

        <div className="space-y-6">
          <div className="block text-xl text-gray-700">
            <h3 className="font-bold text-2xl mb-2">About Us</h3>
            <p>
              Your trusted partner in property letting and management since
              February 2018.
            </p>
          </div>

          <div className="block text-xl text-gray-700">
            <h3 className="font-bold text-2xl mb-2">Our Mission</h3>
            <p>
              At Unilink, we’re dedicated to taking care of landlords and
              tenants alike. We take full responsibility for ensuring a smooth
              and hassle-free experience, whether you’re renting out your
              property or searching for your next home. Our team is committed to
              providing rapid, efficient, and professional services tailored to
              your needs.
            </p>
          </div>

          <div className="block text-xl text-gray-700">
            <h3 className="font-bold text-2xl mb-2">Our Vision</h3>
            <p>
              Specialising in both letting and property management, we offer a
              comprehensive range of services, from finding the right tenants to
              handling day-to-day management.
            </p>
          </div>

          <div className="block text-xl text-gray-700">
            <h3 className="font-bold text-2xl mb-2">Why Choose Us?</h3>
            <div className="mb-2">
              <p>
                With Unilink, you can trust that your property is in safe hands,
                and your concerns will always be addressed promptly.We’re proud
                to foster strong relationships built on reliability,
                transparency, and exceptional service.
              </p>
            </div>
            <div className="mb-2">
              <p>
                At Unilink, we don’t just manage properties; we create positive
                experiences for landlords and tenants alike.
              </p>
            </div>
            <div className="mb-2">
              <p>
                Discover the difference with Unilink – where care and commitment
                come first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
