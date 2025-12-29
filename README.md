# NDU Student Hub

The **NDU Student Hub** is a comprehensive digital platform designed to serve the students of Niger Delta University. It acts as a central repository for campus news, events, resources, and student union activities, providing a streamlined experience for staying connected with university life.

## 🚀 Features

- **News & Updates**: Stay informed with the latest announcements, articles, and campus news.
- **Events Calendar**: Keep track of daily activities with the "Today on Campus" feature and upcoming events.
- **Student Union**: Access information about the student union, its members, and initiatives.
- **Clubs & Societies**: Explore various student clubs, their activities, and how to join.
- **Academic Resources**: Find faculties, departments, and useful academic materials.
- **Newsletter System**: Integrated system for subscribing to and receiving campus newsletters.
- **Admin Dashboard**: Dedicated tools for managing content and sending newsletters (e.g., specific email templates).
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Dark Mode**: Integrated theme support for a comfortable viewing experience.

## 🛠️ Tech Stack

This project is built with the latest modern web technologies:

- **Framework**: [Next.js 15](https://nextjs.org/) (App Directory)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **CMS**: [Sanity](https://www.sanity.io/) (Headless CMS for content management)
- **Email Service**: [Resend](https://resend.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) & [Speed Insights](https://vercel.com/docs/speed-insights)

## 📦 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (Latest LTS version recommended)
- npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/ndu-student-hub.git
    cd ndu-student-hub
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Environment Variables:**
    Create a `.env.local` file in the root directory and add the necessary environment variables for Sanity and Resend.

    ```env
    NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
    NEXT_PUBLIC_SANITY_DATASET=production
    RESEND_API_KEY=your_resend_api_key
    # Add other keys as required
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  **Open the app:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

A quick look at the top-level files and directories:

```
.
├── src/
│   ├── app/              # Next.js App Router pages and API routes
│   │   ├── admin/        # Admin routes (e.g., newsletter sender)
│   │   ├── api/          # Backend API endpoints
│   │   ├── news/         # News page routes
│   │   ├── events/       # Events page routes
│   │   └── ...           # Other feature routes
│   ├── components/       # Reusable React components
│   └── sanity/           # Sanity CMS configuration and schemas
├── public/               # Static assets (images, icons)
├── christmas_email_template.html # Email templates
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── next.config.mjs       # Next.js configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
