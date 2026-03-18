import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";

export const revalidate = 60;

const WeeklySpotlightSection = async ({}) => {
  const query = groq`*[_type == "spotlight" && featuredThisWeek == true][0]{
  _id,
  title,
  type,
  "slug": slug.current,
  "imageUrl": imageUrl.asset->url,
  homepageDescription,
  homepageLinkText,
  date
}`;

  const spotlightItem = await client.fetch(query);

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 retro-texture"
      style={{
        background: "var(--primary)",
        color: "var(--primary-foreground)",
      }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-special-elite), monospace",
            }}
          >
            ✦ Featured ✦
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Weekly Spotlight
          </h2>
          <div
            className="retro-divider max-w-xs mx-auto mt-3"
            style={{ color: "var(--accent)", opacity: 0.6 }}
          >
            <span>—</span>
          </div>
          <p
            className="mt-3 text-lg opacity-80"
            style={{ fontFamily: "var(--font-special-elite), monospace" }}
          >
            Highlighting the amazing people and happenings on campus.
          </p>
        </div>

        {spotlightItem ? (
          <div
            key={spotlightItem._id}
            className="max-w-4xl mx-auto overflow-hidden md:flex border-2"
            style={{
              background: "var(--card)",
              borderColor: "var(--accent)",
              borderRadius: "0",
              boxShadow: "4px 4px 0 var(--accent)",
              color: "var(--card-foreground)",
            }}
          >
            {spotlightItem.imageUrl && (
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src={spotlightItem.imageUrl}
                  alt={spotlightItem.title}
                  className="absolute top-0 left-0 w-full h-full"
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
            <div
              className={`p-6 sm:p-8 flex flex-col justify-center ${spotlightItem.imageUrl ? "md:w-1/2" : "w-full"}`}
            >
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{
                  color: "var(--primary)",
                  fontFamily: "var(--font-special-elite), monospace",
                }}
              >
                {spotlightItem.type}
              </span>
              <h3
                className="mt-2 text-2xl sm:text-3xl font-bold"
                style={{
                  color: "var(--foreground)",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                {spotlightItem.title}
              </h3>
              <p
                className="mt-4 leading-relaxed"
                style={{
                  color: "var(--muted-foreground)",
                  fontFamily: "var(--font-special-elite), monospace",
                }}
              >
                {spotlightItem.homepageDescription}
              </p>
              <div className="mt-6">
                <Link
                  href={`/spotlights/${spotlightItem.slug}`}
                  className="inline-block font-bold py-2.5 px-6 uppercase tracking-widest transition-opacity hover:opacity-80"
                  style={{
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                    borderRadius: "0",
                    boxShadow: "3px 3px 0 var(--accent)",
                    fontFamily: "var(--font-special-elite), monospace",
                  }}
                >
                  {spotlightItem.homepageLinkText || "Learn More"} →
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="flex flex-col items-center justify-center py-16 border-2 text-center"
            style={{ borderColor: "var(--accent)", borderRadius: "0" }}
          >
            <h3
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              No Spotlights This Week
            </h3>
            <p
              className="mt-4 text-lg opacity-80"
              style={{ fontFamily: "var(--font-special-elite), monospace" }}
            >
              Stay tuned — exciting stories are on the way!
            </p>
            <Link
              href="/spotlights"
              className="mt-6 inline-block font-bold py-2.5 px-6 uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{
                background: "var(--card)",
                color: "var(--primary)",
                borderRadius: "0",
                boxShadow: "3px 3px 0 var(--accent)",
                fontFamily: "var(--font-special-elite), monospace",
              }}
            >
              See Past Spotlights →
            </Link>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/spotlights"
            className="font-semibold transition-opacity hover:opacity-70 text-lg"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-special-elite), monospace",
            }}
          >
            See all spotlights →
          </Link>
        </div>
      </div>
    </section>
  );
};
export default WeeklySpotlightSection;
