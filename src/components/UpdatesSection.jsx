import TransparentButton from "@/components/TransparentButton";
import UpdatesCard from "@/components/UpdatesCard";
import { groq } from "next-sanity";
import { client } from "@/sanity/client";

const UpdatesSection = async () => {
  const query = groq`*[_type == "news"] | order(publicationDate desc)[0...2] {
    _id,
    category,
    title,
    snippet,
    "imageUrl": image.asset->url,
    "link": "/news/" + slug.current
  }`;

  const updatesData = await client.fetch(query);
  return (
    <section className="py-12 px-4 md:px-8 bg-gray-100 ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900  tracking-tight">
              Latest Updates
            </h2>

            <p className="text-base md:text-left text-gray-600 max-w-2xl mb-6 md:mb-0 mt-2">
              Catch up on the latest happenings at ndustudenthub!
            </p>
          </div>
          <TransparentButton text={"Read More"} href={"/news"} />
        </div>
        {updatesData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {updatesData.map((update) => (
              <UpdatesCard
                key={update._id}
                category={update.category}
                title={update.title}
                snippet={update.snippet}
                imageUrl={update.imageUrl}
                link={update.link}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            🚧 No updates available right now. Check back soon!
          </p>
        )}
      </div>
    </section>
  );
};

export default UpdatesSection;
