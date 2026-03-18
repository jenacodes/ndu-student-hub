"use client";

import { useState, useEffect } from "react";

const CommentSection = ({ slug }) => {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", text: "" });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: "success"|"error", message }

  // Fetch approved comments on mount
  useEffect(() => {
    if (!slug) return;
    fetch(`/api/comments?slug=${encodeURIComponent(slug)}`)
      .then((r) => r.json())
      .then((data) => setComments(data.comments || []))
      .catch(() => setComments([]))
      .finally(() => setLoadingComments(false));
  }, [slug]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, newsSlug: slug }),
      });
      const data = await res.json();

      if (res.ok) {
        setFeedback({ type: "success", message: data.message });
        setForm({ name: "", email: "", text: "" });
      } else {
        setFeedback({
          type: "error",
          message: data.error || "Something went wrong.",
        });
      }
    } catch {
      setFeedback({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (iso) => {
    if (!iso) return "";
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section
      className="mt-12 pt-10 border-t-2"
      style={{
        borderColor: "var(--border)",
        fontFamily: "var(--font-special-elite), monospace",
      }}
    >
      {/* Section title */}
      <div className="retro-divider mb-8" style={{ color: "var(--accent)" }}>
        <span
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "1.4rem",
            fontWeight: "bold",
            color: "var(--foreground)",
          }}
        >
          ✦ Reader Comments ✦
        </span>
      </div>

      {/* Existing comments list */}
      <div className="space-y-6 mb-10">
        {loadingComments ? (
          <p
            style={{ color: "var(--muted-foreground)" }}
            className="text-sm italic"
          >
            Loading comments...
          </p>
        ) : comments.length === 0 ? (
          <p
            style={{ color: "var(--muted-foreground)" }}
            className="text-sm italic"
          >
            No comments yet. Be the first to share your thoughts!
          </p>
        ) : (
          comments.map((c) => (
            <div
              key={c._id}
              className="p-4 border-l-4"
              style={{
                background: "var(--card)",
                borderColor: "var(--accent)",
                borderRadius: "0",
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="font-bold text-sm tracking-wide"
                  style={{ color: "var(--primary)" }}
                >
                  {c.name}
                </span>
                <span
                  className="text-xs italic"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {formatDate(c._createdAt)}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--foreground)" }}
              >
                {c.text}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Comment form */}
      <div
        className="p-6 border-2 retro-texture"
        style={{
          background: "var(--card)",
          borderColor: "var(--border)",
          borderRadius: "0",
        }}
      >
        <h3
          className="text-lg font-bold tracking-wide mb-5 uppercase"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            color: "var(--foreground)",
            letterSpacing: "0.08em",
          }}
        >
          Leave a Comment
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name + Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="comment-name"
                className="block text-xs uppercase tracking-widest mb-1"
                style={{ color: "var(--muted-foreground)" }}
              >
                Name <span style={{ color: "var(--primary)" }}>*</span>
              </label>
              <input
                id="comment-name"
                type="text"
                name="name"
                required
                minLength={2}
                maxLength={80}
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-3 py-2 text-sm border-2 focus:outline-none transition-colors"
                style={{
                  background: "var(--background)",
                  border: "2px solid var(--border)",
                  color: "var(--foreground)",
                  borderRadius: "0",
                  fontFamily: "var(--font-special-elite), monospace",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>
            <div>
              <label
                htmlFor="comment-email"
                className="block text-xs uppercase tracking-widest mb-1"
                style={{ color: "var(--muted-foreground)" }}
              >
                Email{" "}
                <span
                  className="text-xs normal-case"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  (optional, not shown)
                </span>
              </label>
              <input
                id="comment-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-3 py-2 text-sm transition-colors focus:outline-none"
                style={{
                  background: "var(--background)",
                  border: "2px solid var(--border)",
                  color: "var(--foreground)",
                  borderRadius: "0",
                  fontFamily: "var(--font-special-elite), monospace",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <label
              htmlFor="comment-text"
              className="block text-xs uppercase tracking-widest mb-1"
              style={{ color: "var(--muted-foreground)" }}
            >
              Comment <span style={{ color: "var(--primary)" }}>*</span>
            </label>
            <textarea
              id="comment-text"
              name="text"
              required
              minLength={3}
              maxLength={1000}
              rows={4}
              value={form.text}
              onChange={handleChange}
              placeholder="Share your thoughts..."
              className="w-full px-3 py-2 text-sm resize-none transition-colors focus:outline-none"
              style={{
                background: "var(--background)",
                border: "2px solid var(--border)",
                color: "var(--foreground)",
                borderRadius: "0",
                fontFamily: "var(--font-special-elite), monospace",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
            <p
              className="text-xs mt-1"
              style={{ color: "var(--muted-foreground)" }}
            >
              {form.text.length}/1000
            </p>
          </div>

          {/* Feedback */}
          {feedback && (
            <div
              className="px-4 py-3 text-sm border-l-4 flex items-start gap-2"
              style={{
                background: feedback.type === "success" ? "#f0fdf4" : "#fef2f2",
                borderColor:
                  feedback.type === "success" ? "#16a34a" : "#dc2626",
                color: feedback.type === "success" ? "#15803d" : "#b91c1c",
                borderRadius: "0",
              }}
            >
              <span className="text-base leading-none mt-0.5">
                {feedback.type === "success" ? "✓" : "✕"}
              </span>
              <span>{feedback.message}</span>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-2.5 text-sm font-bold uppercase tracking-widest transition-opacity disabled:opacity-60"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              borderRadius: "0",
              boxShadow: "3px 3px 0 var(--accent)",
              fontFamily: "var(--font-special-elite), monospace",
              letterSpacing: "0.12em",
              cursor: submitting ? "not-allowed" : "pointer",
            }}
          >
            {submitting ? "Sending..." : "Post Comment"}
          </button>
        </form>

        <p
          className="mt-4 text-xs italic"
          style={{ color: "var(--muted-foreground)" }}
        >
          Comments are reviewed before appearing publicly. To protect from spam
        </p>
      </div>
    </section>
  );
};

export default CommentSection;
