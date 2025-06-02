export default function EventLoading() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header skeleton */}
      <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-200 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
          {/* Title skeleton */}
          <div className="h-10 bg-gray-200 rounded w-3/4 mb-6 animate-pulse"></div>

          {/* Category skeleton */}
          <div className="mb-6 pb-4 border-b border-gray-200">
            <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div>
          </div>

          {/* Details grid skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center">
                <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              </div>
            ))}
          </div>

          {/* Description skeleton */}
          <div className="space-y-3 mb-8">
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-4 animate-pulse"></div>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-4 bg-gray-200 rounded animate-pulse"
                style={{ width: `${80 - i * 10}%` }}
              ></div>
            ))}
          </div>

          {/* Button skeleton */}
          <div className="mt-10 text-center">
            <div className="inline-block h-12 bg-gray-200 rounded-lg w-48 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
