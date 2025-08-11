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
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <PagesHeaderSection
        title="Our Partners & Sponsors"
        subtitle=" We are incredibly grateful for the support of these organizations.
            Their partnership helps us empower and connect the student community
            at "
        bgColor="bg-lime-600"
        textColor=""
      />

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Gold Sponsors */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">
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
            <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">
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
            <h2 className="text-3xl font-bold text-gray-600 mb-8 text-center">
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
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto text-center max-w-3xl px-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Interested in Becoming a Partner?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join our mission to support students and gain valuable exposure to
            the campus community. We offer a range of partnership opportunities
            to fit your goals.
          </p>
          <div className="mt-10">
            <Link
              href="/sponsor-us"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              View Sponsorship Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
