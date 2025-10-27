"use client";
import { useState } from "react";

export default function SendNewsletterPage() {
  const [subject, setSubject] = useState("");
  const [html, setHtml] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  async function handleSend(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, html, password }),
      });

      const data = await res.json();
      setStatus(
        res.ok
          ? ` Newsletter sent to ${data.sent} subscribers (failed: ${data.failed})`
          : ` Failed: ${data.message}`
      );
    } catch (error) {
      console.error("Error:", error);
      setStatus(" Something went wrong while sending.");
    } finally {
      setLoading(false);
    }
  }

  async function handleAuth(e) {
    e.preventDefault();
    setStatus(null);

    if (password.trim() === "") {
      return setStatus("Enter your admin password.");
    }

    const res = await fetch("/api/newsletter/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    if (res.ok && data.authorized) {
      setAuthorized(true);
    } else {
      setStatus("Incorrect password. Access denied.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-6">
      {!authorized ? (
        <form
          onSubmit={handleAuth}
          className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm space-y-4 text-center"
        >
          <h1 className="text-xl font-semibold text-blue-700">Admin Access</h1>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg w-full"
          >
            Unlock
          </button>
          {status && <p className="text-red-500 text-sm">{status}</p>}
        </form>
      ) : (
        <form
          onSubmit={handleSend}
          className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl space-y-4"
        >
          <h1 className="text-2xl font-bold text-blue-700 mb-4">
            Send Newsletter
          </h1>

          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="ASUU Strike Update — What NDU Students Need to Know "
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email HTML Body
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-2 h-60 font-mono text-sm"
              placeholder="Paste your HTML email content here..."
              value={html}
              onChange={(e) => setHtml(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Newsletter"}
          </button>
          {/* 
          {status && (
            <p
              className={`text-center text-sm ${
                status.startsWith("") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )} */}
        </form>
      )}
    </div>
  );
}
