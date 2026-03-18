import Link from "next/link";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaTags } from "react-icons/fa";
import NotFoundMessage from "@/components/NotFoundMessage";
import { client } from "@/sanity/client";
import { groq, PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "sports"]{ "slug": slug.current }`,
  );
  return slugs.map((slug) => ({ slug: slug.slug }));
}

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const SportsItemDetailPage = async ({ params }) => {
  const { slug } = await params;

  const query = groq`*[_type == "sports" && slug.current == $slug][0]`;
  const item = await client.fetch(query, { slug });

  if (!item) {
    return (
      <NotFoundMessage
        title="Sports Item Not Found"
        message="  Sorry, we couldn't find the sports information you were looking
          for."
        backLink="/sports"
        backText="Back to All Sports"
        buttonColor="bg-cyan-600 hover:bg-cyan-700"
      />
    );
  }

  const components = {
    types: {
      image: ({ value }) => (
        <div className="my-6 flex justify-center">
          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
            <Image
              src={urlFor(value).width(1000).url()}
              alt={value.alt || "Article image"}
              width={1000}
              height={400}
              className="rounded-xl object-cover shadow w-full h-auto"
            />
            {value.alt && (
              <p className="text-sm text-gray-500 text-center mt-2">
                {value.alt}
              </p>
            )}
          </div>
        </div>
      ),
    },
    block: {
      h1: ({ children }) => (
        <h1 className="text-4xl font-bold text-gray-900 my-6">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-3xl font-semibold text-gray-800 my-5">
          {children}
        </h2>
      ),
      normal: ({ children }) => (
        <p className="text-lg leading-relaxed my-3">{children}</p>
      ),
    },
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <article>
        {/* Header Image */}
        {urlFor(item.image) && (
          <div className="w-full h-72 sm:h-96 md:h-[500px] relative">
            <Image
              src={urlFor(item.image).url()}
              alt={`Image for ${item.title}`}
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div
            className="max-w-3xl mx-auto p-6 sm:p-8 md:p-10 border-2 -mt-16 sm:-mt-24 md:-mt-32 relative z-10"
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
              borderRadius: "0",
              boxShadow: "4px 4px 0 var(--accent)",
            }}
          >
            {/* Category */}
            <div className="mb-4">
              <span
                className="inline-block text-xs font-bold px-3 py-1 uppercase tracking-widest"
                style={{
                  background: "var(--accent)",
                  color: "var(--accent-foreground)",
                  fontFamily: "var(--font-special-elite), monospace",
                  borderRadius: "0",
                }}
              >
                {item.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
              style={{
                color: "var(--foreground)",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              {item.title}
            </h1>

            {/* Meta Information (Date & Specific Details) */}
            <div
              className="flex flex-wrap items-center text-sm mb-6 space-x-4"
              style={{
                color: "var(--muted-foreground)",
                fontFamily: "var(--font-special-elite), monospace",
              }}
            >
              <div className="flex items-center">
                <FaRegCalendarAlt />
                <span>
                  <strong>Date: </strong>
                  {new Date(item.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              {item.details && (
                <div className="flex items-center">
                  <HiOutlineUserGroup />
                  <span>{item.details}</span>
                </div>
              )}
            </div>

            {/* Body Content */}
            <div
              className="prose prose-lg custom-prose max-w-none leading-relaxed"
              style={{ color: "var(--foreground)" }}
            >
              <PortableText value={item.body} components={components} />
            </div>

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div
                className="mt-8 pt-6 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <h3
                  className="text-sm font-bold mb-2 flex items-center uppercase tracking-wide"
                  style={{
                    color: "var(--muted-foreground)",
                    fontFamily: "var(--font-special-elite), monospace",
                  }}
                >
                  <FaTags /> Related Tags:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1"
                      style={{
                        background: "var(--muted)",
                        color: "var(--muted-foreground)",
                        borderRadius: "0",
                        fontFamily: "var(--font-special-elite), monospace",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Sports Link */}
            <div
              className="mt-10 pt-8 border-t text-center"
              style={{ borderColor: "var(--border)" }}
            >
              <Link
                href="/sports"
                className="font-bold uppercase tracking-widest transition-opacity hover:opacity-70"
                style={{
                  color: "var(--primary)",
                  fontFamily: "var(--font-special-elite), monospace",
                }}
              >
                &larr; Back to All Sports
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SportsItemDetailPage;
