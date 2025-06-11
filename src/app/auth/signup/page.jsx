import Link from "next/link";
import { IoRocket } from "react-icons/io5";

export default function SignUpComingSoonPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full mx-auto text-center bg-white p-8 sm:p-12 rounded-2xl shadow-2xl">
        <IoRocket className="w-16 h-16 text-blue-500 mx-auto mb-6" />

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Get Ready!
        </h1>
        <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-blue-600">
          User Accounts Are Coming Soon
        </h2>

        <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
          We are working hard to bring you a full user experience, including
          personal profiles, content submission, custom notifications and also
          commenting on your favourite blog. This will allow you to engage with
          ndustudenthub like never before!
        </p>

        <div className="mt-8">
          <p className="text-md font-medium text-gray-800">
            Be the first to know when it launches!
          </p>
          <form
            // onSubmit={handleNotifySubmit}
            className="mt-4 max-w-md mx-auto sm:flex sm:justify-center gap-2"
          >
            <label htmlFor="notify-email" className="sr-only">
              Email address
            </label>
            <input
              id="notify-email"
              name="notify-email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none border border-gray-300 rounded-lg shadow-sm text-base"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-lg shadow sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Notify Me
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="text-base font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            &larr; Go Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
