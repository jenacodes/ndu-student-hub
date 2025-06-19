import NewsletterForm from "./NewsletterForm";

const HeroSection = () => {
  // TODO: a page where users can learn more about their respective departments and courses offered
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-[calc(80vh-80px)] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Your <span className=" text-gradient">Student Life</span> Starts Here!
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Welcome to ndustudenthub, your go-to source for all the latest news,
          events, and happenings at Niger Delta University. Stay connected and
          informed!
        </p>
        <NewsletterForm />
        <p className="mt-4 text-sm text-gray-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
