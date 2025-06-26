import {
  FaNewspaper,
  FaUsers,
  FaBullhorn,
  FaUserTie,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

const offers = [
  {
    icon: <FaNewspaper className="text-primary text-3xl" />,
    title: "Faculty & Campus News – All in One Place",
    description:
      "Stay informed with organized news, events, and highlights from every faculty. No more missed updates or scattered messages.",
  },
  {
    icon: <FaUsers className="text-primary text-3xl" />,
    title: "A Voice for Students, Clubs & Leaders",
    description:
      "Share your stories, promote your events, and let your voice echo across campus. This is your stage.",
  },
  {
    icon: <FaBullhorn className="text-primary text-3xl" />,
    title: "Connection & Community",
    description:
      "Unite with students from all over NDU through shared experiences, victories, challenges, and events.",
  },
  {
    icon: <FaUserTie className="text-primary text-3xl" />,
    title: "Leadership & Recognition Opportunities",
    description:
      "Join our growing team of writers and contributors. Build your portfolio, grow your reputation, and lead with purpose.",
  },
  {
    icon: <FaLaptopCode className="text-primary text-3xl" />,
    title: "Real-World Skills & Career-Ready Experience",
    description:
      "Get hands-on experience as a writer, editor, or content creator — skills that matter beyond school.",
  },
  {
    icon: <FaRocket className="text-primary text-3xl" />,
    title: "Opportunities & Visibility for Brands and Talent",
    description:
      "Showcase your talent, promote your club, or reach students through strategic sponsorships.",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          🌟 What We Offer at NDUStudentHub
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          More than just a blog — NDUStudentHub is a platform for connection,
          leadership, and real-world growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {offers.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition duration-300 text-left"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
