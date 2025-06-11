import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";

const WeeklySpotlightSection = async ({}) => {
  // const spotlightItem = [
  //     {
  //     id: 1,
  //     type: "Student Spotlight",
  //     title: "Meet Adaeze Nwosu: Inspiring Future Engineers",
  //     description: ` "This week, we shine a spotlight on Adaeze Nwosu,
  //       a final year Civil Engineering student who recently won the National Young Innovators Award
  //        for her project on sustainable building materials.
  //       Learn more about her journey, challenges, and advice for aspiring engineers."`,
  //     imageUrl: "/images/student-spotlight-adaeze.jpg",
  //     link: "/spotlights/adaeze-nwosu-interview",
  //     linkText: "Read Adaeze's Story",
  //   }
  // ];
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Weekly Spotlight
          </h2>
          <p className="mt-2 text-lg text-indigo-200">
            Highlighting the amazing people and happenings on campus.
          </p>
        </div>
        {spotlightItem ? (
          <div
            key={spotlightItem._id}
            className="max-w-4xl mx-auto bg-white text-gray-800 rounded-xl shadow-2xl overflow-hidden md:flex"
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
              className={`p-6 sm:p-8 flex flex-col justify-center ${
                spotlightItem.imageUrl ? "md:w-1/2" : "w-full"
              }`}
            >
              <span className="text-sm font-semibold text-purple-700 uppercase tracking-wide">
                {spotlightItem.type}
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
                {spotlightItem.title}
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {spotlightItem.homepageDescription}
              </p>
              <div className="mt-6">
                <Link
                  href={`/spotlights/${spotlightItem.slug}`}
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
                >
                  {spotlightItem.homepageLinkText || "Learn More"} &rarr;
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">No Spotlights This Week</h3>
            <p className="mt-4 text-lg text-gray-200">
              Stay tuned—exciting stories are on the way!
            </p>
            <Link
              href="/spotlights"
              className="mt-6 inline-block bg-white text-indigo-600 hover:text-indigo-800 font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
            >
              See Past Spotlights &rarr;
            </Link>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/spotlights"
            className="text-gray-950 hover:text-gray-700 font-semibold transition-colors text-lg"
          >
            See what's on the spotlight this week &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};
export default WeeklySpotlightSection;
