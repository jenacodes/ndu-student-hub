import { CiCalendar, CiUser } from "react-icons/ci";
import { FaTags } from "react-icons/fa6";

export default function Loading() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner Skeleton */}
      <div className="w-full h-72 sm:h-96 md:h-[500px] relative bg-gray-200 animate-pulse">
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
          <div className="inline-block h-6 w-32 bg-gray-300 rounded-full mb-2 self-start animate-pulse"></div>
          <div className="h-10 bg-gray-300 rounded w-4/5 mb-1 animate-pulse"></div>
          <div className="h-10 bg-gray-300 rounded w-3/4 animate-pulse"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl">
          {/* Meta Information Skeleton */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200 gap-4">
            <div className="flex items-center">
              <CiCalendar className="w-5 h-5 mr-2 text-gray-300" />
              <div className="h-4 bg-gray-200 rounded w-40 animate-pulse"></div>
            </div>
            <div className="flex items-center">
              <CiUser className="w-5 h-5 mr-2 text-gray-300" />
              <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
            </div>
            <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-purple-200 ml-auto bg-gray-200 animate-pulse"></div>
          </div>

          {/* Content Skeleton */}
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="space-y-2">
                {i === 1 && (
                  <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                )}
                {i === 3 && (
                  <div className="my-6 p-4 border-l-4 border-gray-300 bg-gray-100">
                    <div className="h-5 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 mt-2 animate-pulse"></div>
                  </div>
                )}
                <div
                  className="h-4 bg-gray-200 rounded animate-pulse"
                  style={{ width: `${90 - i * 5}%` }}
                ></div>
                <div
                  className="h-4 bg-gray-200 rounded animate-pulse"
                  style={{ width: `${85 - i * 3}%` }}
                ></div>
              </div>
            ))}
          </div>

          {/* Club Link Skeleton */}
          <div className="mt-8 text-center">
            <div className="inline-block h-10 bg-gray-200 rounded-lg w-64 animate-pulse"></div>
          </div>

          {/* Tags Skeleton */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center mb-2">
              <FaTags className="w-5 h-5 mr-2 text-gray-300" />
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
            </div>
            <div className="flex flex-wrap gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-6 bg-gray-200 rounded-full w-20 animate-pulse"
                ></div>
              ))}
            </div>
          </div>

          {/* Back Link Skeleton */}
          <div className="mt-10 pt-8 border-t border-gray-200 text-center">
            <div className="inline-block h-5 bg-gray-200 rounded w-40 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
