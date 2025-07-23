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

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return setMessage("Please enter your email");

    try {
      const res = await fetch("/api/newsletter", {
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

  // Clear message after 5 seconds
  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage("");
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [message]);

  // Get current year for copyright
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
        { name: "Clubs", href: "/clubs" },
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
        { name: "FAQ", href: "/faq" },
      ],
    },
  ];

  const socialLinks = [
    {
      href: "https://facebook.com",
      icon: <FaFacebookF />,
      label: "Facebook",
    },
    {
      href: "https://instagram.com",
      icon: <FaInstagram />,
      label: "Instagram",
    },
    {
      href: "https://twitter.com",
      icon: <BsTwitterX />,
      label: "Twitter",
    },
  ];

  return (
    <footer className=" border-t border-gray-300 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {[
            {
              icon: <CiMail className="text-blue-600" size={26} />,
              title: "Email Us",
              content: (
                <>
                  For any questions, reach out to{" "}
                  <span className="text-blue-500 font-medium">
                    contact@ndustudenthub.com
                  </span>
                  . We'll reply within 24 hours.
                </>
              ),
            },
            {
              icon: <IoCall className="text-blue-600" size={22} />,
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
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="text-sm">{content}</p>
            </div>
          ))}
        </div>

        {/* Links + Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {linkGroups.map((group, i) => (
            <div key={i}>
              <h5 className="text-md font-semibold uppercase mb-4">
                {group.title}
              </h5>
              <ul className="space-y-2 text-sm">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="
                                     inline-flex items-center
                                     text-blue-600            
                                      underline               
                                     hover:text-blue-800      
                                      hover:underline-offset-4 
                                      focus:outline-none
                                      focus:ring-2
                                       focus:ring-blue-400
                                      cursor-pointer
                                      transition-colors"
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
            <h5 className="text-md font-semibold uppercase mb-4">Subscribe</h5>
            <p className="text-sm mb-3">
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
                  className="w-full px-4 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              {message && (
                <div
                  className={`mt-4 lg:mt-4 sm:ml-4 sm:mt-0 px-4 py-3 rounded-lg shadow-md flex items-center space-x-3 transition-all duration-300 ${
                    message.includes("Thank you")
                      ? "bg-green-100 text-green-800 border border-green-300"
                      : "bg-red-100 text-red-800 border border-red-300"
                  }`}
                >
                  <svg
                    className={`w-5 h-5 flex-shrink-0 ${
                      message.includes("Thank you")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
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
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">&copy; {currentYear} ndustudenthub.</p>
          <p className="text-center text-base text-indigo-400 font-semibold tracking-wide mt-6 mb-4 animate-pulse">
            🚀 Built by the Students, Powered by the Students
          </p>
          <div className="flex items-center space-x-4">
            <Link href="/terms" className="hover:text-blue-500">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-blue-500">
              Privacy
            </Link>
            {socialLinks.map(({ href, icon, label }, i) => (
              <Link
                key={i}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
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
