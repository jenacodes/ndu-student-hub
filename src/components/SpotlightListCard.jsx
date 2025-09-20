"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const SpotlightListCard = ({ type, title, shortIntro, imageUrl, link }) => {
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
            alt={title || "Spotlight image"}
            fill={true}
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          {type && (
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
              {type}
            </p>
          )}
          <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
            <Link href={link || "#"}>{title || "Untitled Spotlight"}</Link>
          </h3>
          {shortIntro && (
            <p className="mt-3 text-base text-gray-600 leading-relaxed line-clamp-3">
              {shortIntro}
            </p>
          )}
        </div>
        <div className="mt-6">
          <Link
            href={link || "#"}
            className="text-base font-semibold text-purple-600 hover:text-purple-800 transition-colors"
          >
            Read More &rarr;
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
export default SpotlightListCard;
