"use client";
import React, { useState } from "react";

const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>
);

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <dt>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-start text-left text-gray-700 focus:outline-none"
        >
          <span className="text-lg font-semibold">{question}</span>
          <span className="ml-6 h-7 flex items-center">
            <ChevronIcon isOpen={isOpen} />
          </span>
        </button>
      </dt>
      <dd
        className={`mt-2 pr-12 overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <p className="text-base text-gray-600 leading-relaxed pt-2">{answer}</p>
      </dd>
    </div>
  );
};

export default FaqItem;
