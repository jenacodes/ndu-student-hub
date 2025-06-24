// app/news/page.jsx

import Image from "next/image";
import UpdatesCard from "@/components/UpdatesCard";
import PagesHeaderSection from "@/components/PagesHeaderSection";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import { FaFilter, FaChevronDown } from "react-icons/fa";

export default async function NewsPage({ searchParams }) {
  // Fetch news data with faculty information
  const query = groq`*[_type == "news"] | {
    _id,
    title,
    category,
    faculty,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    snippet,
    date,
    author
  }`;

  const allNewsData = await client.fetch(query);

  // Create safe searchParams object
  const safeSearchParams = {};
  for (const [key, value] of Object.entries(searchParams || {})) {
    safeSearchParams[key] = String(value);
  }

  // Extract unique categories and faculties
  const uniqueCategories = [
    ...new Set(allNewsData.map((newsItem) => newsItem.category)),
  ];
  const uniqueFaculties = [
    ...new Set(allNewsData.map((newsItem) => newsItem.faculty)),
  ].filter(Boolean);

  // Get active filters
  const activeCategory = safeSearchParams.category || "all";
  const activeFaculty = safeSearchParams.faculty || "all";

  // Filter news based on selected filters
  const filteredNews = allNewsData.filter((newsItem) => {
    const categoryMatch =
      activeCategory === "all" || newsItem.category === activeCategory;
    const facultyMatch =
      activeFaculty === "all" || newsItem.faculty === activeFaculty;
    return categoryMatch && facultyMatch;
  });

  // Helper function to generate query string
  const createQueryString = (newParams) => {
    const params = new URLSearchParams();

    // Preserve existing params except the one being changed
    for (const [key, value] of Object.entries(safeSearchParams)) {
      if (!Object.keys(newParams).includes(key)) {
        params.append(key, value);
      }
    }

    // Add new params
    for (const [key, value] of Object.entries(newParams)) {
      if (value !== "all") {
        params.append(key, value);
      }
    }

    return params.toString();
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <PagesHeaderSection
        bgColor="bg-green-600"
        title="School News & Announcements"
        subtitle="Stay informed with the latest updates, achievements, and important notices"
        paragrpahColor="text-green-100"
      />

      {/* Filter Section */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-xl font-bold text-green-900 flex items-center">
              <FaFilter className="mr-2" />
              Filter News
            </h2>

            <div className="flex flex-wrap gap-4">
              {/* Category Filter Dropdown */}
              <div className="relative">
                <div className="group relative">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white text-green-700 border border-green-300 rounded-full cursor-pointer group-hover:bg-green-100 transition-colors">
                    <span>
                      Category:{" "}
                      {activeCategory === "all" ? "All" : activeCategory}
                    </span>
                    <FaChevronDown className="text-xs" />
                  </div>
                  <div className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block hover:block">
                    <a
                      href={`/news?${createQueryString({ category: "all" })}`}
                      className={`block px-4 py-2 text-sm ${
                        activeCategory === "all"
                          ? "bg-green-100 text-green-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      All Categories
                    </a>
                    {uniqueCategories.map((category) => (
                      <a
                        key={category}
                        href={`/news?${createQueryString({ category })}`}
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
                </div>
              </div>

              {/* Faculty Filter Dropdown */}
              {uniqueFaculties.length > 0 && (
                <div className="relative">
                  <div className="group relative">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white text-green-700 border border-green-300 rounded-full cursor-pointer group-hover:bg-green-100 transition-colors">
                      <span>
                        Faculty:{" "}
                        {activeFaculty === "all" ? "All" : activeFaculty}
                      </span>
                      <FaChevronDown className="text-xs" />
                    </div>
                    <div className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block hover:block">
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
                      {uniqueFaculties.map((faculty) => (
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
                  </div>
                </div>
              )}

              {/* Reset Filters Button */}
              {(activeCategory !== "all" || activeFaculty !== "all") && (
                <a
                  href="/news"
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 transition-colors flex items-center"
                >
                  Reset Filters
                </a>
              )}
            </div>
          </div>

          {/* Active Filter Indicators */}
          <div className="mt-4 flex flex-wrap gap-2">
            {activeCategory !== "all" && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Category: {activeCategory}
              </span>
            )}
            {activeFaculty !== "all" && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Faculty: {activeFaculty}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {filteredNews.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {filteredNews.map((newsItem) => (
                  <UpdatesCard
                    key={newsItem._id}
                    category={newsItem.category}
                    title={newsItem.title}
                    snippet={newsItem.snippet}
                    imageUrl={newsItem.imageUrl}
                    link={`/news/${newsItem.slug}`}
                    date={newsItem.date}
                    author={newsItem.author}
                    faculty={newsItem.faculty}
                  />
                ))}
              </div>

              <div className="mt-8 text-center text-gray-600">
                Showing {filteredNews.length} of {allNewsData.length} News Items
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <Image
                src="/images/no-news-placeholder.svg"
                alt="No news found"
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                No News Articles Found
              </h2>
              <p className="text-gray-500 mb-4">
                {activeCategory !== "all" && activeFaculty !== "all" ? (
                  <>
                    No news matching both "{activeCategory}" category and "
                    {activeFaculty}" faculty.
                  </>
                ) : activeCategory !== "all" ? (
                  <>No news in the "{activeCategory}" category.</>
                ) : activeFaculty !== "all" ? (
                  <>No news for the "{activeFaculty}" faculty.</>
                ) : (
                  "There are currently no news articles available."
                )}
              </p>
              <a
                href="/news"
                className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                View All News
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
