"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 sm:pt-24 sm:pb-32">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
            New Semester Updates Available
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
            Your Campus Life, <br />
            <span className="text-blue-600">Simplified.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            The central hub for Niger Delta University students. Get the latest
            news, track events, and access academic resources in one clean,
            organized place.
          </p>

          <div className="pb-12 max-w-md mx-auto">

            <NewsletterForm />
            <p className="text-sm text-slate-500 mt-4">
              Join 2,000+ students getting weekly updates
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
