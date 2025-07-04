import { groq } from "next-sanity";
import { client } from "@/sanity/client";

export const revalidate = 60;

const TodayOnCampusSection = async () => {
  const today_start = new Date();
  today_start.setHours(0, 0, 0, 0);

  const today_end = new Date();
  today_end.setHours(23, 59, 59, 999);

  const query = groq`*[_type in ["event", "announcement"] && date >= $today_start && date <= $today_end] {
  _id,
  _type, // This is crucial to know what kind of item it is
  title,
  "slug": slug.current,
  "time": time, // For events
  date,
  "location": venue, // For events
  "announcement": details // For announcements
}`;
  const todayItems = await client.fetch(query, {
    today_start: today_start.toISOString(),
    today_end: today_end.toISOString(),
  });
  const todayDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // const todayItems = [
  //   {
  //     id: 1,
  //     type: "Event",
  //     title: "Guest Lecture: AI in Healthcare",
  //     time: "2:00 PM - 3:30 PM",
  //     location: "Lecture Theatre 4",
  //     link: "/events/guest-lecture-ai-healthcare",
  //   },
  //   {
  //     id: 2,
  //     type: "Deadline",
  //     title: "Final day for Course Add/Drop",
  //     time: "Ends 11:59 PM",
  //     location: "Online via Student Portal",
  //     link: "/resources/student-portal", // Link to the portal
  //   },
  //   {
  //     id: 3,
  //     type: "Announcement",
  //     title: "Maintenance on E-Learning Portal",
  //     time: "Tonight from 10 PM",
  //     location: "Brief downtime expected",
  //     link: "/news/e-learning-maintenance",
  //   },
  //   {
  //     id: 4,
  //     type: "Event",
  //     title: "Debate Society Practice Session",
  //     time: "4:00 PM - 6:00 PM",
  //     location: "Room 201, Student Centre",
  //     link: "/clubs/debate-society",
  //   },
  // ];

  const getIconForType = (type) => {
    switch (type) {
      case "Event":
        return (
          <svg
            className="w-6 h-6 text-white"
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
      case "Deadline":
        return (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        );
      case "Announcement":
      default:
        return (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.834 9.168-4.432l.256-.512a1.76 1.76 0 013.417.592l-2.147 6.15M18 13a3 3 0 100-6M5.436 13.683L5 13H4a2 2 0 00-2 2v1a2 2 0 002 2h1.5l.436-1.317z"
            ></path>
          </svg>
        );
    }
  };

  const getColorForType = (type) => {
    switch (type) {
      case "Event":
        return "bg-blue-500";
      case "Deadline":
        return "bg-red-500";
      case "Announcement":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Today on Campus
          </h2>
          <p className="mt-2 text-lg text-gray-600">{todayDate}</p>
        </div>

        {todayItems.length > 0 ? (
          <div className="max-w-3xl mx-auto space-y-4">
            {todayItems.map((item) => (
              <a
                href={item.link}
                key={item._id}
                className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${getColorForType(item.type)}`}
                >
                  {getIconForType(item.type)}
                </div>
                <div className="ml-4 flex-grow">
                  <p className="font-bold text-gray-800 group-hover:text-blue-600">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.time} &bull; {item.location}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-blue-500">&rarr;</span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-8">
            <p>Nothing scheduled for today. Check back tomorrow!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TodayOnCampusSection;
