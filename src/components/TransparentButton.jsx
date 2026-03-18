import Link from "next/link";

const TransparentButton = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="font-bold py-2 px-6 uppercase tracking-widest transition-all"
      style={{
        background: "transparent",
        border: "2px solid var(--accent)",
        color: "var(--accent)",
        borderRadius: "0",
        fontFamily: "var(--font-special-elite), monospace",
        boxShadow: "2px 2px 0 var(--primary)",
      }}
    >
      {text}
    </Link>
  );
};

export default TransparentButton;
