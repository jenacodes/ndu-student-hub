const announcement = {
  name: "announcement",
  title: "Announcement",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Announcement Title",
      type: "string",
      description:
        "Write the announcement message here. Example: 'Exam registration deadline: June 15th, 2025'",
      validation: (Rule) =>
        Rule.required().min(10).warning("Should be at least 10 characters"),
    },
    {
      name: "type",
      title: "Type of Announcement",
      type: "string",
      description:
        "Select the type of this announcement (for filtering or styling).",
      options: {
        list: [
          { title: "Deadline", value: "deadline" },
          { title: "Event", value: "event" },
          { title: "Information", value: "info" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Relevant Date",
      type: "datetime",
      description:
        "The date related to this announcement. Example: the actual deadline or event date.",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};

export default announcement;
