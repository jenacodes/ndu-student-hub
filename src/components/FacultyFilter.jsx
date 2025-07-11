"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FacultyFilterDropdown({
  activeFaculty,
  faculties,
  createQueryString,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 bg-white text-green-700 border border-green-300 rounded-full cursor-pointer transition-colors"
      >
        <span>Faculty: {activeFaculty === "all" ? "All" : activeFaculty}</span>
        <FaChevronDown className="text-xs" />
      </button>
      {open && (
        <div className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
          <a
            href={`/news?${createQueryString({ faculty: "all" })}`}
            className={`block px-4 py-2 text-sm ${
              activeFaculty === "all"
                ? "bg-green-100 text-green-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Faculties
          </a>
          {faculties.map((faculty) => (
            <a
              key={faculty}
              href={`/news?${createQueryString({ faculty })}`}
              className={`block px-4 py-2 text-sm ${
                activeFaculty === faculty
                  ? "bg-green-100 text-green-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {faculty}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
