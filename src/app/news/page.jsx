import Image from "next/image";
import UpdatesCard from "@/components/UpdatesCard";
import PagesHeaderSection from "@/components/PagesHeaderSection";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import FilterControls from "@/components/FilterControls";
import Link from "next/link";

export const revalidate = 60;

export default async function NewsPage({ searchParams }) {
  const query = groq`*[_type == "news"] | {
    _id,
    title,
    category,
    faculty,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    snippet,
    date,
    author
  }`;

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

  // Filter news based on selected filters
  const filteredNews = allNewsData.filter((newsItem) => {
    const categoryMatch =
      activeCategory === "all" || newsItem.category === activeCategory;
    const facultyMatch =
      activeFaculty === "all" || newsItem.faculty === activeFaculty;
    return categoryMatch && facultyMatch;
  });

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
        subtitle="Stay informed with the latest updates, achievements, and important notices"
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
          />
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {filteredNews.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {filteredNews.map((newsItem) => (
                  <UpdatesCard
                    key={newsItem._id}
                    category={newsItem.category}
                    title={newsItem.title}
                    snippet={newsItem.snippet}
                    imageUrl={newsItem.imageUrl}
                    link={`/news/${newsItem.slug}`}
                    date={newsItem.date}
                    author={newsItem.author}
                    faculty={newsItem.faculty}
                  />
                ))}
              </div>

              <div className="mt-8 text-center text-gray-600">
                Showing {filteredNews.length} of {allNewsData.length} News Items
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <Image
                src="/images/no-news-placeholder.svg"
                alt="No news found"
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                No News Articles Found
              </h2>
              <p className="text-gray-500 mb-4">
                {activeCategory !== "all" && activeFaculty !== "all" ? (
                  <>
                    No news matching both `&quot;`{activeCategory}`&quot;
                    category and `&quot;
                    {activeFaculty}`&quot; faculty.
                  </>
                ) : activeCategory !== "all" ? (
                  <>No news in the `&quot;{activeCategory}`&quot; category.</>
                ) : activeFaculty !== "all" ? (
                  <>No news for the `&quot;{activeFaculty}`&quot; faculty.</>
                ) : (
                  "There are currently no news articles available."
                )}
              </p>
              <Link
                href="/news"
                className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                View All News
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
