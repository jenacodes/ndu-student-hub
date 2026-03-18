export const dynamic = "force-dynamic";
export const revalidate = 60;

import { groq } from "next-sanity";
import { client } from "@/sanity/client";

const TodayOnCampusSection = async () => {
  const today_start = new Date();
  today_start.setHours(0, 0, 0, 0);
  const today_end = new Date();
  today_end.setHours(23, 59, 59, 999);

  const query = groq`*[_type in ["event", "announcement"] && date >= $today_start && date <= $today_end] {
  _id,
  _type,
  title,
  "slug": slug.current,
  "time": time,
  date,
  "location": venue,
  "announcement": details
}`;
  const todayItems = await client.fetch(query, {
    today_start: today_start.toISOString(),
    today_end: today_end.toISOString(),
  });

  const todayDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getIconForType = (type) => {
    const cls = "w-6 h-6";
    if (type === "Event")
      return (
        <svg
          className={cls}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
    if (type === "Deadline")
      return (
        <svg
          className={cls}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    return (
      <svg
        className={cls}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.834 9.168-4.432l.256-.512a1.76 1.76 0 013.417.592l-2.147 6.15M18 13a3 3 0 100-6M5.436 13.683L5 13H4a2 2 0 00-2 2v1a2 2 0 002 2h1.5l.436-1.317z"
        />
      </svg>
    );
  };

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--muted)" }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-special-elite), monospace",
            }}
          >
            ✦ Today ✦
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{
              color: "var(--foreground)",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            Today on Campus
          </h2>
          <p
            className="mt-2 text-lg"
            style={{
              color: "var(--muted-foreground)",
              fontFamily: "var(--font-special-elite), monospace",
            }}
          >
            {todayDate}
          </p>
        </div>

        {todayItems.length > 0 ? (
          <div className="max-w-3xl mx-auto space-y-4">
            {todayItems.map((item) => (
              <a
                href={item.slug ? `/events/${item.slug}` : "#"}
                key={item._id}
                className="flex items-center p-4 border-2 hover:scale-[1.02] transition-all duration-300 group"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  borderRadius: "0",
                  boxShadow: "2px 2px 0 var(--accent)",
                }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                  style={{
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                    borderRadius: "0",
                  }}
                >
                  {getIconForType(item.type)}
                </div>
                <div className="ml-4 flex-grow">
                  <p
                    className="font-bold group-hover:opacity-70 transition-opacity"
                    style={{
                      color: "var(--foreground)",
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      color: "var(--muted-foreground)",
                      fontFamily: "var(--font-special-elite), monospace",
                    }}
                  >
                    {item.time} &bull; {item.location}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span style={{ color: "var(--primary)" }}>&rarr;</span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div
            className="text-center py-8"
            style={{
              color: "var(--muted-foreground)",
              fontFamily: "var(--font-special-elite), monospace",
            }}
          >
            <p>Nothing scheduled for today. Check back tomorrow!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TodayOnCampusSection;
