import Image from "next/image";
import UpdatesCard from "@/components/UpdatesCard";
import PagesHeaderSection from "@/components/PagesHeaderSection";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { FaFilter } from "react-icons/fa";
import Link from "next/link";

export const revalidate = 60;

export default async function SportsPage({ searchParams }) {
  const query = groq`*[_type == "sports"] | order(date desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  shortDescription,
  "imageUrl": image.asset->url,
  date,
  body,
  tags,
  details
}`;
  const allSportsData = await client.fetch(query);
  if (!allSportsData) return notFound();

  const uniqueCategories = [
    ...new Set(allSportsData.map((sport) => sport.category)),
  ];

  const SearchParams = await searchParams; // await for the search params

  const activeCategory = SearchParams?.category || "all";

  const filteredSports =
    activeCategory === "all"
      ? allSportsData
      : allSportsData.filter((sport) => sport.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}

      <PagesHeaderSection
        title=" University Sports Central"
        subtitle="All the latest news, upcoming fixtures, results, and highlights from Niger Delta University sports team and faculty competitions and events."
        bgColor="bg-cyan-600"
        textColor="text-white"
        paragraphColor="text-red-100"
        accentText=""
      />

      {/* Filter Section */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-xl font-bold text-cyan-900 flex items-center">
              <FaFilter className="mr-2" />
              Filter Categories
            </h2>

            <div className="flex flex-wrap gap-2">
              {/* "All" Category Button */}
              <Link
                href="/sports"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === "all"
                    ? "bg-cyan-600 text-white shadow-md"
                    : "bg-white text-cyan-700 border border-cyan-300 hover:bg-cyan-100"
                }`}
              >
                All Events
              </Link>

              {/* Category Buttons */}
              {uniqueCategories.map((category) => (
                <Link
                  key={category}
                  href={`/sports?category=${encodeURIComponent(category)}`}
                  className={`px-4 py-2 rounded-full text-sm capitalize font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-cyan-600 text-white shadow-md"
                      : "bg-white text-cyan-700 border border-cyan-300 hover:bg-cyan-100"
                  }`}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* Active Filter Indicator */}
          <div className="mt-4">
            {activeCategory !== "all" && (
              <p className="text-cyan-700 font-medium">
                Showing:{" "}
                <span className="bg-cyan-100 px-2 py-1 rounded-lg">
                  {activeCategory}
                </span>{" "}
                sports updates
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Sports Grid Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Sports Cards */}
          {filteredSports.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {filteredSports.map((sportsItem) => {
                  const formattedDate = new Date(
                    sportsItem.date
                  ).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  });

                  return (
                    <UpdatesCard
                      key={sportsItem._id}
                      category={sportsItem.category}
                      title={sportsItem.title}
                      snippet={sportsItem.shortDescription}
                      imageUrl={sportsItem.imageUrl}
                      link={`/sports/${sportsItem.slug}`}
                      date={formattedDate}
                      details={sportsItem.details}
                    />
                  );
                })}
              </div>

              {/* Results count */}
              <div className="mt-8 text-center text-gray-600">
                Showing {filteredSports.length} of {allSportsData.length} sports
                updates
              </div>
            </>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <Image
                src="/images/no-sports-available.png"
                alt="No sports"
                width={300}
                height={300}
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                No Sports Found
              </h2>
              <p className="text-gray-500 mb-4">
                There are no sports updates in the "{activeCategory}" category.
              </p>
              <Link
                href="/sports"
                className="inline-block px-6 py-2 bg-cyan-600 text-white font-medium rounded-full hover:bg-cyan-700 transition-colors"
              >
                View All Sports
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
