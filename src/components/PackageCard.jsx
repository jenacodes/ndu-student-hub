const PackageCard = ({ title, color, description, benefits, highlight }) => {
  const isGold = title.toLowerCase().includes("gold");

  const baseClasses = `p-8 rounded-xl flex flex-col ${
    highlight
      ? "bg-blue-600 text-white shadow-2xl ring-4 ring-blue-300 transform scale-105"
      : "bg-white text-gray-900 shadow-lg"
  }`;

  const textColor = highlight ? "text-white" : "text-gray-600";
  const checkColor = highlight ? "text-white" : "text-green-500";

  const content = (
    <div className={baseClasses}>
      <h3 className={`text-2xl font-bold ${color} mb-2`}>{title}</h3>
      <p className={`mb-6 ${highlight ? "text-blue-200" : "text-gray-500"}`}>
        {description}
      </p>
      <ul className={`space-y-3 flex-grow ${textColor}`}>
        {benefits.map((item, i) => (
          <li className="flex items-center" key={i}>
            <span className={`${checkColor} mr-2`}>&#10003;</span>
            {item}
          </li>
        ))}
      </ul>
      <p
        className={`mt-8 text-3xl font-bold ${
          highlight ? "" : "text-gray-900"
        }`}
      >
        Contact for Pricing
      </p>
    </div>
  );

  return isGold ? (
    <div className="relative glitter-wrapper p-[2px] rounded-xl">{content}</div>
  ) : (
    content
  );
};

export default PackageCard;
