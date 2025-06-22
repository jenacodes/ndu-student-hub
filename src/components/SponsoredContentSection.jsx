import UpdatesCard from "./UpdatesCard";

const SponsoredContentSection = () => {
  const sponsoredPosts = [
    {
      id: 1,
      title: "Get a Student Account with Zero Fees at Bayelsa Bank",
      snippet:
        "Managing your finances at university is easy with our special student account. Get exclusive benefits and zero monthly fees.",
      imageUrl: "/images/sponsored-bank.jpg", // Replace with actual image
      link: "/sponsored/bayelsa-bank-student-account",
      isSponsored: true,
      sponsoredBy: "Bayelsa Bank",
    },
    {
      id: 2,
      title: "Internship Opportunities for Tech Students at CodeVerse Inc.",
      snippet:
        "Looking for real-world experience? CodeVerse Inc. is now accepting applications for its summer internship program.",
      imageUrl: "/images/sponsored-tech-internship.jpg", // Replace with actual image
      link: "/sponsored/codeverse-internships",
      isSponsored: true,
      sponsoredBy: "CodeVerse Inc.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            From Our Partners
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Special opportunities and announcements from our trusted sponsors.
          </p>
        </div>
        {sponsoredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {sponsoredPosts.map((post) => (
              <UpdatesCard key={post.id} {...post} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default SponsoredContentSection;
