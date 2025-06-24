"use client";

export default function FacultyFilter({
  activeFaculty,
  activeCategory,
  uniqueFaculties,
}) {
  const handleFacultyChange = (e) => {
    const selected = e.target.value;

    let url = "/news?";
    if (activeCategory !== "all") {
      url += `category=${encodeURIComponent(activeCategory)}&`;
    }
    url += `faculty=${encodeURIComponent(selected)}`;

    window.location.href = url;
  };

  return (
    <select
      value={activeFaculty}
      onChange={handleFacultyChange}
      className="border border-green-300 rounded-full px-4 py-2 text-sm text-green-700 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      <option value="all">All Faculties</option>
      {uniqueFaculties.map((faculty) => (
        <option key={faculty} value={faculty}>
          {faculty}
        </option>
      ))}
    </select>
  );
}
