"use client";

import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
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
            className="hover:text-blue-600 transition-colors"
          >
            Events
          </Link>
          <Link href="/news" className="hover:text-blue-600 transition-colors">
            News
          </Link>
          <Link
            href="/sports"
            className="hover:text-blue-600 transition-colors"
          >
            Sports
          </Link>
          <Link
            href="/resources"
            className="hover:text-blue-600 transition-colors"
          >
            Resources
          </Link>
          <Link
            href="/spotlights"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
          >
            Weekly Spotlights
          </Link>
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Link
            href="/auth/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors shadow-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <Link
              href="/events"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 hover:text-blue-600 hover:bg-gray-50"
            >
              Events
            </Link>
            <Link
              href="/news"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 hover:text-blue-600 hover:bg-gray-50"
            >
              News
            </Link>
            <Link
              href="/sports"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 hover:text-blue-600 hover:bg-gray-50"
            >
              Sports
            </Link>
            <Link
              href="/resources"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 hover:text-blue-600 hover:bg-gray-50"
            >
              Resources
            </Link>
            <Link
              href="/spotlights"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 hover:text-blue-600 hover:bg-gray-50"
            >
              Weekly Spotlights
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
