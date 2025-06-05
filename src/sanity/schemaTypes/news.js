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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publicationDate",
      title: "Publication Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Author/Source",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
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
      options: {
        hotspot: true,
      },
    },
    {
      name: "snippet",
      title: "Snippet / Short Description",
      type: "text",
      rows: 3,
    },
    {
      name: "body",
      title: "Body Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
  ],
  preview: {
    select: {
      title: "title",
      publicationDate: "publicationDate",
      media: "mainImage",
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
