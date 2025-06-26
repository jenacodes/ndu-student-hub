export default {
  name: "dean",
  title: "Deans of the faculties",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
      description: "Enter the full name of the Dean (e.g., Adebayo Chinedu)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "faculty",
      title: "Faculty",
      type: "string",
      description:
        "Specify the faculty this Dean oversees (e.g., Engineering, Law, Management Sciences)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "position",
      title: "Position",
      type: "string",
      description:
        'The title or role of the person. Default is "Dean of Faculty".',
      initialValue: "Dean of Faculty",
      readOnly: true,
    },
    {
      name: "image",
      title: "Profile Image",
      type: "image",
      description: "Upload a clear professional image of the Dean.",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bio",
      title: "Short Bio / Message",
      type: "text",
      description:
        "Add a short bio or welcome message from the Dean (optional but recommended).",
      rows: 4,
    },
    {
      name: "slug",
      title: "Slug (for URL)",
      type: "slug",
      description:
        "This will be used in the URL (e.g., /deans/adebayo-chinedu). Auto-generates from the name.",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
