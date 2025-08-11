import PagesHeaderSection from "@/components/PagesHeaderSection";
import StudentUnionCard from "@/components/StudentsUnionCard";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";

export const revalidate = 60; // Revalidate page every 60 seconds

const StudentUnionPage = async () => {
  // const sugExecutives = [
  //   {
  //     id: 1,
  //     name: "Adebayo Chinedu",
  //     post: "SUG President",
  //     imageUrl: "/images/student-president.jpg",
  //     bio: "Leading the student body with a vision for enhanced welfare, academic support, and vibrant campus life. Committed to transparent governance.",
  //     email: "president.sug@ndustudenthub.com",
  //   },
  //   {
  //     id: 2,
  //     name: "Fatima Bello",
  //     post: "Vice President",
  //     imageUrl: "/images/student-vice-president.jpg",
  //     bio: "Assisting the President and focusing on student engagement initiatives, inter-departmental collaborations, and community outreach programs.",
  //     email: "vp.sug@ndustudenthub.com",
  //   },
  //   {
  //     id: 3,
  //     name: "Emeka Okafor",
  //     post: "General Secretary",
  //     imageUrl: "/images/student-secretary.jpg",
  //     bio: "Responsible for official communications, record-keeping, and ensuring the smooth administrative functioning of the SUG.",
  //     email: "gensec.sug@ndustudenthub.com",
  //   },
  //   {
  //     id: 4,
  //     name: "Ngozi Eze",
  //     post: "Financial Secretary",
  //     imageUrl: "/images/student-financial-sec.jpg",
  //     bio: "Managing the SUG's finances with accountability and transparency, overseeing budgets for student projects and events.",
  //     email: "finsec.sug@ndustudenthub.com",
  //   },
  //   {
  //     id: 5,
  //     name: "Tari James",
  //     post: "Public Relations Officer (PRO)",
  //     imageUrl: "/images/student-pro.jpg", // Placeholder image
  //     bio: "The voice of the SUG, managing public image, social media presence, and disseminating important information to the student body.",
  //     email: "pro.sug@ndustudenthub.com",
  //   },
  //   {
  //     id: 6,
  //     name: "Amina Sadiq",
  //     post: "Director of Socials",
  //     imageUrl: "/images/student-socials.jpg", // Placeholder image
  //     bio: "Organizing engaging social events, cultural programs, and recreational activities to foster a lively and inclusive campus environment.",
  //     email: "socials.sug@ndustudenthub.com",
  //   },
  //   // Add more executives as needed
  // ];

  const query = groq`*[_type == "sugExecutive"] | order(_createdAt asc){
    _id,
    title,
    name,
    post,
    bio,
    email,
    "image": image.asset->url,
  }`;

  const sugExecutives = await client.fetch(query);
  return (
    <div className="bg-white min-h-screen">
      <PagesHeaderSection
        title="Student Union Government (SUG)"
        subtitle=" Your Voice, Your Representation, Your Campus. Learn about your SUG and how we serve the students of "
        bgColor="bg-teal-600"
        paragrpahColor="text-teal-100"
      />

      {/* SUG Mission/Role Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Role & Commitment
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                The Student Union Government (SUG) at Niger Delta University is
                dedicated to representing the interests and welfare of all
                students. We strive to:
              </p>
              <ul className="mt-6 space-y-3 text-lg text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-teal-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Advocate for student rights and address concerns effectively.
                </li>
                <li className="flex items-start">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-teal-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Foster a vibrant and inclusive campus community through events
                  and initiatives.
                </li>
                <li className="flex items-start">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-teal-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Promote academic excellence and provide support resources.
                </li>
                <li className="flex items-start">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-teal-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Ensure transparent and accountable student governance.
                </li>
              </ul>
            </div>
            <div className="w-full h-72 sm:h-96 md:h-[500px] relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/students-collaborating.jpg"
                alt="Student Union Government in action"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your SUG Executives Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Your SUG Executives
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              The elected student leaders dedicated to serving you this academic
              session.
            </p>
          </div>
          {sugExecutives.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {sugExecutives.map((executive) => (
                <StudentUnionCard
                  key={executive.name}
                  name={executive.name}
                  post={executive.post}
                  imageUrl={executive.image}
                  bio={executive.bio}
                  email={executive.email}
                  postTextColor={"text-teal-600"}
                  hoverColor={"group-hover:text-teal-600"}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              Information on current SUG executives coming soon.
            </p>
          )}
        </div>
      </section>

      {/* Get Involved / SUG News Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Engage with Your SUG
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Contact Us
              </h3>
              <p className="text-gray-600 mb-1">
                <strong>SUG Office:</strong> SUG secretariat Opposite Lecture
                Theatre
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Office Hours:</strong> Monday - Friday, 10 AM - 4 PM
              </p>
              <p className="text-gray-600">
                <strong>General Email:</strong>{" "}
                <a
                  href="mailto:sug.info@ndustudenthub.com"
                  className="text-teal-600 hover:text-teal-800"
                >
                  sug.info@ndustudenthub.com
                </a>
              </p>
              {/* might add a link to a suggestion box form here */}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                SUG News & Updates
              </h3>
              <p className="text-gray-600 mb-4">
                Stay updated with the latest initiatives, announcements, and
                reports from your SUG.
              </p>
              <Link
                href="/news?category=sug" // Example link to filter news by SUG category maybe later
                className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
              >
                View SUG News
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                A Legacy of Leadership
              </h3>
              <p className="text-gray-600 mb-4">
                Explore the history of student governance and learn about the
                leaders who have served our university.
              </p>
              <Link
                href="/student-union/past-presidents"
                className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
              >
                View Past Presidents
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentUnionPage;
