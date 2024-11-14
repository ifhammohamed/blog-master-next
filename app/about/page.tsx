"use client";
import React from "react";

function About() {
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          About Us
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Welcome to our blog! We are passionate about sharing insights,
          stories, and tips that can help enrich your knowledge and improve your
          life. Our team is dedicated to providing high-quality content that is
          both informative and engaging.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
            <img
              src="../../public/window.svg"
              alt="Team Member"
              className="h-32 w-32 rounded-full object-cover shadow-lg"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Our Mission
              </h2>
              <p className="mt-2 text-gray-600">
                Our mission is to empower individuals through knowledge. We
                believe that everyone should have access to valuable information
                that can help them grow personally and professionally.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
            <img
              src="../../public/heart.svg"
              alt="Team Member"
              className="h-32 w-32 rounded-full object-cover shadow-lg"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Our Vision
              </h2>
              <p className="mt-2 text-gray-600">
                We envision a world where knowledge is freely shared, fostering
                a community of learners who support each other in their
                journeys.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
            <img
              src="../../public/window.svg"
              alt="Team Member"
              className="h-32 w-32 rounded-full object-cover shadow-lg"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Our Values
              </h2>
              <p className="mt-2 text-gray-600">
                Integrity, creativity, and community are at the core of
                everything we do. We strive to create a positive impact through
                our content and interactions.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
            <img
              src="../../public/window.svg"
              alt="Team Member"
              className="h-32 w-32 rounded-full object-cover shadow-lg"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Join Us</h2>
              <p className="mt-2 text-gray-600">
                We invite you to join our community! Subscribe to our newsletter
                for the latest updates and insights right in your inbox.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-indigo focus-visible:outline-offset focus-visible:outline-indigo"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
