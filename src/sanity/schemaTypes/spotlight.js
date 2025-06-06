export default {
  name: "spotlight",
  type: "document",
  title: "Spotlight",
  description:
    "Create a student spotlight article to showcase inspiring students.",

  fields: [
    {
      name: "title",
      type: "string",
      title: "Article Title",
      description:
        "Headline of the article (e.g., 'Meet Adaeze Nwosu: Inspiring Future Engineers').",
      validation: (Rule) => Rule.required().min(10),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug (URL)",
      description:
        "Auto-generates from the title. Used in the article URL (e.g., spotlight/adaeze-nwosu-interview).",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Student Spotlight", value: "student" },
          { title: "Club Spotlight", value: "club" },
          { title: "Faculty Spotlight", value: "faculty" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shortIntro",
      type: "text",
      title: "Short Intro (for Spotlight Page)",
      description:
        "Appears on the spotlight list/grid page below the title. Keep it concise.",
      rows: 3,
      validation: (Rule) => Rule.required().min(20),
    },
    {
      name: "imageUrl",
      type: "image",
      title: "Banner Image",
      description:
        "Used for the spotlight overview page card and homepage feature. Recommended: 1200x675.",
      options: { hotspot: true },
    },
    {
      name: "profileImageUrl",
      type: "image",
      title: "Profile Image",
      description:
        "Used on the spotlight detail page alongside the student’s story.",
      options: { hotspot: true },
    },
    {
      name: "date",
      type: "date",
      title: "Publication Date",
      description: "Date the article was published or should appear live.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "interviewer",
      type: "string",
      title: "Interviewer",
      description: "Name of the person or team who created this spotlight.",
      validation: (Rule) => Rule.required(),
    },

    // ✅ HOMEPAGE-FEATURED FIELDS
    {
      name: "featuredThisWeek",
      type: "boolean",
      title: "Feature This Week?",
      description:
        "Check this box to display this spotlight on the homepage weekly spotlight section.",
      initialValue: false,
    },
    {
      name: "homepageDescription",
      type: "text",
      title: "Homepage Description",
      description:
        "This will be shown on the homepage's weekly spotlight section under the title.",
      rows: 4,
      hidden: ({ parent }) => !parent?.featuredThisWeek,
    },
    {
      name: "homepageLinkText",
      type: "string",
      title: "Homepage Link Text",
      description:
        "Custom link button text (e.g., 'Read Adaeze’s Story') for the homepage.",
      hidden: ({ parent }) => !parent?.featuredThisWeek,
    },

    // ✅ MAIN CONTENT
    {
      name: "content",
      type: "array",
      title: "Main Content",
      description: "The full article. Add paragraphs, headings, and quotes.",
      of: [
        {
          type: "object",
          name: "paragraph",
          title: "Paragraph",
          fields: [{ name: "text", type: "text", title: "Text", rows: 4 }],
        },
        {
          type: "object",
          name: "heading",
          title: "Heading",
          fields: [
            {
              name: "level",
              type: "number",
              title: "Heading Level",
              options: {
                list: [
                  { title: "Heading 2", value: 2 },
                  { title: "Heading 3", value: 3 },
                ],
              },
            },
            { name: "text", type: "string", title: "Heading Text" },
          ],
        },
        {
          type: "object",
          name: "quote",
          title: "Quote",
          fields: [
            {
              name: "text",
              type: "text",
              title: "Quote Text",
              description: "The quote text, if any.",
            },
            {
              name: "attribution",
              type: "string",
              title: "Attribution",
              description: "Who said the quote?",
            },
          ],
        },
      ],
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      description: "Add keywords like 'innovation', 'engineering', etc.",
      of: [{ type: "string" }],
    },
  ],
};
