import Image from "next/image";
import UpdatesCard from "@/components/UpdatesCard";
import PagesHeaderSection from "@/components/PagesHeaderSection";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { FaFilter } from "react-icons/fa";

export default async function SportsPage({ searchParams }) {
  // const allSportsData = [
  //   {
  //     id: 1,
  //     category: "Football News",
  //     title: "University Lions Clinch Inter-Faculty Trophy!",
  //     snippet:
  //       "A thrilling final match saw the Lions defeat the Eagles 2-1 with a last-minute goal. Celebrations erupted across campus.",
  //     imageUrl: "/images/sports-football-victory.jpg", // Placeholder
  //     link: "/sports/lions-win-interfaculty-2025",
  //     date: "May 27, 2025",
  //     details: "Final Score: Lions 2 - 1 Eagles",
  //   },
  //   {
  //     id: 2,
  //     category: "Upcoming Match: Basketball",
  //     title: "Warriors vs. Titans - Crucial Conference Game",
  //     snippet:
  //       "Our University Warriors face off against the Titans in a must-win game to secure a top spot in the conference standings.",
  //     imageUrl: "/images/sports-basketball-upcoming.jpg", // Placeholder
  //     link: "/sports/fixtures/warriors-vs-titans-2025",
  //     date: "June 5, 2025",
  //     details: "Time: 7:00 PM, Venue: University Sports Arena",
  //   },
  //   {
  //     id: 3,
  //     category: "Athletics Results",
  //     title: "New School Records Set at Annual Athletics Meet",
  //     snippet:
  //       "Several students shattered previous records in track and field events. Full results and photo gallery now available.",
  //     imageUrl: "/images/sports-athletics-meet.jpg", // Placeholder
  //     link: "/sports/annual-athletics-meet-2025",
  //     date: "May 15, 2025",
  //     details: "Highlights: 100m, Long Jump, Javelin",
  //   },
  //   {
  //     id: 4,
  //     category: "Volleyball",
  //     title: "Women's Volleyball Team Advances to Semi-Finals",
  //     snippet:
  //       "Consistent performance and teamwork lead our women's volleyball team to a decisive victory in the quarter-finals.",
  //     imageUrl: "/images/sports-volleyball-women.jpg", // Placeholder
  //     link: "/sports/womens-volleyball-semifinals-2025",
  //     date: "May 22, 2025",
  //     details: "Next Match: June 2nd vs. Challengers",
  //   },
  //   {
  //     id: 5,
  //     category: "Sports Tryouts",
  //     title: "Tryouts Announced for 2025/2026 Season Teams",
  //     snippet:
  //       "Interested in joining one of our esteemed university sports teams? Find out the tryout dates and requirements for various sports.",
  //     imageUrl: "/images/sports-tryouts.jpg", // Placeholder
  //     link: "/sports/tryouts-2025-2026",
  //     date: "Applications Open: June 1st - July 15th, 2025",
  //     details: "Check individual sports pages for specific dates.",
  //   },
  // ];

  // TODO: Add filtering logic here in the future (e.g., by sport, date, type - news/fixture/result)

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
              Filter Events
            </h2>

            <div className="flex flex-wrap gap-2">
              {/* "All" Category Button */}
              <a
                href="/events"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === "all"
                    ? "bg-cyan-600 text-white shadow-md"
                    : "bg-white text-cyan-700 border border-cyan-300 hover:bg-cyan-100"
                }`}
              >
                All Events
              </a>

              {/* Category Buttons */}
              {uniqueCategories.map((category) => (
                <a
                  key={category}
                  href={`/events?category=${encodeURIComponent(category)}`}
                  className={`px-4 py-2 rounded-full text-sm capitalize font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-cyan-600 text-white shadow-md"
                      : "bg-white text-cyan-700 border border-cyan-300 hover:bg-cyan-100"
                  }`}
                >
                  {category}
                </a>
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
                {filteredSports.map((sportsItem) => (
                  <UpdatesCard
                    key={sportsItem.category}
                    category={sportsItem.category}
                    title={sportsItem.title}
                    snippet={sportsItem.shortDescription}
                    imageUrl={sportsItem.imageUrl}
                    link={`/sports/${sportsItem.slug}`}
                    date={sportsItem.date}
                    details={sportsItem.details}
                  />
                ))}
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
              <a
                href="/sports"
                className="inline-block px-6 py-2 bg-cyan-600 text-white font-medium rounded-full hover:bg-cyan-700 transition-colors"
              >
                View All Sports
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
