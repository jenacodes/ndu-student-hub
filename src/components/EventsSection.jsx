import TransparentButton from "@/components/TransparentButton";
import UpdatesCard from "@/components/UpdatesCard";
import { groq } from "next-sanity";
import { client } from "@/sanity/client";

const EventsSection = async () => {
  // const eventsData = [
  //   {
  //     id: 1,
  //     category: "Upcoming Event",
  //     title: "Annual Tech Symposium 2025",
  //     snippet:
  //       "Join us for a day of insightful talks and workshops. Date: Oct 15, 2025. Time: 9 AM - 5 PM. Venue: Main Auditorium.",
  //     imageUrl: "/images/tech-symposium-2025.jpg",
  //     link: "/events/faculty-of-engineering-cup",
  //   },
  //   {
  //     id: 2,
  //     category: "Cultural Fest",
  //     title: "Spring Fest '25: Nursing Dinner Night",
  //     snippet:
  //       "Experience a vibrant showcase of music, dance, and art. Date: Nov 7, 2025. Venue: CHS auditorium",
  //     imageUrl: "/images/nursing-dinner-night.jpg",
  //     link: "/events/spring-fest-2025",
  //   },
  // ];

  const query = groq`*[_type == "event"] | order(_createdAt desc)[0...2] {
  _id,
  category,
  title,
  shortDescription,
  "imageUrl": image.asset->url,
  "link": "/events/" + slug.current
}`;

  const eventsData = await client.fetch(query);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white ">
      {" "}
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900  tracking-tight">
              Upcoming Events
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Don&apos;t miss out on these exciting school events.
            </p>
          </div>
          <TransparentButton text={"View Events"} href={"/events"} />
        </div>

        {eventsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {eventsData.map((event) => (
              <UpdatesCard
                key={event.category}
                category={event.category}
                title={event.title}
                snippet={event.shortDescription}
                imageUrl={event.imageUrl}
                link={`/events/${event.slug}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No upcoming events scheduled at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
