import Image from "next/image";

const StudentUnionCard = ({
  name,
  post,
  imageUrl,
  bio,
  email,
  postTextColor,
  hoverColor,
}) => {
  return (
    <div className="bg-white shadow-xl rounded-xl overflow-hidden text-center group flex flex-col h-full group transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="w-full h-64 sm:h-72 relative">
        <Image
          src={imageUrl || "/images/default-avatar.png"}
          alt={`Photo of ${name}`}
          fill
          objectFit="cover"
          className="group-hover:opacity-90 transition-opacity duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3
          className={`text-xl lg:text-2xl font-semibold text-gray-900  transition-colors ${hoverColor}`}
        >
          {name}
        </h3>
        <p className={`"mt-1 text-md ${postTextColor} font-medium"`}>{post}</p>
        {bio && (
          <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-grow line-clamp-4">
            {bio}
          </p>
        )}
        {email && (
          <div className="mt-4 pt-2 border-t border-gray-200">
            <a
              href={`mailto:${email}`}
              className="text-sm text-teal-500 hover:text-teal-700 transition-colors"
            >
              Contact: {email}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
export default StudentUnionCard;
