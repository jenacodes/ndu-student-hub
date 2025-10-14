import PagesHeaderSection from "@/components/PagesHeaderSection";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import FilterControls from "@/components/FilterControls";
import NewsList from "@/components/NewsList";

export const revalidate = 60;

export const metadata = {
  title:
    "NDU News - Latest Niger Delta University Updates, Stories & Announcements | ndustudenthub",
  description:
    "Read the latest news and updates from Niger Delta University (NDU). Stay connected with campus happenings, academic news, student life, and official announcements — all in one place on ndustudenthub.",
  openGraph: {
    title:
      "NDU News - Latest Niger Delta University Updates, Stories & Announcements",
    description:
      "Stay updated with the latest happenings at Niger Delta University. From academic breakthroughs to campus events and student stories — get all the NDU news you need on ndustudenthub.",
    url: "https://ndustudenthub.com/news",
    siteName: "ndustudenthub",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "NDU News - Niger Delta University Updates",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  keywords: [
    "NDU news",
    "Niger Delta University updates",
    "NDU campus news",
    "NDU student life",
    "NDU announcements",
    "NDU stories",
    "ndustudenthub",
    "Niger Delta University blog",
  ],
  alternates: {
    canonical: "https://ndustudenthub.com/news",
  },
};

export default async function NewsPage({ searchParams }) {
  const query = groq`
  *[_type == "news"]
  | order(coalesce(publicationDate, date, _createdAt) desc)[0..5] {
    _id,
    title,
    category,
    faculty,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    snippet,
    date,
    author
  }
`;

  const allNewsData = await client.fetch(query);

  const params = await searchParams;

  // Create safe searchParams object
  const safeSearchParams = {};
  for (const [key, value] of Object.entries(params || {})) {
    safeSearchParams[key] = String(value);
  }

  // Extract unique categories and faculties
  const uniqueCategories = [
    ...new Set(allNewsData.map((newsItem) => newsItem.category)),
  ];
  const uniqueFaculties = [
    ...new Set(allNewsData.map((newsItem) => newsItem.faculty)),
  ].filter(Boolean);

  // Get active filters
  const activeCategory = safeSearchParams.category || "all";
  const activeFaculty = safeSearchParams.faculty || "all";

  // // Filter news based on selected filters
  // const filteredNews = allNewsData.filter((newsItem) => {
  //   const categoryMatch =
  //     activeCategory === "all" || newsItem.category === activeCategory;
  //   const facultyMatch =
  //     activeFaculty === "all" || newsItem.faculty === activeFaculty;
  //   return categoryMatch && facultyMatch;
  // });

  // Helper function to generate query string
  const createQueryString = (newParams) => {
    const params = new URLSearchParams();

    // Preserve existing params except the one being changed
    for (const [key, value] of Object.entries(safeSearchParams)) {
      if (!Object.keys(newParams).includes(key)) {
        params.append(key, value);
      }
    }

    // Add new params
    for (const [key, value] of Object.entries(newParams)) {
      if (value !== "all") {
        params.append(key, value);
      }
    }

    return params.toString();
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <PagesHeaderSection
        bgColor="bg-green-600"
        title="School News & Announcements"
        subtitle="Stay informed with the latest updates, achievements, and important notices. "
        paragrpahColor="text-green-100"
      />

      {/* Filter Section */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="container mx-auto max-w-6xl">
          <FilterControls
            uniqueCategories={uniqueCategories}
            uniqueFaculties={uniqueFaculties}
            activeCategory={activeCategory}
            activeFaculty={activeFaculty}
            filterTitle={"Filter News"}
            titleColor="text-green-900"
            basePath="/news"
          />
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <NewsList
            activeCategory={activeCategory}
            activeFaculty={activeFaculty}
          />
        </div>
      </section>
    </div>
  );
}
