import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { groq } from "next-sanity";
import { client } from "@/sanity/client";

import PagesHeaderSection from "@/components/PagesHeaderSection";
const AboutUsPage = async () => {
  // const teamMembers = [
  //   {
  //     id: 1,
  //     name: "Jenakumo Emmanuel",
  //     role: "Lead Developer & Visionary",
  //     bio: "Jenakumo is passionate about leveraging technology to solve student problems and foster a connected campus community.",
  //     imageUrl: "/images/jenakumo-emmanuel.png",
  //     linkedinUrl: "https://linkdln.com",
  //     twitterUrl: "https://x.com/",
  //   },
  //   {
  //     id: 2,
  //     name: "David Okon",
  //     role: "Content & Community Manager",
  //     bio: "David ensures all information is up-to-date and engaging, working closely with student groups to highlight their activities.",
  //     imageUrl: "/images/team-member-2.jpg",
  //     linkedinUrl: "#",
  //     twitterUrl: "#",
  //   },
  //   // {
  //   //   id: 3,
  //   //   name: "Aisha Ibrahim",
  //   //   role: "UI/UX & Design Lead",
  //   //   bio: "Aisha is the creative mind behind ndustudenthub's look and feel, focusing on creating an intuitive and accessible experience.",
  //   //   imageUrl: "/images/team-member-3.jpg",
  //   //   linkedinUrl: "#",
  //   //   twitterUrl: "#",
  //   // },
  // ];

  const query = groq`*[_type == "teamMember"] | order(name asc) {
    _id,
    name,
    role,
    bio,
    "imageUrl": imageUrl.asset->url,
    linkedinUrl,
    twitterUrl
  }`;

  const teamMembers = await client.fetch(query);

  return (
    <div className="bg-white min-h-screen">
      <PagesHeaderSection
        title="About ndustudenthub"
        subtitle=" Connecting students, amplifying voices, and enriching campus life at "
        bgColor="bg-indigo-700"
        paragrpahColor="text-indigo-100"
      />

      {/* Our Mission & Vision Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                To provide a centralized, accessible, and dynamic platform that
                empowers students by keeping them informed about all aspects of
                campus life, fostering a sense of community, and providing a
                space for student voices to be heard and shared.
              </p>
              <h2 className="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Vision
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                To be the indispensable digital companion for every student at
                Niger Delta University, transforming how information is accessed
                and how the campus community interacts, ultimately contributing
                to a more engaged, successful, and vibrant student experience.
              </p>
            </div>
            {/* Image Section  */}
            <div className="relative mt-10 lg:mt-0 w-full h-64 lg:h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/students-collaborating.jpg"
                alt="Students collaborating and engaging"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story / Journey Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Journey
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            ndustudenthub started as a simple idea: to bridge the information
            gap within our campus. What began as a project by a few passionate
            students in 2025 and has grown into a dedicated platform serving the
            entire student body. We are constantly evolving, driven by student
            feedback and a commitment to innovation.
          </p>
          {/* Might add a simple timeline or key milestones here  */}
        </div>
      </section>

      {/* Meet The Team Section (Optional) */}
      {teamMembers && teamMembers.length > 0 && (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Meet the Core Team
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                The passionate individuals dedicated to making ndustudenthub the
                best it can be.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {teamMembers.map((member) => (
                <div
                  key={member._id}
                  className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-32 h-32 rounded-full mx-auto overflow-hidden mb-4 relative border-4 border-indigo-200">
                    <img
                      src={member.imageUrl || "/images/default-avatar.png"}
                      alt={`Photo of ${member.name}`}
                      fill="true"
                      loading="lazy"
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-medium">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="mt-4 flex justify-center space-x-3">
                    {member.twitterUrl && member.twitterUrl !== "#" && (
                      <Link
                        href={member.twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-indigo-500"
                      >
                        <span className="sr-only">Twitter</span>
                        <FaXTwitter size={20} />
                      </Link>
                    )}
                    {member.linkedinUrl && member.linkedinUrl !== "#" && (
                      <Link
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-indigo-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <FaLinkedin size={20} />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Get Involved / Contact Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-indigo-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join Us or Get in Touch!
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have ideas, feedback, or want to contribute? We&apos;d love to hear
            from you. Let&apos;s make ndustudenthub even better, together.
          </p>
          <div className="mt-10">
            <Link
              href="/contact" // Link to contact page
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
