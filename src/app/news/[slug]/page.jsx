import Link from "next/link";
import Image from "next/image";
import NotFoundMessage from "@/components/NotFoundMessage";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaTags } from "react-icons/fa";
import { PortableText } from "next-sanity";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "news"]{ "slug": slug.current }`
  );
  return slugs.map((slug) => ({ slug: slug.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const query = groq`*[_type == "news" && slug.current == $slug][0]{
    title,
    author,
    body,
    image,
    "slug": slug.current
  }`;

  const article = await client.fetch(query, { slug });

  if (!article) {
    return {
      title: "Article Not Found | NDUSTUDENTHUB",
      description:
        "Sorry, we couldn't find the news article you were looking for.",
    };
  }

  const builder = imageUrlBuilder(client);
  const urlFor = (source) => builder.image(source).url();

  // Building readable meta description (skip empty blocks)
  const metaDescription =
    article.body
      ?.filter((block) => block.children && block.children.length > 0)
      .map((block) => block.children.map((child) => child.text).join(" "))
      .join(" ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 150) ||
    "Read the latest campus news and updates from NDUSTUDENTHUB.";

  const metaTitle = article.title;
  const metaImage = urlFor(article.image);
  const metaUrl = `https://ndustudenthub.com/news/${article.slug}`;

  return {
    title: `${metaTitle} | NDUSTUDENTHUB`,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      type: "article",
      images: [{ url: metaImage, alt: metaTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
  };
}

const NewsArticlePage = async ({ params }) => {
  const { slug } = await params;
  const query = groq`*[_type == "news" && slug.current == $slug][0]`;
  const article = await client.fetch(query, { slug });

  const builder = imageUrlBuilder(client);
  const urlFor = (source) => builder.image(source);

  if (!article) {
    return (
      <NotFoundMessage
        title="Article Not Found"
        message="Sorry, we couldn't find the news article you were looking for."
        backLink="/news"
        backText="Back to All News"
        buttonColor="bg-green-600 hover:bg-green-700"
      />
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <article>
        {/* Header Image */}
        {urlFor(article.image).url() && (
          <div className="w-full h-72 sm:h-96 md:h-[500px] relative">
            <Image
              src={urlFor(article.image).url()}
              alt={`Cover image for ${article.title}`}
              fill
              className="brightness-75 object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl -mt-16 sm:-mt-24 md:-mt-32 relative z-10">
            {/* Category */}
            <div className="mb-4">
              <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 space-x-4">
              <div className="flex items-center gap-1">
                <FaRegCalendarAlt />
                <span>
                  Published:{" "}
                  {new Date(article.publicationDate).toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </span>
              </div>
              {article.author && (
                <div className="flex items-center gap-1">
                  <HiOutlineUserGroup />
                  <span>By: {article.author}</span>
                </div>
              )}
            </div>

            {/* Body */}
            <div className="prose prose-lg custom-prose max-w-none text-gray-700 leading-relaxed">
              <PortableText value={article.body} />
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2">
                  <FaTags />
                  Tags:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back Link */}
            <div className="mt-10 pt-8 border-t border-gray-200 text-center">
              <Link
                href="/news"
                className="text-green-600 hover:text-green-800 font-semibold transition-colors"
              >
                &larr; Back to All News
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsArticlePage;
