import NotFoundMessage from "@/components/NotFoundMessage";
import StaffCard from "@/components/StaffCard";

const allDepartmentsData = {
  "mechanical-engineering": {
    name: "Department of Mechanical Engineering",
    faculty: "Faculty of Engineering",
    hod: {
      id: 1,
      name: "Prof. Johnbull O.",
      title: "Head of Department",
      photoUrl: "/images/staff-hod-mech.jpg",
      email: "hod.mech@ndu.edu.ng",
    },
    staff: [
      {
        id: 2,
        name: "Dr. Funke Adebayo",
        title: "Associate Professor",
        photoUrl: "/images/staff-mech-1.jpg",
      },
      {
        id: 3,
        name: "Engr. Tunde Bello",
        title: "Lecturer I",
        photoUrl: "/images/staff-mech-2.jpg",
      },
      {
        id: 4,
        name: "Ms. Chioma Eze",
        title: "Lecturer II",
        photoUrl: "/images/staff-mech-3.jpg",
      },
    ],
  },
  "computer-science": {
    name: "Department of Computer Science",
    faculty: "Faculty of Science",
    hod: {
      id: 5,
      name: "Dr. Amina Sadiq",
      title: "Head of Department",
      photoUrl: "/images/staff-hod-cs.jpg",
      email: "hod.cs@ndu.edu.ng",
    },
    staff: [
      {
        id: 6,
        name: "Prof. Chinedu Eze",
        title: "Professor",
        photoUrl: "/images/staff-cs-1.jpg",
      },
      {
        id: 7,
        name: "Mr. David Okon",
        title: "Lecturer I",
        photoUrl: "/images/staff-cs-2.jpg",
      },
      {
        id: 8,
        name: "Mrs. Halima Abubakar",
        title: "Assistant Lecturer",
        photoUrl: "/images/staff-cs-3.jpg",
      },
      {
        id: 9,
        name: "Mr. Femi Adekunle",
        title: "Graduate Assistant",
        photoUrl: "/images/staff-cs-4.jpg",
      },
    ],
  },
  // Add more department data here
};

export default function DepartmentDetailPage({ params }) {
  // Simulating dynamic route parameter access
  const departmentId = params?.departmentId || "computer-science"; // Fallback for example
  const department = allDepartmentsData[departmentId];

  if (!department) {
    return (
      <NotFoundMessage
        title="Department Not Found"
        message="Sorry, we couldn't find details for this department."
        backLink="/faculties"
        backText="Back to All Faculties"
        buttonColor="bg-blue-600 hover:bg-blue-700"
      />
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gray-700 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-medium text-blue-300">
            {department.faculty}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-2">
            {department.name}
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Head of Department Section */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Head of Department (HOD)
            </h2>
            <div className="flex justify-center">
              <div className="max-w-sm">
                <StaffCard
                  name={department.hod.name}
                  title={department.hod.title}
                  photoUrl={department.hod.photoUrl}
                  isHod={true}
                />
                <p className="mt-4 text-sm text-gray-600">
                  For official inquiries, contact{" "}
                  <a
                    href={`mailto:${department.hod.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {department.hod.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Academic Staff Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Academic Staff
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {department.staff.map((staffMember) => (
                <StaffCard
                  key={staffMember.id}
                  name={staffMember.name}
                  title={staffMember.title}
                  photoUrl={staffMember.photoUrl}
                  isHod={false}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="py-12 text-center">
        <a
          href="/faculties"
          className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
        >
          &larr; Back to All Faculties
        </a>
      </div>
    </div>
  );
}
