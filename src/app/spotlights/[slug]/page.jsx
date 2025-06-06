import Image from "next/image";
import Link from "next/link";
import { CiCalendar, CiUser } from "react-icons/ci";
import { FaTags } from "react-icons/fa6";
import { groq } from "next-sanity";
import { client } from "@/sanity/client";
import NotFoundMessage from "@/components/NotFoundMessage";
import PortableTextRenderer from "@/components/PortableTextRenderer";

// const allSpotlightItems = [
//   {
//     id: "adaeze-nwosu-interview",
//     type: "Student Spotlight",
//     title: "Meet Adaeze Nwosu: Inspiring Future Engineers",
//     imageUrl: "/images/student-spotlight-adaeze-banner.jpg",
//     profileImageUrl: "/images/student-spotlight-adaeze.jpg",
//     date: "June 3, 2025",
//     interviewer: "ndustudenthub Team",
//     content: [
//       {
//         type: "paragraph",
//         text: "Adaeze Nwosu, a final year Civil Engineering student at [Your School's Name], is making waves with her innovative approach to sustainable building materials. Her recent project, which secured her the National Young Innovators Award, focuses on developing eco-friendly alternatives to traditional concrete using locally sourced recycled materials.",
//       },
//       {
//         type: "heading",
//         level: 3, // h3 heading
//         text: "The Journey to Innovation",
//       },
//       {
//         type: "paragraph",
//         text: 'We sat down with Adaeze to learn more about her inspiration and journey. "It all started with a passion for both environmental sustainability and creating tangible solutions for my community," she shared. "Seeing the environmental impact of conventional construction pushed me to explore alternatives. The support from my professors and the resources available at the university were crucial in developing my ideas.',
//       },
//       {
//         type: "quote",
//         text: "Don't be afraid to pursue unconventional ideas. The biggest breakthroughs often come from challenging the status quo.",
//         attribution: "Adaeze Nwosu",
//       },
//     ],
//     tags: [
//       "student spotlight",
//       "engineering",
//       "innovation",
//       "sustainability",
//       "awards",
//     ],
//   },
//   {
//     id: "tech-innovators-feature",
//     type: "Club Spotlight",
//     title: "Tech Innovators Club: Coding the Future",
//     imageUrl: "/images/club-tech-banner.jpg",
//     logoUrl: "/images/club-tech-logo.png",
//     date: "May 27, 2025",
//     content: [
//       {
//         type: "paragraph",
//         text: "Your paragraph text here...",
//       },
//       {
//         type: "heading",
//         level: 3, // h3 heading
//         text: "Your heading text here...",
//       },
//       {
//         type: "quote",
//         text: "Your quote text here...",
//         attribution: "Optional attribution",
//       },
//     ],
//     relatedClubLink: "/clubs/tech-innovators-club",
//     tags: [
//       "club spotlight",
//       "technology",
//       "coding",
//       "innovation",
//       "student clubs",
//     ],
//   },
// ];

// GROQ query to fetch spotlight data
const spotlightQuery = groq`
  *[_type == "spotlight" && slug.current == $slug][0] {
    _id,
    title,
    "type": type,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    "profileImageUrl": profileImage.asset->url,
    publishedAt,
    author,
    body,
    "tags": tags,
    "relatedClubLink": relatedClub->slug.current
  }
`;

// Main component
export default async function SpotlightDetailPage({ params }) {
  const { slug } = await params;
  const item = await client.fetch(spotlightQuery, { slug });

  if (!item) {
    return (
      <NotFoundMessage
        title=" Spotlight Not Found"
        message="   Sorry, we couldn't find the spotlight content you were looking for.
        "
        backLink="/spotlights"
        backText="Back to All Weekly Spotlights"
        buttonColor="bg-purple-600 hover:bg-purple-700"
      />
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <article>
        {/* Banner Section */}
        {item.imageUrl && (
          <div className="w-full h-72 sm:h-96 md:h-[500px] relative">
            <Image
              src={item.imageUrl}
              fill
              alt={`Banner for ${item.title}`}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
              <span className="inline-block bg-purple-500 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full uppercase mb-2 self-start">
                {item.type}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                {item.title}
              </h1>
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl">
            {/* Header for when no banner image */}
            {!item.imageUrl && (
              <div className="mb-6 text-center">
                <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full uppercase mb-2">
                  {item.type}
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  {item.title}
                </h1>
              </div>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200 gap-4">
              {item.date && (
                <div className="flex items-center">
                  <CiCalendar className="w-5 h-5 mr-2 text-gray-500" />
                  <span>Published: {item.date}</span>
                </div>
              )}

              {item.interviewer && (
                <div className="flex items-center">
                  <CiUser className="w-5 h-5 mr-2 text-gray-500" />
                  <span>By: {item.interviewer}</span>
                </div>
              )}

              {item.profileImageUrl && (
                <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-purple-200 ml-auto">
                  <Image
                    src={item.profileImageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="prose prose-lg prose-purple max-w-none text-gray-700 leading-relaxed">
              {/* {item.content.map(renderContentItem)} */}
              <PortableTextRenderer content={item.body} />
            </div>

            {/* Club Link */}
            {item.type === "Club Spotlight" && item.relatedClubLink && (
              <div className="mt-8 text-center">
                <Link
                  href={item.relatedClubLink}
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
                >
                  Learn more about {item.title.replace("Club Spotlight: ", "")}{" "}
                  &rarr;
                </Link>
              </div>
            )}

            {/* Tags */}
            {item.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-600 mb-2 flex items-center">
                  <FaTags className="w-5 h-5 mr-2 text-gray-500" />
                  Tags:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back Link */}
            <div className="mt-10 pt-8 border-t border-gray-200 text-center">
              <Link
                href="/spotlights"
                className="text-purple-600 hover:text-purple-800 font-semibold transition-colors"
              >
                &larr; Back to Spotlights Page
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
