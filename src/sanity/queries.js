export const eventBySlugQuery = `
  *[_type == "event" && slug.current == $slug][0] {
    title,
    category,
    fullDescription,
    date,
    time,
    venue,
    organizer,
    registrationLink,
    "imageUrl": image.asset->url
  }
`;
