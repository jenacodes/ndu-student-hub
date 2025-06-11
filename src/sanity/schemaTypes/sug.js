const sugExecutives = {
  name: "sugExecutive",
  title: "SUG Executive",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
      description: "Enter the executive's full name (e.g., Adebayo Chinedu).",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "post",
      title: "Position/Post",
      type: "string",
      description:
        "Specify their role in the SUG (e.g., SUG President, Vice President).",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Executive Image",
      type: "image",
      description: "Upload a clear image of the executive.",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
      description:
        "Briefly describe their responsibilities, focus, or goals in office.",
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
      description:
        "Enter their official SUG email address (e.g., president.sug@ndustudenthub.com).",
      validation: (Rule) =>
        Rule.required().email().error("Please enter a valid email address."),
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "post",
      media: "image",
    },
  },
};

export default sugExecutives;
