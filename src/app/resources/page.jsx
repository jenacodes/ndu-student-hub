import { client } from "@/sanity/lib/client";
import ResourceCard from "@/components/ResourceCard";
import PagesHeaderSection from "@/components/PagesHeaderSection";
import { getIconComponent } from "@/utils/iconMapper";

export const revalidate = 60;

async function getResourceSections() {
  const query = `*[_type == "resourceSection"] | order(order asc) {
    _id,
    title,
    iconName,
    resources[]{
      title,
      description,
      link,
      linkText,
      steps,
      location,
      hours,
      "imageUrl": image.asset->url
    }
  }`;
  return await client.fetch(query);
}

export default async function ResourceHubPage() {
  const sections = await getResourceSections();

  return (
    <div className="bg-gray-50 min-h-screen">
      <PagesHeaderSection
        title="Student Resource Hub"
        subtitle="Your one-stop center for essential academic links, guides, and university portals."
        bgColor="bg-gray-800"
        paragraphColor="text-gray-300"
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {sections.map((section) => (
            <div key={section._id} className="mb-16">
              <div className="flex items-center mb-6">
                {getIconComponent(section.iconName)}
                <h2 className="text-3xl font-bold text-gray-900 ml-3">
                  {section.title}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.resources.map((card, index) => (
                  <ResourceCard key={index} {...card} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
