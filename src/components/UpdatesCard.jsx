"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

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
  faculty,
  isSponsored,
  sponsoredBy,
}) => {
  const pathname = usePathname();
  const current = getColorClasses(pathname);

  const [isShareMenuOpen, setShareMenuOpen] = useState(false);
  const shareMenuRef = useRef(null);

  // Close the share menu if clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        shareMenuRef.current &&
        !shareMenuRef.current.contains(event.target)
      ) {
        setShareMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [shareMenuRef]);

  const shareUrl = `https://ndustudenthub.com${link}`;
  const shareTitle = encodeURIComponent(
    title || "Check this out from ndustudenthub!"
  );

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
  };

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col group transform hover:scale-105 transition-transform duration-300 ease-in-out h-full">
      {imageUrl && (
        <div className="w-full h-48 relative">
          <Image
            src={imageUrl}
            alt={title || "Card image"}
            fill
            className="transition-opacity duration-300 group-hover:opacity-90 object-cover"
          />
        </div>
      )}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-between items-center">
            <p
              className={`text-sm font-semibold ${current.text} uppercase tracking-wide`}
            >
              {category}
            </p>
            {isSponsored && (
              <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                Sponsored
              </span>
            )}
          </div>

          <h3
            className={`mt-2 text-xl font-bold text-gray-900 ${current.hover} transition-colors`}
          >
            <Link href={link || "#"}>{title || "Untitled"}</Link>
          </h3>

          {isSponsored && sponsoredBy && (
            <p className="text-xs text-gray-500 mt-1">
              In partnership with <strong>{sponsoredBy}</strong>
            </p>
          )}

          {faculty && (
            <p className="text-sm text-gray-700 mt-1">
              <strong>Faculty:</strong> {faculty}
            </p>
          )}

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
          <p className="mt-3 text-base text-gray-600 leading-relaxed line-clamp-3">
            {snippet}
          </p>
        </div>
        <div className="mt-6">
          <Link
            href={link || "#"}
            className={`text-base font-semibold ${current.text} ${current.linkHover} transition-colors`}
          >
            View Details &rarr;
          </Link>
          {/* Share Button & Menu */}
          <div className="relative" ref={shareMenuRef}>
            <button
              onClick={() => setShareMenuOpen(!isShareMenuOpen)}
              aria-label="Share post"
              className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                ></path>
              </svg>
            </button>
            {isShareMenuOpen && (
              <div className="absolute bottom-full right-0 mb-2 w-40 bg-white rounded-lg shadow-2xl border border-gray-200 z-10">
                <p className="text-xs font-semibold text-gray-600 p-2 border-b">
                  Share on...
                </p>
                <a
                  href={shareLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  WhatsApp
                </a>
                <a
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Twitter
                </a>
                <a
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Facebook
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdatesCard;
