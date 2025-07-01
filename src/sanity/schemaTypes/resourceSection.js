export default {
  name: "resourceSection",
  title: "Resource Section",
  type: "document",
  description:
    "A section that groups resource cards (e.g., Academics, Financials, Student Services)",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      description:
        'Main heading of the section (e.g., "Academics & Registration").',
    },
    {
      name: "iconName",
      title: "Icon Name (Frontend Only)",
      type: "string",
      description:
        'Used by frontend to select an icon (e.g., "book", "chip", "home", "credit-card", "download").',
    },
    {
      name: "resources",
      title: "Cards in this Section",
      type: "array",
      of: [{ type: "resourceCard" }],
      description:
        "Add the individual resource cards that belong to this section.",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description:
        "Controls the order in which this section appears on the website (lower = higher).",
    },
  ],
  orderings: [
    {
      title: "Order by custom field",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
