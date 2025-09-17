"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function CategoryFilterDropdown({
  activeCategory,
  categories,
  createQueryString,
  basePath,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 bg-white text-black-700 border border-blue-900 rounded-full cursor-pointer transition-colors"
      >
        <span>
          Category: {activeCategory === "all" ? "All" : activeCategory}
        </span>
        <FaChevronDown className="text-xs" />
      </button>
      {open && (
        <div className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
          <a
            href={`${basePath}?${createQueryString({ category: "all" })}`}
            className={`block px-4 py-2 text-sm ${
              activeCategory === "all"
                ? "bg-gray-100 text-gray-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Categories
          </a>
          {categories.map((category) => (
            <a
              key={category}
              href={`${basePath}?${createQueryString({ category })}`}
              className={`block px-4 py-2 text-sm capitalize ${
                activeCategory === category
                  ? "bg-green-100 text-green-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
