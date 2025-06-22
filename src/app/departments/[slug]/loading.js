import { FaGraduationCap, FaUserTie } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Skeleton */}
      <section className="bg-gray-700 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-6 bg-gray-500 rounded w-40 mx-auto animate-pulse mb-4"></div>
          <div className="h-12 bg-gray-500 rounded w-3/5 mx-auto animate-pulse mb-6"></div>
          <div className="h-5 bg-gray-500 rounded w-4/5 max-w-3xl mx-auto animate-pulse"></div>
          <div className="h-5 bg-gray-500 rounded w-3/4 max-w-3xl mx-auto animate-pulse mt-2"></div>
        </div>
      </section>

      {/* HOD Section Skeleton */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center mb-8">
              <FaUserTie className="text-2xl text-gray-300 mr-2" />
              <div className="h-8 bg-gray-200 rounded w-64 animate-pulse"></div>
            </div>

            <div className="flex justify-center">
              <div className="max-w-sm w-full">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto animate-pulse mb-2"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/2 mx-auto animate-pulse"></div>
                  <div className="mt-4">
                    <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto animate-pulse mt-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Staff Section Skeleton */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-12">
              <FaGraduationCap className="text-2xl text-gray-300 mr-2" />
              <div className="h-8 bg-gray-200 rounded w-64 animate-pulse"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md p-6 animate-pulse"
                >
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                  <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back Link Skeleton */}
      <div className="py-12 text-center">
        <div className="h-5 bg-gray-200 rounded w-40 mx-auto animate-pulse"></div>
      </div>
    </div>
  );
}
