const PagesHeaderSection = ({
  bgColor = "bg-blue-600",
  title = "Default Title",
  subtitle = "This is a default subtitle.",
  accentText = "Niger Delta University",
  paragrpahColor = "text-blue-100",
}) => {
  return (
    <section className={`${bgColor} text-white py-12 sm:py-16`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          {title}
        </h1>
        <p className={`${paragrpahColor} mt-4 text-lg sm:text-xl max-w-3xl`}>
          {subtitle}
          <span className="font-bold">{accentText}</span>
        </p>
      </div>
    </section>
  );
};

export default PagesHeaderSection;
