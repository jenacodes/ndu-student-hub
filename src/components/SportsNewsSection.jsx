import Link from "next/link";
import UpdatesCard from "@/components/UpdatesCard";
import { groq } from "next-sanity";
import { client } from "@/sanity/client";

export const revalidate = 60;

const SportsNewsSection = async () => {
  const query = groq`*[_type == "sports"] | order(date desc)[0...2] {
  _id,
  category,
  title,
  shortDescription,
  "imageUrl": image.asset->url,
  "link": "/sports/" + slug.current
}`;

  const sportsNewsData = await client.fetch(query);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Sports Highlights
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              The latest triumphs and updates from our sports teams.
            </p>
          </div>
          <Link
            href="/sports"
            className="text-blue-600 hover:text-blue-800 font-semibold whitespace-nowrap transition-colors"
          >
            All Sports News &rarr;
          </Link>
        </div>

        {sportsNewsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Using 3 columns for sports news */}
            {sportsNewsData.map((newsItem) => (
              <UpdatesCard // Reusing the UpdateCard component
                key={newsItem._id}
                category={newsItem.category}
                title={newsItem.title}
                snippet={newsItem.shortDescription}
                imageUrl={newsItem.imageUrl}
                link={newsItem.link}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No sports news available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

export default SportsNewsSection;
