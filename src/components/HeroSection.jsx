"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32 retro-texture"
      style={{ background: "var(--background)" }}
    >
      {/* Vintage sepia dot-grid background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--border) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {/* Vintage stamp badge */}
          <div className="flex justify-center">
            <span className="vintage-stamp">✦ Your Campus, Your Voice ✦</span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground animate-flicker"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Your Campus Life, <br />
            <span style={{ color: "var(--primary)" }}>Simplified.</span>
          </h1>

          {/* Ornamental divider */}
          <div className="retro-divider max-w-xs mx-auto">
            <span>✦</span>
          </div>

          {/* Sub-text */}
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{
              color: "var(--muted-foreground)",
              fontFamily: "var(--font-special-elite), monospace",
            }}
          >
            The central hub for Niger Delta University students. Get the latest
            news, track events, and access academic resources in one clean,
            organized place.
          </p>

          {/* Newsletter CTA */}
          <div className="pb-12 max-w-md mx-auto">
            <NewsletterForm />
            <p
              className="text-sm mt-4"
              style={{
                color: "var(--muted-foreground)",
                fontFamily: "var(--font-special-elite), monospace",
              }}
            >
              Join 2,000+ students getting weekly updates
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
