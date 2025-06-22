export default {
  name: "faculty",
  title: "Faculty",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Faculty Name",
      type: "string",
      description:
        "The full name of the faculty (e.g., Faculty of Engineering)",
    },
    {
      name: "id",
      title: "Slug / ID",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      description:
        "A unique slug used for URL paths (e.g., faculty-of-engineering)",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "A short summary about what this faculty focuses on",
    },
    {
      name: "imageUrl",
      title: "Faculty Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "A representative image for the faculty",
    },
    {
      name: "departments",
      title: "Departments",
      type: "array",
      of: [{ type: "reference", to: [{ type: "department" }] }],
      description: "Select or create departments that belong to this faculty",
    },
  ],
};
