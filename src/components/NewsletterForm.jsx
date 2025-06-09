"use client";

import { useState, useEffect } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage("");
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [message]);
  return (
    <form
      className="mt-10 max-w-xl mx-auto sm:flex lg:flex-col sm:justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="sm:flex items-center sm:space-x-4">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
          className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500 focus:outline-none border border-gray-300 rounded-lg shadow-sm sm:max-w-xs text-base"
          placeholder="Enter your email"
        />
        <div className="mt-3 rounded-lg shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500 transition-colors"
          >
            Sign up
          </button>
        </div>
      </div>

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
              message.includes("Thank you") ? "text-green-600" : "text-red-600"
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
    </form>
  );
}
