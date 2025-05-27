"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          ndustudenthub
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/events"
            className=" hover:text-blue-600 transition-colors tracking-wide"
          >
            Events
          </Link>
          <Link
            href="/news"
            className=" hover:text-blue-600 transition-colors tracking-wide"
          >
            News
          </Link>
          <Link
            href="/sports"
            className=" hover:text-blue-600 transition-colors tracking-wide"
          >
            Sports
          </Link>
          <Link
            href="/clubs"
            className=" hover:text-blue-600 transition-colors tracking-wide"
          >
            Clubs
          </Link>
        </div>

        {/* Call to Action Button - Desktop */}
        <div className="hidden md:block">
          <Link
            href="/auth/signup" // Assuming this leads to a signup page
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors shadow-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)} // Example toggle
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu (conditionally rendered based on state) - */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <Link
              href="/events"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Events
            </Link>
            <Link
              href="/news"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              News
            </Link>
            <Link
              href="/sports"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Sports
            </Link>
            <Link
              href="/clubs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Clubs
            </Link>
            {/* <Link
              href="/auth/signup"
              className="block w-full text-left mt-2 px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
            </Link> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
