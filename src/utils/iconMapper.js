import { LuBookOpenCheck } from "react-icons/lu";
import { IoHome } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";

export function getIconComponent(name) {
  const icons = {
    book: <LuBookOpenCheck className="w-8 h-8 text-blue-500" />,
    home: <IoHome className="w-8 h-8 text-purple-500" />,
    "credit-card": <FaRegCreditCard className="w-8 h-8 text-green-500" />,
    chip: <FaMicrochip className="w-8 h-8 text-orange-500" />,
    download: (
      <svg
        className="w-8 h-8 text-red-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        ></path>
      </svg>
    ),
  };

  return icons[name] || null;
}
