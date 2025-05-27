import TransparentButton from "@/components/TransparentButton";
import UpdatesCard from "@/components/UpdatesCard";

const NewsSection = () => {
  const updatesData = [
    {
      id: 1,
      category: "News",
      title: "ndustudenthub: Your Hub for the Latest News and Announcements",
      snippet:
        "Stay updated on the latest news and announcements from ndustudenthub, your one-stop source for all critical school information.",
      imageUrl: "/images/news-image.jpg",
      link: "/news/your-hub-article",
    },
    {
      id: 2,
      category: "Student Life",
      title: "Navigating the World of Student Clubs at ndustudenthub",
      snippet:
        "Discover the vibrant array of student clubs and organizations at ndustudenthub, each offering unique opportunities for growth and engagement.",
      imageUrl: "/images/news-image2.png", // Replace with your actual image path in /public/images/
      link: "/clubs/navigating-clubs-article",
    },
    // Add more update objects here
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
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
                key={update.id}
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
            No updates available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
