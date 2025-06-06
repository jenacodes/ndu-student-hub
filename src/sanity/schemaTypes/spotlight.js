// schemas/spotlight.js
export default {
  name: "spotlight",
  title: "Spotlight",
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
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Author/Interviewer",
      type: "string",
    },
    {
      name: "body",
      title: "Body Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Brief description", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Paragraph for Heading 2", value: "normal" },
            { title: "Heading 3", value: "h3" },
            { title: "Paragraph for Heading 3", value: "normal" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
        },
        { type: "quoteBlock" },
      ],
    },
    {
      name: "relatedClub",
      title: "Related Club",
      type: "reference",
      to: [{ type: "slug" }],
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
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
};
