import Link from "next/link";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CiMail } from "react-icons/ci";
import NotFoundMessage from "@/components/NotFoundMessage";
import { PortableText } from "next-sanity";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "club"]{ "slug": slug.current }`
  );
  return slugs.map((slug) => ({ slug: slug.slug }));
}

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const ClubDetailPage = async ({ params }) => {
  // const allClubsDetails = [
  //   {
  //     id: "debate-society", // This should match the link generated on the ClubsPage
  //     name: "Debate Society",
  //     tagline: "Sharpen Your Mind, Find Your Voice.",
  //     imageUrl: "/images/club-debate-banner.jpg",
  //     logoUrl: "/images/club-debate-logo.png",
  //     mission:
  //       "To foster a vibrant culture of intellectual discourse, critical thinking, and effective communication among students by providing a platform for engaging in structured debates, discussions, and public speaking opportunities.",
  //     vision:
  //       "To be recognized as a premier student organization that cultivates articulate leaders and informed citizens capable of contributing meaningfully to society.",
  //     description: [
  //       "The [Your School's Name] Debate Society is one of the most active and engaging clubs on campus. We welcome students from all faculties who are passionate about discussing current events, exploring different perspectives, and honing their argumentation skills.",
  //       "Our activities include regular practice sessions, workshops led by experienced debaters and faculty, intra-club competitions, and participation in regional and national debate tournaments. We cover various debate formats, including British Parliamentary, Asian Parliamentary, and Model United Nations.",
  //       "Joining the Debate Society is a great way to improve your confidence, research abilities, and public speaking prowess, all while making new friends and engaging in stimulating conversations.",
  //     ],
  //     meetingInfo:
  //       "Weekly on Wednesdays, 4:00 PM - 6:00 PM, in Room 201, Student Activities Building.",
  //     howToJoin:
  //       "Students interested in joining can attend one of our weekly meetings or sign up during the annual club registration drive. You can also email us for more information. No prior debate experience is necessary – just an open mind and a willingness to learn!",
  //     contactEmail: "debate.society@ndustudenthub.com",
  //     facultyAdvisor: "Dr. Bamidele Adekunle, Department of Philosophy",
  //     upcomingEvents: [
  //       {
  //         id: 1,
  //         name: "Inter-Faculty Debate Championship",
  //         date: "October 20, 2025",
  //         link: "/events/inter-faculty-debate-2025",
  //       },
  //       {
  //         id: 2,
  //         name: "Workshop: Mastering Rebuttals",
  //         date: "November 5, 2025",
  //         link: "/events/debate-rebuttal-workshop-2025",
  //       },
  //     ],
  //     galleryImages: [
  //       // Placeholder image paths
  //       "/images/club-debate-gallery-1.jpg",
  //       "/images/club-debate-gallery-2.jpg",
  //       "/images/club-debate-gallery-3.jpg",
  //     ],
  //   },
  //   {
  //     id: "tech-innovators-club",
  //     name: "Tech Innovators Club",
  //     tagline: "Code, Create, Innovate.",
  //     imageUrl: "/images/club-tech-banner.jpg",
  //     logoUrl: "/images/club-tech-logo.png",
  //     mission:
  //       "To create a collaborative environment for students interested in technology, fostering innovation, skill development, and networking through workshops, projects, and industry interactions.",
  //     vision:
  //       "To empower students with cutting-edge tech skills and an entrepreneurial mindset, enabling them to become future leaders and innovators in the tech industry.",
  //     description: [
  //       "The Tech Innovators Club is the hub for all things tech at [Your School's Name]. Whether you're a seasoned coder, a hardware enthusiast, or just curious about the latest technological advancements, this is the place for you.",
  //       "We organize regular coding bootcamps, workshops on topics like AI/ML, cybersecurity, web development, and mobile app development. We also host hackathons, guest lectures by industry professionals, and collaborative projects that allow members to apply their skills to real-world problems.",
  //       "Our club provides access to resources, mentorship from senior members and faculty, and a supportive community to learn and grow.",
  //     ],
  //     meetingInfo:
  //       "Bi-weekly on Fridays, 5:00 PM - 7:00 PM, in the Computer Science Lab (Room 305).",
  //     howToJoin:
  //       "Join our mailing list through the link on our ndustudenthub page or attend any of our meetings. We have a simple online registration form. All skill levels are welcome!",
  //     contactEmail: "tech.innovators@ndustudenthub.com",
  //     facultyAdvisor: "Prof. Chinedu Eze, Department of Computer Science",
  //     upcomingEvents: [
  //       {
  //         id: 1,
  //         name: "Hackathon: Solve for Sustainability",
  //         date: "November 15-16, 2025",
  //         link: "/events/tech-hackathon-sustainability-2025",
  //       },
  //       {
  //         id: 2,
  //         name: "Workshop: Introduction to Machine Learning",
  //         date: "October 28, 2025",
  //         link: "/events/ml-intro-workshop-2025",
  //       },
  //     ],
  //     galleryImages: [
  //       "/images/club-tech-gallery-1.jpg",
  //       "/images/club-tech-gallery-2.jpg",
  //     ],
  //   },
  //   // Add other club details here...
  // ];

  const { slug } = await params;

  const query = groq`*[_type == "club" && slug.current == $slug][0]`;
  const club = await client.fetch(query, { slug });

  if (!club) {
    return (
      <NotFoundMessage
        title="Club Not Found"
        message="Sorry, we couldn't find details for this club"
        backLink="/clubs"
        backText="Back to All Clubs"
        buttonColor="bg-purple-600 hover:bg-purple-700"
      />
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Club Header Image */}
      {club.imageUrl && (
        <div className="w-full h-64 sm:h-80 md:h-96 relative">
          <Image
            src={urlFor(club.imageUrl).url()}
            alt={`Banner for ${club.name}`}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
            {club.logoUrl && (
              <div className="w-24 h-24 sm:w-32 sm:h-32 relative mb-4 border-4 border-white rounded-full overflow-hidden shadow-lg">
                <Image
                  src={urlFor(club.logoUrl).url()}
                  alt={`${club.name} Logo`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white break-words">
              {club.name}
            </h1>
            {club.tagline && (
              <p className="mt-2 text-lg sm:text-xl text-purple-200">
                {club.tagline}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl">
          {!club.image && ( // Show title here if no header image
            <div className="text-center mb-8">
              {club.logoUrl && (
                <div className="w-20 h-20 relative mb-3 mx-auto">
                  <Image
                    src={urlFor(club.logoUrl).url()}
                    alt={`${club.name} Logo`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              )}
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {club.name}
              </h1>
              {club.tagline && (
                <p className="mt-1 text-md text-gray-600">{club.tagline}</p>
              )}
            </div>
          )}

          {/* Mission & Vision Section */}
          {(club.mission || club.vision) && (
            <div className="mb-8 pb-6 border-b border-gray-200">
              {club.mission && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Our Mission
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {club.mission}
                  </p>
                </>
              )}
              {club.vision && (
                <>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Our Vision
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{club.vision}</p>
                </>
              )}
            </div>
          )}

          {/* About the Club / Description */}
          <div className="prose prose-lg prose-purple max-w-none text-gray-700 leading-relaxed mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About {club.name}
            </h2>
            <PortableText value={club.description} />
          </div>

          {/* Key Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 bg-purple-50 rounded-lg">
            {club.meetingInfo && (
              <div className="flex items-start">
                <FaRegCalendarAlt />
                <div>
                  <h3 className="text-md font-semibold text-gray-700">
                    Meeting Information
                  </h3>
                  <p className="text-sm text-gray-600">{club.meetingInfo}</p>
                </div>
              </div>
            )}
            {club.contactEmail && (
              <div className="flex items-start">
                <CiMail />
                <div>
                  <h3 className="text-md font-semibold text-gray-700">
                    Contact Email
                  </h3>
                  <a
                    href={`mailto:${club.contactEmail}`}
                    className="text-sm text-purple-600 hover:text-purple-800"
                  >
                    {club.contactEmail}
                  </a>
                </div>
              </div>
            )}
            {club.facultyAdvisor && (
              <div className="flex items-start md:col-span-2">
                {" "}
                <HiOutlineUserGroup />
                <div>
                  <h3 className="text-md font-semibold text-gray-700">
                    Faculty Advisor
                  </h3>
                  <p className="text-sm text-gray-600">{club.facultyAdvisor}</p>
                </div>
              </div>
            )}
          </div>

          {/* How to Join */}
          {club.howToJoin && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                How to Join
              </h2>
              <p className="text-gray-700 leading-relaxed bg-green-50 p-4 rounded-md border border-green-200">
                {club.howToJoin}
              </p>
            </div>
          )}

          {/* Upcoming Club Events */}
          {/* {club.upcomingEvents && club.upcomingEvents.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Upcoming Events by {club.name}
              </h2>
              <div className="space-y-3">
                {club.upcomingEvents.map((event) => (
                  <Link
                    key={event.id}
                    href={event.link}
                    className="block p-3 bg-white hover:bg-gray-100 rounded-md shadow border border-gray-200 transition-colors"
                  >
                    <p className="font-medium text-purple-700">{event.name}</p>
                    <p className="text-xs text-gray-500">Date: {event.date}</p>
                  </Link>
                ))}
              </div>
            </div>
          )} */}

          {/* Photo Gallery */}
          {/* {club.galleryImages && club.galleryImages.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Gallery
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {club.galleryImages.map((imgSrc, index) => (
                  <div
                    key={index}
                    className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={imgSrc}
                      alt={`${club.name} gallery image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )} */}

          {/* Back to Clubs Link */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Link
              href="/clubs"
              className="text-purple-600 hover:text-purple-800 font-semibold transition-colors"
            >
              &larr; Back to All Clubs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubDetailPage;
