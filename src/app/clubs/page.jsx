import Image from "next/image";
import ClubCard from "@/components/ClubCard";

export default function ClubsPage() {
  const allClubsData = [
    {
      id: 1,
      name: "Debate Society",
      description:
        "Hone your public speaking and critical thinking skills. We participate in regional and national competitions.",
      imageUrl: "/images/club-debate.jpg", // Placeholder
      link: "/clubs/debate-society",
      meetingInfo: "Meets Wednesdays, 4 PM, Room 201",
    },
    {
      id: 2,
      name: "Tech Innovators Club",
      description:
        "Explore the latest in technology, coding, AI, and robotics. Workshops, hackathons, and guest speakers.",
      imageUrl: "/images/club-tech.jpg", // Placeholder
      link: "/clubs/tech-innovators",
      meetingInfo: "Bi-weekly Fridays, 5 PM, CS Lab",
    },
    {
      id: 3,
      name: "Literary Circle",
      description:
        "For lovers of books, poetry, and creative writing. Join our reading sessions, writing workshops, and author talks.",
      imageUrl: "/images/club-literary.jpg", // Placeholder
      link: "/clubs/literary-circle",
      meetingInfo: "Thursdays, 3 PM, Library Annex",
    },
    {
      id: 4,
      name: "Environmental Action Group",
      description:
        "Passionate about sustainability and making a difference? Join us for awareness campaigns, cleanup drives, and green initiatives.",
      imageUrl: "/images/club-environmental.jpg", // Placeholder
      link: "/clubs/environmental-action",
      meetingInfo: "Saturdays, 10 AM, Campus Garden",
    },
    {
      id: 5,
      name: "Photography Club",
      description:
        "Capture moments, learn new techniques, and share your passion for photography. Photo walks, workshops, and exhibitions.",
      imageUrl: "/images/club-photography.jpg", // Placeholder
      link: "/clubs/photography-club",
      meetingInfo: "Tuesdays, 4:30 PM, Art Studio",
    },
    {
      id: 6,
      name: "Music & Performing Arts Club",
      description:
        "Sing, dance, act, or play an instrument? This is the place to showcase your talents and collaborate on performances.",
      imageUrl: "/images/club-music-arts.jpg", // Placeholder
      link: "/clubs/music-performing-arts",
      meetingInfo: "Mondays & Fridays, 6 PM, Auditorium Rehearsal Hall",
    },
    // Add more club data here
  ];

  // TODO: Add filtering logic here in the future (e.g., by category of club)

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-purple-600 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Student Clubs & Organizations
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto">
            Find your community! Explore the diverse range of student-led clubs
            and organizations at Niger Delta University.
          </p>
        </div>
      </section>

      {/* Clubs Grid Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/*  filter controls here in the future */}
          {/* <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">All Clubs</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Academic</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Cultural</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Social</button>
          </div> */}

          {allClubsData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {" "}
              {/* Potentially 4 columns on XL screens */}
              {allClubsData.map((club) => (
                <ClubCard
                  key={club.id}
                  name={club.name}
                  description={club.description}
                  imageUrl={club.imageUrl}
                  link={club.link}
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
