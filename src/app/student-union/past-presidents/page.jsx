import Link from "next/link";

const pastPresidentsData = [
  {
    id: 1,
    name: "Adewale Adeyemi",
    tenure: "2023 - 2024",
    imageUrl: "/images/past-president-1.jpg",
    highlight:
      "Spearheaded the 'Digital First' initiative, leading to the initial development of the ndustudenthub platform and improving digital access to academic resources.",
  },
  {
    id: 2,
    name: "Ngozi Okoro",
    tenure: "2022 - 2023",
    imageUrl: "/images/past-president-2.jpg",
    highlight:
      "Successfully negotiated for extended library hours during exam periods and established the annual Student Entrepreneurship Week.",
  },
  {
    id: 3,
    name: "Bello Musa",
    tenure: "2021 - 2022",
    imageUrl: "/images/past-president-3.jpg",
    highlight:
      "Championed the renovation of the university sports complex and introduced new inter-faculty sports competitions.",
  },
  {
    id: 4,
    name: "Aisha Ibrahim",
    tenure: "2020 - 2021",
    imageUrl: "/images/past-president-4.jpg",
    highlight:
      "Focused on student welfare, advocating for improved hostel conditions and launching a student support fund for those in need.",
  },
];

const PastPresidentCard = ({ name, tenure, imageUrl, highlight }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col sm:flex-row items-center gap-6 w-full">
      <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden relative ring-4 ring-offset-2 ring-gray-300">
        <img
          src={imageUrl || "/images/default-avatar.png"}
          alt={`Official photo of ${name}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="text-center sm:text-left">
        <p className="text-lg font-bold text-gray-500">{tenure}</p>
        <h3 className="text-2xl font-bold text-gray-900 mt-1">{name}</h3>
        <p className="mt-3 text-base text-gray-600">
          <span className="font-semibold">Key Achievement:</span> {highlight}
        </p>
      </div>
    </div>
  );
};
export default function PastPresidentsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-800 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Our Past SUG Presidents
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Honoring the legacy of student leadership and the individuals who
            have served the student body of Niger Delta University.
          </p>
        </div>
      </section>

      {/* Main Content Section - Timeline */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              A Legacy of Service
            </h2>
            <div className="space-y-10">
              {pastPresidentsData.length > 0 ? (
                pastPresidentsData.map((president) => (
                  <PastPresidentCard
                    key={president.id}
                    name={president.name}
                    tenure={president.tenure}
                    imageUrl={president.imageUrl}
                    highlight={president.highlight}
                  />
                ))
              ) : (
                <div className="text-center text-gray-500 py-12">
                  <p>
                    Information on past presidents is being compiled and will be
                    available soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Back to SUG Page Link */}
      <div className="py-12 text-center">
        <Link
          href="/student-union"
          className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
        >
          &larr; Back to the Current SUG Page
        </Link>
      </div>
    </div>
  );
}
