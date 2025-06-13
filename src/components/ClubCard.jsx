import Image from "next/image";
import Link from "next/link";

const ClubCard = ({ name, shortDescription, imageUrl, link, meetingInfo }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col group transform hover:scale-105 transition-transform duration-300 ease-in-out">
      {imageUrl ? (
        <div className="w-full h-40 sm:h-48 relative">
          <Image
            src={imageUrl}
            alt={`${name} logo or photo`}
            layout="fill"
            objectFit="cover" // Use "contain" if logos look better that way
            className="transition-opacity duration-300 group-hover:opacity-90"
          />
        </div>
      ) : (
        //icon svg
        <div className="w-full h-40 sm:h-48 bg-gray-200 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        </div>
      )}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors mb-2">
            {name}
          </h3>
          <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-3">
            {" "}
            {/* line-clamp-3 will truncate description */}
            {shortDescription}
          </p>
          {meetingInfo && (
            <p className="text-xs text-gray-500 mb-3">
              <em>{meetingInfo}</em>
            </p>
          )}
        </div>
        <div className="mt-auto">
          {" "}
          {/* Pushes link to the bottom */}
          <Link
            href={link || `/clubs/${name.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-sm font-semibold text-yellow-600 hover:text-yellow-800 transition-colors"
          >
            Learn More &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
