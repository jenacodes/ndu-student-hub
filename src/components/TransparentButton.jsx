import Link from "next/link";

const TransparentButton = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="bg-transparent hover:bg-blue-100 border border-blue-400 text-blue-400 font-semibold py-2 px-6 rounded-sm transition-colors shadow-sm"
    >
      {text}
    </Link>
  );
};

export default TransparentButton;
