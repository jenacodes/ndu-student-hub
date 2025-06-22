export default {
  name: "department",
  title: "Department",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Department Name",
      type: "string",
      description: "Full official name of the department",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      description: 'Used in the URL (e.g. "computer-science")',
    },
    {
      name: "description",
      title: "Department Description",
      type: "text",
      description: "Short overview of what the department is about",
    },
    {
      name: "faculty",
      title: "Faculty",
      type: "reference",
      to: [{ type: "faculty" }],
      description: "Which faculty this department belongs to",
    },
    {
      name: "hod",
      title: "Head of Department (HOD)",
      type: "object",
      fields: [
        { name: "name", type: "string", title: "Full Name" },
        { name: "title", type: "string", title: "Position/Title" },
        { name: "photoUrl", type: "image", title: "Photo" },
        { name: "email", type: "string", title: "Email Address" },
      ],
      description: "Information about the current Head of Department",
    },
    {
      name: "staff",
      title: "Academic Staff",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Full Name" },
            { name: "title", type: "string", title: "Rank/Title" },
            { name: "photoUrl", type: "image", title: "Photo" },
          ],
        },
      ],
      description: "List of academic staff members in the department",
    },
  ],
};
