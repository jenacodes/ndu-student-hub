import Link from "next/link";
import Image from "next/image";
import NotFoundMessage from "@/components/NotFoundMessage";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import imageUrlBuilder from "@sanity/image-url";

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "event"]{ "slug": slug.current }`
  );
  return slugs.map((slug) => ({ slug: slug.slug }));
}

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const EventDetailPage = async ({ params }) => {
  // const allEventsData = [
  //   {
  //     id: "tech-symposium-2025", // This would match the [eventId] from the URL Very important cos .find returns the first value. it does not modift the array
  //     category: "Academic",
  //     title: "Annual Tech Symposium 2025",
  //     fullDescription:
  //       "Dive deep into the world of technology at our Annual Tech Symposium! This year's theme is 'Innovate, Integrate, Inspire.' The day will be packed with keynote speeches from industry pioneers, interactive workshops on AI, Cybersecurity, and Web3, a student project showcase, and ample networking opportunities. Whether you're a tech enthusiast or just curious about the future, there's something for everyone. Lunch and refreshments will be provided. Don't forget to register early as spots are limited!",
  //     imageUrl: "/images/tech-symposium-2025.jpg",
  //     date: "October 15, 2025",
  //     time: "9:00 AM - 5:00 PM",
  //     venue: "Main Auditorium & Computer Science Building Complex",
  //     organizer: "Faculty of Engineering & Tech Innovators Club",
  //     registrationLink: "#", // Placeholder for actual registration link
  //   },
  //   {
  //     id: "spring-fest-2025",
  //     category: "Cultural Fest",
  //     title: "Spring Fest '25: A Celebration of Talents",
  //     fullDescription:
  //       "Join us for Spring Fest '25, our university's grandest cultural extravaganza! Experience a vibrant tapestry of music, dance, drama, fine arts, and literary events. Featuring performances by renowned artists and our very own talented students. Enjoy delicious food from various stalls, exciting games, and a festive atmosphere. A perfect way to celebrate creativity and campus spirit.",
  //     imageUrl: "/images/event-cultural-fest.jpg",
  //     date: "November 5-7, 2025",
  //     time: "11:00 AM onwards daily",
  //     venue:
  //       "University Grounds, Open Air Theatre, and Student Activity Centre",
  //     organizer: "Student Cultural Committee & Various Clubs",
  //     registrationLink: null, // Or link to ticket sales
  //   },
  // ];

  // // Helper function to find event data (simulates data fetching)
  // const getEventData = (eventId) => {
  //   return allEventsData.find((event) => event.id === eventId);
  // };

  // //   const eventId = params.eventId || "tech-symposium-2025"; // Fallback for this example if params is not available
  // const event = getEventData(params.eventId);

  const { slug } = await params;

  const query = groq`*[_type == "event" && slug.current == $slug][0]`;
  const event = await client.fetch(query, { slug });

  //404 error component
  if (!event) {
    return (
      <NotFoundMessage
        title="Event Not Found"
        message="  Sorry, we couldn't find the event you were looking
          for."
        backLink="/events"
        backText="Back to All Events"
        buttonColor="bg-blue-600 hover:bg-blue-700"
      />
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Event Header Image */}
      {urlFor(event.image).url() && (
        <div className="relative w-full h-64 sm:h-80 md:h-[28rem] lg:h-[32rem] overflow-hidden rounded-b-3xl shadow-xl">
          <Image
            src={urlFor(event.image).url()}
            alt={`Image for ${event.title}`}
            fill
            className="brightness-75 object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center max-w-4xl drop-shadow-xl leading-snug ">
              {event.title}
            </h1>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto -mt-16 sm:-mt-24 md:-mt-32 z-10 relative bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
          {!event.imageUrl && ( // Show title here if no header image
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              {event.title}
            </h1>
          )}

          <div className="mb-6 pb-4 border-b border-gray-200">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
              {event.category}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8 text-sm text-gray-700">
            <div className="flex items-center">
              <FaRegCalendarAlt className="w-5 h-5 mr-2 text-gray-500" />
              <span>
                <strong>Date:</strong> {event.date}
              </span>
            </div>
            <div className="flex items-center">
              <FaRegClock className="w-5 h-5 mr-2 text-gray-500" />
              <span>
                <strong>Time:</strong> {event.time}
              </span>
            </div>
            <div className="flex items-center sm:col-span-2">
              <FaLocationDot className="w-5 h-5 mr-2 text-gray-500" />
              <span>
                <strong>Venue:</strong> {event.venue}
              </span>
            </div>
            {event.organizer && (
              <div className="flex items-center sm:col-span-2">
                <HiOutlineUserGroup className="w-5 h-5 mr-2 text-gray-500" />
                <span>
                  <strong>Organized by:</strong> {event.organizer}
                </span>
              </div>
            )}
          </div>

          {/* Full Description */}
          <div className="prose prose-indigo max-w-none text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About this Event
            </h2>
            <p>{event.fullDescription}</p>
          </div>

          {/* Registration/Action Button */}
          {event.registrationLink && event.registrationLink !== "#" && (
            <div className="mt-10 text-center">
              <Link
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
              >
                Register for Event
              </Link>
            </div>
          )}

          <div className="mt-12 pt-6 border-t border-gray-200 text-center">
            <Link
              href="/events"
              className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >
              &larr; Back to All Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
