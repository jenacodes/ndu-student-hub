const ImportantAnnouncementsSection = () => {
  const announcementsData = [
    {
      id: 1,
      text: "Exam registration deadline: June 15th, 2025",
      type: "deadline",
    },
    {
      id: 2,
      text: "First semester exams begin: July 1st, 2025",
      type: "event",
    },
    {
      id: 3,
      text: "New semester (2nd Semester) starts: August 5th, 2025",
      type: "event",
    },
    {
      id: 4,
      text: "Hostel allocation portal opens: May 30th, 2025",
      type: "info",
    },
  ];

  const getIconForType = (type) => {
    switch (type) {
      case "deadline":
        return (
          // Calendar with exclamation
          <svg
            className="w-6 h-6 text-red-500 mr-3 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2zM12 18h.01M12 15h.01M12 12h.01"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4v.01"
            ></path>
          </svg>
        );
      case "event":
        return (
          // Calendar
          <svg
            className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0"
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
      case "info":
      default:
        return (
          // Information circle
          <svg
            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        );
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-yellow-50 border-t-4 border-yellow-400">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl  font-extrabold text-yellow-700 tracking-tight">
            <svg
              className="w-8 h-8 inline-block mr-2 text-yellow-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 3.001-1.742 3.001H4.42c-1.53 0-2.493-1.667-1.743-3.001l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1.75-2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            Important Announcements
          </h2>
          <p className="mt-2 text-md ">
            Key dates and information you shouldn&apos;t miss!
          </p>
        </div>

        {announcementsData.length > 0 ? (
          <div className="space-y-4 max-w-2xl mx-auto">
            {announcementsData.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-white p-4 rounded-lg shadow-md flex items-center border-l-4 border-yellow-500"
              >
                {getIconForType(announcement.type)}
                <p className="text-gray-700 text-md font-medium">
                  {announcement.text}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No important announcements at this time.
          </p>
        )}
      </div>
    </section>
  );
};
export default ImportantAnnouncementsSection;
