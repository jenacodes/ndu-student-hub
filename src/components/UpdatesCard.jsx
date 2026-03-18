"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

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
  const [isShareMenuOpen, setShareMenuOpen] = useState(false);
  const shareMenuRef = useRef(null);

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [shareMenuRef]);

  const shareUrl = `https://ndustudenthub.com${link}`;
  const shareTitle = encodeURIComponent(
    title || "Check this out from ndustudenthub!",
  );

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
  };

  return (
    <div
      className="overflow-hidden flex flex-col group transform hover:scale-105 transition-transform duration-300 ease-in-out h-full border-2"
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
        borderRadius: "0",
        boxShadow: "3px 3px 0 var(--accent)",
      }}
    >
      {imageUrl && (
        <div className="w-full h-96 relative">
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
              className="text-sm font-bold uppercase tracking-widest"
              style={{
                color: "var(--primary)",
                fontFamily: "var(--font-special-elite), monospace",
              }}
            >
              {category}
            </p>
            {isSponsored && (
              <span
                className="text-xs font-bold px-2 py-1 border"
                style={{
                  color: "var(--accent-foreground)",
                  background: "var(--accent)",
                  borderColor: "var(--accent)",
                  borderRadius: "0",
                  fontFamily: "var(--font-special-elite), monospace",
                }}
              >
                Sponsored
              </span>
            )}
          </div>

          <h3
            className="mt-2 text-xl font-bold transition-colors group-hover:opacity-80"
            style={{
              color: "var(--foreground)",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            <Link href={link || "#"}>{title || "Untitled"}</Link>
          </h3>

          {isSponsored && sponsoredBy && (
            <p
              className="text-xs mt-1"
              style={{
                color: "var(--muted-foreground)",
                fontFamily: "var(--font-special-elite), monospace",
              }}
            >
              In partnership with <strong>{sponsoredBy}</strong>
            </p>
          )}

          {faculty && (
            <p
              className="text-sm mt-1"
              style={{
                color: "var(--muted-foreground)",
                fontFamily: "var(--font-special-elite), monospace",
              }}
            >
              <strong>Faculty:</strong> {faculty}
            </p>
          )}
          {date && (
            <p
              className="mt-1 text-xs"
              style={{
                color: "var(--muted-foreground)",
                fontFamily: "var(--font-special-elite), monospace",
              }}
            >
              <strong>Date:</strong> {date}
            </p>
          )}
          {time && (
            <p
              className="text-xs"
              style={{
                color: "var(--muted-foreground)",
                fontFamily: "var(--font-special-elite), monospace",
              }}
            >
              <strong>Time:</strong> {time}
            </p>
          )}
          {venue && (
            <p
              className="text-xs"
              style={{
                color: "var(--muted-foreground)",
                fontFamily: "var(--font-special-elite), monospace",
              }}
            >
              <strong>Venue:</strong> {venue}
            </p>
          )}
          {author && (
            <p
              className="text-xs"
              style={{
                color: "var(--muted-foreground)",
                fontFamily: "var(--font-special-elite), monospace",
              }}
            >
              <strong>By:</strong> {author}
            </p>
          )}
          {details && (
            <p
              className="text-xs"
              style={{
                color: "var(--muted-foreground)",
                fontFamily: "var(--font-special-elite), monospace",
              }}
            >
              {details}
            </p>
          )}

          <p
            className="mt-3 text-base leading-relaxed line-clamp-3"
            style={{
              color: "var(--foreground)",
              fontFamily: "var(--font-special-elite), monospace",
            }}
          >
            {snippet}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <Link
            href={link || "#"}
            className="text-base font-bold uppercase tracking-wide transition-opacity hover:opacity-70"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--font-special-elite), monospace",
            }}
          >
            View Details →
          </Link>

          {/* Share Button & Menu */}
          <div className="relative" ref={shareMenuRef}>
            <button
              onClick={() => setShareMenuOpen(!isShareMenuOpen)}
              aria-label="Share post"
              className="p-2 transition-colors"
              style={{ color: "var(--muted-foreground)" }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
            </button>
            {isShareMenuOpen && (
              <div
                className="absolute bottom-full right-0 mb-2 w-40 shadow-2xl border z-10"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                  borderRadius: "0",
                }}
              >
                <p
                  className="text-xs font-semibold p-2 border-b uppercase tracking-widest"
                  style={{
                    color: "var(--muted-foreground)",
                    borderColor: "var(--border)",
                    fontFamily: "var(--font-special-elite), monospace",
                  }}
                >
                  Share on...
                </p>
                {[
                  { href: shareLinks.whatsapp, label: "WhatsApp" },
                  { href: shareLinks.twitter, label: "Twitter" },
                  { href: shareLinks.facebook, label: "Facebook" },
                ].map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 text-sm transition-colors hover:opacity-70"
                    style={{
                      color: "var(--foreground)",
                      fontFamily: "var(--font-special-elite), monospace",
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatesCard;
