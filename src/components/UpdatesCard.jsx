"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const getColorClasses = (pathname) => {
  switch (pathname) {
    case "/news":
      return {
        text: "text-green-600",
        hover: "group-hover:text-green-600",
        linkHover: "hover:text-green-800",
      };
    case "/events":
      return {
        text: "text-blue-600",
        hover: "group-hover:text-blue-600",
        linkHover: "hover:text-blue-800",
      };
    case "/sports":
      return {
        text: "text-cyan-600",
        hover: "group-hover:text-cyan-600",
        linkHover: "hover:text-cyan-800",
      };
    default:
      return {
        text: "text-blue-600",
        hover: "group-hover:text-blue-600",
        linkHover: "hover:text-blue-800",
      };
  }
};

const UpdatesCard = ({
  category,
  title,
  snippet,
  imageUrl,
  link,
  date,
  time,
  venue,
  author,
  details,
}) => {
  const pathname = usePathname();
  const current = getColorClasses(pathname);

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col group transform hover:scale-105 transition-transform duration-300 ease-in-out">
      {imageUrl && (
        <div className="w-full h-48 relative">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-300 group-hover:opacity-90"
          />
        </div>
      )}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <p
            className={`text-sm font-semibold ${current.text} uppercase tracking-wide`}
          >
            {category}
          </p>
          <h3
            className={`mt-2 text-xl font-bold text-gray-900 ${current.hover} transition-colors`}
          >
            <Link href={link}>{title}</Link>
          </h3>

          {date && (
            <p className="mt-1 text-xs text-gray-500">
              <strong>Date:</strong> {date}
            </p>
          )}
          {time && (
            <p className="text-xs text-gray-500">
              <strong>Time:</strong> {time}
            </p>
          )}
          {venue && (
            <p className="text-xs text-gray-500">
              <strong>Venue:</strong> {venue}
            </p>
          )}
          {author && (
            <p className="text-xs text-gray-500">
              <strong>By:</strong> {author}
            </p>
          )}
          {details && <p className="text-xs text-gray-500">{details}</p>}
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            {snippet}
          </p>
        </div>
        <div className="mt-6">
          <Link
            href={link}
            className={`text-base font-semibold ${current.text} ${current.linkHover} transition-colors`}
          >
            View Details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UpdatesCard;
