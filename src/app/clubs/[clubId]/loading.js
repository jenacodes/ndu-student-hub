import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CiMail } from "react-icons/ci";

export default function Loading() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Club Header Skeleton */}
      <div className="w-full h-64 sm:h-80 md:h-96 relative bg-gray-200 animate-pulse">
        {/* Logo Skeleton */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <div className="w-24 h-24 sm:w-32 sm:h-32 relative mb-4 border-4 border-white rounded-full overflow-hidden bg-gray-300 animate-pulse"></div>
          <div className="h-10 bg-gray-300 rounded w-3/4 max-w-md mb-2 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2 max-w-xs animate-pulse"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl">
          {/* Mission & Vision Skeleton */}
          <div className="mb-8 pb-6 border-b border-gray-200 space-y-4">
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>

          {/* About Section Skeleton */}
          <div className="mb-8">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-4 animate-pulse"></div>
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div
                    className="h-4 bg-gray-200 rounded animate-pulse"
                    style={{ width: `${90 - i * 10}%` }}
                  ></div>
                  <div
                    className="h-4 bg-gray-200 rounded animate-pulse"
                    style={{ width: `${85 - i * 5}%` }}
                  ></div>
                  <div
                    className="h-4 bg-gray-200 rounded animate-pulse"
                    style={{ width: `${95 - i * 10}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Information Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 bg-purple-50 rounded-lg">
            <div className="flex items-start">
              <FaRegCalendarAlt className="text-gray-300" />
              <div className="ml-3 w-full">
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              </div>
            </div>
            <div className="flex items-start">
              <CiMail className="text-gray-300" />
              <div className="ml-3 w-full">
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              </div>
            </div>
            <div className="flex items-start md:col-span-2">
              <HiOutlineUserGroup className="text-gray-300" />
              <div className="ml-3 w-full">
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* How to Join Skeleton */}
          <div className="mb-8">
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-3 animate-pulse"></div>
            <div className="bg-green-50 p-4 rounded-md border border-green-200">
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Upcoming Events Skeleton */}
          <div className="mb-8">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-4 animate-pulse"></div>
            <div className="space-y-3">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="p-3 bg-white rounded-md shadow border border-gray-200"
                >
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-1 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Skeleton (Might implement later) */}
          {/* <div className="mb-8">
            <div className="h-6 bg-gray-200 rounded w-1/5 mb-4 animate-pulse"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-200 animate-pulse"></div>
              ))}
            </div>
          </div> */}

          {/* Back Link Skeleton */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <div className="h-5 bg-gray-200 rounded w-32 mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
