import UpdatesCard from "@/components/UpdatesCard";
import PagesHeaderSection from "@/components/PagesHeaderSection";
import Image from "next/image";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import Link from "next/link";
import FilterControls from "@/components/FilterControls";
import EventsList from "@/components/EventsList";

export const revalidate = 60;

export const metadata = {
  title: "NDU Events - Campus Activities & Programs | ndustudenthub",
  description:
    "Stay updated with all upcoming events at Niger Delta University. Explore academic, cultural, sports, and community activities happening on campus.",
  openGraph: {
    title: "NDU Events - Campus Activities & Programs",
    description:
      "Discover all upcoming events at Niger Delta University. From sports to academics, find out what's happening on campus.",
    url: "https://ndustudenthub.com/events",
    siteName: "ndustudenthub",
    images: [
      {
        url: "/images/ndu-events-preview.png", // Replace with your real image
        width: 1200,
        height: 630,
        alt: "NDU Events Preview",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default async function EventsPage({ searchParams }) {
  // Query all events from Sanity
  const query = groq`*[_type == "event"] | order(date asc) {
    _id,
    title,
    category,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    shortDescription,
    date,
    time,
    venue
  }`;

  const allEventsData = await client.fetch(query);
  if (!allEventsData) return notFound();

  const params = await searchParams;

  // Create safe searchParams object
  const safeSearchParams = {};
  for (const [key, value] of Object.entries(params || {})) {
    safeSearchParams[key] = String(value);
  }

  // Extract unique categories from events
  // i'm creating a new array from the set(used to remove duplicates) from the extracted categories in the database
  const uniqueCategories = [
    ...new Set(allEventsData.map((event) => event.category)),
  ];

  // Get active category from URL params
  const SearchParams = await searchParams; // await for the search params

  const activeCategory = SearchParams?.category || "all";

  // Filter events based on selected category
  const filteredEvents =
    activeCategory === "all"
      ? allEventsData
      : allEventsData.filter((event) => event.category === activeCategory);

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
    <div className="min-h-screen">
      <PagesHeaderSection
        bgColor="bg-yellow-600"
        title="School Events"
        subtitle="Discover all upcoming academic, cultural, sports, and community events "
        paragrpahColor="text-blue-100"
      />

      {/* Filter Section */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-yellow-50">
        <div className="container mx-auto max-w-6xl">
          <FilterControls
            uniqueCategories={uniqueCategories}
            uniqueFaculties={[]}
            activeFaculty={"" || "all"}
            activeCategory={activeCategory}
            filterTitle={"Filter Events"}
            titleColor="text-yellow-900"
            basePath="/events"
          />
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <EventsList activeCategory={activeCategory} />
        </div>
      </section>
    </div>
  );
}
