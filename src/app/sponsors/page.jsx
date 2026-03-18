import PagesHeaderSection from "@/components/PagesHeaderSection";
import SponsorCard from "@/components/SponsorCard";
import Link from "next/link";

const sponsorsData = {
  gold: [
    {
      id: 1,
      name: "TechCorp",
      description:
        "A leading technology firm dedicated to fostering innovation and supporting educational initiatives in the tech space. Proud sponsor of the ndustudenthub Events section.",
      logoUrl: "/images/sponsor-techcorp-logo.png",
      website: "https://techcorp.example.com",
    },
  ],
  silver: [
    {
      id: 2,
      name: "Bayelsa Bank",
      description:
        "Your trusted local financial partner, offering specialized student accounts and financial literacy resources.",
      logoUrl: "/images/sponsored-bank-logo.png",
      website: "https://bayelsabank.example.com",
    },
    {
      id: 3,
      name: "Campus Eats",
      description:
        "The most popular food delivery service on campus, offering exclusive discounts for students.",
      logoUrl: "/images/sponsor-campus-eats-logo.png",
      website: "https://campuseats.example.com",
    },
  ],
  bronze: [
    {
      id: 4,
      name: "The Student Bookstore",
      description:
        "Your one-stop shop for textbooks, stationery, and academic supplies.",
      logoUrl: "/images/sponsor-bookstore-logo.png",
      website: "https://studentbookstore.example.com",
    },
    {
      id: 5,
      name: "Yenagoa Print Shop",
      description:
        "Providing high-quality printing and design services for all student and faculty needs.",
      logoUrl: "/images/sponsor-print-shop-logo.png",
      website: "https://yenagoaprint.example.com",
    },
    {
      id: 6,
      name: "Classic Cafe",
      description:
        "The perfect spot near campus to study, relax, and enjoy great coffee.",
      logoUrl: "/images/sponsor-cafe-logo.png",
      website: "https://classiccafe.example.com",
    },
  ],
};

export default function OurSponsorsPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Page Header */}
      <PagesHeaderSection
        title="Our Partners & Sponsors"
        subtitle=" We are incredibly grateful for the support of these organizations. Their partnership helps us empower and connect the student community at "
      />

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Gold Sponsors */}
          <div className="mb-16">
            <h2
              className="text-3xl font-bold mb-8 text-center uppercase tracking-widest"
              style={{
                color: "var(--accent)",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              Gold Partners
            </h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {sponsorsData.gold.map((sponsor) => (
                <SponsorCard key={sponsor.id} {...sponsor} tier="gold" />
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div className="mb-16">
            <h2
              className="text-3xl font-bold mb-8 text-center uppercase tracking-widest"
              style={{
                color: "var(--muted-foreground)",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              Silver Partners
            </h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {sponsorsData.silver.map((sponsor) => (
                <SponsorCard key={sponsor.id} {...sponsor} tier="silver" />
              ))}
            </div>
          </div>

          {/* Bronze Sponsors */}
          <div className="mb-16">
            <h2
              className="text-3xl font-bold mb-8 text-center uppercase tracking-widest"
              style={{
                color: "var(--foreground)",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}
            >
              Bronze Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sponsorsData.bronze.map((sponsor) => (
                <SponsorCard key={sponsor.id} {...sponsor} tier="bronze" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-16 retro-texture"
        style={{ background: "var(--muted)" }}
      >
        <div className="container mx-auto text-center max-w-3xl px-4">
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{
              color: "var(--foreground)",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            Interested in Becoming a Partner?
          </h2>
          <p
            className="mt-4 text-lg"
            style={{
              color: "var(--muted-foreground)",
              fontFamily: "var(--font-special-elite), monospace",
            }}
          >
            Join our mission to support students and gain valuable exposure to
            the campus community. We offer a range of partnership opportunities
            to fit your goals.
          </p>
          <div className="mt-10">
            <Link
              href="/sponsor-us"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                borderRadius: "0",
                boxShadow: "3px 3px 0 var(--accent)",
                fontFamily: "var(--font-special-elite), monospace",
              }}
            >
              View Sponsorship Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
