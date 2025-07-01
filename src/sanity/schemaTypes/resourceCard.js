export default {
  name: "resourceCard",
  title: "Resource Card",
  type: "object",
  description:
    "A single card inside a resource section (e.g., Check Results, Course Registration)",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        'Main title for the resource card (e.g., "Check Your Results")',
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description:
        "A short explanation of what this resource helps students with.",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      description:
        "The URL the user will visit when clicking the card (e.g., student portal link).",
    },
    {
      name: "linkText",
      title: "Link Text",
      type: "string",
      description: 'Text to show on the button or link (e.g., "Go to Portal").',
    },
    {
      name: "steps",
      title: "Steps (Optional)",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Step-by-step instructions for using the resource (if needed).",
    },
    {
      name: "image",
      title: "Image (Optional)",
      type: "image",
      description:
        "Optional image to display on the card (e.g., ICT building photo).",
    },
    {
      name: "location",
      title: "Location (Optional)",
      type: "string",
      description:
        'If this resource has a physical location, mention it here (e.g., "ICT Building").',
    },
    {
      name: "hours",
      title: "Office Hours (Optional)",
      type: "string",
      description:
        'When the service is available (e.g., "Mon - Fri, 9:00 AM - 4:00 PM").',
    },
  ],
};
