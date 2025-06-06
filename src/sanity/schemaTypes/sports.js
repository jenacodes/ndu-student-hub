const sports = {
  name: "sports",
  title: "Sports",
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
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Fixtures", value: "fixtures" },
          { title: "Results", value: "results" },
          { title: "Football News", value: "football-news" },
          { title: "Upcoming Match", value: "upcoming-match" },
        ],
      },
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "text",
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
      name: "date",
      title: "Date of Event/News/Fixture/Result",
      type: "datetime",
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
    {
      name: "details",
      title: "Specific Details",
      type: "string",
      description:
        "e.g., Match details, Time, Final score, Venue, player stats, Next match etc.",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};

export default sports;
