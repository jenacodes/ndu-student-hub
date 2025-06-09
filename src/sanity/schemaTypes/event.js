const events = {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Enter the name of the event. Example: 'Freshers’ Orientation 2025'",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Auto-generated link based on the event title. Used in the website URL.",
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
      description:
        "Enter the type of event. Example: 'Seminar', 'Workshop', 'Cultural'.",
    },
    {
      name: "fullDescription",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
      description:
        "Enter the full details of the event. This will appear on the particular event page.",
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      description:
        "Write a brief summary of the event. This is shown on cards and previews.",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Upload the main image or banner for the event.",
      options: {
        hotspot: true,
      },
    },
    {
      name: "date",
      title: "Date",
      type: "string",
      description: "Enter the event date. Example: 'June 15, 2025'.",
    },
    {
      name: "time",
      title: "Time",
      type: "string",
      description:
        "Enter the time for the event. Example: '10:00 AM – 2:00 PM'.",
    },
    {
      name: "venue",
      title: "Venue",
      type: "string",
      description:
        "Where the event will take place. Example: 'Main Auditorium'.",
    },
    {
      name: "organizer",
      title: "Organizer",
      type: "string",
      description:
        "Who is organizing the event. Example: 'Student Union', 'Drama Club'.",
    },
    {
      name: "registrationLink",
      title: "Registration Link",
      type: "url",
      description:
        "Paste the link where people can register. Example: Google Form, Eventbrite.",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      description:
        "The date and time when the event was created. This is auto-generated.",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    },
  ],
};

export default events;
