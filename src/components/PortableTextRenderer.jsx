import { PortableText } from "@portabletext/react";

export default function PortableTextRenderer({ content }) {
  return (
    <PortableText
      value={content}
      components={{
        block: {
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold text-gray-800 my-6">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-gray-800 my-5">
              {children}
            </h3>
          ),
          quoteBlock: ({ value }) => (
            <blockquote className="my-6 p-4 border-l-4 border-purple-500 bg-purple-50 italic">
              <p className="text-lg text-gray-700">
                &ldquo;{value.text}&rdquo;
              </p>
              {value.attribution && (
                <footer className="mt-2 text-sm text-purple-600">
                  – {value.attribution}
                </footer>
              )}
            </blockquote>
          ),
          normal: ({ children }) => <p className="mb-4">{children}</p>,
        },
        types: {
          quoteBlock: ({ value }) => (
            <blockquote className="my-6 p-4 border-l-4 border-purple-500 bg-purple-50 italic">
              <p className="text-lg text-gray-700">
                &ldquo;{value.text}&rdquo;
              </p>
              {value.attribution && (
                <footer className="mt-2 text-sm text-purple-600">
                  – {value.attribution}
                </footer>
              )}
            </blockquote>
          ),
        },
      }}
    />
  );
}
