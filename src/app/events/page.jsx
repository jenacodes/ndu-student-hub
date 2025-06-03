import UpdatesCard from "@/components/UpdatesCard";
import PagesHeaderSection from "@/components/PagesHeaderSection";
import Image from "next/image";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { FaFilter } from "react-icons/fa";

export default async function EventsPage({ searchParams }) {
  // Query all events from Sanity
  const query = groq`*[_type == "event"] | order(date asc) {
    _id,
    title,
    category,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    shortDescription,
    date,
    time,
    venue
  }`;

  const allEventsData = await client.fetch(query);
  if (!allEventsData) return notFound();

  // Extract unique categories from events
  // i'm creating a new array from the set(used to remove duplicates) from the extracted categories in the database
  const uniqueCategories = [
    ...new Set(allEventsData.map((event) => event.category)),
  ];

  // Get active category from URL params
  const activeCategory = searchParams?.category || "all";

  // Filter events based on selected category
  const filteredEvents =
    activeCategory === "all"
      ? allEventsData
      : allEventsData.filter((event) => event.category === activeCategory);

  return (
    <div className="min-h-screen">
      <PagesHeaderSection
        bgColor="bg-blue-600"
        title="School Events"
        subtitle="Discover all upcoming academic, cultural, sports, and community events "
        paragrpahColor="text-blue-100"
      />

      {/* Filter Section */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-xl font-bold text-blue-900 flex items-center">
              <FaFilter className="mr-2" />
              Filter Events
            </h2>

            <div className="flex flex-wrap gap-2">
              {/* "All" Category Button */}
              <a
                href="/events"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === "all"
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-blue-700 border border-blue-300 hover:bg-blue-100"
                }`}
              >
                All Events
              </a>

              {/* Category Buttons */}
              {uniqueCategories.map((category) => (
                <a
                  key={category}
                  href={`/events?category=${encodeURIComponent(category)}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-blue-700 border border-blue-300 hover:bg-blue-100"
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
              <p className="text-blue-700 font-medium">
                Showing:{" "}
                <span className="bg-blue-100 px-2 py-1 rounded-lg">
                  {activeCategory}
                </span>{" "}
                events
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {filteredEvents.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {filteredEvents.map((event) => (
                  <UpdatesCard
                    key={event._id}
                    category={event.category}
                    title={event.title}
                    snippet={event.shortDescription}
                    imageUrl={event.imageUrl}
                    link={`/events/${event.slug}`}
                    date={event.date}
                    time={event.time}
                    venue={event.venue}
                  />
                ))}
              </div>

              {/* Results count */}
              <div className="mt-8 text-center text-gray-600">
                Showing {filteredEvents.length} of {allEventsData.length} events
              </div>
            </>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <Image
                src="/images/no-events-available.png"
                alt="No events"
                width={300}
                height={300}
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                No Events Found
              </h2>
              <p className="text-gray-500 mb-4">
                There are no events in the "{activeCategory}" category.
              </p>
              <a
                href="/events"
                className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
              >
                View All Events
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
