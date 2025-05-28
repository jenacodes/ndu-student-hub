import StudentUnionCard from "@/components/StudentsUnionCard";
import Link from "next/link";

const StudentsUnionSection = () => {
  const leadersData = [
    {
      id: 1,
      name: "Adebayo Chinedu",
      post: "SUG President",
      imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      id: 2,
      name: "Fatima Bello",
      post: "Vice President",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 3,
      name: "Emeka Okafor",
      post: "General Secretary",
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 4,
      name: "Ngozi Eze",
      post: "Financial Secretary",
      imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];
  return (
    <section className="section sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-950">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Meet Your Student Union Leaders
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the dedicated individuals representing your student
            body.
          </p>
        </div>

        {leadersData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadersData.map((leaders) => (
              <StudentUnionCard
                imageUrl={leaders.imageUrl}
                name={leaders.name}
                key={leaders.id}
                post={leaders.post}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-2xl">
            Student union information coming soon.
          </p>
        )}
        <div className="mt-12 text-center">
          <Link
            href="/student-union"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors text-lg"
          >
            Learn More About The SUG &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudentsUnionSection;
