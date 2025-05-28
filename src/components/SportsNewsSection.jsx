import Link from "next/link";
import UpdatesCard from "@/components/UpdatesCard";

const SportsNewsSection = () => {
  const sportsNewsData = [
    // {
    //   id: 1,
    //   category: "Football",
    //   title: "University Lions Roar to Victory in Regional Finals!",
    //   snippet:
    //     "A stunning last-minute goal secures the championship trophy for our beloved Lions. Read the full match report and player interviews.",
    //   imageUrl: "/images/sports-football-victory.jpg", // Replace with your actual image path
    //   link: "/sports/news/lions-regional-champions",
    // },
    // {
    //   id: 2,
    //   category: "Athletics",
    //   title: "New Sprint Record Set at Annual Inter-Faculty Games",
    //   snippet:
    //     "Record-breaking speed on the tracks as [Student's Name] clocks an impressive 10.5s in the 100m dash. See all results.",
    //   imageUrl: "/images/sports-athletics-record.jpg", // Replace with your actual image path
    //   link: "/sports/news/inter-faculty-games-sprint-record",
    // },
    // {
    //   id: 3,
    //   category: "Basketball",
    //   title: "Warriors Secure Playoff Spot with Thrilling Overtime Win",
    //   snippet:
    //     "The university basketball team, the Warriors, fought hard in an intense match, clinching their playoff berth in the final seconds.",
    //   imageUrl: "/images/sports-basketball-win.jpg", // Replace with your actual image path
    //   link: "/sports/news/warriors-secure-playoff",
    // },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="container max-w-6xl mx-auto">
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
            href="/sports/news"
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
                key={newsItem.id}
                category={newsItem.category}
                title={newsItem.title}
                snippet={newsItem.snippet}
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
