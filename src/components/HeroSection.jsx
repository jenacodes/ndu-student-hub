"use client";
import { motion } from "framer-motion";
import NewsletterForm from "./NewsletterForm";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-[calc(80vh-80px)] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900"
        >
          Your <span className="text-gradient">Student Life</span> Starts Here!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Welcome to ndustudenthub, your go-to source for all the latest news,
          events, and happenings at Niger Delta University. Stay connected and
          informed!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <NewsletterForm />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-4 text-sm text-gray-500"
        >
          We respect your privacy. Unsubscribe at any time.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
