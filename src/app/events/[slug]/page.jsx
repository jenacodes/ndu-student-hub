import Link from "next/link";
import Image from "next/image";
import NotFoundMessage from "@/components/NotFoundMessage";
import CommentSection from "@/components/CommentSection";
import { client } from "@/sanity/client";
import { groq, PortableText } from "next-sanity";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import imageUrlBuilder from "@sanity/image-url";

export const revalidate = 60;

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
  const { slug } = await params;

  const query = groq`*[_type == "event" && slug.current == $slug][0]`;
  const event = await client.fetch(query, { slug });

  if (!event) {
    return (
      <NotFoundMessage
        title="Event Not Found"
        message="  Sorry, we couldn't find the event you were looking for."
        backLink="/events"
        backText="Back to All Events"
        buttonColor="bg-blue-600 hover:bg-blue-700"
      />
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Event Header Image */}
      {urlFor(event.image).url() && (
        <div className="relative w-full h-64 sm:h-80 md:h-[28rem] lg:h-[32rem] overflow-hidden shadow-xl">
          <Image
            src={urlFor(event.image).url()}
            alt={`Image for ${event.title}`}
            fill
            className="brightness-75 object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center px-4" />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div
          className="max-w-4xl mx-auto -mt-16 sm:-mt-24 md:-mt-32 z-10 relative p-6 sm:p-8 border-2"
          style={{
            background: "var(--card)",
            borderColor: "var(--border)",
            borderRadius: "0",
            boxShadow: "4px 4px 0 var(--accent)",
          }}
        >
          {/* Title (shown when no header image) */}
          {!event.imageUrl && (
            <h1
              className="text-3xl sm:text-4xl font-bold mb-6 text-center"
              style={{ color: "var(--foreground)", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {event.title}
            </h1>
          )}

          {/* Category badge */}
          <div className="mb-6 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
            <span
              className="inline-block text-xs font-bold px-3 py-1 uppercase tracking-widest"
              style={{
                background: "var(--accent)",
                color: "var(--accent-foreground)",
                fontFamily: "var(--font-special-elite), monospace",
                borderRadius: "0",
              }}
            >
              {event.category}
            </span>
          </div>

          {/* Event meta */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8 text-sm"
            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-special-elite), monospace" }}
          >
            <div className="flex items-center">
              <FaRegCalendarAlt className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: "var(--primary)" }} />
              <span>
                <strong>Date: </strong>
                {new Date(event.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center">
              <FaRegClock className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: "var(--primary)" }} />
              <span>
                <strong>Time:</strong> {event.time}
              </span>
            </div>
            <div className="flex items-center sm:col-span-2">
              <FaLocationDot className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: "var(--primary)" }} />
              <span>
                <strong>Venue:</strong> {event.venue}
              </span>
            </div>
            {event.organizer && (
              <div className="flex items-center sm:col-span-2">
                <HiOutlineUserGroup className="w-5 h-5 mr-2 flex-shrink-0" style={{ color: "var(--primary)" }} />
                <span>
                  <strong>Organized by:</strong> {event.organizer}
                </span>
              </div>
            )}
          </div>

          {/* Full Description */}
          <div
            className="prose prose-lg custom-prose max-w-none leading-relaxed"
            style={{ color: "var(--foreground)" }}
          >
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: "var(--foreground)", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              About this Event
            </h2>
            <PortableText value={event.fullDescription} />
          </div>

          {/* Registration Button */}
          {event.registrationLink && event.registrationLink !== "#" && (
            <div className="mt-10 text-center">
              <Link
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold uppercase tracking-widest transition-opacity hover:opacity-80"
                style={{
                  background: "var(--secondary)",
                  color: "var(--secondary-foreground)",
                  borderRadius: "0",
                  boxShadow: "3px 3px 0 var(--accent)",
                  fontFamily: "var(--font-special-elite), monospace",
                }}
              >
                Register for Event
              </Link>
            </div>
          )}

          {/* Comments */}
          <CommentSection slug={slug} />

          {/* Back link */}
          <div className="mt-12 pt-6 border-t text-center" style={{ borderColor: "var(--border)" }}>
            <Link
              href="/events"
              className="font-bold uppercase tracking-widest transition-opacity hover:opacity-70"
              style={{ color: "var(--primary)", fontFamily: "var(--font-special-elite), monospace" }}
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
