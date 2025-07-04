"use client";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white  shadow-md sticky top-0 z-50">
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
            href="/resources"
            className=" hover:text-blue-600 transition-colors tracking-wide"
          >
            Resources
          </Link>
          <Link
            href="/spotlights"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 "
          >
            Weekly Spotlights
          </Link>
        </div>

        {/* Call to Action Button - Desktop */}
        <div className="hidden lg:block">
          <Link
            href="/auth/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors shadow-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
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
              href="/resources"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Resources
            </Link>

            <Link
              href="/spotlights"
              className=" hover:text-blue-600 transition-colors tracking-wide"
            >
              Weekly Spotlights
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
