import Link from "next/link";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaTags } from "react-icons/fa";
import NotFoundMessage from "@/components/NotFoundMessage";
import { client } from "@/sanity/client";
import { groq, PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "sports"]{ "slug": slug.current }`
  );
  return slugs.map((slug) => ({ slug: slug.slug }));
}

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const SportsItemDetailPage = async ({ params }) => {
  // const allSportsItems = [
  //   {
  //     id: "lions-win-interfaculty-2025",
  //     itemType: "News",
  //     category: "Football News",
  //     title: "University Lions Clinch Inter-Faculty Trophy!",
  //     imageUrl: "/images/sports-football-victory.jpg",
  //     date: "May 27, 2025",
  //     details: "Final Score: Lions 2 - 1 Eagles",

  //     body: [
  //       "In an electrifying final match that kept spectators on the edge of their seats, the University Lions football team emerged victorious in the Inter-Faculty Championship, defeating the formidable Eagles with a score of 2-1.",
  //       "The game was a hard-fought battle from the first whistle. The Eagles took an early lead in the first half, but the Lions showed incredible resilience, equalizing just before halftime with a brilliant strike from star forward, [Player's Name].",
  //       "The second half saw intense back-and-forth action, with both teams creating numerous chances. It wasn't until the 88th minute that [Another Player's Name] scored a stunning header from a corner kick, sending the Lions' supporters into a frenzy. The campus erupted in celebration as the final whistle blew, marking a well-deserved championship for the Lions.",
  //       "Team captain, [Captain's Name], praised the team's spirit and the unwavering support from the fans. Coach [Coach's Name] highlighted the months of hard work and dedication that led to this triumph. Full match highlights and player interviews will be available soon on ndustudenthub TV.",
  //     ],
  //     tags: ["football", "championship", "inter-faculty", "lions", "victory"],
  //   },
  //   {
  //     id: "warriors-vs-titans-2025",
  //     itemType: "Fixture",
  //     category: "Upcoming Match: Basketball",
  //     title: "Warriors vs. Titans - Crucial Conference Game",
  //     imageUrl: "/images/sports-basketball-upcoming.jpg",
  //     date: "June 5, 2025",
  //     details: "Time: 7:00 PM, Venue: University Sports Arena",
  //     body: [
  //       "Get ready for a high-stakes basketball showdown as our University Warriors take on the formidable Titans in a crucial conference game! This match could determine the top seed for the upcoming playoffs, and both teams are expected to bring their A-game.",
  //       "The Warriors have had a strong season so far, with impressive performances from key players like [Player 1 Name] and [Player 2 Name]. The Titans, known for their aggressive defense, will be a tough opponent.",
  //       "Come out and support your Warriors! Let's fill the University Sports Arena and create an electrifying atmosphere. Tickets are available at the Students' Union office and online. Don't miss this thrilling encounter!",
  //     ],
  //     tags: ["basketball", "fixture", "warriors", "titans", "conference game"],
  //   },
  //   {
  //     id: "annual-athletics-meet-2025",
  //     itemType: "Results",
  //     category: "Athletics Results",
  //     title: "New School Records Set at Annual Athletics Meet",
  //     imageUrl: "/images/sports-athletics-meet.jpg",
  //     date: "May 15, 2025",
  //     details: "Highlights: 100m, Long Jump, Javelin Throw",
  //     body: [
  //       "The Annual University Athletics Meet concluded last week with spectacular performances and several new school records being set. Students from all faculties showcased their athletic prowess in a day filled with excitement and sportsmanship.",
  //       "In the men's 100m dash, [Student Name] clocked an incredible [Time], shattering the previous record. [Another Student Name] soared to a new record in the women's long jump with a leap of [Distance]. The javelin throw also saw a new benchmark set by [Yet Another Student Name] with a throw of [Distance].",
  //       "Congratulations to all participants and medal winners! A full list of results and a photo gallery from the event are now available on the university sports portal. The event highlighted the incredible talent and dedication of our student athletes.",
  //     ],
  //     tags: ["athletics", "results", "track and field", "school records"],
  //   },
  // ];

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

  return (
    <div className="bg-gray-50 min-h-screen">
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
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl -mt-16 sm:-mt-24 md:-mt-32 relative z-10">
            {/* Category */}
            <div className="mb-4">
              <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                {item.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              {item.title}
            </h1>

            {/* Meta Information (Date & Specific Details) */}
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 space-x-4">
              {item.date && (
                <div className="flex items-center">
                  <FaRegCalendarAlt />
                  <span>{item.date}</span>
                </div>
              )}
              {item.details && (
                <div className="flex items-center">
                  <HiOutlineUserGroup />
                  <span>{item.details}</span>
                </div>
              )}
            </div>

            {/* Body Content */}
            <div className="prose prose-lg prose-red max-w-none text-gray-700 leading-relaxed">
              <PortableText value={item.body} />
            </div>

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-600 mb-2 flex items-center">
                  <FaTags />
                  Related Tags:
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

            {/* Back to Sports Link */}
            <div className="mt-10 pt-8 border-t border-gray-200 text-center">
              <Link
                href="/sports"
                className="text-red-600 hover:text-red-800 font-semibold transition-colors"
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
