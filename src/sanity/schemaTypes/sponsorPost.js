export default {
  name: "sponsorPost",
  title: "Sponsored Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Main headline or post title",
    },
    {
      name: "slug",
      title: "Slug / Post ID",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      description:
        "Used in the URL (e.g. /sponsored/bayelsa-bank-student-account)",
    },
    {
      name: "snippet",
      title: "Snippet / Short Description",
      type: "text",
      rows: 2,
      description: "A short preview text to show in cards or summaries",
    },
    {
      name: "imageUrl",
      title: "Banner Image",
      type: "image",
      options: { hotspot: true },
      description: "A large banner for the detail page or preview section",
    },
    {
      name: "logoUrl",
      title: "Sponsor Logo",
      type: "image",
      options: { hotspot: true },
      description: "Logo of the sponsoring brand",
    },
    {
      name: "date",
      title: "Published Date",
      type: "date",
      description: "Date the sponsored content was published",
    },
    {
      name: "sponsoredBy",
      title: "Sponsored By",
      type: "string",
      description: "Name of the sponsor (e.g., Bayelsa Bank)",
    },
    {
      name: "body",
      title: "Content Body",
      type: "array",
      of: [{ type: "block" }],
      description: "Main content of the sponsored post",
    },
    {
      name: "cta",
      title: "Call to Action",
      type: "object",
      fields: [
        { name: "text", type: "string", title: "Button Text" },
        { name: "link", type: "url", title: "Link URL" },
      ],
      description: "Optional call-to-action with link to sponsor's site",
    },
    {
      name: "sponsorInfo",
      title: "Sponsor Info",
      type: "object",
      fields: [
        { name: "description", type: "text", title: "Sponsor Description" },
        { name: "website", type: "url", title: "Sponsor Website" },
      ],
      description: "Details about the sponsor company",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      description: "Tags related to the post (e.g., finance, student deals)",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "sponsoredBy",
      media: "logoUrl",
    },
  },
};
