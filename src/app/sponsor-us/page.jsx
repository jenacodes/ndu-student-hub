import PagesHeaderSection from "@/components/PagesHeaderSection";
import PackageCard from "@/components/PackageCard";
import BenefitCard from "@/components/BenefitCard";
import Head from "next/head";

<Head>
  <title>Sponsor ndustudenthub</title>
  <meta
    name="description"
    content="Partner with ndustudenthub and connect with the most vibrant student audience at Niger Delta University."
  />
</Head>;
const IconWrapper = ({ children }) => (
  <div className="w-12 h-12 text-blue-600 mb-4">{children}</div>
);

const icons = {
  target: (
    <IconWrapper>
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0v.01M12 21a9 9 0 110-18 9 9 0 010 18z"
        />
      </svg>
    </IconWrapper>
  ),
  community: (
    <IconWrapper>
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857m9.288 0a5.002 5.002 0 00-9.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </IconWrapper>
  ),
  brand: (
    <IconWrapper>
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    </IconWrapper>
  ),
};

export default function SponsorUsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PagesHeaderSection
        title="Partner with Us"
        subtitle="Support the heart of student life at NDU and connect with a vibrant, engaged, and dynamic community."
        paragrpahColor="text-blue-100"
        bgColor="bg-blue-700"
      />

      {/* Why Sponsor Us */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Sponsor ndustudenthub?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              ndustudenthub is the primary digital destination for students
              seeking information, connection, and engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              icon={icons.target}
              title="Reach an Engaged Audience"
              description="Connect directly with thousands of university students, faculty, and staff who visit our platform daily."
            />
            <BenefitCard
              icon={icons.brand}
              title="Enhance Your Brand Image"
              description="Align your brand with education, innovation, and student success."
            />
            <BenefitCard
              icon={icons.community}
              title="Support a Student-Led Initiative"
              description="Your contribution directly fuels a platform built by students, for students."
            />
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Sponsorship Packages
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose a level of support that aligns with your goals.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <PackageCard
              title="Bronze Partner"
              color="text-yellow-600"
              description="Essential visibility and community support."
              benefits={[
                "Logo placement in our footer.",
                "Social media thank you post.",
                "Mention in our termly newsletter.",
              ]}
            />
            <PackageCard
              title="Silver Partner"
              color="text-white"
              highlight
              description="Enhanced engagement and brand promotion."
              benefits={[
                "**All Bronze benefits, plus:**",
                "Logo on a dedicated 'Our Sponsors' page.",
                "Sponsored post or announcement (1 per semester).",
                "Logo featured in rotation on our homepage.",
              ]}
            />
            <PackageCard
              title="Gold Partner"
              color="text-yellow-500"
              description="Premier partnership and maximum exposure."
              benefits={[
                "**All Silver benefits, plus:**",
                'Official partner of a key section (e.g., "Sports Central sponsored by...").',
                "Prominent banner ad placement.",
                "Opportunity to co-host a workshop or event.",
              ]}
            />
          </div>
          <p className="text-center text-gray-600 mt-8">
            We are also open to creating custom partnership packages to meet
            your specific goals.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Become a Sponsor Today
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ready to make an impact? Reach out to our sponsorship team to get
            started.
          </p>
          <div className="mt-10">
            <a
              href="/contact?subject=Sponsorship Inquiry"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              Contact Us to Sponsor
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Email us at:{" "}
              <a
                href="mailto:sponsorships@ndustudenthub.com"
                className="text-blue-600 hover:underline"
              >
                sponsorships@ndustudenthub.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
