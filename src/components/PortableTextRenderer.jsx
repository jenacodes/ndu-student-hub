import React from "react";

export default function PortableTextRenderer({ content }) {
  if (!content || !Array.isArray(content)) return null;

  return (
    <div className="space-y-6">
      {content.map((block, index) => {
        switch (block._type || block.type) {
          case "paragraph":
            return (
              <p key={index} className="text-lg leading-relaxed text-gray-800">
                {block.text}
              </p>
            );

          case "heading":
            if (block.level === 2) {
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold text-gray-700 mt-8"
                >
                  {block.text}
                </h2>
              );
            } else if (block.level === 3) {
              return (
                <h3
                  key={index}
                  className="text-xl font-semibold text-gray-800 mt-6"
                >
                  {block.text}
                </h3>
              );
            } else {
              return (
                <h4 key={index} className="text-lg font-semibold text-gray-500">
                  {block.text}
                </h4>
              );
            }

          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-4 border-purple-400 pl-4  text-gray-500 bg-purple-50 italic"
              >
                <p>{block.text}</p>
                {block.attribution && (
                  <footer className="text-sm text-purple-500 mt-1">
                    — {block.attribution}
                  </footer>
                )}
              </blockquote>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
