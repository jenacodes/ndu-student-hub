// Schema for user comments on news articles
export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "The commenter's display name.",
      validation: (Rule) => Rule.required().min(2).max(80),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      description: "Email of the commenter (not shown publicly).",
    },
    {
      name: "text",
      title: "Comment",
      type: "text",
      rows: 4,
      description: "The comment body.",
      validation: (Rule) => Rule.required().min(3).max(1000),
    },
    {
      name: "newsSlug",
      title: "News Article Slug",
      type: "string",
      description: "The slug of the news article this comment belongs to.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "approved",
      title: "Approved",
      type: "boolean",
      description:
        "Set to true to make this comment visible on the site. New comments are hidden by default.",
      initialValue: false,
    },
  ],

  orderings: [
    {
      title: "Newest First",
      name: "createdAtDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "newsSlug",
      approved: "approved",
    },
    prepare({ title, subtitle, approved }) {
      return {
        title: `${approved ? "✅" : "⏳"} ${title}`,
        subtitle: `on /${subtitle}`,
      };
    },
  },
};
