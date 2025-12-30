const sports = {
  name: "sports",
  title: "Sports",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "This is the main headline for the sports post. Example: 'NDU Wins Football Final Against Uniport'",
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
      description:
        "This is the URL-friendly version of the title. It’s generated from the title automatically.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      description:
        "Choose the type of sports content: Fixtures, Results, Football News, or Upcoming Match.",
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
      description: "A brief summary (1–2 sentences) of what the post is about.",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description:
        "Upload a relevant image for the article. This helps make your post more attractive.",
      options: {
        hotspot: true,
      },
    },
    {
      name: "date",
      title: "Date of Event/News/Fixture/Result",
      type: "datetime",
      description:
        "The date and time when the event occurred or the news should be posted.",
    },
    {
      name: "body",
      title: "Body Content",
      type: "array",
      description:
        "The full article content. Use this to write detailed information about the sports update.",
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
        "Add keywords that help others find this post. Example: ['Football', 'NDU', 'Victory']",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
    {
      name: "details",
      title: "Specific Details",
      type: "string",
      description:
        "Extra info like match details, final score, venue, player stats, or upcoming games. Example: 'NDU 3 – Uniport 2 at Stadium, 4PM'",
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
