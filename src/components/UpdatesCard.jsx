import Image from "next/image";
import Link from "next/link";

const UpdatesCard = ({ imageUrl, category, link, snippet, title }) => {
  return (
    <div className="bg-blue-50 shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row group transform hover:scale-105 transition-transform duration-300 ease-in-out border border-black">
      <div className="md:w-2/5 w-full h-48 md:h-auto relative">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 group-hover:opacity-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col justify-between md:w-3/5">
        <div>
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            {category}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
            <Link href={link}>{title}</Link>
          </h3>
          <p className="mt-3 text-sm tracking-wide text-gray-600 leading-relaxed">
            {snippet}
          </p>
        </div>
        <div className="mt-6">
          <Link
            className="text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            href={link}
          >
            Read More &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdatesCard;
