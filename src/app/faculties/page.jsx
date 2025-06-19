import FacultyCard from "@/components/FacultyCard";

const allFacultiesData = [
  {
    id: "faculty-of-engineering",
    name: "Faculty of Engineering",
    description:
      "Dedicated to innovation and excellence in engineering education, research, and practice to solve modern challenges.",
    imageUrl: "/images/faculty-engineering.jpg", // Replace with actual image
    departments: [
      { id: "mechanical-engineering", name: "Mechanical Engineering" },
      { id: "civil-engineering", name: "Civil Engineering" },
      {
        id: "electrical-engineering",
        name: "Electrical & Electronics Engineering",
      },
      { id: "petroleum-engineering", name: "Petroleum Engineering" },
    ],
  },
  {
    id: "faculty-of-science",
    name: "Faculty of Science",
    description:
      "Exploring the fundamental principles of the natural world through rigorous scientific inquiry, discovery, and collaboration.",
    imageUrl: "/images/faculty-science.jpg", // Replace with actual image
    departments: [
      { id: "computer-science", name: "Computer Science" },
      { id: "biochemistry", name: "Biochemistry" },
      { id: "microbiology", name: "Microbiology" },
      { id: "geology", name: "Geology" },
    ],
  },
  {
    id: "faculty-of-management-sciences",
    name: "Faculty of Management Sciences",
    description:
      "Developing future leaders and entrepreneurs with a strong foundation in business, finance, and administrative principles.",
    imageUrl: "/images/faculty-management.jpg", // Replace with actual image
    departments: [
      { id: "business-administration", name: "Business Administration" },
      { id: "accounting", name: "Accounting" },
      { id: "marketing", name: "Marketing" },
      {
        id: "office-information-management",
        name: "Office & Information Management",
      },
    ],
  },
];

export default function FacultiesPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-blue-800 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Faculties & Departments
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Explore the academic structure of Niger Delta University, from our
            diverse faculties to their specialized departments.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="space-y-12">
            {allFacultiesData.map((faculty) => (
              <FacultyCard
                key={faculty.id}
                name={faculty.name}
                description={faculty.description}
                imageUrl={faculty.imageUrl}
                departments={faculty.departments}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
