export default {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
      description:
        "Enter the team member’s full name, e.g., 'Jenakumo Emmanuel'.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      description:
        "Specify their position or responsibility on the team, e.g., 'Lead Developer & Visionary'.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
      description:
        "Write a short biography highlighting the team member’s passion, background, or contributions.",
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "imageUrl",
      title: "Profile Image",
      type: "image",
      description:
        "Upload a clear headshot or profile picture of the team member.",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
      description:
        "Paste the full URL to their LinkedIn profile (e.g., https://linkedin.com/in/username).",
    },
    {
      name: "twitterUrl",
      title: "Twitter/X URL",
      type: "url",
      description:
        "Paste the full URL to their Twitter (X) profile (e.g., https://x.com/username).",
    },
  ],
};
