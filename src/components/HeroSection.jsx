const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-[calc(80vh-80px)] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Your <span className="text-blue-600">Student Life</span> Starts Here!
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Welcome to ndustudenthub, your go-to source for all the latest news,
          events, and happenings at Niger Delta University. Stay connected and
          informed!
        </p>
        <form className="mt-10 max-w-xl mx-auto sm:flex sm:justify-center">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500 focus:outline-none border border-gray-300 rounded-lg shadow-sm sm:max-w-xs text-base"
            placeholder="Enter your email"
          />
          <div className="mt-3 rounded-lg shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500 transition-colors"
            >
              Sign up
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-gray-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
