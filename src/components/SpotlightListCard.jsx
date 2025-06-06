import Image from "next/image";
import Link from "next/link";

const SpotlightListCard = ({ type, title, shortIntro, imageUrl, link }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col group transform hover:scale-105 transition-transform duration-300 ease-in-out h-full">
      {imageUrl && (
        <div className="w-full h-48 relative">
          <Image
            src={imageUrl}
            alt={title || "Spotlight image"}
            fill={true}
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          {type && (
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
              {type}
            </p>
          )}
          <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
            <Link href={link || "#"}>{title || "Untitled Spotlight"}</Link>
          </h3>
          {shortIntro && (
            <p className="mt-3 text-base text-gray-600 leading-relaxed line-clamp-3">
              {shortIntro}
            </p>
          )}
        </div>
        <div className="mt-6">
          <Link
            href={link || "#"}
            className="text-base font-semibold text-purple-600 hover:text-purple-800 transition-colors"
          >
            Read More &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SpotlightListCard;
