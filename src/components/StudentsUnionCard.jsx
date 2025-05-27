import Image from "next/image";

const StudentUnionCard = ({ name, post, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden text-center group transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="w-full h-56 sm:h-64 relative">
        <Image
          src={imageUrl}
          alt={`Photo of ${name}`}
          layout="fill"
          objectFit="cover"
          className="group-hover:opacity-90 transition-opacity duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {name}
        </h3>
        <p className="mt-1 text-md text-gray-600 font-medium">{post}</p>
      </div>
    </div>
  );
};
export default StudentUnionCard;
