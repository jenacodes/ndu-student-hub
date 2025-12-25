import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-green-50">
      <div className="bg-white shadow-md rounded-xl p-6 max-w-lg text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-4">
           Submission Successful!
        </h1>
        <p className="text-gray-700">
          Thank you for contributing to <strong>NDUSTUDENTHUB</strong>. Your
          content has been received and is now under review.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          We’ll notify you once it’s approved and published.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
}
