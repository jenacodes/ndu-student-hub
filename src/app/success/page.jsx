import Link from "next/link";

export default function SuccessPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ background: "var(--background)" }}
    >
      <div
        className="p-8 max-w-lg w-full text-center border-2"
        style={{
          background: "var(--card)",
          borderColor: "var(--accent)",
          borderRadius: "0",
          boxShadow: "4px 4px 0 var(--accent)",
        }}
      >
        <p
          className="text-xs uppercase tracking-widest mb-3"
          style={{
            color: "var(--accent)",
            fontFamily: "var(--font-special-elite), monospace",
          }}
        >
          ✦ Received ✦
        </p>
        <h1
          className="text-2xl font-bold mb-4"
          style={{
            color: "var(--foreground)",
            fontFamily: "var(--font-playfair), Georgia, serif",
          }}
        >
          Submission Successful!
        </h1>
        <p
          style={{
            color: "var(--muted-foreground)",
            fontFamily: "var(--font-special-elite), monospace",
          }}
        >
          Thank you for contributing to <strong>NDUSTUDENTHUB</strong>. Your
          content has been received and is now under review.
        </p>
        <p
          className="mt-4 text-sm"
          style={{
            color: "var(--muted-foreground)",
            fontFamily: "var(--font-special-elite), monospace",
          }}
        >
          We&apos;ll notify you once it&apos;s approved and published.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-2.5 font-bold uppercase tracking-widest transition-opacity hover:opacity-80"
          style={{
            background: "var(--primary)",
            color: "var(--primary-foreground)",
            borderRadius: "0",
            boxShadow: "2px 2px 0 var(--accent)",
            fontFamily: "var(--font-special-elite), monospace",
          }}
        >
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
}
