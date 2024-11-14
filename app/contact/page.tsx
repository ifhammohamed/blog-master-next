"use client";
import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log("Form submitted:", formData);
    // Clear the form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 py-16 sm:py-24 lg:py-32">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
          Get in Touch
        </h1>
        <p className="mt-6 text-lg text-gray-600 text-center">
          We’d love to hear from you! Please fill out the form below or reach
          out to us via email.
        </p>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full text-black rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full text-black rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full text-black rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-indigo focus-visible:outline-offset focus-visible:outline-indigo transition duration-200 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
