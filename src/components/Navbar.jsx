"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "News", href: "/news" },
  { name: "Events", href: "/events" },
  {
    name: "Academics",
    href: "#",
    dropdown: [
      { name: "Resource Hub", href: "/resources" },
      { name: "Faculties and departments", href: "/faculties" },
    ],
  },
  { name: "About", href: "/about-us" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const activePath = usePathname();

  return (
    <header
      className="sticky top-0 z-50 border-b-2 border-accent/60"
      style={{ background: "var(--background)" }}
    >
      {/* Top ornamental rule */}
      <div className="h-1 w-full" style={{ background: "var(--primary)" }} />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-primary"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              letterSpacing: "0.02em",
            }}
          >
            <span className="text-accent text-lg">✦</span>
            NDU Student Hub
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative group inline-flex items-center"
                >
                  <button
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium tracking-wide transition-colors ${
                      activePath.startsWith(link.href) && link.href !== "#"
                        ? "border-primary text-foreground"
                        : "border-transparent text-foreground/70 hover:border-accent hover:text-foreground"
                    }`}
                    style={{
                      fontFamily: "var(--font-special-elite), monospace",
                    }}
                  >
                    {link.name}
                    <svg
                      className="w-4 h-4 inline-block ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  <div
                    className="absolute top-full left-0 mt-2 w-56 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border border-border rounded-none"
                    style={{ background: "var(--card)" }}
                  >
                    <div className="py-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-muted hover:text-primary transition-colors"
                          style={{
                            fontFamily: "var(--font-special-elite), monospace",
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium tracking-wide transition-colors ${
                    activePath === link.href
                      ? "border-primary text-foreground"
                      : "border-transparent text-foreground/70 hover:border-accent hover:text-foreground"
                  }`}
                  style={{ fontFamily: "var(--font-special-elite), monospace" }}
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/auth/signup"
              className="ml-6 inline-flex items-center justify-center px-5 py-2 border-2 border-primary text-sm font-bold tracking-widest text-primary-foreground bg-primary hover:bg-primary/85 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors uppercase rounded-none shadow-[3px_3px_0_var(--accent)]"
              style={{ fontFamily: "var(--font-special-elite), monospace" }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-foreground/60 hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden px-4 sm:px-6 py-5 border-t-2 border-accent/40"
            style={{ background: "var(--card)" }}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="font-medium text-foreground/80 hover:text-primary flex justify-between items-center tracking-wide"
                      style={{
                        fontFamily: "var(--font-special-elite), monospace",
                      }}
                    >
                      {link.name}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isDropdownOpen && (
                      <div className="ml-4 mt-2 flex flex-col space-y-2 border-l-2 border-accent/40 pl-3">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => {
                              setIsDropdownOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                            className="text-sm text-foreground/70 hover:text-primary transition-colors"
                            style={{
                              fontFamily:
                                "var(--font-special-elite), monospace",
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`font-medium tracking-wide transition-colors ${
                      activePath === link.href
                        ? "text-primary"
                        : "text-foreground/70 hover:text-primary"
                    }`}
                    style={{
                      fontFamily: "var(--font-special-elite), monospace",
                    }}
                  >
                    {link.name}
                  </Link>
                ),
              )}

              <Link
                href="/auth/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center px-5 py-2.5 text-sm font-bold tracking-widest text-primary-foreground bg-primary border-2 border-primary hover:bg-primary/85 transition-colors uppercase shadow-[3px_3px_0_var(--accent)] rounded-none"
                style={{ fontFamily: "var(--font-special-elite), monospace" }}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
