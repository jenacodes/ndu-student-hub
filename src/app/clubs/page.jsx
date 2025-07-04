import Image from "next/image";
import ClubCard from "@/components/ClubCard";
import PagesHeaderSection from "@/components/PagesHeaderSection";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";

export default async function ClubsPage() {
  // const allClubsData = [
  //   {
  //     id: 1,
  //     name: "Debate Society",
  //     shortDescription:
  //       "Hone your public speaking and critical thinking skills. We participate in regional and national competitions.",
  //     imageUrl: "/images/club-debate.jpg",
  //     link: "/clubs/debate-society",
  //     meetingInfo: "Meets Wednesdays, 4 PM, Room 201",
  //   },
  //   {
  //     id: 2,
  //     name: "Tech Innovators Club",
  //     shortDescription:
  //       "Explore the latest in technology, coding, AI, and robotics. Workshops, hackathons, and guest speakers.",
  //     imageUrl: "/images/club-tech.jpg",
  //     link: "/clubs/tech-innovators",
  //     meetingInfo: "Bi-weekly Fridays, 5 PM, CS Lab",
  //   },
  //   {
  //     id: 3,
  //     name: "Literary Circle",
  //     shortDescription:
  //       "For lovers of books, poetry, and creative writing. Join our reading sessions, writing workshops, and author talks.",
  //     imageUrl: "/images/club-literary.jpg",
  //     link: "/clubs/literary-circle",
  //     meetingInfo: "Thursdays, 3 PM, Library Annex",
  //   },
  //   {
  //     id: 4,
  //     name: "Environmental Action Group",
  //     shortDescription:
  //       "Passionate about sustainability and making a difference? Join us for awareness campaigns, cleanup drives, and green initiatives.",
  //     imageUrl: "/images/club-environmental.jpg",
  //     link: "/clubs/environmental-action",
  //     meetingInfo: "Saturdays, 10 AM, Campus Garden",
  //   },
  //   {
  //     id: 5,
  //     name: "Photography Club",
  //     shortDescription:
  //       "Capture moments, learn new techniques, and share your passion for photography. Photo walks, workshops, and exhibitions.",
  //     imageUrl: "/images/club-photography.jpg",
  //     link: "/clubs/photography-club",
  //     meetingInfo: "Tuesdays, 4:30 PM, Art Studio",
  //   },
  //   {
  //     id: 6,
  //     name: "Music & Performing Arts Club",
  //     shortDescription:
  //       "Sing, dance, act, or play an instrument? This is the place to showcase your talents and collaborate on performances.",
  //     imageUrl: "/images/club-music-arts.jpg",
  //     link: "/clubs/music-performing-arts",
  //     meetingInfo: "Mondays & Fridays, 6 PM, Auditorium Rehearsal Hall",
  //   },
  // ];

  // TODO: Add filtering logic here in the future (e.g., by category of club)

  const query = groq`*[_type == "club"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    shortDescription,
    "imageUrl": logoUrl.asset->url,
    link,
    meetingInfo
  }`;
  const allClubsData = await client.fetch(query);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <PagesHeaderSection
        title="Student Clubs & Organizations"
        subtitle="Find your community! Explore the diverse range of student-led clubs
            and organizations at Niger Delta University."
        bgColor="bg-yellow-600"
        accentText=""
      />

      {/* Clubs Grid Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {allClubsData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {" "}
              {/* Potentially 4 columns on XL screens */}
              {allClubsData.map((club) => (
                <ClubCard
                  key={club._id}
                  name={club.name}
                  shortDescription={club.shortDescription}
                  imageUrl={club.imageUrl}
                  link={club.link || `/clubs/${club.slug.toLowerCase()}`} // Fallback to slug if link is not provided
                  meetingInfo={club.meetingInfo}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Image
                src="/images/no-clubs-placeholder.svg"
                alt="No clubs found"
                width={200}
                height={200}
                className="mx-auto mb-4"
              />{" "}
              {/* Placeholder for no clubs */}
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                No Clubs Listed Yet
              </h2>
              <p className="text-gray-500">
                Information about student clubs and organizations will be
                available soon. Please check back later!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
