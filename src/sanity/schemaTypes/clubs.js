export default {
  name: "club",
  title: "Club",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Club Name",
      type: "string",
      description: "The full name of the club (e.g. 'Debate Society').",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Club Slug (used in URLs)",
      type: "slug",
      description:
        "A unique slug used in URLs (e.g. 'debate-society'). It should match the club name.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "A short, catchy slogan or phrase representing the club.",
    },
    {
      name: "imageUrl",
      title: "Banner Image",
      type: "image",
      description:
        "A large banner image to be displayed on the club detail page.",
      options: {
        hotspot: true,
      },
    },
    {
      name: "logoUrl",
      title: "Logo Image",
      type: "image",
      description:
        "Optional logo image for the club (used in smaller UI components).",
      options: {
        hotspot: true,
      },
    },
    {
      name: "mission",
      title: "Mission",
      type: "text",
      description: "The mission statement of the club.",
    },
    {
      name: "vision",
      title: "Vision",
      type: "text",
      description: "The vision statement of the club.",
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      description:
        "A brief description of the club, used in cards section and summaries.",
      validation: (Rule) =>
        Rule.max(160).warning("Keep it under 160 characters."),
    },
    {
      name: "description",
      title: "Club Description (Rich Text)",
      type: "array",
      of: [{ type: "block" }],
      description:
        "Rich text field for formatting paragraphs, lists, bold text, and more.",
    },

    {
      name: "meetingInfo",
      title: "Meeting Info",
      type: "string",
      description:
        "When and where the club meets (e.g. 'Wednesdays, 4–6 PM, Room 201').",
    },
    {
      name: "howToJoin",
      title: "How to Join",
      type: "text",
      description: "Instructions for students on how to join the club.",
    },
    {
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      description: "An email address for inquiries about the club.",
      validation: (Rule) => Rule.email(),
    },
    {
      name: "facultyAdvisor",
      title: "Faculty Advisor",
      type: "string",
      description:
        "Name and department of the faculty advisor (e.g. 'Dr. Bamidele Adekunle, Department of Philosophy').",
    },
    {
      name: "upcomingEvents",
      title: "Upcoming Events",
      type: "array",
      description: "A list of upcoming events hosted or attended by the club.",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "id",
              title: "Event ID",
              type: "number",
              description: "Unique ID for the event.",
            },
            {
              name: "name",
              title: "Event Name",
              type: "string",
              description: "Name or title of the event.",
            },
            {
              name: "date",
              title: "Date",
              type: "datetime",
              description: "Date and time the event will take place.",
            },
            {
              name: "link",
              title: "Event Link",
              type: "url",
              description:
                "Link to more details about the event (can be an internal or external link).",
            },
          ],
        },
      ],
    },
    {
      name: "galleryImages",
      title: "Gallery Images",
      type: "array",
      description: "Photos from past events or general club activities.",
      of: [{ type: "image", options: { hotspot: true } }],
    },
  ],
};
