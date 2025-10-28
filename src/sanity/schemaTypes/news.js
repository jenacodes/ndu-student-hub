export default {
  name: "news",
  title: "News",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Enter the headline of the news article. Example: 'NDU Wins Inter-University Debate Championship'",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Auto-generated from the title. Used in the page URL. Example: 'ndu-wins-debate'",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publicationDate",
      title: "Publication Date",
      type: "datetime",
      description:
        "Choose the date and time the article was or will be published.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Author/Source",
      type: "string",
      description:
        "Enter the name of the writer or source. Example: 'Campus Press Team', 'Mr. James Owei'.",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      description: "Choose the category that best fits this news article.",
      options: {
        list: [
          { title: "Campus News", value: "Campus-news" },
          { title: "Academics", value: "Academics" },
          { title: "Student Achievements", value: "Student-achievements" },
          { title: "SUG News", value: "Sug-news" },
          { title: "Student Life", value: "Student-life" },
        ],
      },
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
            title: "Faculty of Basic Medical Sciences",
            value: "Faculty of Basic Medical Sciences",
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
      title: "Featured Image",
      type: "image",
      description:
        "Upload a featured image for this news article. It appears in previews and on the article page.",
      options: {
        hotspot: true,
      },
    },

    {
      name: "snippet",
      title: "Snippet / Short Description",
      type: "text",
      description:
        "Write a brief summary of the article. This appears on the homepage or article preview.",
      rows: 3,
    },
    {
      name: "body",
      title: "Body Content",
      type: "array",
      description:
        "Write or paste the full article here. You can add text, headings, quotes, lists, and images in between.",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt text",
              description: "Describe the image for accessibility and SEO.",
            },
          ],
        },
      ],
    },

    {
      name: "tags",
      title: "Tags",
      type: "array",
      description:
        "Add keywords related to this article. Example: 'engineering', 'graduation', 'technology'.",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
  ],

  preview: {
    select: {
      title: "title",
      publicationDate: "publicationDate",
      media: "image",
    },
    prepare(selection) {
      const { title, publicationDate, media } = selection;
      return {
        title: title,
        subtitle: publicationDate
          ? new Date(publicationDate).toLocaleDateString()
          : "No date",
        media: media,
      };
    },
  },
};
