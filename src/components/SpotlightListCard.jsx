"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const SpotlightListCard = ({ type, title, shortIntro, imageUrl, link }) => {
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
        <div className="w-full h-48 relative">
          <Image
            src={imageUrl}
            alt={title || "Spotlight image"}
            fill
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          {type && (
            <p
              className="text-sm font-bold uppercase tracking-widest"
              style={{
                color: "var(--primary)",
                fontFamily: "var(--font-special-elite), monospace",
              }}
            >
              {type}
            </p>
          )}
          <h3
            className="mt-2 text-xl font-bold transition-opacity group-hover:opacity-70"
            style={{
              color: "var(--foreground)",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            <Link href={link || "#"}>{title || "Untitled Spotlight"}</Link>
          </h3>
          {shortIntro && (
            <p
              className="mt-3 text-base leading-relaxed line-clamp-3"
              style={{
                color: "var(--muted-foreground)",
                fontFamily: "var(--font-special-elite), monospace",
              }}
            >
              {shortIntro}
            </p>
          )}
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
            Read More →
          </Link>
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
                    className="flex items-center px-3 py-2 text-sm transition-opacity hover:opacity-70"
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
export default SpotlightListCard;
