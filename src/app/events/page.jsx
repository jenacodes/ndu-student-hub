import UpdatesCard from "@/components/UpdatesCard";
import PagesHeaderSection from "@/components/PagesHeaderSection";
import Image from "next/image";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import Link from "next/link";
import FilterControls from "@/components/FilterControls";

export const revalidate = 60;

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

  const params = await searchParams;

  // Create safe searchParams object
  const safeSearchParams = {};
  for (const [key, value] of Object.entries(params || {})) {
    safeSearchParams[key] = String(value);
  }

  // Extract unique categories from events
  // i'm creating a new array from the set(used to remove duplicates) from the extracted categories in the database
  const uniqueCategories = [
    ...new Set(allEventsData.map((event) => event.category)),
  ];

  // Get active category from URL params
  const SearchParams = await searchParams; // await for the search params

  const activeCategory = SearchParams?.category || "all";

  // Filter events based on selected category
  const filteredEvents =
    activeCategory === "all"
      ? allEventsData
      : allEventsData.filter((event) => event.category === activeCategory);

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
    <div className="min-h-screen">
      <PagesHeaderSection
        bgColor="bg-yellow-600"
        title="School Events"
        subtitle="Discover all upcoming academic, cultural, sports, and community events "
        paragrpahColor="text-blue-100"
      />

      {/* Filter Section */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-yellow-50">
        <div className="container mx-auto max-w-6xl">
          <FilterControls
            uniqueCategories={uniqueCategories}
            uniqueFaculties={[]}
            activeFaculty={"" || "all"}
            activeCategory={activeCategory}
            filterTitle={"Filter Events"}
            titleColor="text-yellow-900"
            basePath="/events"
          />
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {filteredEvents.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {filteredEvents.map((event) => {
                  const formattedDate = new Date(event.date).toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }
                  );

                  return (
                    <UpdatesCard
                      key={event._id}
                      category={event.category}
                      title={event.title}
                      snippet={event.shortDescription}
                      imageUrl={event.imageUrl}
                      link={`/events/${event.slug}`}
                      date={formattedDate}
                      time={event.time}
                      venue={event.venue}
                    />
                  );
                })}
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
                There are no events in the `&quot;{activeCategory}`&quot;
                category.
              </p>
              <Link
                href="/events"
                className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
              >
                View All Events
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
