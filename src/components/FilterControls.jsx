"use client";
import { useSearchParams } from "next/navigation";
import CategoryFilterDropdown from "./CategoryFilterDropdown";
import FacultyFilterDropdown from "./FacultyFilter";
import Link from "next/link";

export default function FilterControls({
  uniqueCategories,
  uniqueFaculties,
  activeCategory,
  activeFaculty,
}) {
  const searchParams = useSearchParams();

  const createQueryString = (newParams) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === "all") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    return params.toString();
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <h2 className="text-xl font-bold text-green-900 flex items-center">
        Filter News
      </h2>

      <div className="flex flex-wrap gap-4">
        <CategoryFilterDropdown
          activeCategory={activeCategory}
          categories={uniqueCategories}
          createQueryString={createQueryString}
        />

        {uniqueFaculties.length > 0 && (
          <FacultyFilterDropdown
            activeFaculty={activeFaculty}
            faculties={uniqueFaculties}
            createQueryString={createQueryString}
          />
        )}

        {(activeCategory !== "all" || activeFaculty !== "all") && (
          <Link
            href="/news"
            className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 transition-colors flex items-center"
          >
            Reset Filters
          </Link>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {activeCategory !== "all" && (
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Category: {activeCategory}
          </span>
        )}
        {/* {activeFaculty !== "all" && (
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            Faculty: {activeFaculty}
          </span>
        )} */}
      </div>
    </div>
  );
}
