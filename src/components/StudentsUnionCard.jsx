import Image from "next/image";

const StudentUnionCard = ({ name, post, imageUrl, bio, email }) => {
  return (
    <div
      className="overflow-hidden text-center group flex flex-col h-full transform hover:scale-105 transition-transform duration-300 ease-in-out border-2"
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
        borderRadius: "0",
        boxShadow: "3px 3px 0 var(--accent)",
      }}
    >
      <div className="w-full h-64 sm:h-72 relative">
        <Image
          src={imageUrl || "/images/default-avatar.png"}
          alt={`Photo of ${name}`}
          fill
          className="group-hover:opacity-90 transition-opacity duration-300 object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3
          className="text-xl lg:text-2xl font-bold transition-opacity group-hover:opacity-70"
          style={{
            color: "var(--foreground)",
            fontFamily: "var(--font-playfair), Georgia, serif",
          }}
        >
          {name}
        </h3>
        <p
          className="mt-1 text-sm font-bold uppercase tracking-widest"
          style={{
            color: "var(--primary)",
            fontFamily: "var(--font-special-elite), monospace",
          }}
        >
          {post}
        </p>
        {bio && (
          <p
            className="mt-3 text-sm leading-relaxed flex-grow line-clamp-4"
            style={{
              color: "var(--muted-foreground)",
              fontFamily: "var(--font-special-elite), monospace",
            }}
          >
            {bio}
          </p>
        )}
        {email && (
          <div
            className="mt-4 pt-2 border-t"
            style={{ borderColor: "var(--border)" }}
          >
            <a
              href={`mailto:${email}`}
              className="text-sm font-bold transition-opacity hover:opacity-70"
              style={{
                color: "var(--primary)",
                fontFamily: "var(--font-special-elite), monospace",
              }}
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
