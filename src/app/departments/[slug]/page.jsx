import NotFoundMessage from "@/components/NotFoundMessage";
import StaffCard from "@/components/StaffCard";
import { client } from "@/sanity/client";
import Link from "next/link";

export const revalidate = 60; // Revalidate page every 60 seconds

export default async function DepartmentDetailPage({ params }) {
  const { slug } = await params;

  const department = await client.fetch(
    `*[_type == "department" && slug.current == $slug][0]{
      name,
      description,
      "faculty": faculty->name,
      hod {
        name,
        title,
        email,
        "photoUrl": photoUrl.asset->url
      },
      staff[]{
        name,
        title,
        "photoUrl": photoUrl.asset->url
      }
    }`,
    { slug }
  );

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
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
            {department.description}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
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

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Academic Staff
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {department.staff.map((staffMember, index) => (
                <StaffCard
                  key={index}
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
        <Link
          href="/faculties"
          className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
        >
          &larr; Back to All Faculties
        </Link>
      </div>
    </div>
  );
}
