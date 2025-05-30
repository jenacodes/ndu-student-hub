import UpdatesCard from "@/components/UpdatesCard";
import PagesHeaderSection from "@/components/PagesHeaderSection";
import Image from "next/image";

export default function EventsPage() {
  const allEventsData = [
    {
      id: 1,
      category: "Academic",
      title: "Annual Tech Symposium 2025",
      snippet:
        "Join us for a day of insightful talks, hands-on workshops, and networking opportunities with industry leaders in technology and innovation.",
      imageUrl: "/images/event-tech-symposium.jpg",
      link: "/events/tech-symposium-2025",
      date: "October 15, 2025",
      time: "9:00 AM - 5:00 PM",
      venue: "Main Auditorium & CS Building",
    },
    {
      id: 2,
      category: "Cultural Fest",
      title: "Spring Fest '25: A Celebration of Talents",
      snippet:
        "Experience a vibrant showcase of music, dance, drama, and art from our talented students. Food stalls and games available!",
      imageUrl: "/images/event-cultural-fest.jpg",
      link: "/events/spring-fest-2025",
      date: "November 5-7, 2025",
      time: "11:00 AM onwards daily",
      venue: "University Grounds & Open Air Theatre",
    },
    {
      id: 3,
      category: "Sports",
      title: "Inter-Departmental Football Championship Finals",
      snippet:
        "Witness the thrilling finale of the inter-departmental football tournament. Come support your favorite teams!",
      imageUrl: "/images/sports-football-victory.jpg",
      link: "/events/football-championship-finals-2025",
      date: "September 28, 2025",
      time: "3:00 PM",
      venue: "University Sports Complex",
    },
    {
      id: 4,
      category: "Workshop",
      title: "Creative Writing Workshop: Unleash Your Inner Storyteller",
      snippet:
        "A hands-on workshop for aspiring writers. Learn techniques for plot development, character creation, and more.",
      imageUrl: "/images/event-writing-workshop.jpg", // Placeholder image
      link: "/events/creative-writing-workshop-2025",
      date: "October 5, 2025",
      time: "10:00 AM - 1:00 PM",
      venue: "Library Seminar Hall",
    },
    {
      id: 5,
      category: "Guest Lecture",
      title: "Entrepreneurship in the Digital Age by Dr. Ada Okoye",
      snippet:
        "An inspiring talk by renowned entrepreneur Dr. Ada Okoye on navigating the challenges and opportunities of starting a business today.",
      imageUrl: "/images/event-guest-lecture.jpg", // Placeholder image
      link: "/events/guest-lecture-ada-okoye-2025",
      date: "November 12, 2025",
      time: "2:00 PM - 4:00 PM",
      venue: "Lecture Theatre 1",
    },
  ];

  // TODO: Add filtering logic here in the future (e.g., by date, category)
  // For now, we display all events.

  return (
    <div className=" min-h-screen">
      <PagesHeaderSection
        bgColor="bg-blue-600"
        title="School Events"
        subtitle="Discover all upcoming academic, cultural, sports, and community
            events happening at "
        paragrpahColor="text-blue-100"
      />

      {/* Events Grid Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/*  filter controls here in the future */}
          {/* <div className="mb-8 flex justify-center space-x-4">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">All</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Academic</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Cultural</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Sports</button>
          </div> */}

          {allEventsData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {allEventsData.map((event) => (
                <UpdatesCard // Reusing the UpdateCard component
                  key={event.id}
                  category={event.category}
                  title={event.title}
                  snippet={event.snippet}
                  imageUrl={event.imageUrl}
                  link={event.link}
                  date={event.date}
                  time={event.time}
                  venue={event.venue}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Image
                src="/images/no-events-available.png"
                alt="No events"
                width={400}
                height={400}
                className="mx-auto mb-4"
              />{" "}
              {/* Placeholder for no events */}
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                No Events Scheduled
              </h2>
              <p className="text-gray-500">
                Please check back later for updates on upcoming events.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
