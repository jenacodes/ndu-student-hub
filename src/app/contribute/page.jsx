import PagesHeaderSection from "@/components/PagesHeaderSection";
export default function ContributePage() {
  const WriteIcon = () => (
    <svg
      className="w-12 h-12 text-teal-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      ></path>
    </svg>
  );
  const CameraIcon = () => (
    <svg
      className="w-12 h-12 text-teal-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
      ></path>
    </svg>
  );
  const CodeIcon = () => (
    <svg
      className="w-12 h-12 text-teal-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      ></path>
    </svg>
  );
  const IdeaIcon = () => (
    <svg
      className="w-12 h-12 text-teal-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      ></path>
    </svg>
  );
  return (
    <>
      <PagesHeaderSection
        bgColor="bg-teal-600"
        title="Join the Hub"
        subtitle="ndustudenthub is powered by students, for students. We believe in the power of community and are always looking for passionate individuals to help us grow."
        accentText=""
        paragrpahColor="text-white"
      />

      {/* Main content */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Why Contribute Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Contribute?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Volunteering is a chance to build your skills, enhance your CV,
              connect with fellow students, and make a real impact on campus
              life.
            </p>
          </div>
          {/* Contribution Roles Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Writers Role Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <WriteIcon />
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Become a Writer or Reporter
              </h3>
              <p className="text-gray-600">
                Help us create engaging content for our platform, including
                articles, blog posts, and newsletters.
              </p>
              <div className="mt-6">
                <a
                  href="/contact?subject=Writer/Reporter Inquiry"
                  className="inline-block bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors"
                >
                  Express Interest
                </a>
              </div>
            </div>
            {/* Photographer Role Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <CameraIcon />
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Be a Photographer or Videographer
              </h3>
              <p className="text-gray-600">
                A picture is worth a thousand words. We need creative eyes to
                capture the vibrant life on campus, from sports events to
                cultural festivals.
              </p>
              <div className="mt-6">
                <a
                  href="/contact?subject=Photographer/Videographer Inquiry"
                  className="inline-block bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors"
                >
                  Join the Visuals Team
                </a>
              </div>
            </div>
            {/* Tech Contributor Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <CodeIcon />
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Help with Tech & Development
              </h3>
              <p className="text-gray-600">
                Are you a budding developer or designer? We're always looking
                for tech-savvy students to help improve the website, work on new
                features, or enhance the design.
              </p>
              <div className="mt-6">
                <a
                  href="/contact?subject=Tech Contributor Inquiry"
                  className="inline-block bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors"
                >
                  Let's Build Together
                </a>
              </div>
            </div>
            {/* Share Ideas Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <IdeaIcon />
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Share Ideas & Feedback
              </h3>
              <p className="text-gray-600">
                Not ready to commit? That's okay! Your feedback is invaluable.
                Let us know what features you want to see or how we can improve.
              </p>
              <div className="mt-6">
                <a
                  href="/contact?subject=Share Ideas Inquiry"
                  className="inline-block bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors"
                >
                  Give Feedback
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
