// schemas/newsArticle.js
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
        ],
      },
    },
    {
      name: "image",
      title: "Image",
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
        "Write or paste the full article here. You can format text with headings, quotes, and lists.",
      of: [{ type: "block" }],
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
      media: "mainImage", // Note: This should match the actual image field name — likely "image"
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
