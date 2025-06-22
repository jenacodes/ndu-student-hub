import NotFoundMessage from "@/components/NotFoundMessage";
import Image from "next/image";
import Link from "next/link";

const allSponsoredPosts = [
  {
    id: "bayelsa-bank-student-account", // Matches link from homepage
    sponsoredBy: "Bayelsa Bank",
    title: "Get a Student Account with Zero Fees at Bayelsa Bank",
    imageUrl: "/images/sponsored-bank-banner.jpg", // A larger banner for the detail page
    logoUrl: "/images/sponsored-bank-logo.png",
    date: "June 18, 2025",
    body: [
      "Bayelsa Bank is proud to support the students of [Your School's Name] with our new Student Advantage Account, designed specifically to help you manage your finances stress-free while you focus on your studies.",
      "Navigating university life comes with its own set of challenges, and banking shouldn't be one of them. Our account offers zero monthly maintenance fees, free inter-bank transfers, and a dedicated student support line.",
      "Additionally, you'll get access to our mobile banking app with features like budget tracking and savings goals to help you stay on top of your finances. We also offer exclusive discounts at local partner bookstores and cafes when you use your Bayelsa Bank student debit card.",
    ],
    cta: {
      text: "Learn More & Open an Account",
      link: "https://www.bayelsabank.example.com/student-accounts", // External link to sponsor's website
    },
    sponsorInfo: {
      description:
        "Bayelsa Bank is a leading financial institution committed to empowering communities and supporting the next generation of leaders through innovative banking solutions and community initiatives.",
      website: "https://www.bayelsabank.example.com",
    },
    tags: ["finance", "banking", "student deals", "money management"],
  },
];

const getSponsoredPostData = (postId) => {
  return allSponsoredPosts.find((post) => post.id === postId);
};

// Placeholder icons
const CalendarIcon = () => (
  <svg
    className="w-5 h-5 mr-2 text-gray-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    ></path>
  </svg>
);
const TagIcon = () => (
  <svg
    className="w-5 h-5 mr-2 text-gray-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7 7h.01M7 3h5a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2zM17 17h.01M17 13h5a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2v-5a2 2 0 012-2z"
    ></path>
  </svg>
);

export default function SponsoredPostPage({ params }) {
  // Simulating dynamic route parameter access
  const postId = params?.sponsoredPostId || "bayelsa-bank-student-account"; // Fallback for example
  const post = getSponsoredPostData(postId);

  if (!post) {
    return (
      <NotFoundMessage
        title="Sponsored Content Not Found"
        message="Sorry, the page you were looking for could not be found."
        backLink="/"
        backText="Back to Homepage"
        buttonColor="bg-blue-600 hover:bg-blue-700"
      />
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <article>
        {/* Header Image */}
        {post.imageUrl && (
          <div className="w-full h-72 sm:h-96 relative">
            <Image
              src={post.imageUrl}
              alt={`Banner for ${post.title}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl -mt-24 sm:-mt-32 relative z-10">
            {/* Sponsored Post Header */}
            <div className="text-center mb-6 pb-6 border-b border-gray-200">
              <p className="text-sm font-bold text-green-700 uppercase tracking-widest">
                Sponsored Content
              </p>
              <p className="text-md text-gray-600 mt-1">In partnership with</p>
              {post.logoUrl ? (
                <div className="h-16 relative mt-2">
                  <Image
                    src={post.logoUrl}
                    alt={`${post.sponsoredBy} Logo`}
                    className="max-h-16 mx-auto object-contain"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              ) : (
                <p className="text-2xl font-bold text-gray-800 mt-1">
                  {post.sponsoredBy}
                </p>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <CalendarIcon />
              <span>Published: {post.date}</span>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              {post.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Call to Action Button */}
            {post.cta && post.cta.link && (
              <div className="mt-10 text-center">
                <Link
                  href={post.cta.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                >
                  {post.cta.text || "Learn More"}
                </Link>
              </div>
            )}

            {/* About the Sponsor Section */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                About Our Partner: {post.sponsoredBy}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {post.sponsorInfo.description}
              </p>
              <a
                href={post.sponsorInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                Visit their website &rarr;
              </a>
            </div>

            {/* Back to Home Link */}
            <div className="mt-10 pt-8 border-t border-gray-200 text-center">
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-700 font-semibold transition-colors text-sm"
              >
                &larr; Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
