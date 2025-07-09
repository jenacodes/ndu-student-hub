export default {
  name: "submission",
  title: "Submissions",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "authorName",
      title: "Author Name",
      type: "string",
      description: "The name of the person submitting this content",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "faculty",
      title: "Faculty",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: ["News", "Event", "Spotlight", "Resource"],
      },
    },
    {
      name: "content",
      title: "Main Content",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "snippet",
      title: "Snippet",
      type: "text",
      description: "Short summary for News category",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "eventDate",
      title: "Event Date & Time",
      type: "datetime",
    },
    {
      name: "location",
      title: "Event Location",
      type: "string",
    },
    {
      name: "image",
      title: "image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "pending",
      options: {
        list: ["pending", "approved", "rejected"],
      },
    },
    {
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "image",
    },
    prepare({ title, category, media }) {
      return {
        title: title || "Untitled",
        subtitle: `Category: ${category}`,
        media,
      };
    },
  },
};
