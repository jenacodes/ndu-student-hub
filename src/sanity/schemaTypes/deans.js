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
      description: "Select the faculty this news item belongs to.",
      options: {
        list: [
          { title: "Faculty of Arts", value: "Faculty of Arts" },
          {
            title: "Dean of Faculty of Basic Medical Sciences",
            value: "Dean of Faculty of Basic Medical Sciences",
          },
          {
            title: "Faculty of Clinical Sciences",
            value: "Faculty of Clinical Sciences",
          },
          { title: "Faculty of Education", value: "Faculty of Education" },
          { title: "Faculty of Engineering", value: "Faculty of Engineering" },
          {
            title: "Faculty of Environmental Sciences",
            value: "Faculty of Environmental Sciences",
          },
          { title: "Faculty of Law", value: "Faculty of Law" },
          {
            title: "Faculty of Management Sciences",
            value: "Faculty of Management Sciences",
          },
          { title: "Faculty of Nursing", value: "Faculty of Nursing" },
          { title: "Faculty of Pharmacy", value: "Faculty of Pharmacy" },
          { title: "Faculty of Science", value: "Faculty of Science" },
          {
            title: "Faculty of Social Sciences",
            value: "Faculty of Social Sciences",
          },
        ],
      },
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
