import SpotlightListCard from "@/components/SpotlightListCard";
import Image from "next/image";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";

export default async function SpotlightsPage({ searchParams }) {
  // Using a subset of data from the detail page example for the listing
  // const allSpotlightSummaries = [
  //   {
  //     id: "adaeze-nwosu-interview",
  //     type: "Student Spotlight",
  //     title: "Meet Adaeze Nwosu: Inspiring Future Engineers",
  //     shortIntro:
  //       "A final year Civil Engineering student who recently won the National Young Innovators Award for her project on sustainable building materials.",
  //     imageUrl: "/images/student-spotlight-adaeze.jpg", // Profile image can serve as card image
  //     link: "/spotlights/adaeze-nwosu-interview",
  //     date: "June 3, 2025",
  //   },
  //   {
  //     id: "tech-innovators-feature",
  //     type: "Club Spotlight",
  //     title: "Tech Innovators Club: Coding the Future",
  //     shortIntro:
  //       "One of the most dynamic student organizations, at the forefront of technological exploration on campus.",
  //     imageUrl: "/images/club-tech-logo.png", // Club logo can serve as card image
  //     link: "/spotlights/tech-innovators-feature",
  //     date: "May 27, 2025",
  //   },
  //   {
  //     id: "weekly-campus-tip-library",
  //     type: "Campus Tip",
  //     title: "Tip of the Week: Maximize Your Library Time",
  //     shortIntro:
  //       "Discover hidden study spots, utilize online databases effectively, and make the most of library resources this semester.",
  //     imageUrl: "/images/library-tip-icon.jpg", // Placeholder generic icon or image
  //     link: "/spotlights/tip-library-utilization",
  //     date: "June 10, 2025",
  //   },
  //   {
  //     id: "featured-event-art-exhibition",
  //     type: "Featured Event",
  //     title: "Don't Miss: Annual Student Art Exhibition",
  //     shortIntro:
  //       "Showcasing incredible talent from across all faculties. Opening night this Friday in the Grand Hall.",
  //     imageUrl: "/images/art-exhibition-promo.jpg", // Placeholder promo image
  //     link: "/events/annual-art-exhibition-2025", // Link to the actual event detail page
  //     date: "June 14, 2025",
  //   },
  // ];

  const query = groq`*[_type == "spotlight"] |   order(date desc){
    _id,
    title,
    type,
    "slug": slug.current,
    "imageUrl": imageUrl.asset->url,
    shortIntro,
    date,
  }`;

  const allSpotlightSummaries = await client.fetch(query);

  // TODO: Add filtering/sorting logic here in the future (e.g., by date, type)

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-purple-700 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Weekly Spotlights
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto">
            Catch up on our featured students, clubs, campus tips, and
            highlighted events from ndustudenthub.
          </p>
        </div>
      </section>

      {/* Spotlights Grid Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Optional: Add filter controls here in the future */}
          {/* <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">All</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Student Spotlights</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Club Spotlights</button>
             <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Campus Tips</button>
          </div> */}

          {allSpotlightSummaries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {allSpotlightSummaries.map((item) => (
                <SpotlightListCard
                  key={item.type}
                  type={item.type}
                  title={item.title}
                  shortIntro={item.shortIntro}
                  imageUrl={item.imageUrl}
                  link={`/spotlights/${item.slug}`}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Image
                src="/images/no-spotlights-placeholder.svg"
                alt="No spotlights yet"
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                No Spotlights Yet
              </h2>
              <p className="text-gray-500">
                Check back soon for our weekly features and highlights!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
