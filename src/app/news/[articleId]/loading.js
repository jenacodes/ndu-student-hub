// components/NewsArticleLoading.js
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaTags } from "react-icons/fa";

export default function NewsArticleLoading() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Article Header Image Skeleton */}
      <div className="w-full h-72 sm:h-96 md:h-[500px] relative bg-gray-200 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl -mt-16 sm:-mt-24 md:-mt-32 relative z-10">
          {/* Category Skeleton */}
          <div className="mb-4">
            <div className="inline-block bg-gray-200 text-transparent text-xs font-semibold px-3 py-1 rounded-full uppercase w-24 h-6 animate-pulse">
              Loading
            </div>
          </div>

          {/* Title Skeleton */}
          <div className="space-y-2 mb-6">
            <div className="h-8 bg-gray-200 rounded animate-pulse w-4/5"></div>
            <div className="h-8 bg-gray-200 rounded animate-pulse w-3/4"></div>
          </div>

          {/* Meta Information Skeleton */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 space-x-4">
            <div className="flex items-center">
              <FaRegCalendarAlt className="text-gray-300" />
              <div className="ml-2 h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
            </div>
            <div className="flex items-center">
              <HiOutlineUserGroup className="text-gray-300" />
              <div className="ml-2 h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
            </div>
          </div>

          {/* Article Body Skeleton */}
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
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

          {/* Tags Skeleton */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center mb-2">
              <FaTags className="text-gray-300" />
              <div className="ml-2 h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
            </div>
            <div className="flex flex-wrap gap-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-6 bg-gray-200 rounded-full w-16 animate-pulse"
                ></div>
              ))}
            </div>
          </div>

          {/* Back to News Link Skeleton */}
          <div className="mt-10 pt-8 border-t border-gray-200 text-center">
            <div className="inline-block h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
