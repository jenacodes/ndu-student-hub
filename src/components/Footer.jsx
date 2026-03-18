"use client";

import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useEffect, useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return setMessage("Please enter your email");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setEmail("");
        setMessage("Thank you for subscribing!");
      } else {
        const data = await res.json();
        setMessage(data.message || "Something went wrong.");
      }
    } catch (err) {
      setMessage("Error subscribing.");
    }
  };

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => setMessage(""), 5000);
      return () => clearTimeout(timeout);
    }
  }, [message]);

  const currentYear = new Date().getFullYear();

  const linkGroups = [
    {
      title: "Explore",
      links: [
        { name: "News", href: "/news" },
        { name: "Events", href: "/events" },
        { name: "Sports", href: "/sports" },
      ],
    },
    {
      title: "Student Life",
      links: [
        { name: "Student Union", href: "/student-union" },
        { name: "Resources", href: "/resources" },
        { name: "Faculties and Departments", href: "/faculties" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "/about-us" },
        { name: "Contact Us", href: "/contact" },
        { name: "Sponsor Us", href: "/sponsor-us" },
        { name: "Contribute", href: "/contribute" },
        { name: "FAQ", href: "/faq" },
      ],
    },
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
    {
      href: "https://instagram.com",
      icon: <FaInstagram />,
      label: "Instagram",
    },
    {
      href: "https://twitter.com/kingjenathe7th",
      icon: <BsTwitterX />,
      label: "Twitter",
    },
  ];

  return (
    <footer
      className="border-t-2 border-accent/40"
      style={{
        background: "#1a160f",
        color: "#e8dcc8",
        fontFamily: "var(--font-special-elite), monospace",
      }}
    >
      {/* Top ornamental bar */}
      <div className="h-1 w-full" style={{ background: "var(--primary)" }} />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Ornamental section header */}
        <div className="retro-divider" style={{ color: "#c9a84c" }}>
          <span
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "1.1rem",
            }}
          >
            ✦ NDU Student Hub ✦
          </span>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {[
            {
              icon: <CiMail size={26} style={{ color: "#c9a84c" }} />,
              title: "Email Us",
              content: (
                <>
                  For any questions, reach out to{" "}
                  <a
                    href="mailto:contact@ndustudenthub.com"
                    style={{ color: "#c9a84c" }}
                    className="font-medium underline underline-offset-2 hover:opacity-80"
                  >
                    contact@ndustudenthub.com
                  </a>
                  . We'll reply within 24 hours.
                </>
              ),
            },
            {
              icon: <IoCall size={22} style={{ color: "#c9a84c" }} />,
              title: "Call Us",
              content: (
                <>
                  Phone/WhatsApp:{" "}
                  <span className="font-semibold">+2347068829365</span>. <br />
                  Mon–Fri, 9am–5pm.
                </>
              ),
            },
          ].map(({ icon, title, content }, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              {icon}
              <h2
                className="text-xl font-bold tracking-wide"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "#e8dcc8",
                }}
              >
                {title}
              </h2>
              <p className="text-sm" style={{ color: "#a08c74" }}>
                {content}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="retro-divider"
          style={{ color: "#c9a84c", opacity: 0.4 }}
        >
          <span>—</span>
        </div>

        {/* Links + Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {linkGroups.map((group, i) => (
            <div key={i}>
              <h5
                className="text-xs font-semibold uppercase tracking-widest mb-4 pb-2 border-b"
                style={{
                  color: "#c9a84c",
                  borderColor: "#3d3022",
                  fontFamily: "var(--font-special-elite), monospace",
                }}
              >
                {group.title}
              </h5>
              <ul className="space-y-2 text-sm">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center transition-colors hover:opacity-70"
                      style={{
                        color: "#c9a84c",
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h5
              className="text-xs font-semibold uppercase tracking-widest mb-4 pb-2 border-b"
              style={{
                color: "#c9a84c",
                borderColor: "#3d3022",
                fontFamily: "var(--font-special-elite), monospace",
              }}
            >
              Subscribe
            </h5>
            <p className="text-sm mb-3" style={{ color: "#a08c74" }}>
              Stay updated with the latest from ndustudenthub.
            </p>
            <div className="flex flex-col">
              <form
                className="flex flex-col sm:flex-row gap-2"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 text-sm border focus:outline-none focus:ring-2"
                  style={{
                    background: "#241c12",
                    border: "1px solid #3d3022",
                    color: "#e8dcc8",
                    fontFamily: "var(--font-special-elite), monospace",
                    borderRadius: "0",
                  }}
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-80"
                  style={{
                    background: "#8b2500",
                    color: "#faf6ee",
                    fontFamily: "var(--font-special-elite), monospace",
                    borderRadius: "0",
                    boxShadow: "2px 2px 0 #c9a84c",
                  }}
                >
                  Subscribe
                </button>
              </form>
              {message && (
                <div
                  className={`mt-4 px-4 py-3 flex items-center space-x-3 transition-all duration-300 border ${
                    message.includes("Thank you")
                      ? "border-green-700 text-green-300"
                      : "border-red-800 text-red-300"
                  }`}
                  style={{ background: "rgba(0,0,0,0.3)", borderRadius: "0" }}
                >
                  <svg
                    className={`w-5 h-5 flex-shrink-0 ${message.includes("Thank you") ? "text-green-400" : "text-red-400"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {message.includes("Thank you") ? (
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9V5a1 1 0 112 0v4a1 1 0 01-2 0zm1 4a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                        clipRule="evenodd"
                      />
                    )}
                  </svg>
                  <span className="text-sm font-medium">{message}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4"
          style={{ borderColor: "#3d3022", color: "#7a6652" }}
        >
          <p>&copy; {currentYear} NDU Student Hub. All rights reserved.</p>
          <p
            className="text-center italic tracking-wide"
            style={{
              color: "#c9a84c",
              fontFamily: "var(--font-playfair), Georgia, serif",
            }}
          >
            — Built by the Students, Powered by the Students —
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map(({ href, icon, label }, i) => (
              <Link
                key={i}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border transition-colors hover:opacity-70"
                style={{
                  borderColor: "#3d3022",
                  color: "#c9a84c",
                  borderRadius: "0",
                }}
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
