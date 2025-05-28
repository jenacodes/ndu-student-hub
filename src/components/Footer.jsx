import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
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
      ],
    },
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "/about-us" },
        { name: "Contact Us", href: "/contact" },
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
    <footer className="bg-gray-100 border-t border-gray-300 text-gray-800">
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
                    <Link href={link.href} className="hover:text-blue-500">
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
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                className="w-full px-4 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} ndustudenthub. All rights reserved.
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
