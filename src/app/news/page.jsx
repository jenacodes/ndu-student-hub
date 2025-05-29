import Image from "next/image";
import UpdatesCard from "@/components/UpdatesCard";
export default function NewsPage() {
  const allNewsData = [
    {
      id: 1,
      category: "Campus News",
      title: "University Announces New State-of-the-Art Library Wing",
      snippet:
        "Construction is set to begin next month on a new library extension, featuring modern study spaces, digital archives, and a cafe.",
      imageUrl: "/images/news-library-wing.jpg", // Placeholder image
      link: "/news/new-library-wing-announcement",
      date: "May 28, 2025",
      author: "University Administration",
    },
    {
      id: 2,
      category: "Academics",
      title:
        "Research Grant Awarded to Engineering Department for Renewable Energy Project",
      snippet:
        "Professor Adaobi's team secures a significant grant to further their research into innovative solar panel technology.",
      imageUrl: "/images/news-research-grant.jpg", // Placeholder image
      link: "/news/engineering-research-grant-solar",
      date: "May 25, 2025",
      author: "Faculty of Engineering",
    },
    {
      id: 3,
      category: "Student Achievements",
      title:
        "Debate Team Wins National Championship for the Third Consecutive Year",
      snippet:
        "Our talented debate society has once again proven their mettle, bringing home the national trophy. Congratulations to the team!",
      imageUrl: "/images/news-debate-team-win.jpg", // Placeholder image
      link: "/news/debate-team-national-champions-2025",
      date: "May 20, 2025",
      author: "Student Affairs Office",
    },
    {
      id: 4,
      category: "Community Outreach",
      title: "Successful 'Clean Yenagoa' Initiative Led by Student Volunteers",
      snippet:
        "Over 100 student volunteers participated in the recent city cleanup drive, making a significant impact on our local community.",
      imageUrl: "/images/news-community-cleanup.jpg", // Placeholder image
      link: "/news/clean-yenagoa-student-initiative",
      date: "May 15, 2025",
      author: "Social Responsibility Club",
    },
    {
      id: 5,
      category: "Campus Development",
      title: "New Cafeteria Opens with Diverse Menu Options",
      snippet:
        "Students welcome the newly renovated cafeteria, offering a wider range of healthy and international food choices.",
      imageUrl: "/images/news-cafeteria-opening.jpg", // Placeholder image
      link: "/news/new-cafeteria-opens",
      date: "May 10, 2025",
      author: "Campus Services",
    },
    // Add more news articles here
  ];

  // TODO: Add filtering logic here in the future (e.g., by date, category)

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-green-600 text-white py-12 sm:py-16">
        {" "}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            School News & Announcements
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-green-100 max-w-3xl mx-auto">
            Stay informed with the latest updates, achievements, and important
            notices from Niger Delta University.
          </p>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* filter controls here in the future */}
          {/* <div className="mb-8 flex justify-center space-x-4">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">All</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Campus News</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Academics</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Achievements</button>
          </div> */}

          {allNewsData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {allNewsData.map((newsItem) => (
                <UpdatesCard // Reusing the UpdateCard component
                  key={newsItem.id}
                  category={newsItem.category}
                  title={newsItem.title}
                  snippet={newsItem.snippet}
                  imageUrl={newsItem.imageUrl}
                  link={newsItem.link}
                  date={newsItem.date}
                  author={newsItem.author} // Added an author prop
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Image
                src="/images/no-news-placeholder.svg"
                alt="No news"
                width={200}
                height={200}
                className="mx-auto mb-4"
              />{" "}
              {/* Placeholder for no news */}
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                No News Articles Available
              </h2>
              <p className="text-gray-500">
                Please check back later for the latest updates.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
