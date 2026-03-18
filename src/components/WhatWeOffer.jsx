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
    icon: (
      <FaNewspaper style={{ color: "var(--primary)", fontSize: "1.875rem" }} />
    ),
    title: "Faculty & Campus News – All in One Place",
    description:
      "Stay informed with organized news, events, and highlights from every faculty. No more missed updates or scattered messages.",
  },
  {
    icon: <FaUsers style={{ color: "var(--primary)", fontSize: "1.875rem" }} />,
    title: "A Voice for Students, Clubs & Leaders",
    description:
      "Share your stories, promote your events, and let your voice echo across campus. This is your stage.",
  },
  {
    icon: (
      <FaBullhorn style={{ color: "var(--primary)", fontSize: "1.875rem" }} />
    ),
    title: "Connection & Community",
    description:
      "Unite with students from all over NDU through shared experiences, victories, challenges, and events.",
  },
  {
    icon: (
      <FaUserTie style={{ color: "var(--primary)", fontSize: "1.875rem" }} />
    ),
    title: "Leadership & Recognition Opportunities",
    description:
      "Join our growing team of writers and contributors. Build your portfolio, grow your reputation, and lead with purpose.",
  },
  {
    icon: (
      <FaLaptopCode style={{ color: "var(--primary)", fontSize: "1.875rem" }} />
    ),
    title: "Real-World Skills & Career-Ready Experience",
    description:
      "Get hands-on experience as a writer, editor, or content creator — skills that matter beyond school.",
  },
  {
    icon: (
      <FaRocket style={{ color: "var(--primary)", fontSize: "1.875rem" }} />
    ),
    title: "Opportunities & Visibility for Brands and Talent",
    description:
      "Showcase your talent, promote your club, or reach students through strategic sponsorships.",
  },
];

const WhatWeOffer = () => {
  return (
    <section
      className="py-16 px-4 md:px-8 lg:px-16"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{
            color: "var(--foreground)",
            fontFamily: "var(--font-playfair), Georgia, serif",
          }}
        >
          ✦ What We Offer at NDUStudentHub
        </h2>
        <div
          className="retro-divider max-w-xs mx-auto mb-6"
          style={{ color: "var(--accent)" }}
        >
          <span>—</span>
        </div>
        <p
          className="mb-12 max-w-3xl mx-auto"
          style={{
            color: "var(--muted-foreground)",
            fontFamily: "var(--font-special-elite), monospace",
          }}
        >
          More than just a blog — NDUStudentHub is a platform for connection,
          leadership, and real-world growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((item, index) => (
            <div
              key={index}
              className="p-6 text-left border-2 transition duration-300 hover:shadow-lg"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
                borderRadius: "0",
                boxShadow: "2px 2px 0 var(--accent)",
              }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{
                  color: "var(--foreground)",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm"
                style={{
                  color: "var(--muted-foreground)",
                  fontFamily: "var(--font-special-elite), monospace",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
