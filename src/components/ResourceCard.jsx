import Image from "next/image";
import Link from "next/link";

const ResourceCard = ({
  title,
  description,
  link,
  linkText,
  steps,
  location,
  hours,
  imageUrl,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col h-full">
      {imageUrl && (
        <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      {steps && (
        <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside mb-4">
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      )}
      {location && (
        <p className="text-sm text-gray-700 font-semibold mb-1">
          <strong>Location:</strong> {location}
        </p>
      )}
      {hours && (
        <p className="text-sm text-gray-500 mb-4">
          <strong>Hours:</strong> {hours}
        </p>
      )}
      {link && (
        <div className="mt-auto">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            {linkText || "Go to Portal"} &rarr;
          </Link>
        </div>
      )}
    </div>
  );
};

export default ResourceCard;
