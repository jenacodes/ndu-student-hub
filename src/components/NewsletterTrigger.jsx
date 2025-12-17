"use client";

import { useState } from "react";

export default function NewsletterTrigger() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendNewsletter = async () => {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(" Newsletter sent successfully!");
        console.log("Response:", data);
      } else {
        setMessage(` Failed: ${data.error || "Unknown error"}`);
      }
    } catch (err) {
      setMessage(` Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow-md bg-white max-w-sm mx-auto text-center">
      <h2 className="text-lg font-semibold mb-3">Send Test Newsletter</h2>
      <button
        onClick={sendNewsletter}
        disabled={loading}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Sending..." : "Send Newsletter"}
      </button>
      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  );
}
