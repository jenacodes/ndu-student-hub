import Link from "next/link";

const FacultyCard = ({ name, description, imageUrl, departments }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="h-56 lg:h-72 relative">
        <img
          src={
            imageUrl ||
            "https://ui-avatars.com/api/?name=Faculty+President&background=0D8ABC&color=fff&size=400"
          }
          alt={`Image of ${name}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div>
          <h4 className="font-semibold text-gray-700 mb-3">Departments:</h4>
          <ul className="space-y-2">
            {departments.map((dept) => (
              <li key={dept.id}>
                <Link
                  href={`/departments/${dept.id}`}
                  className="block p-3 bg-gray-50 hover:bg-blue-100 hover:shadow-sm rounded-md text-blue-700 font-medium transition-all duration-200"
                >
                  {dept.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
