export default function PartnersPage() {
  const partners = [
    {
      name: "Faculty of Engineering",
      logo: "/partners/engineering.png",
      href: "#",
    },
    { name: "SUG NDU", logo: "/partners/sug.png" },
    { name: "Nursing Department", logo: "/partners/nursing.png" },
    {
      name: "Ndu pulse Tv",
      logo: "/images/logo.jpg",
      href: "/partners/ndupulseTv",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Our Partners</h1>
        <p className="max-w-2xl mx-auto text-lg">
          At NDU Student Hub, we collaborate with organizations, faculties, and
          brands that share our mission of empowering students through
          information, innovation, and connection.
        </p>
      </section>

      {/* Partners Grid */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Meet Our Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {partners.map((partner, index) => (
            <a
              key={index}
              className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition"
              href={partner.href}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 w-auto mx-auto mb-3 object-contain"
              />
              <p className="text-center font-medium">{partner.name}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Why Partner With Us?</h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li>
              🚀 Reach thousands of students across Niger Delta University.
            </li>
            <li>
              🤝 Collaborate on events, campaigns, and community initiatives.
            </li>
            <li>📢 Get featured across our media channels and newsletter.</li>
            <li>
              💡 Be part of a growing digital ecosystem that connects and
              informs.
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Become a Partner</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          We're always looking to collaborate with organizations that align with
          our vision. Let's build something impactful together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Partner With Us
        </a>
      </section>
    </div>
  );
}
