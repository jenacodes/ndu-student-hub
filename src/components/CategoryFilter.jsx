"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const CategoryFilter = ({
  items,
  categoryKey = "category",
  defaultActive = "all",
  buttonStyle = "rounded-full",
  buttonColors = {
    activeBg: "bg-blue-600",
    activeText: "text-white",
    inactiveBg: "bg-gray-100",
    inactiveText: "text-gray-700",
    hoverBg: "hover:bg-blue-100",
  },
  children,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category") || defaultActive;

  const uniqueCategories = [
    defaultActive,
    ...new Set(items.map((item) => item[categoryKey])),
  ];

  const filteredItems =
    activeCategory === defaultActive
      ? items
      : items.filter((item) => item[categoryKey] === activeCategory);

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === defaultActive) {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const buttonVariants = {
    active: {
      scale: 1.05,
      backgroundColor: "var(--active-bg)",
      color: "var(--active-text)",
      boxShadow: "0 4px 6px rgba(37, 99, 235, 0.2)",
    },
    inactive: {
      scale: 1,
      backgroundColor: "var(--inactive-bg)",
      color: "var(--inactive-text)",
    },
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {uniqueCategories.map((category) => (
          <motion.button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 text-sm font-medium transition-all ${buttonStyle} ${buttonColors.hoverBg}`}
            variants={buttonVariants}
            initial="inactive"
            animate={activeCategory === category ? "active" : "inactive"}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{
              "--active-bg": `var(--${buttonColors.activeBg.replace("bg-", "")})`,
              "--active-text": `var(--${buttonColors.activeText.replace("text-", "")})`,
              "--inactive-bg": `var(--${buttonColors.inactiveBg.replace("bg-", "")})`,
              "--inactive-text": `var(--${buttonColors.inactiveText.replace("text-", "")})`,
            }}
          >
            {category === defaultActive ? "All" : category}
          </motion.button>
        ))}
      </div>

      <div className="text-center mb-6 text-gray-600">
        Showing {filteredItems.length} of {items.length} items
        {activeCategory !== defaultActive && (
          <span>
            {" "}
            in <span className="font-semibold">{activeCategory}</span>
          </span>
        )}
      </div>

      <div>
        {typeof children === "function" ? children(filteredItems) : children}
      </div>
    </div>
  );
};

export default CategoryFilter;
