export default {
  name: "quoteBlock",
  title: "Quote With Attribution",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Quote Text",
      type: "text",
    },
    {
      name: "attribution",
      title: "Attribution",
      type: "string",
      description: "Who said this?",
    },
  ],
};
