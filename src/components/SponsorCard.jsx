const SponsorCard = ({ name, description, logoUrl, website, tier }) => {
  let tierStyles = {
    card: "bg-white border-gray-200",
    name: "text-gray-900",
    description: "text-gray-600",
    logoContainer: "bg-gray-100",
  };

  if (tier === "gold") {
    tierStyles = {
      card: "bg-yellow-50 border-yellow-400",
      name: "text-yellow-800",
      description: "text-yellow-700",
      logoContainer: "bg-yellow-100",
    };
  } else if (tier === "silver") {
    tierStyles = {
      card: "bg-gray-100 border-gray-300",
      name: "text-gray-800",
      description: "text-gray-600",
      logoContainer: "bg-white",
    };
  }

  return (
    <div
      className={`p-6 rounded-xl shadow-lg border flex flex-col md:flex-row items-center gap-6 ${tierStyles.card}`}
    >
      <div
        className={`h-24 w-24 md:h-32 md:w-32 flex-shrink-0 rounded-full flex items-center justify-center p-2 shadow-md ${tierStyles.logoContainer}`}
      >
        <img
          src={logoUrl || "/images/sponsor-placeholder-logo.png"}
          alt={`${name} Logo`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="text-center md:text-left">
        <h3 className={`text-2xl font-bold ${tierStyles.name}`}>{name}</h3>
        <p className={`mt-2 text-base ${tierStyles.description}`}>
          {description}
        </p>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
        >
          Visit Website &rarr;
        </a>
      </div>
    </div>
  );
};

export default SponsorCard;
