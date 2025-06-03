export const eventBySlugQuery = `
  *[_type == "event" && slug.current == $slug][0] {
    title,
    category,
    fullDescription,
     shortDescription,
    date,
    time,
    venue,
    organizer,
    registrationLink,
    "imageUrl": image.asset->url
  }
`;
