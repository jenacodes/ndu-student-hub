// PagesHeaderSection — themed page header used across all pages
const PagesHeaderSection = ({
  title = "Default Title",
  subtitle = "This is a default subtitle.",
  accentText = "Niger Delta University",
}) => {
  return (
    <section
      className="py-12 sm:py-16 retro-texture"
      style={{
        background: "var(--primary)",
        color: "var(--primary-foreground)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Ornamental accent */}
        <p
          className="text-xs uppercase tracking-widest mb-3 opacity-80"
          style={{
            fontFamily: "var(--font-special-elite), monospace",
            color: "var(--accent)",
          }}
        >
          ✦ NDU Student Hub ✦
        </p>

        <h1
          className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          {title}
        </h1>

        <p
          className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto opacity-90"
          style={{ fontFamily: "var(--font-special-elite), monospace" }}
        >
          {subtitle}
          <span className="font-bold">{accentText}</span>
        </p>
      </div>
    </section>
  );
};

export default PagesHeaderSection;
