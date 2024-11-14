"use client";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: contact@yourblog.com</p>
            <p>Phone: +1 (234) 567-890</p>
            <p>Address: 123 Blog St, Blog City, BC 12345</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="hover:text-indigo-400">
                  {/* Replace with actual icons or use a library like Heroicons */}
                  <span className="sr-only">Facebook</span>🌐
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-indigo-400">
                  {/* Replace with actual icons or use a library like Heroicons */}
                  <span className="sr-only">Twitter</span>🐦
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-indigo-400">
                  {/* Replace with actual icons or use a library like Heroicons */}
                  <span className="sr-only">Instagram</span>📸
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Your Blog Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
