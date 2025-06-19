const StaffCard = ({ name, title, photoUrl, isHod }) => {
  const cardClasses = isHod
    ? "bg-blue-50 border-2 border-blue-500 text-center p-6 rounded-xl shadow-2xl"
    : "bg-white text-center p-6 rounded-xl shadow-lg border border-gray-200";

  return (
    <div className={cardClasses}>
      <div className="w-32 h-32 rounded-full mx-auto overflow-hidden mb-4 relative ring-4 ring-offset-2 ring-blue-300">
        <img
          src={photoUrl || "/images/default-avatar.png"}
          alt={`Photo of ${name}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <h4 className="text-xl font-bold text-gray-900">{name}</h4>
      <p className="text-blue-600 font-medium">{title}</p>
    </div>
  );
};

export default StaffCard;
