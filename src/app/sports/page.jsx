import Image from "next/image";
import UpdatesCard from "@/components/UpdatesCard";

export default function SportsPage() {
  const allSportsData = [
    {
      id: 1,
      category: "Football News",
      title: "University Lions Clinch Inter-Faculty Trophy!",
      snippet:
        "A thrilling final match saw the Lions defeat the Eagles 2-1 with a last-minute goal. Celebrations erupted across campus.",
      imageUrl: "/images/sports-football-victory.jpg", // Placeholder
      link: "/sports/lions-win-interfaculty-2025",
      date: "May 27, 2025",
      details: "Final Score: Lions 2 - 1 Eagles",
    },
    {
      id: 2,
      category: "Upcoming Match: Basketball",
      title: "Warriors vs. Titans - Crucial Conference Game",
      snippet:
        "Our University Warriors face off against the Titans in a must-win game to secure a top spot in the conference standings.",
      imageUrl: "/images/sports-basketball-upcoming.jpg", // Placeholder
      link: "/sports/fixtures/warriors-vs-titans-2025",
      date: "June 5, 2025",
      details: "Time: 7:00 PM, Venue: University Sports Arena",
    },
    {
      id: 3,
      category: "Athletics Results",
      title: "New School Records Set at Annual Athletics Meet",
      snippet:
        "Several students shattered previous records in track and field events. Full results and photo gallery now available.",
      imageUrl: "/images/sports-athletics-meet.jpg", // Placeholder
      link: "/sports/annual-athletics-meet-2025",
      date: "May 15, 2025",
      details: "Highlights: 100m, Long Jump, Javelin",
    },
    {
      id: 4,
      category: "Volleyball",
      title: "Women's Volleyball Team Advances to Semi-Finals",
      snippet:
        "Consistent performance and teamwork lead our women's volleyball team to a decisive victory in the quarter-finals.",
      imageUrl: "/images/sports-volleyball-women.jpg", // Placeholder
      link: "/sports/womens-volleyball-semifinals-2025",
      date: "May 22, 2025",
      details: "Next Match: June 2nd vs. Challengers",
    },
    {
      id: 5,
      category: "Sports Tryouts",
      title: "Tryouts Announced for 2025/2026 Season Teams",
      snippet:
        "Interested in joining one of our esteemed university sports teams? Find out the tryout dates and requirements for various sports.",
      imageUrl: "/images/sports-tryouts.jpg", // Placeholder
      link: "/sports/tryouts-2025-2026",
      date: "Applications Open: June 1st - July 15th, 2025",
      details: "Check individual sports pages for specific dates.",
    },
    // Add more sports items here
  ];

  // TODO: Add filtering logic here in the future (e.g., by sport, date, type - news/fixture/result)

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-cyan-600 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            University Sports Central
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-red-100 max-w-3xl mx-auto">
            All the latest news, upcoming fixtures, results, and highlights from
            Niger Delta University sports team and faculty competitions and
            events.
          </p>
        </div>
      </section>

      {/* Sports Grid Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* filter controls here in the future */}
          {/* <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">All Sports</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Football</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Basketball</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Athletics</button>
          </div> */}

          {allSportsData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {allSportsData.map((sportsItem) => (
                <UpdatesCard
                  key={sportsItem.id}
                  category={sportsItem.category}
                  title={sportsItem.title}
                  snippet={sportsItem.snippet}
                  imageUrl={sportsItem.imageUrl}
                  link={sportsItem.link}
                  date={sportsItem.date}
                  details={sportsItem.details} // Added details prop
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Image
                src="/images/no-sports-placeholder.svg"
                alt="No sports information"
                width={200}
                height={200}
                className="mx-auto mb-4"
              />{" "}
              {/* Placeholder for no sports info */}
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                No Sports Information Available
              </h2>
              <p className="text-gray-500">
                Check back soon for the latest on university sports!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
